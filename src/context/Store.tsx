import React, { ReactChild, useContext, useState } from 'react'
import { IStore, IStoreContent } from '.'

const Store = React.createContext<Partial<IStore>>({})

interface Props {
  defaultValue: IStoreContent
  children: ReactChild
}

export const StoreProvider: React.FunctionComponent<Props> = ({
  defaultValue,
  ...props
}: Props) => {
  const [state, setState] = useState<Partial<IStore>>(defaultValue)

  function set<T, K extends keyof IStore>(key: K, value: T): void {
    setState((prevState) => {
      return {
        ...prevState,
        set,
        [key]: { ...prevState[key], ...value },
      }
    })
  }

  return <Store.Provider value={{ ...state, set }}>{props.children}</Store.Provider>
}

export const useStoreContext = () => {
  const cart = useContext(Store)
  if (!cart) {
    throw new Error('Missing StoreContextProvider in its parent.')
  }
  return cart
}

export function withContext<T>(Component: React.FunctionComponent<T>) {
  return function contextComponent(props: T) {
    return (
      <Store.Consumer>
        {(context: Partial<IStore>) => <Component {...props} context={context} />}
      </Store.Consumer>
    )
  }
}

export default Store
