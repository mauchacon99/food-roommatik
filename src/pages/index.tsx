import Hero from "@/components/Hero";
import Category from "@/components/common/Category";
import Container from "@/components/common/Container";
import { IconThreeDots, IconThreeLines } from "@/components/common/Icons";
import BottomNavbar from "@/components/layouts/BottomNavbar";
import Navbar from "@/components/layouts/Navbar";
import CardProduct from "@/components/product/CardProduct";
import ContainerProducts from "@/components/product/ContainerProducts";
import { ProductWooCommerce } from "@/models/woocommerce/product";
import { productService } from "@/services/woocommerce";
import { wrapper } from "../store";
import { setProduct } from "@/store/features/product/productSlice";

export const getServerSideProps = wrapper.getServerSideProps(
  ({ getState, dispatch }) =>
    async () => {
      const {
        stateProducts: { products: productStores },
      } = getState();

      if (!productStores) {
        const productStores = await productService.getAll();
        dispatch(setProduct(productStores));
      }
      const {
        stateProducts: { products: productRecords },
      } = getState();
      return {
        props: { products: productRecords },
      };
    }
);

export default function Home({ products }: { products: ProductWooCommerce[] }) {
  return (
    <>
      <Container>
        <Navbar iconLeft={<IconThreeLines />} iconRight={<IconThreeDots />} />
        <Hero />
        <Category />
        {products && (
          <ContainerProducts>
            {products.map((product: ProductWooCommerce) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </ContainerProducts>
        )}
      </Container>
      <BottomNavbar />
    </>
  );
}
