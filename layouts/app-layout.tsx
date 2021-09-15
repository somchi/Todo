const AppLayout=({children})=>{
    return(
        <div className='container'>
            {children}
            <style>{`
                .container{
                    display: flex;
                    height: 100vh;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default AppLayout