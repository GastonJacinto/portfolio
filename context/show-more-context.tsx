import React from 'react'

type ShowMoreProviderProps = {
  children: React.ReactNode;
};
export default function ShowMoreContextProvider() {
  const [showMore, setShowMore] = React.useState(false)
  const toggleShowMore=()=>{
    setShowMore(!showMore)
  }
  return (
    <div>ShowMore</div>
  )
}
