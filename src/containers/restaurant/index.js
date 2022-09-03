
import { Button, Space, Table, Input, Modal, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {useEffect, useState} from 'react'
import * as resActions from '../../actions/restaurantActions'
import * as kitchenActions from "../../actions/kitchenActions"
const { Option } = Select;

function Restaurant(props) {
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
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (_, record) => <img width={100} height={100} src={`http://185.125.46.93:9000/${record.image}`}/>
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {/* <Button onClick={() => showModal(record.id)}>Edit {record.name}</Button>
              <Button onClick={() => props.kitchenActions.deleteKitchen(record.id)}>Delete</Button> */}
            </Space>
          ),
        },
    ];

    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [formData, setFormData] = useState({})

    const handleOk = () => {
        console.log(formData)
        props.resActions.addRestaurant(formData)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    useEffect(() => {
        props.kitchenActions.getKitchens()
    }, [])
 
    useEffect(() => {
        props.resActions.getRestaurants({query, page})
    }, [page, query])

    const onPageChange = data => {
        setPage(data)
    }

    console.log(props.isAuth)

    const onSearch = e => {
        setQuery(e.target.value)
    }

    const openModal = () => {
        setIsModalVisible(true)
    }

    const handleSelectChange = value => {
       setFormData({...formData, kitchens: JSON.stringify(value)}) 
    }

    const uploadImage = options => {
        // setImage(options.file)
        setFormData({...formData, image: options.file})
    }

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const data = props.restaurants
    const kitchenOptions = props.kitchens.map(item => <Option value={item.id} key={item.id}>{item.name}</Option>)

    return(
        <>
            <Button onClick={openModal}>Add restaurant</Button>
            <Input onChange={onSearch}/>
            {props.isLoading ? <h1 style={{fontSize: '72px'}}>Loading</h1> : 
            <Table pagination={{total: props.total, pageSize: 5, onChange: onPageChange, current: page}} columns={columns} dataSource={data}/>}
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={onChange} name="name" placeholder='Name'/>
                <Input onChange={onChange} name="location" placeholder='Location'/>
                <Input onChange={onChange} name="phone" placeholder='Phone'/>
                <Input onChange={onChange} name="amountOfPlace" placeholder='Amount of place'/>
                <Input onChange={onChange} name="averageBill" placeholder='Average bill'/>
                <Input onChange={onChange} name="rate" placeholder='Rate'/>
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select"
                    onChange={handleSelectChange}
                    >
                    {kitchenOptions}
                </Select>
                <Upload customRequest={uploadImage}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.resReducer.isLoading,
    restaurants: state.resReducer.restaurants,
    total: state.resReducer.total,
    kitchens: state.kitchenReducer.kitchens,
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = (dispatch) => ({
    resActions: bindActionCreators(resActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)