import mongoose, { Document, Schema, Model } from "mongoose";

export interface IOrder extends Document {
	courseId: string;
	userId: string;
	payment_info: {
		session_id: string;
		userId: string;
	};
}

const orderSchema = new Schema<IOrder>(
	{
		courseId: {
			type: String,
			required: true
		},
		userId: {
			type: String,
			required: true
		},
		payment_info: {
			type: Object
		}
	},
	{ timestamps: true }
);

const orderModel: Model<IOrder> = mongoose.model("Order", orderSchema);

export default orderModel;
