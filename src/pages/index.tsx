import Hero from "@/components/Hero";
import Category from "@/components/common/Category";
import Container from "@/components/common/Container";
import { IconThreeDots, IconThreeLines } from "@/components/common/Icons";
import BottomNavbar from "@/components/layouts/BottomNavbar";
import Navbar from "@/components/layouts/Navbar";
import CardProduct from "@/components/product/CardProduct";
import ContainerProducts from "@/components/product/ContainerProducts";
import { ProductWooCommerce } from "@/models/woocommerce/product";
import { categoryService, productService } from "@/services/woocommerce";
import { wrapper } from "../store";
import {
  setCategorySelected,
  setProduct,
} from "@/store/features/product/productSlice";
import { ProductCategoryWooCommerce } from "@/models/woocommerce/product-category";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Router from "next/router";
import DropdownCart from "@/components/common/DropdownCart";

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      const productCategory = await categoryService.getAll();
      const productRecords = await productService.getAll();
      dispatch(setProduct(productRecords));

      return {
        props: { products: productRecords, productCategory },
      };
    }
);
export default function Home({
  products,
  productCategory,
}: {
  products: ProductWooCommerce[];
  productCategory: ProductCategoryWooCommerce[];
}) {
  const dispatch = useAppDispatch();

  const categorySelected = useAppSelector(
    (state) => state.stateProducts.categorySelected
  );
  const callbackSelectedCategory = (id: number) => {
    dispatch(setCategorySelected(id));
    Router.push(`/?category=${id}`);
  };
  return (
    <>
      <Container>
        <Navbar
          iconLeft={<IconThreeLines />}
          iconRight={<DropdownCart />}
          iconRightWithButton={false}
        />{" "}
        <Hero />
        <Category
          categorySelected={categorySelected}
          categories={productCategory}
          setSelectedCategory={callbackSelectedCategory}
        />
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
