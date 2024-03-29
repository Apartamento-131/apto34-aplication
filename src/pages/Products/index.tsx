import { useTheme } from "@mui/material";
//import { Link } from 'react-router-dom'

import ProductsGrid from "components/ProductGrid";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store/store";
import FilterBar from "components/FilterBar";
// import ReCAPTCHA from 'react-google-recaptcha'
// import { add, isAfter } from 'date-fns'

const Products: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { t } = useTranslation(["login", "common"]);
  const dispatch = useAppDispatch();

  const theme = useTheme();

  return <>
    <FilterBar />
    <ProductsGrid />
  </>
};
export default Products;
