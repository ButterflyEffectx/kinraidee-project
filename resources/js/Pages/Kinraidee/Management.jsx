
import React, { useState } from 'react'
import AlertIcon from './Icons/FRAME.png'
import { Filter, PenLine, Trash2, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import AddFoodModal from './AddFoodModal';
import EditFoodModal from './EditFoodModal';
import { Link } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia';

const Button = React.forwardRef(({
    className = '',
    variant = 'default',
    size = 'default',
    children,
    disabled = false,
    ...props
}, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            className={combinedClassName}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

// Card components
const Card = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
            {...props}
        />
    );
});
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`flex flex-col space-y-1.5 p-6 ${className}`}
            {...props}
        />
    );
});
CardHeader.displayName = 'CardHeader';

const CardContent = React.forwardRef(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`p-6 pt-0 ${className}`}
            {...props}
        />
    );
});
CardContent.displayName = 'CardContent';

function Management({ Foods, catagorys, currentPage, lastPage, }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    console.log({Foods, catagorys})

    const handleAddFood = () => {
        window.location.reload();
    };

    const handleEditFood = () => {
        window.location.reload();
    };

    const editFood = (food) => {
        setSelectedFood(food);
        setIsEditModalOpen(true);
    };

    const signupData = [
        { day: 'Mon', users: 15 },
        { day: 'Tue', users: 16 },
        { day: 'Wed', users: 18 },
        { day: 'Thu', users: 23 },
        { day: 'Fri', users: 22 },
        { day: 'Sat', users: 25 },
        { day: 'Sun', users: 24 }
    ];




    return (
        <>
            <div className="w-full h-[72px] bg-white shadow-sm mb-12">
                <div className="px-8 h-full flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="bg-logocolor font-inter w-[32px] h-[32px] p-6 rounded-2xl flex justify-center items-center text-2xl text-white font-bold">
                            M
                        </div>
                        <h1 className='font-bold text-2xl font-inter'>Makinnumgun | Admin</h1>
                    </div>
                    <div className="flex items-center justify-center space-x-5">

                        <img src={AlertIcon} alt="AlertIcon" className='w-[48px] h-[48px]' />
                        <div className="w-fit rounded-full bg-gray-200 px-3 py-2 text-lg">
                            JD
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">

                <Card className="mb-8">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">User Sign-ups Overview</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">7 days</Button>
                                <Button variant="outline" size="sm">30 days</Button>
                                <Button variant="outline" size="sm">3 months</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={signupData}>
                                    <Line
                                        type="monotone"
                                        dataKey="users"
                                        stroke="#ff4500"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        dx={-10}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Food Management Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Food Management</h2>
                            <div className="flex gap-2 items-center justify-between">
                                <Button variant="outline" size="sm">
                                    <Filter className="w-4 h-4 mr-1" />
                                    Filter
                                </Button>
                                <Button
                                    className="bg-orange-500 hover:bg-orange-600 text-white"
                                    onClick={() => setIsAddModalOpen(true)}
                                >
                                    + Add New Food
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4">Food</th>
                                        <th className="text-left py-3 px-4">Calories</th>
                                        <th className="text-left py-3 px-4">Protein (g)</th>
                                        <th className="text-left py-3 px-4">Fats (g)</th>
                                        <th className="text-left py-3 px-4">Carbs (g)</th>
                                        <th className="text-left py-3 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Foods.data.map((food) => (
                                        <tr key={food.id} className="border-b">
                                            <td className="py-3 px-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src={food.image}
                                                        alt={food.name}
                                                        className="w-10 h-10 rounded-lg mr-3"
                                                    />
                                                    {food.name}
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">{food.calories}</td>
                                            <td className="py-3 px-4">{food.protein}</td>
                                            <td className="py-3 px-4">{food.fats}</td>
                                            <td className="py-3 px-4">{food.carbs}</td>
                                            <td className="py-3 px-4">
                                                <div className="flex gap-2">
                                                    <button onClick={() => editFood(food)} className="p-1 hover:bg-green-300 rounded">
                                                        <PenLine className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => Inertia.delete(`/management/${food.id}`)} className="p-1 hover:bg-red-300 rounded">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 flex justify-end items-center">
                            <p className="text-sm text-gray-600">
                                Page: {currentPage} of {lastPage}
                            </p>
                            <div className="flex space-x-2">
                                {currentPage > 1 && (
                                    <Link
                                        href={`?page=${currentPage - 1}`}
                                        preserveScroll
                                        className="px-4 py-2 ml-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
                                    >
                                        Previous
                                    </Link>
                                )}
                                {currentPage < lastPage && (
                                    <Link
                                        href={`?page=${currentPage + 1}`}
                                        preserveScroll
                                        className="px-4 py-2 ml-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
                                    >
                                        Next
                                    </Link>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <AddFoodModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onSubmit={handleAddFood}
                    catagorys={catagorys}
                />
                <EditFoodModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSubmit={handleEditFood}
                    categories={catagorys}
                    food={selectedFood}
                />
            </div>
        </>
    )
}

export default Management
