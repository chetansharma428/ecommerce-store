import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  if (!res) {
    throw new Error('Request failed');
  }
  // console.log(res.json);
  return res.json();
};

export default getCategories;

