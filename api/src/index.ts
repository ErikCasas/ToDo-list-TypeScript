import app from './app'

const PORT = 3001

const server = (()=>{
    try {
        app.listen(PORT,  ()=>{console.log(`Listen in ${PORT}`);})
    } catch (error) {
        console.log('error :>> ', error);
    }
});
server()