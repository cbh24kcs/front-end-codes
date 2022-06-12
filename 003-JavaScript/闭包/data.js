[
  {
    id: 1,
    name: "系统管理",
    parentId: null,
    children: [
      {
        id: 2,
        name: "用户管理",
        parentId: 1,
        children: [
          { id: 7, name: "新增用户", parentId: 2, children: [] },
          { id: 8, name: "修改用户", parentId: 2, children: [] },
          { id: 9, name: "删除用户", parentId: 2, children: [] },
        ],
      },
      { id: 3, name: "角色管理", parentId: 1, children: [] },
    ],
  },
  {
    id: 4,
    name: "订单管理",
    parentId: null,
    children: [
      { id: 5, name: "出库管理", parentId: 4, children: [] },
      { id: 6, name: "入库管理", parentId: 4, children: [] },
    ],
  },
];
