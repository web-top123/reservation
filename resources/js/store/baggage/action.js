import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    initBaggages(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/baggages")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_BAGAGGES, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
};

export default actions;