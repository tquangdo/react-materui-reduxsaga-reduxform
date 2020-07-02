const modalCompStyles = xxx => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: xxx.palette.background.paper
    },
    header: {
        backgroundColor: 'red',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        cursor: 'pointer',
        fontSize: 33,
    }
})

export default modalCompStyles