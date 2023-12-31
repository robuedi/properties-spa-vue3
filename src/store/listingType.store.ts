import { defineStore } from 'pinia';
import ListingType from  "@/models/ListingType";
import {IListingType} from '@/types/database'

export const useListingTypeStore = defineStore("listingType",{
    state: () => ({
        listingTypes_: [] as IListingType[],
        apiState: ListingType.state.INITIAL as keyof typeof ListingType.state
    }),
    getters: {
        listingTypes: (state) => state.listingTypes_,
        rentItem: (state) => state.listingTypes_.find(item => item.name.toLowerCase() === 'rent'),
        sellItem: (state) => state.listingTypes_.find(item => item.name.toLowerCase() === 'sell')
    },
    actions: {
        async getAll(listingType = ListingType.select('id','name')) {
            this.apiState = ListingType.state.LOADING
            return new Promise((resolve, reject)=>{
                listingType
                .getPagination<IListingType>()
                .then((response)=>{
                    this.listingTypes_ = response.data
                    this.apiState = ListingType.state.LOADED
                    resolve(response)
                })
                .catch((err)=>{
                    this.listingTypes_ = []
                    this.apiState = ListingType.state.ERROR
                    reject(err)
                })
            })
        },
    }
});





