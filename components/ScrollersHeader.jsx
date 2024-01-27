import React from "react";
import Link from 'next/link';

function ScrollersHeader({ price, priceForURL }) {
  return (
    <div className="flex justify-between items-center ml-0 mb-[-10px] md:mb-1 text-slate-700 mr-6 md:mr-0">
      <span className="color-primary text-md sm:text-xl md:text-2xl font-bold  ml-0 pl-0 mt-0 pt-0 mr-2.5">
        Best Washing Machines under {price}
      </span>
      <Link
        href={`/best-washing-machines-under-${priceForURL}`}
        className="bg-primary text-white text-center py-2 px-3 border-0 outline-0 rounded text-xs w-28 mt-1 md:w-30 md:text-base "
      >
        View All
      </Link>
    </div>
  );
}

export default ScrollersHeader;
