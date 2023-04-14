import { useState } from 'react'
import { Tabs, Table, Button, Input, Space } from 'antd'
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons"
import { StateIcon } from './StateIcon'
const { TextArea } = Input

function InformationTabs(point) {
  const dataSource = [
    {
      key: 1,
      item: "Comunicación",
      state: point.shortName,
    },
    {
      key: 2,
      item: "Estado de controlador",
      state: point.controllerType,
    },
    {
      key: 3,
      item: "Falla de controlador",
      state: point.operative ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      ) : (
        <CloseCircleTwoTone twoToneColor="#eb2f96" />
      ),
    },
    {
      key: 4,
      item: "Suministro de energía",
      state: point.comunicative ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      ) : (
        <CloseCircleTwoTone twoToneColor="#eb2f96" />
      ),
    },
    {
      key: 5,
      item: "Mantenimiento",
      state: point.comunicative ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      ) : (
        <CloseCircleTwoTone twoToneColor="#eb2f96" />
      ),
    },
  ];

  const columns = [
    {
      title: "Elemento",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Descripción",
      dataIndex: "state",
      key: "state",
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "General",
          key: 2,
          children: (
            <>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </>
          ),
        },
        {
          label: "Comentarios",
          key: 3,
          children: (
            <>
              <TextArea
               rows={13}
               placeholder="Ingresa comentario del equipo"
               maxLength={400} 
              />
              <br/>
              <br/>
              <div className='space-align-block'>
                <Space wrap align="center">
                  <Button type="primary">Limpiar</Button>
                  <Button type="primary">Guardar</Button>
                </Space>
              </div>
            </>
          ),
        },
        {
          label: "Operaciones",
          key: 3,
          children: (
            <>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </>
          ),
        },
      ]}
    />
  );
}

export { InformationTabs }
