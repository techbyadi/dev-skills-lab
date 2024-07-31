import mongoose from "mongoose";

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skillName: String,
  learnt: Boolean
});

//compile schema to model

const Skill = mongoose.model('Skill', skillSchema);

export {
  Skill
}