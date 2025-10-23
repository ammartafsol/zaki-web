"use client";
import { useMobileViewHook } from "@/resources/hooks/useMobileViewHook";
import MobileDrawer from "@/components/molecules/WebsiteHeader/MobileDrawer";
import Header from "@/components/molecules/Header/Header";

const WebsiteHeader = () => {
  const { isMobile } = useMobileViewHook(800);


  return (
    <>
      {isMobile ? (
        <MobileDrawer/>
      ) : (
        <> 
          <Header />
        </>
      )}
    </>
  );
};

export default WebsiteHeader;
