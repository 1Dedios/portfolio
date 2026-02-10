import { Projects } from "@/types/interface/db-interfaces";
import { projectsCollection } from "@/db-config/collection";
import { Theme } from "@/types/types";

export const queries = {
  defaultProjQuery: async (type: Theme = "dev"): Promise<Projects[]> => {
    if (type === "hacker") {
      const defaultSecQuery = await getProjectsByType("security");
      return defaultSecQuery;
    }

    const defaultQuery = await getProjectsByType("web");
    return defaultQuery;
  },
  projByTypeQuery: async (projType: string) => {
    const projQuery = await getProjectsByType(projType);
    return projQuery;
  },
};

/**
 * QUERY HELPERS
 */
export const getProjectsByType = async (projType: string): Promise<Projects[]> => {
  const allowedProjTypes = ["security", "web", "cli", "api", "database"];
  if (!allowedProjTypes.includes(projType)) {
    throw new Error("Not an allowed project type.");
  }

  const getCollection = await projectsCollection;
  if (!getCollection) throw new Error("Unable to access db.");
  console.log("QUERY COLLECTION RES: ", getCollection);

  const queryRes = await getCollection.find({ type: projType }).toArray();
  if (!queryRes) throw new Error(`Unable to find ${projType} projects`);

  return queryRes;
};
