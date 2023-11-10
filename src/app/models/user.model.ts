import { UploadResult } from "firebase/storage";

export interface User {
    uid: string;
    email: string;
    password: string;
    name: string;
    imagen: string | UploadResult
    rol: string;
}