"use server";
import { revalidateTag } from "next/cache";

export async function revalidateArticles(tag: string = "external-articles-collection") {
  try {
    revalidateTag(tag);
    console.log(`Cache revalidated for tag: ${tag}`);
  } catch (error) {
    console.error(`Failed to revalidate cache for tag: ${tag}`, error);
  }
}