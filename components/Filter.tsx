import Select, { StylesConfig } from "react-select";
import { ProjectType } from "@/components/types/type";

type FilterProps = {
  handleFilter: (value: string | null) => void;
  projectsData: ProjectType[];
};

type OptionType = {
  value: string;
  label: string;
};

const customStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused
      ? "#e0e0e0"
      : isSelected
      ? "#c0c0c0"
      : "transparent",
    color: isFocused || isSelected ? "#333" : "#666",
    cursor: "pointer",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#212121",
  }),
};

export const Filter: React.FC<FilterProps> = ({
  handleFilter,
  projectsData,
}) => {
  const allTechnologies = projectsData
    .flatMap((project) => project.projects)
    .flatMap((project) => project.technologies);

  //  get Technologies without repetitions
  const uniqueTechnologies = [...new Set(allTechnologies)];

  const technologiesOptions = uniqueTechnologies.map((technology) => ({
    value: technology,
    label: technology,
  }));

  return (
    <div className="mb-5">
      <Select
        isClearable={true}
        options={technologiesOptions}
        placeholder="Search by technology"
        styles={customStyles}
        onChange={(newValue: unknown) => {
          const option = newValue as OptionType | null;
          if (option) {
            handleFilter(option.value);
          } else {
            handleFilter(null);
          }
        }}
      />
    </div>
  );
};
