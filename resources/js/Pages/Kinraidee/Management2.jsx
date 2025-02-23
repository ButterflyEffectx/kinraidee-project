import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

function Management() {

    const [selectedFoodType, setSelectedFoodType] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        food_name: '',
        food_type: '',
        food_image: '',
        protein: '',
        carbs: '',
        fats: '',
        calories: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/management');
    };

    return (
        <>
            <div className="w-full h-[75px] bg-managecolor"></div>
            <div className="py-12">
                <div className="container mx-auto">
                    {/* Add food */}
                    <div className="grid grid-cols-2 gap-x-6">
                        <div className="bg-managecolor2 w-[678px] h-[543px] flex justify-center items-center rounded-2xl">
                            <div className="w-[580px] h-[480px] bg-managecolor rounded-2xl">
                                <div className="w-full h-full overflow-hidden">

                                    <form onSubmit={handleSubmit} className="">
                                        <div className="py-12 px-12 space-y-5">
                                            <h2 className='text-white text-2xl font-bold shadow-2xl'>เพิ่มอาหาร</h2>
                                            <div className="">
                                                <input
                                                    type="text"
                                                    name="food_name"
                                                    placeholder='ชื่ออาหาร'
                                                    value={data.food_name}
                                                    onChange={(e) => setData('food_name', e.target.value)}
                                                    className="w-full rounded-3xl"
                                                />
                                                {errors.food_name && <div className="text-red-500 text-sm mt-2">{errors.food_name}</div>}
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-1 w-full">
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="food_type"
                                                        placeholder='ทั้งหมด'
                                                        value={data.food_type}
                                                        onChange={(e) => setData('food_type', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.food_type && <div className="text-red-500 text-sm mt-2">{errors.food_type}</div>}
                                                </div>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="food_image"
                                                        placeholder='ภาพ'
                                                        value={data.food_image}
                                                        onChange={(e) => setData('food_image', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.food_image && <div className="text-red-500 text-sm mt-2">{errors.food_image}</div>}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-1 w-full">
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="protein"
                                                        placeholder='โปรตีน'
                                                        value={data.protein}
                                                        onChange={(e) => setData('protein', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.protein && <div className="text-red-500 text-sm mt-2">{errors.protein}</div>}
                                                </div>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="fats"
                                                        placeholder='ไขมัน'
                                                        value={data.fats}
                                                        onChange={(e) => setData('fats', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.fats && <div className="text-red-500 text-sm mt-2">{errors.fats}</div>}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-1 w-full">
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="carbs"
                                                        placeholder='แป้ง'
                                                        value={data.carbs}
                                                        onChange={(e) => setData('carbs', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.carbs && <div className="text-red-500 text-sm mt-2">{errors.carbs}</div>}
                                                </div>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name="calories"
                                                        placeholder='แคลลอรี่'
                                                        value={data.calories}
                                                        onChange={(e) => setData('calories', e.target.value)}
                                                        className="w-full rounded-3xl"
                                                    />
                                                    {errors.calories && <div className="text-red-500 text-sm mt-2">{errors.calories}</div>}
                                                </div>
                                            </div>




                                            <div className="w-full flex justify-center items-center">
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="bg-black text-white font-semibold py-2 px-4 rounded-3xl w-1/3"
                                                >
                                                    {processing ? 'Adding...' : 'Add Now'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Graph */}
                        <div className="bg-managecolor2 w-[678px] h-[543px] flex justify-center items-center rounded-2xl">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Management
