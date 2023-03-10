import app from './app'
import db from './config';

const PORT = process.env.PORT || 3001;

const server = (()=>{
    try {
        db()
        app.listen(PORT,  ()=>{console.log(`Listen in ${PORT}`);})
    } catch (error) {
        console.log('error :>> ', error);
    }
});

server();