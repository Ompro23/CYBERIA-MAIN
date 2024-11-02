import mongoose, {Schema} from 'mongoose'


const eventsSchema = new Schema ({
    title :{
        type : String,
        // required : [true,"Title is Required"]
    },
    description :{
        type : String,
        // required : [true,"description is Required"]
    },
    breifDescription :{
        type : String,        
    },
    image :{
        type : String,
        required : [true,"Image is Required"],
        default : "https://t4.ftcdn.net/jpg/07/39/00/15/360_F_739001578_Sz2geB80cvHnRA6CRSrZRUqGpZbDlS5l.jpg"
    },
    ruleBook :{
        type : String,
        // required : [true,"Image is Required"]
    },
    price :{
        type : Number,
        required : [true,"Price is Required"]
    },
    size :{
        type : String,
        // required : [true,"Image is Required"]
    },
    field :{
        type : String,
        required : [true,"Field is Required"]
    },
    tag :{
        type : String,
        // required : [true,"Image is Required"]
    },
    rewards :{
        type : String,
        // required : [true,"Image is Required"]
    },
    date_time :{
        type : String,
        // required : [true,"Image is Required"]
    },
    venue :{
        type: String
    }

},{timestamps : true})


export const Events =  mongoose.models.events || mongoose.model("events",eventsSchema);