import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { options as initialOptions } from "./options";

// const API_BASE_URL = "http://127.0.0.1:8000";

const TextDrop = ({ inputValue, setInputValue, id }) => {
  const [options, setOptions] = React.useState(initialOptions);

  // const fetchSupplierNormData = async () => {
  //   const response = await axios.get(`${API_BASE_URL}/supp_norm_name`);
  //   console.log("SUPPLIER NORM1", response.data.data);
  //   setOptions(response.data.data);
  // };

  // useEffect(() => {
  //   fetchSupplierNormData();
  // }, []);
  return (
    <Autocomplete
      sx={{ padding: "0px !important " }}
      value={inputValue[id] ? inputValue[id] : null}
      // inputValue={inputValue[id]}
      fullWidth
      options={options?.map((i) => i?.title)}
      noOptionsText="Enter to create a new"
      getOptionLabel={(option) => option}
      onInputChange={(e, newValue) => {
        // setInputValue((old) => [...old, newValue]);
        setInputValue((old) => {
          return {
            ...old,
            [id]: newValue,
          };
        });
        // [...selectedRowIds, clickedRowId]
      }}
      renderInput={(params) => (
        <TextField
          sx={{ padding: "0px !important " }}
          fullWidth
          value={inputValue[id]}
          // onChange={(e) => setInputValue([e.target.value])}
          onChange={(e) =>
            setInputValue((old) => {
              return {
                ...old,
                [id]: e.target.value,
              };
            })
          }
          {...params}
          variant="outlined"
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              options.findIndex((o) => o.title === inputValue[id]) === -1
            ) {
              setOptions((o) => o.concat({ title: inputValue[id] }));
            }
          }}
        />
      )}
    />
  );
};

export default TextDrop;
