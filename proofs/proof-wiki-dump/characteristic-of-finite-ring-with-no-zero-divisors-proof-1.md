theorem Ring_Characteristic_Properties() {
  let R: Ring(finite, has_unity, no_zero_divisors) →
  let 0_R: zero_element(R) →
  let 1_R: unity_element(R) →
  let n: characteristic(R) →
  assert(n ≠ 0) →
  assert(
    (n ∈ Prime) ∧
    (∀x ∈ R: x ≠ 0_R ⇒ order(x) = n) ∧
    (R.additive_group ≅ C_n)
  )
}

proof Ring_Characteristic_Properties() {
  apply(Subring_Generated_By_Unity_Theorem(R)) →
  setVar(S: subring(R)) →
  assert(S = ⟨1_R⟩) →
  lemma Unity_Generated_Properties() {
    assert(
      (S ≅ ℤ_n) ∧
      (n ∈ Prime) ∧
      (∀x ∈ S: x ≠ 0_R ⇒ order(x) = n)
    )
  } →
  apply(Unity_Generated_Properties()) →
  assert(S ⊆ R) →
  assert(R.additive_group ≅ C_n)
}