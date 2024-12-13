theorem PowerSet_Naturals_Equals_Reals() {
  assert(
    |𝒫(ℕ)| = |ℝ|
  )
} ↔

proof PowerSet_Naturals_Equals_Reals() {
  lemma PowerSet_Has_Continuum_Card() {
    assert(|𝒫(ℕ)| = 𝔠)
  } →
  lemma Reals_Have_Continuum_Card() {
    assert(|ℝ| = 𝔠)
  } →
  apply(PowerSet_Has_Continuum_Card()) ∧
  apply(Reals_Have_Continuum_Card()) →
  assert(|𝒫(ℕ)| = 𝔠 = |ℝ|) →
  assert(|𝒫(ℕ)| = |ℝ|)
}