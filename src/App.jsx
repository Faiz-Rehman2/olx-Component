import React from 'react';
import OlxCard from './component/OLXCard';


const product = {
  title: 'iPhone 12',
  description: 'A well-maintained iPhone 12, 64GB, black color, almost like new.',
  price: 799,
  image: 'https://www.deepspecs.com/wp-content/uploads/2020/06/1-apple-iphone-12-deepspecs-com-1.jpg',
};

const App = () => {
  return (
    <div className="p-10 flex justify-center">
      <OlxCard product={product} />
    </div>
  );
};

export default App;
