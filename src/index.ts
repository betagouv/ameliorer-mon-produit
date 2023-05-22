import Express from 'express';
import cors from 'cors';
import { Response } from 'express';
import path from 'path';

const app = Express();

app.use(cors());

app.use(Express.json());

app.use(Express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/client/*', (_, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(3000, async () => {
    console.log(`Server is running on port 3000`);
});
