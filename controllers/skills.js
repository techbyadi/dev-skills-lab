//import {skills} from '../data/skill-data.js'
import { Skill } from "../models/skill.js";

async function index(req, res) {
  try {
    const skills = await Skill.find({})
    res.render('skills/index', {
      skills
    })
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
}

async function newSkill(req, res){
  res.render('skills/new');
}

async function create(req, res){
  try {
    req.body.learnt = false;
    await Skill.create(req.body);
    res.redirect('/skills');
  } catch (error) {
    console.log(error);
    res.redirect('/skills');
  }

}

export { 
  index,
  newSkill as new,
  create
}