import * as http from 'http';
import * as express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import {schema} from './graphqlSchema';

let app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

app.get('/hello.txt', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(3000, () => {
    console.log('Listening on port %d', server.address().port);
});