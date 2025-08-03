import FormInput from "@/components/Form/FormInput";
import Button from "@/components/Shared/Button";
import { Icon } from "@iconify/react";
import { Form, Select } from "radix-ui";
import React from "react";

type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

export default function Home() {
  const [stage] = React.useState(1);

  if (stage === 1) {
    return (
      <div className="w-full h-full px-4 flex flex-col">
        <div className="w-full py-6 items-center flex gap-4">
          <h2 className="text-xl font-bold mr-auto">Logo Ipsum</h2>

          <Select.Root>
            <Select.Trigger className="bg-white border border-gray-300 rounded p-2">
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

          <button className="p-2 rounded border border-gray-300">
            <Icon width={24} icon="mdi:bell-outline" />
          </button>
        </div>
        <Form.Root>
          <FormInput
            name="Search"
            type="text"
            placeholder="Search for items..."
            contentClassNames="bg-white border-gray-300 hover:border-gray-300"
            appendIcon="mdi:magnify"
          />
        </Form.Root>

        <div className="w-full mb-2">
          <span className="font-medium text-lg">Furnitures</span>
          <div className="flex mb-2 gap-3">
            <button className="p-2 rounded border border-gray-300 flex gap-3 items-center font-medium">
              <Icon width={16} icon="mdi:bell-outline" />
              <span>Chair</span>
            </button>

            <button className="p-2 rounded border border-gray-300 flex gap-3 items-center font-medium">
              <Icon width={16} icon="mdi:bell-outline" />
              <span>Table</span>
            </button>

            <button className="p-2 rounded border border-gray-300 flex gap-3 items-center font-medium">
              <Icon width={16} icon="mdi:bell-outline" />
              <span>Bed</span>
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-5">
          {[...Array(9).fill("Clothing")].map((text, index) => (
            <ProductCard key={index} />
          ))}
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

const ProductCard = () => {
  return (
    <div className="p-2 bg-white border border-gray-300 flex flex-col rounded gap-1">
      <div className="w-full rounded h-[150px] bg-[#d9d9d9]"></div>
      <span className="font-medium">Casual Grey T-Shirt</span>
      <span className="text-green-900 font-medium">N13000</span>
      <div className="flex gap-1 items-center text-sm font-regular">
        <Icon icon="mdi:location-outline" />
        <span>Mega Campus</span>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xs py-1 px-4 rounded bg-gray-300">Used</div>
        <Icon icon="mdi:heart-outline" width={24} />
      </div>
    </div>
  );
};
