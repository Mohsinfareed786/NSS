import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export const LatestCollection5Items = ({
	id,
	image,
	name,
	price,
	desc,
	address,
	resource_Type,
}) => {
	const { currency } = useContext(ShopContext);

	return (
		<div className='border rounded-lg border-gray-300'>
			{' '}
			<Link
				className='text-gray-700 cursor-pointer '
				to={`/product5/${id}`}>
				<div className='overflow-hidden rounded-lg w-full'>
					<img
						src={image}
						className='w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-110 transition ease-in-out'
						alt=''
					/>
				</div>
				<div className='px-6 py-3'>
					<p className='pt-3 pb-1 text-xl'>{name}</p>
					<p className=' font-medium  text-lg'>
						<span className=''>{address}</span>
					</p>
					<p className=' font-medium  text-lg '>
						<span className=''>{resource_Type}</span>
					</p>
				</div>
			</Link>
		</div>
	);
};
