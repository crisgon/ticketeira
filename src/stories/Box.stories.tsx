import React from "react";

import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@/components/Box/Box";

export default {
  title: "Layout/Box",
  component: Box,
} as Meta<BoxProps>;

export const Default: StoryObj = {
  args: {
    children: (
      <div>
        <h3>Box simples</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          accusantium veniam laudantium vero aspernatur repudiandae similique
          quis quidem eos consequatur quasi, velit commodi voluptatum, nisi
          numquam vitae placeat reprehenderit maxime?
        </p>
      </div>
    ),
  },
};

export const WithImage: StoryObj = {
  args: {
    children: (
      <div style={{ width: "200px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://i0.wp.com/tracklist.com.br/wp-content/uploads/2021/08/rock-in-rio.png?fit=1200%2C800&ssl=1"
          alt="Rock In Rio"
          width={200}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          accusantium veniam laudantium vero aspernatur repudiandae similique
          quis quidem eos consequatur quasi, velit commodi voluptatum, nisi
          numquam vitae placeat reprehenderit maxime?
        </p>
      </div>
    ),
  },
};
