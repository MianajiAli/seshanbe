import React, { useState, useEffect } from "react";

const Menu = () => {
	const [menulist, setMenulist] = useState([]);
	const [category, setCategory] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const apiUrl =
			"https://snappfood.ir/mobile/v2/restaurant/details/dynamic?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=1803ab32-aed6-48ff-ad3a-c0d01c691739&vendorCode=0q6ogy&locationCacheKey=lat%3D35.715%26long%3D51.404&show_party=1&fetch-static-data=1&locale=fa";
		fetch(apiUrl)
			.then((response) => response.json())
			.then((result) => {
				setMenulist(result.data.menus);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="w-full px-[5%] md:w-[90%] md:mx-[5%] mt-[64px] flex flex-row-reverse flex-wrap justify-center items-center gap-5 py-10">
				{Array(6)
					.fill()
					.map((_, index) => (
						<div
							key={index}
							className="w-[23rem] min-h-40 bg-stone-800 rounded-md p-3 animate-pulse"
						>
							<div className="flex flex-row w-full h-min">
								<div className="w-[8rem] h-[8rem] bg-stone-700 rounded-md"></div>
								<div className="text-right flex flex-col w-[12rem] ml-3">
									<div className="w-3/4 h-6 bg-stone-700 rounded-md mb-2"></div>
									<div className="w-full h-4 bg-stone-700 rounded-md"></div>
								</div>
							</div>
							<div className="flex flex-row justify-between items-center mt-3">
								<div className="w-24 h-8 bg-stone-700 rounded-full"></div>
								<div className="flex flex-row items-center gap-1 h-12">
									<div className="w-16 h-6 bg-stone-700 rounded-md"></div>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const addToCart = (id) => {
		setCart((prevCart) => [...prevCart, id]);
		console.log(cart);
	};

	const changeCart = (action) => {
		if (action === "add") {
			setCart((prevCart) => [...prevCart, 1]);
		} else {
			setCart((prevCart) => prevCart.slice(0, -1));
		}
		console.log(cart);
	};

	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full">
				Cart: {cart.length}
				<button onClick={() => changeCart("add")}>Add</button>
				<button onClick={() => changeCart("remove")}>Remove</button>
			</div>
			<div className="w-full h-16 flex flex-row-reverse items-center justify-between overflow-x-auto whitespace-nowrap">
				{menulist.map((menu, index) => (
					<button
						key={index}
						className={`px-4 py-2 m-2 rounded-md ${
							category === index ? "bg-c-prim" : "bg-stone-700"
						}`}
						onClick={() => setCategory(index)}
					>
						{menu.category}
					</button>
				))}
			</div>
			<div className="w-full px-[5%] md:w-[90%] md:mx-[5%] flex flex-row-reverse flex-wrap justify-center items-center gap-5 py-10">
				{menulist[category]?.products?.map((item) => (
					<div
						key={item.id}
						className="w-[23rem] min-h-40 bg-stone-800 rounded-md p-3"
					>
						<div className="flex flex-row justify-between w-full h-min">
							<div className="w-[8rem] h-[8rem]">
								<img
									className="w-full h-full object-fill rounded-md flex justify-center items-center bg-[#F0F0F0] text-center"
									src={item.images[0]?.imageSrc}
									alt={item.title || "Menu item image"}
								/>
							</div>
							<div className="text-right flex flex-col w-[12rem]">
								<span className="text-lg font-bold">{item.title}</span>
								<p className="mt-1 text-xs opacity-50">{item.description}</p>
							</div>
						</div>
						<div className="flex flex-row justify-between items-center mt-3">
							<button
								className="py-1 px-10 rounded-full bg-c-prim text-c-text1 drop-shadow-[0_0_12px_rgb(100,0,100)]"
								onClick={() => {
									addToCart(item.id);
								}}
							>
								افزودن
							</button>
							<div className="flex flex-row items-center gap-1 h-12">
								<span className="text-sm opacity-50">تومان</span>
								<span className="text-xl">{item.price.toLocaleString()}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
