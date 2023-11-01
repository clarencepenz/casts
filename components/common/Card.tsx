import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomAvatar from "./CustomAvatar";

type Props = {
  item: {
    type: string;
    person: {
      id: number;
      name: string;
      image: {
        original: string;
      };
    };
  };
};

function CustomCard({ item }: Props) {
  return (
    <Card className={cn("w-full hover:bg-slate-200 hover:ease-in")}>
      <CardHeader className="p-4">
        <div className="flex gap-2 items-center">
          <CustomAvatar image={item?.person?.image?.original} />
          <div className="flex flex-col justify-center">
            <CardTitle>{item?.person?.name} </CardTitle>
            <CardDescription>{item?.type}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CustomCard;
