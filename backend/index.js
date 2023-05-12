const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit: "10mb"}))

const PORT = process.env.PORT || 8080

//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("connect to database"))
.catch((err) => console.log(err))

//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String
})

const userModel = mongoose.model("user", userSchema)

// API
app.get("/", (req, res) => {
    res.send("Server is running")
})

// API sign up
app.post("/signup", async (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    const findEmail = await userModel.findOne({ email: email })

    if (findEmail) {
        res.send({message: "Email id is already registered", alert: false})
    } else {
        const data = userModel(req.body)
        const save = data.save()
        res.send({message: "Successfully signed up", alert: true})
    }
})

// API login
app.post("/login", async (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    const findEmail = await userModel.findOne({ email: email })

    if (findEmail) {
        const dataSend = {
            _id: findEmail._id,
            firstName: findEmail.firstName,
            lastName: findEmail.lastName,
            email: findEmail.email,
            image: findEmail.image
        }
        console.log(dataSend)
        res.send({message: "Login is successful", alert: true, data: dataSend})
    } else {
        res.send({message: "This email is not valid", alert: false})
    }
})




// Product section

const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String
})

const productModel = mongoose.model("product", schemaProduct)


// Save product in database
// API
app.post("/uploadProduct", async (req, res) => {
    console.log(req.body)
    const data = await productModel(req.body)
    const dataSave = await data.save()
    res.send({message: "Upload successful"})
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))