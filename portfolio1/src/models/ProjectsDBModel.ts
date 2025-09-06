import mongoose, { Schema, Model } from "mongoose";
import { TechStack, InterfaceProjects } from "@/types/interface/mongoose-interfaces";

const projectsDBSchema: Schema<InterfaceProjects> = new Schema<InterfaceProjects>({
  title: { type: String, required: true, unique: true },
  type: { type: String, required: true, unique: false },
  proj_img: { type: String, required: true, unique: false },
  proj_img_alt: { type: String, required: true, unique: false },
  tracking: { type: String, required: true, unique: false },
  status: { type: String, required: true, unique: false },
  "tech-stacks": Array<TechStack>,
  description: { type: String, required: true, unique: false },
  "proj-link": { type: String, required: false, unique: false },
  "src-link": { type: String, required: false, unique: false },
});

const ProjectsDBModel: Model<InterfaceProjects> = (mongoose.models.ProjectsDB ||
  mongoose.model<InterfaceProjects>(
    "ProjectsDB",
    projectsDBSchema,
    "projectsDB"
  )) as Model<InterfaceProjects>;

export default ProjectsDBModel;
