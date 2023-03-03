import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@/components/Button/Button";

export default {
  title: "Forms/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default = () => <Button>Comprar agora</Button>;

export const Disabled = () => <Button disabled>Ir para pagamento</Button>;
