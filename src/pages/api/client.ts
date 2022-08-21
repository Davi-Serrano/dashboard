import { NextApiRequest, NextApiResponse } from "next"; 
import { query as q} from "faunadb"
import { fauna } from "../../services/fauna";
import { format } from "date-fns"


export default async(req: NextApiRequest, res: NextApiResponse)=>{
    // Verify if method is equal POST.
    if (req.method === "POST"){

        const client = req.body;

        Object.assign(client,{
            createdAt: format(new Date(), "dd/MM/yyyy 'at' h:mm a")
        })
        
        try{
            await fauna.query(
                q.If(
                  q.Not(
                    q.Exists(
                      q.Match(
                        q.Index("clientes"),
                        q.Casefold(client.email) 
                      )
                    )
                  ),
                  q.Create(
                    q.Collection("users"),
                      { data: { client }}
                  ),
                  //If exits get the email
                  q.Get(
                    q.Match(
                      q.Index("clientes"),
                      q.Casefold(client.email)
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