import { NextApiRequest, NextApiResponse } from "next"; 
import { query as q} from "faunadb"
import { fauna } from "../../services/fauna";
import { format } from "date-fns"

interface CProps{
  email: string
}

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    // Verify if method is equal POST.
    if (req.method === "POST"){

        const clients: CProps = req.body;

        Object.assign(clients,{
            createdAt: format(new Date(), "dd/MM/yyyy 'at' h:mm a")
        })
        
        try{
            await fauna.query(
                q.If(
                  q.Not(
                    q.Exists(
                      q.Match(
                        q.Index("user_by_clients"),
                        q.Casefold(clients.email) 
                      )
                    )
                  ),
                  q.Create(
                    q.Collection("users"),
                      { data:  clients }
                  ),
                  //If exits get the email
                  q.Get(
                    q.Match(
                      q.Index("user_by_clients"),
                      q.Casefold(clients.email)
                    )
                  )
                )
            ); 
          return true
        }catch{
          return false
        }
        
    }


}