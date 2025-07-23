
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "pinia": async () => {
          let pkg = await import("__mf__virtual/base__prebuild__pinia__prebuild__.js")
          return pkg
        }
      ,
        "vue-router": async () => {
          let pkg = await import("__mf__virtual/base__prebuild__vue_mf_2_router__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "pinia": {
            name: "pinia",
            version: "2.3.0",
            scope: ["default"],
            loaded: false,
            from: "base",
            async get () {
              usedShared["pinia"].loaded = true
              const {"pinia": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.3.0"
            }
          }
        ,
          "vue-router": {
            name: "vue-router",
            version: "4.4.5",
            scope: ["default"],
            loaded: false,
            from: "base",
            async get () {
              usedShared["vue-router"].loaded = true
              const {"vue-router": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^4.4.5"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      