import clsx from "clsx"
const GlassPane = ({children, className}) => {
    return <div className={(clsx('glass rounded-2xl broder-2xl broder-solid border-2 border-gray-200', className))}>
        {children}
    </div>
}

export default GlassPane