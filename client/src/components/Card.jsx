import { cn } from '../lib/utils'

const Card = ({className,children}) => {
  return (
    <div className={cn("bg-white border border-gray-200 border-solid rounded-xl p-12 flex-grow",className)}>
        {children}
    </div>
  )
}

export default Card