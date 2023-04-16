import { useCallback, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Category from "@/components/common/Category";
import Container from "@/components/common/Container";
import { IconThreeLines } from "@/components/common/Icons";
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
import DropdownCart from "@/components/common/DropdownCart";
import SkeletonCardProduct from "@/components/common/Skeleton/SkeletonCardProduct";
import IsEmptyList from "@/components/common/IsEmptyList";

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  const productCategory = await categoryService.getAll();

  return {
    props: { productCategory },
  };
});
export default function Home({
  productCategory,
}: {
  productCategory: ProductCategoryWooCommerce[];
}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { categorySelected, products } = useAppSelector(
    (state) => state.stateProducts
  );
  const handleSelectedCategory = (id: number | null) => {
    dispatch(setCategorySelected(id));
  };

  const handleGetProducts = async (category: number | null) => {
    setLoading(true);
    const productRecords = await productService.getAll({
      category,
    });
    dispatch(setProduct(productRecords));
    setLoading(false);
  };

  const getItemProducts = useCallback(
    async (category: number | null) => handleGetProducts(category),
    []
  );

  useEffect(() => {
    if (!products || categorySelected.old) {
      getItemProducts(categorySelected.new);
    }
  }, [categorySelected.new]);

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
          categorySelected={categorySelected.new}
          categories={productCategory}
          setSelectedCategory={handleSelectedCategory}
        />
        {!loading ? (
          products?.length ? (
            <ContainerProducts>
              {products.map((product: ProductWooCommerce) => (
                <CardProduct product={product} key={product.id} />
              ))}
            </ContainerProducts>
          ) : (
            <>
              <IsEmptyList
                title="No products found"
                text="There are no products in this category"
              >
                <button
                  className="btn btn-primary "
                  onClick={() => dispatch(setCategorySelected(null))}
                >
                  All Categories
                </button>
              </IsEmptyList>
            </>
          )
        ) : (
          <ContainerProducts>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
              <SkeletonCardProduct key={key} />
            ))}
          </ContainerProducts>
        )}
      </Container>
      <BottomNavbar />
    </>
  );
}
