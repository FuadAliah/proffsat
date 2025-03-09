import { useDropzone } from "react-dropzone";
import Image from "next/image";

type Props = {
  files: Array<{ preview: string }>;
  setFiles: React.Dispatch<React.SetStateAction<Array<{ preview: string; file: any }>>>;
};

const Dropzone = ({ files, setFiles }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            file,
          })
        )
      );
    },
    maxFiles: 1,
  });

  return (
    <div className='flex flex-col gap-2'>
      <div
        {...getRootProps({
          className: `p-4 dropzone bg-gray-100 rounded-md w-full h-full flex justify-center items-center ${
            isDragActive ? "bg-gray-200" : "bg-gray-100"
          }`,
        })}
      >
        <input {...getInputProps()} />
        <Image src='/upload.svg' alt='upload-icon' width={100} height={100} />
      </div>
      {files.length > 0 && (
        <div className='flex'>
          <Image
            className='border border-gray-200 w-28 h-28 object-cover rounded-lg'
            src={files[0]?.preview}
            alt='preview'
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default Dropzone;
