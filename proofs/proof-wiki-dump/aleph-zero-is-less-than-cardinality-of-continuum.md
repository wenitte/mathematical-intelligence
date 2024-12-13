theorem Aleph_Zero_Less_Than_Continuum() {
  assert(
    ℕ ∈ Sets ∧ ℵ₀ ∈ Cardinals ∧ 𝔠 ∈ Cardinals ⇒ 
    (ℵ₀ < 𝔠)
  )
} ↔

proof Aleph_Zero_Less_Than_Continuum() {
  lemma Continuum_Equals_Powerset_Naturals() {
    assert(𝔠 = |𝒫(ℕ)|)
  } →
  
  lemma Set_Less_Than_Powerset() {
    assert(∀S ∈ Sets ⇒ |S| < |𝒫(S)|)
  } →
  
  lemma Aleph_Zero_Equals_Naturals() {
    assert(ℵ₀ = |ℕ|)
  } →
  
  apply(Continuum_Equals_Powerset_Naturals()) →
  apply(Set_Less_Than_Powerset()) →
  assert(|ℕ| < |𝒫(ℕ)|) →
  apply(Aleph_Zero_Equals_Naturals()) →
  substitute(ℵ₀ = |ℕ| ∧ 𝔠 = |𝒫(ℕ)|) →
  conclude(ℵ₀ < 𝔠)
}