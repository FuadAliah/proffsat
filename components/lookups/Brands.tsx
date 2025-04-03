"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Card from "../Card";
import { Button, CircleLoading, Input } from "../ui";
import Image from "next/image";
import { addDocument, deleteDocument } from "@/lib/http";

type Props = {
  brands: any[];
  fetch: () => void;
  loading: boolean;
};

const Brands = ({ brands, fetch, loading }: Props) => {
  const [add, setAdd] = useState<boolean>(false);
  const [newBrands, setNewBrands] = useState<string>("");

  const inputElement = useRef<HTMLInputElement>(null);

  const handleAdd = async () => {
    if (newBrands.trim() !== "") {
      await addDocument("brands", { name: newBrands, createdAt: new Date().toISOString() }).then(
        () => {
          setNewBrands("");
          setAdd(false);
          fetch();
        }
      );
    }
    return;
  };

  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");

    if (isConfirmed) {
      await deleteDocument("brands", id).then(() => {
        fetch();
      });
    }
  };

  useEffect(() => {
    if (inputElement.current && add) {
      inputElement.current?.focus();
    }
  }, [inputElement, add]);

  return (
    <Card
      title='Brands'
      add={
        <Button className='!p-1.5 !bg-white border border-gray-100' onClick={() => setAdd(true)}>
          <Image src='/add.svg' alt='' width={16} height={16} />
        </Button>
      }
    >
      <div className='flex flex-col'>
        {/* body */}
        <ul className='w-full min-h-13 max-h-130 overflow-auto'>
          {!brands.length && !loading && (
            <div className='flex justify-center items-center h-13'>
              <span className='text-gray-400 font-medium text-sm'>Empty</span>
            </div>
          )}
          {loading ? (
            <div className='relative h-13 flex justify-center items-center'>
              <CircleLoading />
            </div>
          ) : (
            brands.map((item) => (
              <li
                key={item.id}
                className='w-full px-4 py-3 bg-whit hover:bg-gray-50 not-last-of-type:border-b border-gray-100'
              >
                <div className='flex justify-between items-center'>
                  <div>{item.name}</div>
                  <div className='flex items-center gap-2 h-full'>
                    <Button className='!bg-white !px-1 !py-1' onClick={() => handleDelete(item.id)}>
                      <Image src='/delete.svg' alt='' width={20} height={20} />
                    </Button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        {/* footer */}
        {add && (
          <div className='flex justify-between gap-2 w-full border-t border-gray-100 p-4'>
            <Input
              className='flex w-full bg-white'
              value={newBrands}
              width='sm'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewBrands(e.target.value)}
              name='cat'
              type='text'
              placeholder='Type new brand'
              refEl={inputElement}
            />
            <Button
              className='!bg-red-50 !p-2.5 !hover:bg-red-300'
              onClick={() => {
                setNewBrands("");
                setAdd(false);
              }}
            >
              <Image src='/close.svg' alt='' width={24} height={24} />
            </Button>
            <Button className='!bg-blue-50 !p-2.5 !hover:bg-blue-300' onClick={() => handleAdd()}>
              <Image src='/done.svg' alt='' width={24} height={24} />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Brands;
