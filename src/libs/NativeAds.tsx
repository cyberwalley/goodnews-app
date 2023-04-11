import React, { FC } from 'react';

interface NativeAdsProps {
  category: string | undefined;
}

const NativeAds: FC<NativeAdsProps> = ({ category }) => {
  const variant = {
    Electronics: (
      <>
        <div id="amzn-assoc-ad-ba915caf-a27a-4a90-a7a0-ba389827c2cc"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=ba915caf-a27a-4a90-a7a0-ba389827c2cc"
        ></script>
      </>
    ),
    Baby: (
      <>
        <div id="amzn-assoc-ad-3f7ffed3-26d7-40d8-80aa-5de6ce50a47b"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=3f7ffed3-26d7-40d8-80aa-5de6ce50a47b"
        ></script>
      </>
    ),
    Computers: (
      <>
        <div id="amzn-assoc-ad-fb1a76ef-19cd-4908-bf74-7540c8b316fd"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=fb1a76ef-19cd-4908-bf74-7540c8b316fd"
        ></script>
      </>
    ),
    Office: (
      <>
        <div id="amzn-assoc-ad-672cea50-1c52-4052-952b-7d995cac2631"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=672cea50-1c52-4052-952b-7d995cac2631"
        ></script>
      </>
    ),
    HealthAndPersonalCare: (
      <>
        <div id="amzn-assoc-ad-4569207a-af79-4003-b5f0-f394e56bc5fe"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=4569207a-af79-4003-b5f0-f394e56bc5fe"
        ></script>
      </>
    ),
    Beauty: (
      <>
        <div id="amzn-assoc-ad-e1a20af2-0bd9-42f5-b26b-9011a348a73e"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=e1a20af2-0bd9-42f5-b26b-9011a348a73e"
        ></script>
      </>
    ),
    HomeAndKitchen: (
      <>
        <div id="amzn-assoc-ad-ed2f56d7-979c-4b86-b472-5a8af41b7a87"></div>
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=ed2f56d7-979c-4b86-b472-5a8af41b7a87"
        ></script>
      </>
    ),
    Books: (
      /* @ts-ignore */
      <iframe
        title="Books"
        src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=48&l=ur1&category=books&banner=1AETVVQQQQA763NWM8G2&f=ifr&linkID=63ab9e8508dbec5e6efbe18f98fa6203&t=getcrazyoff02-20&tracking_id=getcrazyoff02-20"
        width="728"
        height="90"
        scrolling="no"
        style={{ border: 'none' }}
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      ></iframe>
    ),
  };

  /* @ts-ignore */
  return <div>{variant[category]}</div>;
};

NativeAds.displayName = 'NativeAds';

export default NativeAds;
