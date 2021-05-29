import React from 'react'

const AxiosLoader = (props) => {
    const {loading, error, children} = props
    const renderLoader = () => {
        if(loading){
            return <p>loading</p>
        }
    
        if(error){
            return <p>error</p>
        }

        return children

     }
    return (
        <div style={{border:'3px solid purple'}}
>
            {renderLoader()}
        </div>
    )
}

export default AxiosLoader
