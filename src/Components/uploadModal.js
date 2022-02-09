import Modal from 'react-modal'
import {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone';
import Image from 'next/image'

Modal.setAppElement('#__next')  

export default function UploadModal() {
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState('')
    const [alias, setAlias] = useState('')
    
    function openModal() {
        setIsModalOpen(true);
      }


      function closeModal() {
        setIsModalOpen(false);
      }

    //   function encode(data) {
    //     const formData = new FormData();
    //     Object.keys(data).forEach((key) => formData.set(key, data[key]));
    //     return formData;
    // }
    
      function submitInfo(e) {
       
            e.preventDefault()
            // const formdata = new FormData();
            // formdata.append("data", '{"description": "Hello from Postman"}');
            // formdata.append("files.file", files[0], "");
  
            
            fetch(`${API_URL}/photos`, {
              method: "POST",
              headers: {"Content-Type": "application/form-data"},
              body: {
                   file: files[0],
      
                  data: JSON.stringify({name: {name}, alias: {alias}}),
              },
            });
        }
// console.log(submitInfo.name)
    return (
        <>
            <button 
                onClick={openModal}
                className="bg-white lg:mr-40 px-2 text-gray-700 rounded-full focus:outline-none focus:bg-green-700"
            > Upload Card
            </button>
            
            
            <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Upload info Modal"
            className="absolute inset-0 bg-white border-gray-100 shadow-2xl m-8 p-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
       
        <button onClick={closeModal} className="absolute top-1 right-10">close</button>
        <div className="flex flex-col h-full">
            <h2 className="flex-shrink text-4xl font-bold mb-2">Upload your card info here</h2>
        <form >
            <div className="grid-cols-4">
                <input type="name" 
                    onChange={(e) => setName(e.target.value)} 
                    className='mb-2 italic' placeholder="name"/>
                
                <input type="alias" 
                    onChange={(e) => setAlias(e.target.value)}
                        className='mb-2 italic'placeholder="Alias"/>
                
                {/* <input type="origin" value={origin} 
                        className='mb-2 italic' placeholder="Origin"/>
                
                <input type="reign" value={reign} 
                        className='mb-2 italic' placeholder="Reign"/>
                
                <input type="power" value={power} 
                        className='mb-2 italic' placeholder="Power"/> */}
                
                {/* <input type="type" // value={name} 
                         className='mb-2 italic' placeholder="Type"/> */}
            </div>
          
          <UploadDropzone />
        </form>
        </div>
        <button onSubmit={submitInfo} type="submit" className="bg-blue-500 text-white rounded-lg w-36 py-2 px-4">Submit</button>
      </Modal>
        
        </>
    )
}


function UploadDropzone(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop(acceptedFiles) {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
        
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);
      
    //   console.log(files)
        return (
          <>
            <div {...getRootProps({className: 'relative flex-1 flex items-center justify-center border-4 border-gray-400 rounded-lg text-center cursor-pointer bg-gray-100 text-gray-600 hover:bg-blue-300 hover:border-blue-400 hover:text-blue-700 transition duration-200'})}>
              <input {...getInputProps()} />
              <p>Drag & drop some files here, or click to select files</p>
                <div className="absolute right-3 bottom-13 ">
                {files.map((file, index) => (
                <Image src={file.preview} key={index} alt={file.name}
                className="w-24 rounded-lg shadow-2xl"/>
               
              ))}
             
                </div>
            
            </div>
            
          </>
        );
      }
