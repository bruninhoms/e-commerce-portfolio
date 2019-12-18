import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem  from '../collection-item/collection-item.component.jsx';

import {
    CollectionPreviewContainer,
    Title,
    Preview
} from './collection-preview.styles.jsx';

const CollectionPreview = ({ title, items, match, history }) => (
    <CollectionPreviewContainer>
            <Title onClick={() => { history.push(`${match.url}/${title}`.toLowerCase())}}> {title.toUpperCase()} </Title>
        <Preview>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </Preview>
    </CollectionPreviewContainer>
);



export default withRouter(CollectionPreview);