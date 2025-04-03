import { MessageType } from "@/@interfaces/messages";
import { formatRelativeTime } from "@/lib/utils";

type Props = {
  messages: MessageType[];
  selectedMessages: MessageType | undefined;
  handleSelectedMessage: (message: MessageType) => void;
};

const List = ({ messages, selectedMessages, handleSelectedMessage }: Props) => {
  return (
    <div className='w-1/4 border-e border-gray-200 bg-gray-50 flex flex-col h-[calc(100vh-140px)]'>
      <div className='flex flex-col gap-2 px-4 py-7 border-b border-gray-200 bg-white'>
        <h2 className='text-2xl font-bold'>Inbox</h2>
      </div>
      <div className='flex flex-col text-sm overflow-auto'>
        {messages.map((message) => (
          <button
            key={message.id}
            type='button'
            className={`text-start p-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200 ${
              selectedMessages?.id === message.id && "bg-white"
            }`}
            onClick={() => handleSelectedMessage(message)}
          >
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  {!message.readed && <div className='w-2 h-2 bg-indigo-600 rounded-full'></div>}
                  <h4 className={`font-semibold ${!message.readed ? "text-indigo-600" : ""}`}>
                    {message.name}
                  </h4>
                </div>

                <span className='text-xs text-gray-600 text-end'>
                  {formatRelativeTime(message.createdAt)}
                </span>
              </div>
              <span className='text-xs text-gray-400'>{message.email}</span>
              <span
                className={`text-xs mt-2 ${
                  !message.readed ? "font-semibold" : "font-medium"
                } text-gray-900 truncate`}
              >
                {message.message}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default List;
