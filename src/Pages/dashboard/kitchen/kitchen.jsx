import { Space, Table, Tag } from 'antd';
import kitchenReducer from '../../../reducers/kitchenReducer';
import * as kitchenActions from '../../../actions/kitchenActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';

function Kitchen( props) {
  const [blog , setBlog] = useState({name:''}) 
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [EditID, setEditID] = useState(undefined)

  const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
       
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <button onClick={ () => showModal(record.id)}>редактироват </button> 
              <button onClick={() => props.kitchenActions.deleteKitchen(record.id)}>Delete</button>
            </Space>
          ),
        },
      ];

      useEffect(() => {
        props.kitchenActions.getKitchen()
      },[])

      const data = props.kitchens

      

  const showModal = (id) => {
    if(id >= 0) {
      const kitchen = data.find(item => item.id == id)
      setBlog({name: kitchen.name})
      setEditID(id)
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (EditID) {
      props.kitchenActions.editKitchens({id:EditID, name:blog.name})
      console.log({id:EditID, name:blog.name})
    }else{
    props.kitchenActions.addKitchens(blog)
    
    }
    handleCancel()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setBlog({name:''})
  };

  const handlChange = (e) => {
    setBlog({...blog, [e.target.name]: e.target.value})
}


    return(
      <>
      <Button type="primary" onClick={showModal}>
      Open Modal
    </Button>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input value={blog.name} onChange={handlChange} name='name' placeholder='Name'/>
    </Modal>
   
        {props.isLoading  ? 'loading' : <Table columns={columns} dataSource={data}/>  }
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.kitchenReducer.isLoading,
    kitchens: state.kitchenReducer.kitchens
  })
  const mapDispatchToProps = (dispatch) => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);