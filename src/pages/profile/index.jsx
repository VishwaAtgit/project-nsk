import { Box, Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {
  stockistCities,
  stockistNames,
  productNames,
} from "../../data/mockData";
const Profile = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Fill in the Below details" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Employee Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.employeeName}
                name="employeeName"
                error={!!touched.employeeName && !!errors.employeeName}
                helperText={touched.employeeName && errors.employeeName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                variant="filled"
                fullWidth
                select
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stockistCity}
                name="stockistCity"
                label="Stockist City"
                defaultValue="HYD"
                error={!!touched.stockistCity && !!errors.stockistCity}
                helperText={touched.stockistCity && errors.stockistCity}
                sx={{ gridColumn: "span 2" }}
              >
                {stockistCities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Stockist Name"
                defaultValue="ABC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stockistName}
                name="stockistName"
                error={!!touched.stockistName && !!errors.stockistName}
                helperText={touched.stockistName && errors.stockistName}
                sx={{ gridColumn: "span 2" }}
              >
                {stockistNames.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Doctor Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="doctorName"
                error={!!touched.doctorName && !!errors.doctorName}
                helperText={touched.doctorName && errors.doctorName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="textarea"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                select
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productName}
                name="productName"
                error={!!touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{ gridColumn: "span 2" }}
              >
                {productNames.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="MRP"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mrp}
                name="mrp"
                error={!!touched.mrp && !!errors.mrp}
                helperText={touched.mrp && errors.mrp}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ROI (Renew on investment)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.roi}
                name="employeeName"
                error={!!touched.roi && !!errors.roi}
                helperText={touched.roi && errors.roi}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Order"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.order}
                name="order"
                error={!!touched.order && !!errors.order}
                helperText={touched.order && errors.order}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fee"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fee}
                name="fee"
                error={!!touched.fee && !!errors.fee}
                helperText={touched.fee && errors.fee}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Service"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.service}
                name="service"
                error={!!touched.service && !!errors.service}
                helperText={touched.service && errors.service}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Net/PTR Value"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.netValue}
                name="netValue"
                error={!!touched.netValue && !!errors.netValue}
                helperText={touched.netValue && errors.netValue}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bill Value"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.billValue}
                name="billValue"
                error={!!touched.billValue && !!errors.billValue}
                helperText={touched.billValue && errors.billValue}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  employeeName: yup.string().required("required"),
  stockistCity: yup.string().required("required"),
  stockistName: yup.string().required("required"),
  date: yup.string().required("required"),
  doctorName: yup.string().required("required"),
  address: yup.string().required("required"),
  productName: yup.string().required("required"),
  mrp: yup.string().required("required"),
  roi: yup.string().required("required"),
  order: yup.string().required("required"),
  fee: yup.string().required("required"),
  service: yup.string().required("required"),
  netValue: yup.string().required("required"),
  billValue: yup.string().required("required"),
});
const initialValues = {
  employeeName: "",
  stockistCity: "",
  stockistName: "",
  date: "",
  address: "",
  doctorName: "",
  productName: "",
  mrp: "",
  roi: "",
  order: "",
  fee: "",
  service: "",
  netValue: "",
  billValue: "",
};

export default Profile;
