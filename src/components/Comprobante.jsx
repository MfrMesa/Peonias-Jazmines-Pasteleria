import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from "/src/style/PagoTransferencia.module.css"



export default function Comprobante() {

    const [archivo, setArchivo] = useState([]); //archivos aceptados

    const onDrop = useCallback((newFiles) => {

      // concatena los nuevos archivos con los existentes
        setArchivo(prevFiles => [...prevFiles, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false }); // acepta múltiples archivos

    // muestra archivos 
    const files = archivo.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));



    return (
        <>
        <div {...getRootProps()} className={classes.textInput}>
            <input {...getInputProps()}/>
            <p>Subir comprobante de pago</p>
            <img src="/src/img/chevron.svg" className={classes.chevron}/>
        </div>
        <aside>
            <ul className={classes.inputs}>
                <li>{files}</li>
            </ul>
        </aside>
        </>
    );
    }

