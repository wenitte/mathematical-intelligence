theorem Set_S1_Cardinality() {
  assert(
    let S₁ = {-1, 0, 1} →
    |S₁| = 3
  )
}

proof Set_S1_Cardinality() {
  defineSet(S₁ = {-1, 0, 1}) →
  countElements(S₁) {
    distinct_elements = {-1, 0, 1}
    count = 3
  } →
  applyDef(Cardinality) {
    |S₁| = count_of_distinct_elements(S₁)
  } →
  conclude(|S₁| = 3)
}