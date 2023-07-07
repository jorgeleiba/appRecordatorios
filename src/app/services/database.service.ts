import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }


  async create(collection: string, data: any) {
    try {
      return await this.firestore.collection(collection).add(data);
    }
    catch (error) {
      console.log("error en create: ", error);
      return error;
    }
  }

  async getAll(collection: string) {
    try {
      return this.firestore.collection(collection).snapshotChanges()
    }
    catch (error) {
      console.log("error en getAll: ", error)
      return error;
    }
  }

  async getById(collection: string, id: string) {
    try {
      return this.firestore.collection(collection).doc(id).get();
    }
    catch (error) {
      console.log("error en getById: ", error);
      return error;
    }
  }

  async delete(collection: string, id: string) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    }
    catch (error) {
      console.log("error en delete: ", error)
    }
  }

  async update(collection: string, id: string, data: any) {
    try {
      return await this.firestore.collection(collection).doc(id).set(data);
    }
    catch (error) {
      console.log("error en update: ", error)
    }
  }
}