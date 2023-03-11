import express from 'express';
import morgan from 'morgan';
import routes from './routes/index'
const app = express();


app.use(express.json())
app.use(morgan('dev'));
app.use(routes)
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "LINK DEL FRONT"); // doy acceso al front);
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });

export default app