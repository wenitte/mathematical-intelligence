theorem Closure_Open_Set_Closed_Extension() {
  let(T = ⟨S,τ⟩: TopologicalSpace)
  let(T*_p = ⟨S*_p,τ*_p⟩: ClosedExtensionSpace(T))
  assert(
    ∀U ∈ τ*_p → U⁻ = S*_p
  )
} ↔

proof Closure_Open_Set_Closed_Extension() {
  setVar(U: τ*_p) →
  assert(∀U ∈ τ*_p, U ≠ ∅ → p ∈ U) →
  
  lemma Limit_Points() {
    assert(∀x ∈ S*_p → x ∈ LimitPoints(p))
  } →
  
  apply(Limit_Points()) →
  
  lemma Closure_Definition() {
    assert(U⁻ = U ∪ LimitPoints(U))
  } →
  
  apply(Closure_Definition()) →
  
  assert(∀x ∈ S*_p → x ∈ LimitPoints(U)) →
  assert(∀x ∈ S*_p → x ∈ U⁻) →
  assert(U⁻ = S*_p)
}