const showType = (type) => {
  if (type === 'heavyTank') {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankicons/heavytank.jpg'}
        alt='heavyTank'
      />
    )
  }
  if (type === 'mediumTank') {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankicons/medium.jpg'}
        alt='medium'
      />
    )
  }
  if (type === 'SPG') {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankicons/spg.jpg'}
        alt='spg'
      />
    )
  }
  if (type === 'lightTank') {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankicons/light.jpg'}
        alt='light'
      />
    )
  }
  if (type === 'AT-SPG') {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankicons/tankdestroyer.jpg'}
        alt='tankdestroyer'
      />
    )
  }
}
const showNation = (nation) => {
  if (nation === 'czech') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/ceczh.jpg'}
        alt='czech'
      />
    )
  }
  if (nation === 'usa') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/usa.jpg'}
        alt='usa'
      />
    )
  }
  if (nation === 'germany') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/germany.jpg'}
        alt='germany'
      />
    )
  }
  if (nation === 'france') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/france.jpg'}
        alt='france'
      />
    )
  }
  if (nation === 'uk') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/britan.jpg'}
        alt='britan'
      />
    )
  }
  if (nation === 'japan') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/japan.jpg'}
        alt='japan'
      />
    )
  }
  if (nation === 'italy') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/italy.jpg'}
        alt='italy'
      />
    )
  }
  if (nation === 'ussr') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/ussr.jpg'}
        alt='ussr'
      />
    )
  }
  if (nation === 'poland') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/poland.jpg'}
        alt='poland'
      />
    )
  }
  if (nation === 'sweden') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/sweden.jpg'}
        alt='sweden'
      />
    )
  }
  if (nation === 'china') {
    return (
      <img
        className='nation__img'
        src={process.env.PUBLIC_URL + '/tankNation/china.jpg'}
        alt='china'
      />
    )
  }
}
const showMastery = (m) => {
  if (m === 1) {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankMastery/thirdClass.jpg'}
        alt='thirdClass'
      />
    )
  }
  if (m === 2) {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankMastery/secondClass.jpg'}
        alt='secondClass'
      />
    )
  }
  if (m === 3) {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankMastery/firstClass.jpg'}
        alt='firstClass'
      />
    )
  }
  if (m === 4) {
    return (
      <img
        className='type__img'
        src={process.env.PUBLIC_URL + '/tankMastery/master.jpg'}
        alt='master'
      />
    )
  }
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}
export {
  descendingComparator,
  getComparator,
  stableSort,
  showType,
  showNation,
  showMastery,
}
