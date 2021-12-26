import { CommonApiDataEndpoints } from '../models/endpoints.model';
export class HttpRoutesConstants {


  public _heyloListEndPoints: { [key in string]: CommonApiDataEndpoints } = {
    // byDistrict: {
    //   endpoint: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict",
    //   queryParams: [{ name: 'district_id', values: [""] }, { name: 'date', values: [""] }]
    // },
    dashboardGetListStatus: {
      endpoint: "api/v1/getListStatus",
      queryParams: []
    },
    commonGetCategoriesList: {
      endpoint: "api/v1/getCategoriesList",
      queryParams: []
    },
    listGetPendingList: {
      endpoint: "api/v1/getPendingList",
      queryParams: []
    },
    updateListItem: {
      endpoint: "api/v1/updateListItem",
      queryParams: []
    },
    getAllListItems: {
      endpoint: "api/v1/getAllListItems",
      queryParams: []
    },
  }
}
