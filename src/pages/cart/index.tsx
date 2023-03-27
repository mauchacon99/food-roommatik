import Container from '@/components/common/Container';
import { IconClose } from '@/components/common/Icons';
import IconBackArrow from '@/components/common/Icons/IconBackArrow';
import Navbar from '@/components/layouts/Navbar';
import CardCart from '@/components/product/CardCart';
import {  removeProductToShoppingCart } from '@/store/features/shoppingCart/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Product() {
    const dispatch = useAppDispatch();
	const {shoppingCartProduct} = useAppSelector(state => state.stateShoppingCart);

	const getFullPurchaseAmount = () :number  => {
		let totalAmount : number = 0;
		console.log(shoppingCartProduct)
		shoppingCartProduct.forEach(product => {
			totalAmount += product.price * product.quantity;
		});
		return totalAmount;
	} 

	const handleRemoveShoppingCart = (id:string) => {
		console.log('loooog')
		dispatch(removeProductToShoppingCart(id))
		// console.log(shoppingCartProduct)
		// console.log(id)
	}
	return (
		<>
			<Container>
				<Navbar
					iconRight={<IconClose classes="h-5 h-5" color="fill-neutral-content" />}
					iconLeft={<IconBackArrow classes="h-12 h-12"/> }
					titleCenter="SummaryO rder"
				/>
					<div className="grid gap-3 w-full">
						{
							shoppingCartProduct.map(product => (
								<CardCart product={product} key={product.id} callbackRemoveShoppingCart={handleRemoveShoppingCart}/>
							))
						}
					</div>
			</Container>
			<div className="sticky bottom-0 left-0 right-0 ">
				<div className="flex w-full justify-center bg-base-200 p-2  shadow ">
					<div className="w-full  flex-col  lg:w-3/6  flex shadow   px-2  ">
						<div className="p-2 flex  w-full justify-between border-b-2 m-2 items-end mb-3   ">
							<div className="text-sm md:text-xl  ">
								Total Price
							</div>
							<div className="text-xl  font-bold">$ {getFullPurchaseAmount()}</div>
						</div>
						<div className="p-2 h-16 flex w-full">
							<div className="flex w-full transition delay-150 duration-300 ease-in-out rounded-full justify-center items-center bg-primary text-primary-content font-medium text-lg h-12 p-1">
								Got to Checkout
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
