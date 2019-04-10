const sysParam = {
    state: {
        // 木材种类，比如：原木、板材
        WOOD_VARIETY: [],
        // 植物品种，比如：松树、铁杉
        PLANT_VARIETY : []
    },
    mutations: {
        setWOOD_VARIETY(state, data) {
            state.WOOD_VARIETY = data;
        },
        setPLANT_VARIETY(state, data) {
            state.PLANT_VARIETY = data;
        }
    },
    actions: {
        getWoodList(context, oVm) {
            return oVm.$http({
              url: '/sysParam/findParamValues',
              method: 'POST',
              data: {keyName: 'WOOD_VARIETY'}
            }).then((res) => {
              if(res && res.data.success) {
                context.commit('setWOOD_VARIETY', res.data.module || {});
              }
            });
        },
        getPlantList(context, oVm) {
            return oVm.$http({
              url: '/sysParam/findParamValues',
              method: 'POST',
              data: {keyName: 'PLANT_VARIETY'}
            }).then((res) => {
              if(res && res.data.success) {
                context.commit('setPLANT_VARIETY', res.data.module || {});
              }
            });
        }
    }
};

export default sysParam;