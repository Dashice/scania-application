import { useId, useState } from "react";

import {
  DriverFilters,
  DriverTable,
  Header,
  Layout,
  TitleBar,
} from "@components";

import { Driver, Option } from "@types";

import data from "../api/drivers.json";

export const Application = () => {
  const id = useId();

  const drivers = data as Driver[];

  const [options, setOptions] = useState<Option[]>([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState<
    string | null
  >(null);

  if (!drivers || !drivers.length) return null;

  return (
    <Layout headerJSX={<Header />}>
      <TitleBar id={`${id}-title`} title="Driver Evaluation" />
      <article className="mx-4 sm:mx-12" aria-labelledby={`${id}-title`}>
        <DriverFilters
          selected={selectedFilterOption}
          onSelectedChange={(value) => setSelectedFilterOption(value)}
          onOptionsChange={(newOptions) => setOptions(newOptions)}
        />
        <DriverTable
          drivers={drivers}
          selectedFilterOption={selectedFilterOption}
          filterOptions={options}
        />
      </article>
    </Layout>
  );
};
