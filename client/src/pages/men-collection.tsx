import { StorePage } from '../components/store-page/store-page'
import { useGetProducts } from '../hooks/useGetProducts'

export const MenCollection = () => {

  const { menData, isMenDataLoading, isMenDataError } = useGetProducts()

  if (isMenDataLoading) {
    return <h1>Loading...</h1>
  }

  if(isMenDataError || !menData) {
    return <h1>error</h1>
  }

  return (
    <div>
      <StorePage items={menData}/>
    </div>
  )
}