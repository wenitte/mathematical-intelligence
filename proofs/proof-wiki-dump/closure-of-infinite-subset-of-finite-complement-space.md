theorem Closure_Infinite_Subset_Finite_Complement() {
  assert(
    ∀T(IsFiniteComplementSpace(T) ∧
    T = ⟨S,τ⟩ ∧
    ∀H ⊆ S(IsInfinite(H))) →
    H⁻ = S
  )
} ↔

proof Closure_Infinite_Subset_Finite_Complement() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(H: Set) →
  assert(H ⊆ S) →
  assert(IsInfinite(H)) →
  
  lemma LimitPoints() {
    assert(IsInfinite(H) → 
    ∀x ∈ S(IsLimitPoint(x,H)))
  } →
  
  apply(LimitPoints()) →
  
  lemma ClosureDefinition() {
    assert(H⁻ = H ∪ {x ∈ S: IsLimitPoint(x,H)})
  } →
  
  apply(ClosureDefinition()) →
  
  assert(∀x ∈ S(IsLimitPoint(x,H))) →
  assert(H⁻ = S)
}