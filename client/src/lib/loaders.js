import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  try {
    const res = await apiRequest("/posts/" + params.id);
    console.log("Single Page Loader Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error in singlePageLoader:", error);
    throw error;
  }
};

export const listPageLoader = async ({ request, params }) => {
  try {
    const query = request.url.split("?")[1];
    const postPromise = apiRequest("/posts?" + query);
    console.log("List Page Loader Query:", query);
    return defer({
      postResponse: postPromise,
    });
  } catch (error) {
    console.error("Error in listPageLoader:", error);
    throw error;
  }
};

export const profilePageLoader = async () => {
  try {
    const postPromise = apiRequest("/users/profilePosts");
    const chatPromise = apiRequest("/chats");
    console.log("Profile Page Loader - Requests sent");
    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  } catch (error) {
    console.error("Error in profilePageLoader:", error);
    throw error;
  }
};
