"use client";
import React from "react";
import { useParams } from "next/navigation";
import { workData, oldWorkData } from "@/data/workData";
import Link from "next/link";
export default function page() {
  const params = useParams();
  const filteredWorkData = workData.filter((item) => item.id === params.id);
  const filteredOldWorkData = oldWorkData.filter(
    (item) => item.id === params.id
  );

  const mergedArray = filteredWorkData.concat(filteredOldWorkData);
  const data = mergedArray[0];
  return (
    <div className="space-y-5">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">
              <code>Home</code>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <code>works</code>
            </Link>
          </li>
          {data && (
            <li>
              <code>{data.title}</code>
            </li>
          )}
        </ul>
      </div>
      <p className="text-sm indent-8">{data.description}</p>
      <div className="pl-8 my-5 space-y-5 text-sm">
        <a href={data.url} target="_blank" className="flex gap-2">
          <button className="btn btn-xs text-white">website</button>
          <p className="link">{data.url}</p>
        </a>

        <div className="flex gap-2">
          <button className="btn btn-xs text-white">tech</button>
          <a>{data.stack}</a>
        </div>

        <a href={data.git} target="_blank" className="flex gap-2">
          <button className="btn btn-xs text-white">source</button>
          <p className="link">{data.git}</p>
        </a>
      </div>

      <div className="space-y-5">
        <img src={data.thumbnail} alt="" className="rounded-lg" />
        <img src={data.thumbnail2} alt="" className="rounded-lg" />
      </div>
    </div>
  );
}
