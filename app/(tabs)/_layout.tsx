import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// latitude:  10.5704012 longitude:  77.2396526
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5699159 longitude:  77.2392123
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.569984 longitude:  77.2392339
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5688414 longitude:  77.2386574
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5694638 longitude:  77.2389199
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5695481 longitude:  77.2384488
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5694951 longitude:  77.2382619
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5689833 longitude:  77.2382175
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5677505 longitude:  77.2375706
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.567635 longitude:  77.237398
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.56678 longitude:  77.2370773
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5665173 longitude:  77.2377669
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5657215 longitude:  77.2366841
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5650201 longitude:  77.2363408
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5644204 longitude:  77.2360011
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5641634 longitude:  77.2359754
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5632736 longitude:  77.2356846
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.562602 longitude:  77.2353671
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5620251 longitude:  77.2349175
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5614172 longitude:  77.234686
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5610518 longitude:  77.2347137
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5605365 longitude:  77.2345139
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5597325 longitude:  77.2342874
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5586085 longitude:  77.2336609
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5585107 longitude:  77.2334986
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5578543 longitude:  77.2326186
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5573524 longitude:  77.2328523
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5563025 longitude:  77.2323789
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5557766 longitude:  77.232017
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5546838 longitude:  77.2314356
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5542348 longitude:  77.2313969
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5537652 longitude:  77.230885
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5528249 longitude:  77.230454
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5526454 longitude:  77.2304147
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.551807 longitude:  77.230396
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5511955 longitude:  77.2297742
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5511955 longitude:  77.2297742
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5511955 longitude:  77.2297742
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5492304 longitude:  77.2291932
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5492239 longitude:  77.2285121
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5492205 longitude:  77.2285117
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5492192 longitude:  77.2285115
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5461665 longitude:  77.2277762
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5459902 longitude:  77.2276863
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5461411 longitude:  77.2277642
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5448559 longitude:  77.2268219
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5447768 longitude:  77.2268113
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.544772 longitude:  77.226779
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5437413 longitude:  77.2257561
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5427187 longitude:  77.2255145
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5425234 longitude:  77.2254543
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5416104 longitude:  77.226144
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5412848 longitude:  77.225494
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5403418 longitude:  77.2249323
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5397518 longitude:  77.2246079
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5397896 longitude:  77.2246058
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.539545 longitude:  77.2240998
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5393751 longitude:  77.2241932
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5390862 longitude:  77.2254738
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5366889 longitude:  77.2247713
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5359273 longitude:  77.2246654
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5363389 longitude:  77.2254955
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5363389 longitude:  77.2254955
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5363389 longitude:  77.2254955
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5363389 longitude:  77.2254955
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5363389 longitude:  77.2254955
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329882 longitude:  77.2220041
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329885 longitude:  77.2220124
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329885 longitude:  77.2220124
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5309991 longitude:  77.2198193
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5313204 longitude:  77.2203411
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5312004 longitude:  77.2202652
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5307555 longitude:  77.2195861
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5305994 longitude:  77.2190717
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5297609 longitude:  77.217656
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5293973 longitude:  77.2177827
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5292775 longitude:  77.2178407
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5292775 longitude:  77.2178407
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5292775 longitude:  77.2178407
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260563 longitude:  77.2162224
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260563 longitude:  77.2162224
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.526056 longitude:  77.2162181
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.526056 longitude:  77.2162181
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5245121 longitude:  77.2152936
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5239714 longitude:  77.2145904
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231587 longitude:  77.2150839
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231587 longitude:  77.2150839
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231587 longitude:  77.2150839
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5219533 longitude:  77.2113909
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5208103 longitude:  77.2111054
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5218926 longitude:  77.2113804
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5214786 longitude:  77.2112751
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5207535 longitude:  77.2110155
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5207535 longitude:  77.2110155
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5207535 longitude:  77.2110155
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191466 longitude:  77.2108644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5116506 longitude:  77.2040151
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191405 longitude:  77.2108646
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.519145 longitude:  77.2108679
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5191452 longitude:  77.2108647
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5204669 longitude:  77.2110497
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5207451 longitude:  77.2109938
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5219248 longitude:  77.2113865
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5219442 longitude:  77.211389
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231591 longitude:  77.2150858
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231591 longitude:  77.2150858
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5231591 longitude:  77.2150858
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5236254 longitude:  77.2145788
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5236254 longitude:  77.2145788
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5245128 longitude:  77.2152996
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260569 longitude:  77.2162242
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260564 longitude:  77.2162219
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260561 longitude:  77.2162209
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260562 longitude:  77.2162213
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5260562 longitude:  77.2162213
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5282326 longitude:  77.2204815
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5290962 longitude:  77.2176784
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5293063 longitude:  77.2178828
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5296622 longitude:  77.2177265
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5297513 longitude:  77.2176506
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5305366 longitude:  77.2191827
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5307724 longitude:  77.2198986
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5312461 longitude:  77.2204106
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5315029 longitude:  77.2205762
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329884 longitude:  77.2217838
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329858 longitude:  77.2217913
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5329892 longitude:  77.2220272
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.533121 longitude:  77.2226143
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.533121 longitude:  77.2226143
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5357487 longitude:  77.2246409
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5357641 longitude:  77.2246436
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5360426 longitude:  77.2251586
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5359884 longitude:  77.2247474
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5366964 longitude:  77.2247733
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5366964 longitude:  77.2247733
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.539582 longitude:  77.2244674
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5396904 longitude:  77.2246646
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5398011 longitude:  77.2245947
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5398359 longitude:  77.224619
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5410204 longitude:  77.2249237
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5416384 longitude:  77.226125
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5416863 longitude:  77.2261901
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5423445 longitude:  77.2256644
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.544599 longitude:  77.2273069
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.544583 longitude:  77.2272801
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.544906 longitude:  77.2269523
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5458934 longitude:  77.2275898
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5460445 longitude:  77.2277091
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5461433 longitude:  77.2277633
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5461864 longitude:  77.227787
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5461933 longitude:  77.2277907
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.549229 longitude:  77.2290987
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5512887 longitude:  77.2316247
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5512749 longitude:  77.231547
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5514534 longitude:  77.2307456
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5515507 longitude:  77.2303913
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5518124 longitude:  77.2304215
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5526275 longitude:  77.2304405
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5528997 longitude:  77.2305018
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5538158 longitude:  77.2312101
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5541598 longitude:  77.2313262
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5556923 longitude:  77.2320451
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.55604 longitude:  77.2328603
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5572891 longitude:  77.2328398
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5573818 longitude:  77.2328911
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5585265 longitude:  77.233568
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5584978 longitude:  77.2334964
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5585647 longitude:  77.2336438
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5595251 longitude:  77.2342608
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.560472 longitude:  77.2344414
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5611614 longitude:  77.2346446
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5621508 longitude:  77.2349992
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5623914 longitude:  77.2352227
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5624225 longitude:  77.2352441
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5630626 longitude:  77.2356064
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5641817 longitude:  77.23601
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5642872 longitude:  77.2360143
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5649449 longitude:  77.2363603
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5656835 longitude:  77.2366361
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5663417 longitude:  77.2379582
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5667933 longitude:  77.2373036
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5676772 longitude:  77.2374788
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5686848 longitude:  77.2381079
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5688627 longitude:  77.2385865
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5696654 longitude:  77.2386865
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5690086 longitude:  77.2389786
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.570153 longitude:  77.2394784
//  LOG  Inside location finder
//  LOG  {"lan": 77.2396526, "lat": 10.5704012}
//  LOG  latitude:  10.5703193 longitude:  77.2396382
