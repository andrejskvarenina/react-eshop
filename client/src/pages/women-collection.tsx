import { StorePage } from '../components/store-page/store-page'
import { useGetProducts } from '../hooks/useGetProducts'

export const WomenCollection = () => {

  const { womenData, isWomenDataLoading, isWomenDataError } = useGetProducts()
  
  if (isWomenDataLoading) {
    return <h1>Loading...</h1>
  }

  if(isWomenDataError || !womenData) {
    return <h1>error</h1>
  }

  return (
    <div>
      <StorePage items={womenData}/>
    </div>
  )
}