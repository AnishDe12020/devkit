import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import HomeComponent from "@/components/HomeComponent";
import WithSidebar from "@/layouts/WithSidebar";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home | DevKit"
        description="Tools for developers, by the Developer Community"
        openGraph={{
          url: "https://www.devkit.one/",
          title: "DevKit",
          description: "Tools for developers, by the Developer Community",
          site_name: "DevKit",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: "https://i.imgur.com/Opo96rx.png",
              width: 1200,
              height: 627,
              alt: "DevKit OG Image",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@DevKitHQ",
          site: "@DevKitHQ",
          cardType: "summary_large_image",
        }}
      />
      <WithSidebar>
        <HomeComponent />
      </WithSidebar>
    </>
  );
};

export default Home;
