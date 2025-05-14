import { Outlet } from "react-router";
import { TitleProvider } from "shared/hooks";
import React from "react";

export const ProvidersComponent = () => {
  return (
    <TitleProvider>
          <Outlet />
    </TitleProvider>
  );
};
