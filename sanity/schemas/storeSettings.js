import { MdStore as icon } from 'react-icons/md';

export default {
    // Computer Name
    name: 'storeSettings',
    // visible title
    title: 'Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: '商店名称',
            type: 'string',
            description: '指定商店的名称',
        },
        {
            name: 'slicemaster',
            title: '正在工作的大厨',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }],
        },
        {
            name: 'hotSlices',
            title: '当季热销披萨',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
        },
    ],
};
