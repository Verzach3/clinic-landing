import { atom } from "jotai"
import { BlogPost } from "../types/blogPost"
export const blogPostsAtom = atom<BlogPost | undefined >(undefined)