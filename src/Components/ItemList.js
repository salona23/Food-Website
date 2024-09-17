import { CDN_URL } from "../utils/constants";
const ItemList = ({ data}) => {
  // console.log(data);
  // console.log(dummy);
  return (
    <div className="shadow-sm p-4 my-2 border-b-2 flex justify-between">
      <div className="w-9/12 text-left">
        <div className="font-bold">{data?.name}</div>
        <div className="font-bold">
          ₹{data?.price / 100 || data?.defaultPrice / 100}
        </div>
        <div className="text-sm text-gray-400 my-2">{data?.description}</div>
      </div>
      <div className="w-3/12 ">
        <div>
          <button className="text-green-700 bg-white py-2 px-8 rounded-lg shadow-md hover:bg-gray-200 absolute">
            Add
          </button>
          {data.imageId != ""}
          <img className="rounded-lg " src={CDN_URL + data?.imageId} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ItemList;
