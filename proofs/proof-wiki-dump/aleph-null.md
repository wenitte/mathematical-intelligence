theorem Aleph_Null_Is_Omega() {
  assert(
    ω = ℵ₀
  )
} ↔

proof Aleph_Null_Is_Omega() {
  lemma Omega_Not_In_InfCard() {
    setVar(n: ω) →
    assert(n ∉ 𝕀) // 𝕀 denotes infinite cardinals
  } →
  
  apply(Omega_Not_In_InfCard()) →
  assert(ω ≤ ℵ₀) →
  
  lemma Omega_Is_Infinite() {
    apply(Minimally_Inductive_Set_Is_Infinite_Cardinal) →
    assert(ω ∈ 𝕀)
  } →
  
  apply(Omega_Is_Infinite()) →
  assert(∃x: Ord | ℵₓ = ω) →
  
  lemma Aleph_Ordering() {
    assert(0 ≤ x) →
    apply(Aleph_Mapping_Properties) →
    assert(ℵ₀ ≤ ℵₓ) →
    assert(ℵ₀ ≤ ω)
  } →
  
  apply(Aleph_Ordering()) ∧
  apply(ω ≤ ℵ₀) →
  assert(ω = ℵ₀)
}