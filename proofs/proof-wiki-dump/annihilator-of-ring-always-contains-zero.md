theorem Ring_Annihilator_Contains_Zero() {
  let R := Ring(+, ×)
  let Ann(R) := {x ∈ R | ∀r ∈ R: x × r = 0_R}
  assert(
    0 ∈ Ann(R)
  )
} ↔

proof Ring_Annihilator_Contains_Zero() {
  setDef(integral_multiple) →
  assert(∀r ∈ R: 0 × r = 0_R) →
  setDef(annihilator) →
  assert(∀r ∈ R: 0 × r = 0_R ⇒ 0 ∈ Ann(R)) →
  conclude(0 ∈ Ann(R))
}