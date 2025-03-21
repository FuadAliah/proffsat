"use client";
import React, { useEffect, useState } from "react";
import { Button, Table } from "@/components/ui";
import { deleteDocument, getDocuments } from "@/lib/http";
import { Routes } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { ProductAPI, ProductType } from "@/@interfaces/product";

const Page: React.FC = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const router = useRouter();

  const fetchData = () => {
    getDocuments("products").then((res: ProductAPI[]) => {
      setData(
        res
          ?.map((doc: ProductAPI) => ({
            id: doc.id,
            nameEN: doc.nameEN.stringValue || "f",
            nameAR: doc.nameAR?.stringValue || "",
            brand: doc.brand?.stringValue || "",
            category: doc.category?.stringValue || "",
            price: doc.price?.stringValue || "0",
            createdAt: doc.createdAt?.stringValue || "",
            descriptionEN: doc.descriptionEN?.stringValue || "",
            descriptionAR: doc.descriptionAR?.stringValue || "",
            size: doc.size?.stringValue || "",
            image: doc.image?.stringValue || "",
          }))
          .sort((a: { createdAt: string }, b: { createdAt: string }) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          })
      );
    });
  };

  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");

    if (isConfirmed) {
      try {
        deleteDocument("products", id).then(() => fetchData());
      } catch (error) {
        throw new Error(`Parsing failed: ${error}`);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      cellClassName: "flex justify-center items-center",
      renderCell(params) {
        return (
          <Image
            className='rounded-md object-cover aspect-square'
            src={params.row.image}
            alt=''
            width={60}
            height={60}
            unoptimized
          />
        );
      },
    },
    { field: "nameEN", headerName: "En Name", flex: 1 },
    { field: "nameAR", headerName: "Ar Name", flex: 1 },
    { field: "brand", headerName: "Brand", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "size", headerName: "Size", flex: 1 },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell(params) {
        return <span>{Number(params.row.price).toFixed(3)}</span>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell(params) {
        return (
          <div className='flex items-center gap-2 h-full'>
            <Button className='!bg-blue-100 !px-3 !py-2 h-9'>
              <Image src='/edit.svg' alt='' width={20} height={20} />
            </Button>
            <Button
              className='!bg-red-100 !px-3 !py-2 h-9'
              onClick={() => handleDelete(params.row.id)}
            >
              <Image src='/delete.svg' alt='' width={20} height={20} />
            </Button>
          </div>
        );
      },
      flex: 1,
    },
  ];

  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl'>Products</h2>
        <Button
          className='!py-2 !px-4'
          text='Add New'
          onClick={() => router.push(Routes.ADD_PRODUCT)}
        />
      </div>

      <Table rows={data} columns={columns} pageSize={10} />
    </div>
  );
};

export default Page;
