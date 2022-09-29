import express from 'express';

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/w', (req, res) => {
    console.log(req.query, req.body);

    res.json({
        result: {
            body: req.body,
            query: req.query,
        }
    });
});

app.get('/w', (req, res) => {
    console.log(req.query, req.body);

    res.json({
        result: {
            body: req.body,
            query: req.query,
        }
    });
});

app.put('/w', (req, res) => {
    console.log(req.query, req.body);

    res.json({
        result: {
            body: req.body,
            query: req.query,
        }
    });
});

app.patch('/w', (req, res) => {
    console.log(req.query, req.body);

    res.json({
        result: {
            body: req.body,
            query: req.query,
        }
    });
});

app.listen(9900, () => console.log('Server is running...'));
