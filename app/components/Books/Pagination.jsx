"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Pagination = ({ total }) => {
  const [page, setPage] = useState(1);
  const pathName = usePathname();
  const router = useRouter();
  const totalPage = Math.ceil(total / 9);

  useEffect(() => {
    const newPathName = pathName + "?" + `page=${page}`;
    router.push(newPathName);
  }, [page, pathName, router]);

  return (
    <div className="flex justify-end gap-x-2">
      <label htmlFor="page" className="font-semibold">
        Pages
      </label>
      <select
        id="page"
        className="outline-none border border-green-600 rounded"
        onChange={(e) => setPage(e.target.value)}
      >
        {Array(totalPage)
          .fill(null)
          .map((page, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Pagination;
