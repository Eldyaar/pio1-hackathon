import { ConfigProvider } from "antd"
import { FunctionComponent, ReactNode } from "react"

const AntdConfigProvider = ({children}: {children: ReactNode}): JSX.Element => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // colorPrimary: '#00b96b',
                    // borderRadius: 2,
                    // colorBgContainer: '#fff',  
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export const withAntdConfigProvider = <T extends Record<string, unknown>>(Component:FunctionComponent<T>) => {
    return function withAntdConfigProviderComponent(props: T): JSX.Element {
        return (
            <AntdConfigProvider>
                <Component {...props}/>
            </AntdConfigProvider>
        )
    }
}