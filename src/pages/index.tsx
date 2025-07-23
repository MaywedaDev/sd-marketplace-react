import Button from "@/components/Shared/Button";
import { Icon } from "@iconify/react";
import { Select } from "radix-ui";
import React from "react";

type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

export default function Home() {
  const [stage, setStage] = React.useState(1);

  if (stage === 1) {
    return (
      <div className="w-full h-full px-4 flex flex-col">
        <div className="w-full py-4 justify-between flex">
          <h2 className="text-xl font-bold">Logo Ipsum</h2>

          <Select.Root>
            <Select.Trigger className="bg-white border border-gray-300 rounded-lg p-2">
              <Select.Value placeholder="Select an option" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="bg-white border border-gray-300 rounded-lg shadow-lg min-w-[200px]">
                <Select.Viewport className="p-4">
                  <Select.Group>
                    <SelectItem value="option1">Mega Campus</SelectItem>
                    <SelectItem value="option2">Main Campus</SelectItem>
                    <SelectItem value="option3">Mini Campus</SelectItem>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full px-4 flex flex-col">
      <div className="my-12">
        <h3 className="text-xl text-primary">What are you interested in</h3>
        <p className="text-text-secondary text-sm">
          Pick 3 categories you're interested in.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[...Array(9).fill("Clothing")].map((text, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 h-[130px] flex flex-col justify-between"
          >
            <div className="w-full bg-text-secondary rounded-lg h-full mb-2"></div>
            <span className="text-xs text-center font-semibold">{text}</span>
          </div>
        ))}
      </div>

      <Button className="mt-auto mb-14">Continue</Button>
    </div>
  );
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={`text-text-secondary ${className} flex py-1 gap-3 whitespace-nowrap`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemIndicator className="SelectItemIndicator">
          <Icon icon="mdi:check" />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);
