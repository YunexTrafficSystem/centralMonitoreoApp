import { CheckCircleTwoTone, CloseCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'


function StateIcon({ state }) {
  return (
    state == 'operative' ? <CheckCircleTwoTone twoToneColor="#99d41a" /> :
    state == 'warning' ? <ExclamationCircleTwoTone twoToneColor="#FFC60A" /> : <CloseCircleTwoTone twoToneColor="#eb2f96" />
  )
}

export { StateIcon }