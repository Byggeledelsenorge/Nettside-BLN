import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/fagbase/overtakelse-bustadoppforingsloven",
        destination: "/fagbase/overtakelse-av-ny-bolig-sjekkliste",
        permanent: true,
      },
      {
        source: "/fagbase/energiradgivning",
        destination: "/fagbase",
        permanent: true,
      },
      {
        source: "/fagbase/byggelanskontroll",
        destination: "/fagbase",
        permanent: true,
      },
      {
        source: "/fagbase/byggeledelse-passasjen-parkering",
        destination: "/referanser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
