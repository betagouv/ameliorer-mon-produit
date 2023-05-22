import Express from 'express';
import cors from 'cors';
import { Response } from 'express';
import path from 'path';

const app = Express();

app.use(cors());

app.use(Express.static(path.join(__dirname, '..', 'src', 'client', 'build')));

app.get('/*', (_, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'client', 'build', 'index.html'));
});

app.listen(3000, async () => {
    console.log(`Server is running on port 3000`);
});
