import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://gory-blood-03228.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Service Add Successfully!');
                reset();
            }
        })
    };
    
    return (
        <div className="add-service">
            <h2 className="text-center m-3">Add A New Package Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="Set A Unique Key" />
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Enter Name" />
                <input {...register("info")} placeholder="Enter Package Information" />
                <input {...register("hotel")} placeholder="Enter Hotel Details" />
                <input {...register("person")} placeholder="Enter Number Of Person" />
                <input {...register("totalcost")} placeholder="Enter TotalCost" />
                <input {...register("img")} placeholder="Enter A Image URL" />   
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddService;