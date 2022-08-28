import { NextApiRequest, NextApiResponse } from "next"; 
import { query as q} from "faunadb"
import { fauna } from "../../services/fauna";
import { format } from "date-fns"

interface CProps{
  name: string;
  tel: string;
  email: string;
  option: string;
  topic: string;
  createdAt: Date;
}

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    // Verify if method is equal POST.
    if (req.method === "POST"){

        const client : CProps = req.body;
        const { name, tel, email  } = client

        if( name.length  < 5 || email.length  < 4 || tel.length  < 10  ){
          return res.send(300)
        }

        Object.assign(client,{
            createdAt: format(new Date(), "dd/MM/yyyy 'at' h:mm a")
        })
        
        try{
            await fauna.query(
                  q.Create(
                    q.Collection("users"),
                      { data:  client }
                  )                 
            ); 

            res.send(200)
          return true
        }catch{
          return false
        }
        
    }


}