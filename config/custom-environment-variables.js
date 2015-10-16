module.exports = {
 "DB": {
    "Type":"SYS_DATABASE_TYPE",
    "User":"SYS_DATABASE_POSTGRES_USER",
    "Password":"SYS_DATABASE_POSTGRES_PASSWORD",
    "Port":"SYS_SQL_PORT",
    "Host":"SYS_DATABASE_HOST",
    "Database":"SYS_DATABASE_POSTGRES_USER"
  },
    "Host":
    {
        "domain": "HOST_NAME",
        "port": "HOST_VOXBONEAPI_PORT",
        "version": "HOST_VERSION",
        "hostpath":"HOST_PATH",
        "logfilepath": "LOG4JS_CONFIG"
    },
    "Services": {

        "limitServiceHost": "SYS_LIMITHANDLER_HOST",
        "limitServicePort": "SYS_LIMITHANDLER_PORT",
        "limitServiceVersion": "SYS_LIMITHANDLER_VERSION",
        "trunkServiceHost": "SYS_PHONENUMBERSERVICE_HOST",
        "trunkServicePort": "SYS_PHONENUMBERSERVICE_PORT",
        "trunkServiceVersion": "SYS_PHONENUMBERSERVICE_VERSION",
        "voxboneUrl":"VOXBONE_URL",
    }

};

