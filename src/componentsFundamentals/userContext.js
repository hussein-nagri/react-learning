import React from 'react'


const userContext = React.createContext('default value if nothing provided goes here');

const userProvider = userContext.Provider;

const userConsumer = userContext.Consumer;

export { userConsumer, userProvider }