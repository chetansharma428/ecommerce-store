import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL }/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  // if (!res) {
  //   throw new Error('Request failed');
  // }
  // console.log(id);
  return res.json();
};

export default getBillboard;
