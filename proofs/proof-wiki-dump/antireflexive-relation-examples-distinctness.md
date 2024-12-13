theorem Antireflexive_Distinctness_Relation() {
  let(S: Set) ∧
  let(R: Relation(S)) ∧
  assert(
    ∀x,y ∈ S: xRy ↔ x ≠ y
  ) →
  assert(
    isAntireflexive(R)
  )
}

proof Antireflexive_Distinctness_Relation() {
  setVar(x: Element(S)) →
  assert(
    ¬(x ≠ x)
  ) →
  assert(
    ¬(xRx)
  ) →
  apply(Definition_Antireflexive()) →
  assert(
    ∀x ∈ S: ¬(xRx)
  ) →
  conclude(isAntireflexive(R))
}