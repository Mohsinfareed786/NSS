import React from "react";
import { Link } from "react-router-dom";
import getImagePath from "@/utils/getImagePath";
import RenderWhen from "@/components/RenderWhen";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";
dayjs.extend(relativeTime);

export const PostCard = ({ item }) => {
  const { currency } = useSelector(state => state.config);
  return (
    <div className="border rounded-lg border-gray-300 flex-1 overflow-hidden">
      <Link className="text-gray-700  cursor-pointer " to={`/product/${item?._id}`}>
        <div className="overflow-hidden border-b border-b-gray-200">
          <img
            src={getImagePath(item?.images?.[0])}
            className="w-full h-[350px] sm:h-[350px] md:h-[350px] hover:scale-110 transition ease-in-out object-cover"
            alt=""
          />
        </div>
        <div className="px-6 py-3 flex flex-col gap-1">
          <p className="text-xl font-bold gradient-text">{item?.title}</p>
          <RenderWhen is={item?.price}>
            <p className="text-xl font-bold">
              {currency}
              {item?.price}
            </p>
          </RenderWhen>
          <p className="font-semibold">
            <span className="">{item?.location}</span>
          </p>
          <RenderWhen is={item?.condition}>
            <div className="flex justify-between items-center">
              <p className=" text-gray-600">Condition: {item?.condition}</p>
            </div>
          </RenderWhen>
          <RenderWhen is={item?.on}>
            <div className="flex flex-col">
              <p className="font-bold text-gray-700">{dayjs(item?.on).format("DD MMM YYYY")}</p>
              <p className=" text-gray-500">{dayjs(item?.on).format("h:mm A")}</p>
            </div>
          </RenderWhen>
          <p className="text-gray-500 text-sm">Posted: {dayjs(item?.createdAt).fromNow()}</p>
        </div>
      </Link>
    </div>
  );
};
