import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import AddressCard from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import { Grid, TextField } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
}

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    pincode: Yup.string().required("Pincode is required"),
});

const items = [1, 1]
const Cart = () => {
    const createOrderUsingSelectedAddress = () => { }
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {

    }

    return (
        <>
            <main className="lg:flex justify-between">

                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10" >
                    {items.map((items) => (<CartItem />))}
                    <Divider />


                    <div className="billDetIS px-5 text-sm">
                        <p>Bill Details</p>
                        <div className="space-y-3">

                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹299</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Fee</p>
                                <p>₹21</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Platform Fee</p>
                                <p>₹28</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Chares</p>
                                <p>₹42</p>
                            </div>

                            <Divider />
                        </div>

                        <div className="flex justify-between text-gray-400">
                            <p>Total Pay</p>
                            <p>₹2000</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] ">
                    <div>
                        <h1 className="text-2xl text-center font-semibold py-10 ">Choose Delivery Address</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1, 1, 1, 1].map((item) => (
                                <AddressCard
                                    handleSelectAddress={createOrderUsingSelectedAddress}
                                    item={item} showButton={true} />
                            ))}


                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant="outlined" fullWidth onClick={() => handleOpenAddressModal()}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="streetAddress"
                                            label="Street Address"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.streetAddress && Boolean(errors.streetAddress)}
                                            helperText={<ErrorMessage name="streetAddress" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.city && Boolean(errors.city)}
                                            helperText={<ErrorMessage name="city" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            as={TextField}
                                            name="state"
                                            label="State"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.state && Boolean(errors.state)}
                                            helperText={<ErrorMessage name="state" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="pincode"
                                            label="Pincode"
                                            fullWidth
                                            variant="outlined"
                                            type="number"
                                            error={touched.pincode && Boolean(errors.pincode)}
                                            helperText={<ErrorMessage name="pincode" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Deliver Here
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    );
};

export default Cart;
