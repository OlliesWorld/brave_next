export const API_URL = process.env.API_URL || "http://localhost:1337"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY  

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
 export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `https://strapi-gblj.onrender.com${image.url}`;
    }
  
    return image.url;
};