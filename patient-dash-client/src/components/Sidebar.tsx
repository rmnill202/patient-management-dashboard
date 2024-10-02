import { useState } from 'react';
import { Drawer } from 'vaul';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CaretRightIcon } from '@radix-ui/react-icons';

const Sidebar = () => {

  return (
    <Card className={`bg-orange-50 w-[200px] min-h-[80vh] rounded-br-sm []`}>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant={'outline'} className='w-full text-left'>Patient Intake</Button>
        <Button variant={'outline'} className='w-full text-left mt-1'>Manage Forms</Button>
      </CardContent>
    </Card>
  );
}

export default Sidebar;