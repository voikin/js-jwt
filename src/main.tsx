import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Store from './store/store'

interface IStore {
	store: Store
}

const store = new Store()

export const Context = createContext<IStore>({
	store,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Context.Provider value={{ store }}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Context.Provider>
)
