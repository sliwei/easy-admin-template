import React, { useState } from 'react';
import {connect} from 'dva';
import {Button} from 'antd'


const Sales = (props: any) => {
  const [sta] = useState(0)
  console.log(props);
  const {dispatch, addAfter1SecondLoading} = props

  const addAfter1Second = () => {
    dispatch({
      type: 'count/addAfter1Second',
      payload: 'HHH'
    })
  }

  return <div>
    {sta}
    <Button loading={addAfter1SecondLoading} onClick={addAfter1Second}>Change</Button>
    AAA
    {props.count.txt}
  </div>
};

export default connect(({count, count1, loading}: {count: any, loading: any}) => ({
  count: count,
  count1: count1,
  addAfter1SecondLoading: loading.effects['count/addAfter1Second']
}))(Sales)

