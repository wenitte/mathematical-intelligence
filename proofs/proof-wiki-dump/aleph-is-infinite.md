theorem Aleph_Is_Infinite() {
  assert(
    ∀x ∈ Ord ⇒ (ℵ_x ≥ ω)
  )
} ↔

proof Aleph_Is_Infinite() {
  setVar(x: Ord) →
  assert(0 ≤ x) →
  apply(Aleph_Monotone_Property(0, x)) →
  assert(ℵ_0 ≤ ℵ_x) →
  lemma Aleph_Null() {
    assert(ℵ_0 = ω)
  } →
  apply(Aleph_Null()) →
  substitute(ℵ_0, ω) →
  assert(ω ≤ ℵ_x)
}