import { FC, Dispatch, SetStateAction } from "react";
import { Autocomplete, TextField } from "@mui/material";

// styles imports
import classes from "./index.module.css";

// local imports
import { EMPLOYEES, LOCATION_TYPE } from "./data";
import { Filter } from "./types";

interface Props {
  roles: Array<string>;
  setFilters: Dispatch<SetStateAction<Filter>>;
}

const Filters: FC<Props> = ({ roles, setFilters }) => {
  return (
    <div className={classes.filters}>
      <Autocomplete
        multiple
        disablePortal
        options={roles}
        onChange={(_, val) => setFilters((prev) => ({ ...prev, roles: val }))}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": {
            padding: 0,
            minWidth: "150px",
            width: "fit-content",
          },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Roles" />}
      />
      <Autocomplete
        multiple
        disablePortal
        options={EMPLOYEES}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": {
            padding: 0,
            minWidth: "200px",
            width: "fit-content",
          },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Number Of Employees" />
        )}
      />
      <Autocomplete
        disablePortal
        options={Array.from(Array(11).keys()).splice(1)}
        getOptionLabel={(option) => option.toString()}
        onChange={(_, val) =>
          setFilters((prev) => ({ ...prev, experience: val }))
        }
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": {
            padding: 0,
            minWidth: "120px",
            width: "fit-content",
          },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
        multiple
        disablePortal
        options={LOCATION_TYPE}
        onChange={(_, val) => setFilters((prev) => ({ ...prev, remote: val }))}
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": {
            padding: 0,
            minWidth: "100px",
            width: "fit-content",
          },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => <TextField {...params} label="Remote" />}
      />
      <Autocomplete
        disablePortal
        options={Array.from(Array(8).keys()).map((num) => `$${num * 10}k`)}
        onChange={(_, val) =>
          setFilters((prev) => ({
            ...prev,
            minimumSalary: val ? +val?.split("k")[0].slice(1) : null,
          }))
        }
        sx={{
          width: "fit-content",
          ".MuiInputBase-root": {
            padding: 0,
            minWidth: "220px",
            width: "fit-content",
          },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
          ".MuiOutlinedInput-root .MuiAutocomplete-endAdornment": { right: 0 },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Mimimum Base Pay Salary" />
        )}
      />
      <TextField
        label="Search Company Name"
        variant="outlined"
        sx={{
          ".MuiInputBase-root": { padding: 0, width: "200px" },
          ".MuiInputBase-input": { padding: "7.5px 4px 7.5px 5px" },
          ".MuiFormLabel-root": {
            lineHeight: "normal",
            top: "-5px",
            fontSize: 14,
          },
        }}
      />
    </div>
  );
};

export default Filters;
