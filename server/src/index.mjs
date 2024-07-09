import express from 'express';
import routes from "./routes/indexRouter.mjs";

const app = express();
import cors from 'cors'
app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 5000;


//local
app.get("/", 
    (request, response) => {
        response.status(201).send({ msg: "Hello "});
    }
);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

export default app;
