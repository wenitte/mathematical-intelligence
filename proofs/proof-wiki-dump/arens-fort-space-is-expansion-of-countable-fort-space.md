theorem Arens_Fort_Space_Expansion() {
  let(S = ℤ_≥0 × ℤ_≥0)
  let(T = ⟨S,τ⟩)
  let(T_p = ⟨S,τ_p⟩)
  let(p = ⟨0,0⟩)
  assert(
    (T is_ArensFort_space ∧ T_p is_Fort_space_at p) →
    (τ is_expansion_of τ_p ∧ S is_countably_infinite)
  )
} ↔

proof Arens_Fort_Space_Expansion() {
  setVar(H ∈ τ_p) →
  assert(
    (p ∈ S∖H) ∨ (S∖H is_finite)
  ) →
  
  case(p ∈ S∖H) {
    assert(p ∉ H) →
    apply(ArensFort_definition) →
    assert(H ∈ τ)
  } →
  
  case(S∖H is_finite) {
    setVar(S_m = {n: ⟨m,n⟩ ∉ H}) →
    assert(∀m ∈ ℤ_≥0 → S_m is_finite) →
    assert(|{m: S_m is_infinite}| = 0) →
    apply(ArensFort_definition) →
    assert(H ∈ τ)
  } →
  
  assert(∀H ∈ τ_p → H ∈ τ) →
  assert(τ_p ⊆ τ) →
  apply(expansion_definition) →
  assert(τ is_expansion_of τ_p) →
  
  lemma Space_Cardinality() {
    apply(Arens_Fort_Space_is_Countable) →
    assert(S is_countably_infinite)
  } →
  
  apply(Space_Cardinality())
}