theorem Ring_Characteristic_NonZero() {
  let R: Ring
  assert(
    (isFinite(R) ∧ hasUnity(R)) →
    characteristic(R) ≠ 0
  )
} ↔

proof Ring_Characteristic_NonZero() {
  setVar(R: Ring) →
  assert(isFinite(R)) →
  assert(isFinite(⟨R,+⟩)) →
  
  lemma Finite_Group_Element_Order() {
    assert(
      ∀G: Group, x ∈ G →
      (isFinite(G) → ∃n ∈ ℕ⁺: order(x) = n)
    )
  } →
  
  apply(Finite_Group_Element_Order()) →
  assert(∃n ∈ ℕ⁺: order(1_R) = n) →
  assert(characteristic(R) = order(1_R)) →
  conclude(characteristic(R) ≠ 0)
}