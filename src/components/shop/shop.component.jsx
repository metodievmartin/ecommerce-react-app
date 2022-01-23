import React, { useState } from 'react';

import SHOP_DATA from '../../data/shop-data';
import CollectionPreview from '../preview-collection/collection-preview.component';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections
        .filter((item, index) => index < 4)
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default ShopPage;
