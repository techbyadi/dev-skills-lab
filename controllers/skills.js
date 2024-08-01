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

async function show(req, res){
  try {
    const skill = await Skill.findById(req.params.skillId)
    res.render('skills/show',{
    skill
  })
  } catch (error) {
    console.log(error);
    res.redirect('/skills')
  }
}

async function edit(req, res) {
  try {
    const skill = await Skill.findById(req.params.skillId);
    res.render("skills/edit", {
      skill,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/skills')
  }
}

async function update(req, res){
  try {
    await Skill.findByIdAndUpdate(req.params.skillId, req.body, {new:true})
    res.redirect(`/skills/${req.params.skillId}`);
  } catch (error) {
    console.log(error);
    res.redirect(`/skills/${req.params.skillId}`);
  }
}

async function deleteSkill(req, res){
  try {
    await Skill.findByIdAndDelete(req.params.skillId);
    res.redirect('/skills')
  } catch (error) {
    console.log(error);
    res.redirect('/skills')
  }
}
export { 
  index,
  newSkill as new,
  create,
  show,
  edit,
  update,
  deleteSkill as delete
}