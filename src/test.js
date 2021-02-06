function createData(
  tankName,
  m,
  type,
  nation,
  tier,
  averageDamage,
  averageXp,
  battles,
  victories,
  maxKills,
  maxXp
) {
  return {
    tankName,
    m,
    type,
    nation,
    tier,
    averageDamage,
    averageXp,
    battles,
    victories,
    maxKills,
    maxXp,
  }
}

const rows = playerVehiclesStats.forEach((singleVehicle) => {
  createData(
    allVehicles[singleVehicle.tank_id].name,
    singleVehicle.mark_of_mastery,
    allVehicles[singleVehicle.tank_id].type,
    allVehicles[singleVehicle.tank_id].nation,
    allVehicles[singleVehicle.tank_id].tier,
    (singleVehicle.all.damage_dealt / singleVehicle.all.battles).toFixed(2),
    (singleVehicle.all.xp / singleVehicle.all.battles).toFixed(),
    singleVehicle.all.battles,
    ((singleVehicle.all.wins / singleVehicle.all.battles) * 100).toFixed(2),
    singleVehicle.max_frags,
    singleVehicle.max_xp
  )
})
