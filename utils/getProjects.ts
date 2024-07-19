import { Project, resProjects } from "@/lib/interface";
import { sanityFetch } from "@/lib/sanity";

export async function getProjectList(numberOfProject?: number) {
  const count = numberOfProject && numberOfProject - 1;
  const PROJECTS_QUERY = `*[_type == "project"][0] {
  "projects": *[_type == "project"] | order(time desc)[${numberOfProject ? "0.." + count : ""}] {
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
    _createdAt,
  },
  "total": count(*[_type == "project"])
}
  `;
  const res = await sanityFetch<resProjects>({ query: PROJECTS_QUERY });
  return res;
}

export async function getProjectBySlug(slug: string) {
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
    },
    "slugs": *[_type == "project"] | order(time desc).slug.current,
    _createdAt,
  }
  `;
  const res = await sanityFetch<Project>({
    query: PROJECTS_QUERY_BY_SLUG,
    params: { slug },
  });
  return res;
}
