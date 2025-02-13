import { useState } from "react";

export const FileUploadComponent = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setFiles(filesArray);
        }
    };

    const handleRemoveFile = (index: number) => {
        const filesTemp = [...files];
        setFiles(filesTemp.filter((_file, i) => i === index));
    };
    return (
        <div>
            <input
                multiple
                type="file"
                name="upload file"
                id="file-upload"
                onChange={handleFileUpload}
            />

            <div
                style={{
                    marginTop: "8px",
                }}
            >
                {files.map((file, index) => {
                    return (
                        <div
                            style={{
                                gap: "8px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <button
                                onClick={() => {
                                    handleRemoveFile(index);
                                }}
                            >
                                ❌
                            </button>
                            <button
                                onClick={() => {
                                    window.open(URL.createObjectURL(file));
                                }}
                            >
                                👁️
                            </button>
                            <span>{file.name}</span>
                            <span>{(file.size / 1024).toFixed(2)}KB</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
