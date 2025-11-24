import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { isRouteErrorResponse } from "react-router-dom";
const videosSchema = new Schema({
  videoFile: {
    type: String, // HERE We will use a cloudinary URL
    required: true  
    },
    thumbnail: {
        type: String, // HERE We will use a cloudinary URL  
        required: true
    },
    title: {
        type: String,       
        required: true,
    },
    description: {
        type: String,       
        required: true,
    },
    duration: {
        type: Number,       
        required: true, 
    },
    views: {
        type: Number,
        default: 0  
    },isPublished: {
        type: Boolean,
        default: true
    },
    onwer: {
        type: Schema.Types.ObjectId,
        ref: "User",    
        required: true
    }
}, { timestamps: true });   
videosSchema.plugin(mongooseAggregatePaginate);

module.export=mongoose.model("Video", videosSchema);