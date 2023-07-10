import { Container, useTheme, AppBar, Toolbar, Typography } from "@mui/material";
import React, { FC, Suspense } from "react";
import Loading from "../Loading";
import { Button, Select } from "ui-layout";
import { mockFilter } from "./mock";
import { RootState, useAppDispatch } from "store/store";
import { useSelector } from "react-redux";
import { addFilter, clearFilter, removeFilter } from "store/slices/sessionFilterSlice";

const FilterBar: FC<React.PropsWithChildren<unknown>> = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const sessionFilter = useSelector((st: RootState) => st.sessionFilter)
  console.log("🚀 ~ file: index.tsx:14 ~ sessionFilter:", sessionFilter)

  return (
    <>
      <Toolbar>
        <Select
          name={'categoryId'}
          label="Categoria"
          sx={{ backgroundColor: 'transparent' }}
          fullWidth
          type="multiple"
          value={sessionFilter?.category?.map(i => i.toString())}
          onChange={(e) => {
            console.log("🚀 ~ file: index.tsx:20 ~ e:", e)
            const array = sessionFilter.category
            const index = array.indexOf(+(e.target.value as string));
            if (index >= 0)
              dispatch(removeFilter({ filter: 'category', index: index }))
            else
              dispatch(addFilter({ filter: 'category', value: +(e.target.value as string) }))
          }}
          options={Object.keys(mockFilter.category).map((item) => ({ value: item.toString(), label: mockFilter.category[item as keyof typeof mockFilter.category] || '' })) || []}
        />
        <Select
          name={'categoryId'}
          label="Tipo"
          sx={{ backgroundColor: 'transparent' }}
          fullWidth
          type="multiple"
          value={sessionFilter?.type?.map(i => i.toString())}
          onChange={(e) => {
            console.log("🚀 ~ file: index.tsx:20 ~ e:", e)
            const array = sessionFilter.type
            const index = array.indexOf(+(e.target.value as string));
            if (index >= 0)
              dispatch(removeFilter({ filter: 'type', index: index }))
            else
              dispatch(addFilter({ filter: 'type', value: +(e.target.value as string) }))
          }}
          options={Object.keys(mockFilter.type).map((item) => ({ value: item.toString(), label: mockFilter.type[item as keyof typeof mockFilter.category] || '' })) || []}
        />
        <Select
          name={'categoryId'}
          label="Cor"
          sx={{ backgroundColor: 'transparent' }}
          fullWidth
          type="multiple"
          value={sessionFilter?.color?.map(i => i.toString())}
          onChange={(e) => {
            console.log("🚀 ~ file: index.tsx:20 ~ e:", e)
            const array = sessionFilter.color
            const index = array.indexOf(+(e.target.value as string));
            if (index >= 0)
              dispatch(removeFilter({ filter: 'color', index: index }))
            else
              dispatch(addFilter({ filter: 'color', value: +(e.target.value as string) }))
          }}
          options={Object.keys(mockFilter.color).map((item) => ({ value: item.toString(), label: mockFilter.color[item as keyof typeof mockFilter.category] || '' })) || []}
        />
        <Select
          name={'categoryId'}
          label="Tamanho"
          sx={{ backgroundColor: 'transparent' }}
          fullWidth
          type="multiple"
          value={sessionFilter?.size?.map(i => i.toString())}
          onChange={(e) => {
            console.log("🚀 ~ file: index.tsx:20 ~ e:", e)
            const array = sessionFilter.size
            const index = array.indexOf(+(e.target.value as string));
            if (index >= 0)
              dispatch(removeFilter({ filter: 'size', index: index }))
            else
              dispatch(addFilter({ filter: 'size', value: +(e.target.value as string) }))
          }}
          options={Object.keys(mockFilter.size).map((item) => ({ value: item.toString(), label: mockFilter.size[item as keyof typeof mockFilter.category] || '' })) || []}
        />

        <Button variant='text' color="primary" onClick={() => {
          dispatch(clearFilter())

        }}> apaga </Button>
      </Toolbar>
    </>
  );
};

export default FilterBar;

