import { Button, Space, Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as kitchenActions from '../../actions/kitchenActions'
import {useEffect} from 'react'

function Kitchen(props) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Edit {record.name}</a>
              <Button onClick={() => props.kitchenActions.deleteKitchen(record.id)}>Delete</Button>
            </Space>
          ),
        },
    ];

    useEffect(() => {
        props.kitchenActions.getKitchens()
    }, [])
    
    const data = props.kitchens
     
    return(
        <>{props.isLoading ? <h1 style={{fontSize: '72px'}}>Loading</h1> : <Table columns={columns} dataSource={data}/>}</>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.kitchenReducer.isLoading,
    kitchens: state.kitchenReducer.kitchens,
})

const mapDispatchToProps = (dispatch) => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Kitchen)