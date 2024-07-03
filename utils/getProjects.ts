import { Project } from "@/lib/interface";
import { sanityFetch } from "@/lib/sanity";
const PROJECTS_QUERY = `*[_type == "project"] {
  _id,
  title,
  time,
  "slug": slug.current,
  "heroImage": heroImage.asset-> {
    _id,
    _updatedAt,
    url,
    "nameImage": originalFilename
  }
}
`;
const PROJECTS_QUERY_BY_SLUG = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  time,
  "slug": slug.current,
  "heroImage": heroImage.asset-> {
    _id,
    _updatedAt,
    url,
    "nameImage": originalFilename
  },
  information,
  description,
  technologies,
  "projectImages": projectImages[].asset-> {
    _id,
    _updatedAt,
    url,
    "nameImage": originalFilename
  }
}
`;
export async function getProjectList() {
  const res = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
  return res;
}

export async function getProjectBySlug(slug: string) {
  const res = await sanityFetch<Project>({
    query: PROJECTS_QUERY_BY_SLUG,
    params: { slug },
  });
  return res;
}
