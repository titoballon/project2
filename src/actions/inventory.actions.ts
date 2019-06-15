import * as types from './all.type.actions';
import { InventoryService } from '../services/inventoryService';
import { IStateInventory } from '../reducers/globalState.models.';


export const deleteInventoryAction = (id:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.Delete(id);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id
                },
                type:types.DELETE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const updateInventoryAction = (id:number,inventory:IStateInventory) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.Update(id,inventory);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id,
                    inventory
                },
                type:types.UPDATE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const createInventoryAction = (inventory:IStateInventory) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.Create(inventory);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    inventory
                },
                type:types.CREATE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const getInventoriesByUserAction = (userId:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.getInventoriesByUserID(userId);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            const inventories:IStateInventory[] = response.data
            dispatch({
                payload:{
                    response : inventories 
                },
                type:types.SET_INVENTORIES
            })
            //history.push('/myinventories')
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};