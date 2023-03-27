import IconClose from '@/components/common/Icons/IconClose';
import { ShoppingCart } from '@/models/shopping-cart';
import { utils } from "@/tools";
interface IProps {
	product: ShoppingCart;
	callbackRemoveShoppingCart: (id: string) => void
}
export default function CardCart({ product, callbackRemoveShoppingCart } :IProps ) {
 
	return (
		<>
			<div className="shadow-md relative flex w-full justify-items-between   bg-base-200 rounded-3xl p-2 h-32  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-base-200 duration-300">
				<div className="absolute bottom-0 right-0 top-0 p-4">
					<button  onClick={() => callbackRemoveShoppingCart(product.id)}>
						<IconClose classes="h-3 w-3 btn-square hover:fill-primary" color="fill-neutral-content" />
					</button>
				</div>
				<div className="flex justify-items-center items-center mr-3">
					<img
						className="h-36 w-36 mask mask-circle  "
						src={product.product.images[0].src}
						alt={product.product.images[0].alt}
					/>
				</div>
				<div className="grid w-full grid-rows-5">
					<div className="flex justify-between row-start-1 items-start p-1 mb-8">
						<h1 className="  w-full  text-lg font-semibold">
							{utils.formatTextToLowercase(utils.abstractText(product.product.name))}
						</h1>
					</div>
					<div className='flex my-4 text-sm'> {product.note} </div>
					<div className="flex  row-start-4 items-start mb-3 pb-3 ">
						<h4 className="pt-2  text-sm font-semibold w-1/2">
							{' '}
							$ {product.price * product.quantity}{' '}
						</h4>
						<div className="flex items-center">
						<div className="hover:bg-primary text-neutral-content bg-neutral rounded-l-full hover:text-primary-content lg:h-8 lg:w-12 h-8  w-9 text-2xl text-bold text-center font-bold">
								{' '}
								-{' '}
							</div>
							<div className="text-neutral-content bg-neutral lg:text-text-lg text-lg  text-semibold h-8  w-12 font-medium lg:font-bold text-center">
								{' '}
								{product.quantity}
							</div>
							<div className="hover:bg-primary text-neutral-content bg-neutral rounded-r-full hover:text-primary-content lg:h-8 lg:w-12 h-8  w-9 text-2xl text-bold text-center font-bold">
								{' '}
								+{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
