import React, { FC } from "react";
import { BreadcrumbInfo } from "../../Components/breadcrumbs/breadcrumbs";

export const MarketPage: FC = () => {
  return (
    <>
      <BreadcrumbInfo />
      <div>MatketPage</div>
      {/* left part*/}
      <div>
        {/* nested list */}
        <div />

        <div />
      </div>
      {/* right part*/}
      <div>{/* almost use list to produce the data list */}</div>
    </>
  );
};
