import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const cors = require('cors');
const app = express();
app.use(bodyParser.json())

app.use("/images", express.static(path.join(__dirname, '../assets/images')));
app.use(cors());

app.get('/api/products', async (req, res) => {
    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('Api');
    const items = await db.collection('items').find({}).toArray()
    res.status(200).json(items);
    client.close();
});

app.get('/api/users/:userId/cart', async (req, res) => {
    const { userId } = req.params;
    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('Api');
    const user = await db.collection('users').findOne({ id: userId });
    if(!user) return res.status(404).json('Could not find user!');
    const items = await db.collection('items').find({}).toArray()
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id => 
        items.find(product => product.id == id));
    res.status(200).json(cartItems);
    client.close();
});

app.get('/api/products/:productId', async (req, res) => {
    const productId = Number(req.params.productId);
    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('Api');
    const product = await db.collection('items').findOne({ id: productId });

    if (product){
        res.status(200).json(product);
    }else{
        res.status(404).json('Could not find product!')
    }
    client.close()
});


app.post('/api/users/:userId/cart', async (req, res) => {
    const { userId } = req.params
    const { productId } = req.body;
    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('Api');
    await db.collection('users').updateOne({ id: userId }, {
        $addToSet: { cartItems: productId }
    });
    const user = await db.collection('users').findOne({ id: userId });
    const cartItemIds = user.cartItems;
    const items = await db.collection('items').find({}).toArray()
    const cartItems = cartItemIds.map(id =>
    items.find(product => product.id == id));
    res.status(200).json(cartItems);
    client.close();
});

app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
    const { productId } = req.params;
    const { userId } = req.params
    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('Api');
    await db.collection('users').updateOne({ id: userId }, {
        $pull: { cartItems: productId },
    });
    const user = await db.collection('users').findOne({ id: userId });
    const items = await db.collection('items').find({}).toArray();
    const cartItemIds = user.cartItems;
    const cartItems = cartItemIds.map(id => 
        items.find(product => product.id == id));
 
    res.status(200).json(cartItems);
    client.close()
});

app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000");
})