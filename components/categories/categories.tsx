import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard, { ICategoryCardProps } from "../categoryCard";
// import CategoryCard from '../CategoryCard/CategoryCard';
// import sanityClient, {urlFor} from '../../sanity';
// import services from "../../services";

export default function Categories() {
  const [categories, setCategories] = useState<ICategoryCardProps[]>();

  // useEffect(() => {
  //     services.GetCategory().then(data => {
  //         setCategories(data);
  //     });
  // }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* {categories.map(category => (
            <CategoryCard
                key={category._id}
                imgUrl={urlFor(category?.image).width(200).url() as string}
                title={category?.name as string}
            />
        ))} */}
    </ScrollView>
  );
}
