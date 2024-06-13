import Conf from "../config/conf";
import { Client,ID,Storage,Databases,Query } from "appwrite";

class Service{
    client = new Client();
    Databases
    bucket

    constructor(){
        this.client.setEndpoint(Conf.appwriteurl)
        .setProject(Conf.appwriteProjectId);
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
         return await this.Databases.createDocument(Conf.appwriteDatabaseId,Conf.appwriteCollectionId,slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId

            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status})
    {
        try {
            return await this.Databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost({slug}){
        try {
            await this.Databases.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            throw error
            return false
        }

    }

    async getPost({slug}){
        try {
           return await this.Databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            
            
        } catch (error) {
            throw error
            return false
        }

    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
           return await this.Databases.listDocuments(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )       
            
        } catch (error) {
            throw error
            return false
        }

    }

    // file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                Conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();
export default service;