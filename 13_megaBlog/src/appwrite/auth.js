import { Account ,Client,ID} from "appwrite";
import Conf from "../config/conf";

export class AuthService {
    client = new Client()
    account

    constructor(){
        this.client.setEndpoint(Conf.appwriteurl)
        .setProject(Conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(account){
                //call another mehtod
                return this.login({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            throw error
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
    

}
const authService = new AuthService();
export default authService