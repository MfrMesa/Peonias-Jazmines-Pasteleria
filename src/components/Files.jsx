import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from "/src/style/Formulario.module.css"

export default function Files() {
    const [archivos, setArchivos] = useState([]); //archivos aceptados

    const onDrop = useCallback((newFiles) => {

      // concatena los nuevos archivos con los existentes
        setArchivos(prevFiles => [...prevFiles, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true }); // acepta múltiples archivos

    // muestra archivos 
    const files = archivos.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));



    return (
        <>
        <div {...getRootProps()} className={classes.textInput}>
            <input {...getInputProps()} />
            <p>Subir archivos</p>
            <img src="/src/img/chevron.svg" className={classes.chevron}/>
            
        </div>
        <aside>
            <ul className={classes.fileList}>
                <li>{files}</li>
            </ul>
        </aside>
        </>
    );
    }

