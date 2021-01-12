import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom';

const Topic = (): ReactElement => {
    let {topicId} = useParams<{topicId?: string}>();
    return <h3>Requested topic ID:{topicId}</h3>;
  }

export default Topic
