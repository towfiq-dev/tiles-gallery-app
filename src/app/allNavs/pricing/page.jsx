'use client'
import AddToCard from '@/components/homepage/addToCard/AddToCard';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const PricingPage = () => {
  return (
    <div>
      Pricing Page
      <Tabs>
    <TabList>
      <Tab>Add to Card</Tab>
      <Tab>Add to Wishlist</Tab>
    </TabList>

    <TabPanel>
      <AddToCard/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default PricingPage;