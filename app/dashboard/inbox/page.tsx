"use client";
import React, { useEffect, useState } from "react";
import { MessageType } from "@/@interfaces/messages";
import { getDocuments, updateDocument } from "@/lib/http";
import List from "@/components/inbox/List";
import { CircleLoading } from "@/components/ui";
import Image from "next/image";
import { formatRelativeTime } from "@/lib/utils";

const Page = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [selectedMessages, setSelectedMessages] = useState<MessageType>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleReadedMessage = async (mes: MessageType) => {
    if (mes.readed) return;
    await updateDocument("messages", mes.id, { readed: true });
    fetchMessages();
  };

  const handleSelectedMessage = (message: MessageType) => {
    setSelectedMessages(message);
    handleReadedMessage(message);
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const categories = await getDocuments("messages");
      setMessages(categories as MessageType[]);
    } catch (error) {
      throw new Error(`Failed to fetch categories ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className='-mt-2 ms-0 flex w-full relative rounded-lg border border-gray-200 min-h-[calc(100vh-420px)] bg-white overflow-hidden'>
      <List
        messages={messages}
        selectedMessages={selectedMessages}
        handleSelectedMessage={handleSelectedMessage}
      />
      {selectedMessages && !loading ? (
        <div className='w-full'>
          <div className='flex flex-col gap-1 p-5 border-b border-gray-200'>
            <h3 className='font-bold'>{selectedMessages.name}</h3>
            <h5 className='text-sm text-gray-600'>{selectedMessages.email}</h5>
          </div>

          <div className='flex gap-3 items-start p-5 mt-4'>
            <Image src='/avatar.png' alt='avatar' width={32} height={32} className='rounded-full' />
            <div className='flex flex-col gap-1'>
              <div className='p-4 pe-8 border border-gray-200 rounded-2xl rounded-tl-none text-sm text-gray-800'>
                {selectedMessages.message}
              </div>
              <h5 className='text-xs text-gray-400'>
                {formatRelativeTime(selectedMessages.createdAt)}
              </h5>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
