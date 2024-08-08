import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';
import { connectDataBase } from './database/mongo';


const main =async()=>{


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


await connectDataBase()
app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta  ${process.env.PORT}`);
});
}
main()