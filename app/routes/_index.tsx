import type { MetaFunction } from "@remix-run/node";
import { Uicard } from "~/components/card";
import xlsx from "xlsx";
import { useLoaderData } from "@remix-run/react";
import { IEvent } from "~/types/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(): Promise<IEvent[]> {
  const excelFilePath: string = "./excelData.xlsx";
  const workbook: xlsx.WorkBook = xlsx.readFile(excelFilePath);
  const firstSheetName: string = workbook.SheetNames[0];
  const worksheet: xlsx.WorkSheet = workbook.Sheets[firstSheetName];
  const jsonData: IEvent[] = xlsx.utils.sheet_to_json(worksheet);
  return jsonData;
}

export default function Index() {
  const cards = useLoaderData<typeof loader>();
  console.log("card state", cards);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="flex flex-wrap p-3 justify-center items-center">
        {cards.map((item) => (
          <Uicard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
