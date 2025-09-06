import { Document } from "mongodb";

export interface TechStack {
  name: string;
  img: string;
  altText: string;
}

export interface InterfaceProjects extends Document {
  title: string;
  type: string;
  proj_img: string;
  proj_img_alt: string;
  tracking: string;
  status: string;
  "tech-stacks": TechStack[];
  description: string;
  "proj-link"?: string;
  "src-link"?: string;
}
