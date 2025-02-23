import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useForm } from '@inertiajs/react';

const EditFoodModalPT = ({ isOpen, onClose, catagorys, foodData }) => {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Edit Food Info</h2>
                    <button  className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block mb-2">Food Name</label>
                            <input
                                type="text"
                                id="name"
                                value=''
                                className="w-full border rounded-md p-2"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Category</label>
                            <select
                                id="category_id"
                                value=''
                                className="w-full border rounded-md p-2"
                            >
                                <option value="" disabled>Select Category</option>
                                {catagorys.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category_id && (
                                <span className="text-red-500 text-sm">{errors.category_id}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Serving Size</label>
                            <input
                                id="serving_size"
                                type="text"
                                value=''
                                className="w-full border rounded-md p-2"
                            />
                            {errors.serving_size && (
                                <span className="text-red-500 text-sm">{errors.serving_size}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Calories</label>
                            <input
                                id="calories"
                                type="number"
                                value=''
                                className="w-full border rounded-md p-2"
                            />
                            {errors.calories && (
                                <span className="text-red-500 text-sm">{errors.calories}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Protein (g)</label>
                            <input
                                id="protein"
                                type="number"
                                value=''
                                className="w-full border rounded-md p-2"
                            />
                            {errors.protein && (
                                <span className="text-red-500 text-sm">{errors.protein}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Carbs (g)</label>
                            <input
                                id="carbs"
                                type="number"
                                value=''
                                className="w-full border rounded-md p-2"
                            />
                            {errors.carbs && (
                                <span className="text-red-500 text-sm">{errors.carbs}</span>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2">Fats (g)</label>
                            <input
                                id="fats"
                                type="number"
                                value={data.fats ?? ''}
                                className="w-full border rounded-md p-2"
                            />
                            {errors.fats && (
                                <span className="text-red-500 text-sm">{errors.fats}</span>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label className="block mb-2">Food Image</label>
                            <input
                                id="image"
                                type="file"
                                className="w-full border rounded-md p-2"
                                accept="image/*"
                            />
                            {errors.image && (
                                <span className="text-red-500 text-sm">{errors.image}</span>
                            )}
                            {foodData.image && !preview && (
                                <div className="mt-2">
                                    <img src={foodData.image} alt="Current food" className="w-32 h-32 object-cover rounded-lg" />
                                </div>
                            )}
                            {preview && (
                                <div className="mt-2">
                                    <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                resetData();
                                onClose();
                            }}
                            className="px-4 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            Update Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFoodModalPT;
