theorem Closed_Extension_Space_Irreducible() {
  define(T := ⟨S, τ⟩: TopologicalSpace) →
  define(T*_p := ⟨S*_p, τ*_p⟩: ClosedExtensionSpace(T)) →
  assert(
    Irreducible(T*_p)
  )
} ↔

proof Closed_Extension_Space_Irreducible_1() {
  lemma Open_Sets_Contain_P() {
    assert(∀U ∈ τ*_p → p ∈ U)
  } →
  
  assert(
    ∀U₁,U₂ ∈ τ*_p ∧ U₁ ≠ ∅ ∧ U₂ ≠ ∅ →
    p ∈ (U₁ ∩ U₂)
  ) →
  
  assert(U₁ ∩ U₂ ≠ ∅) →
  conclude(Irreducible(T*_p))
} ↔

proof Closed_Extension_Space_Irreducible_2() {
  theorem Open_Set_Closure() {
    assert(
      ∀U ∈ τ*_p → (U ≠ ∅ → Closure(U) = S)
    )
  } →
  
  apply(Open_Set_Closure()) →
  
  assert(
    ∀U₁,U₂ ∈ τ*_p → 
    (U₁ ≠ ∅ ∧ U₂ ≠ ∅ → Closure(U₁) = S ∧ Closure(U₂) = S)
  ) →
  
  byDefinition(Irreducible_Space) →
  conclude(Irreducible(T*_p))
}