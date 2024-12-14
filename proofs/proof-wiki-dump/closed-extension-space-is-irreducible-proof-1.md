theorem Closed_Extension_Space_Irreducible() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space) ∧
    ∀T*_p(T*_p = ⟨S*_p,τ*_p⟩ ∧ T*_p is_closed_extension_space_of T) →
    is_irreducible(T*_p)
  )
} ↔

proof Closed_Extension_Space_Irreducible() {
  setVar(T: topological_space) →
  setVar(T*_p: closed_extension_space(T)) →
  
  lemma Definition_Closed_Extension() {
    assert(
      ∀U ∈ τ*_p → p ∈ U
    )
  } →
  
  assert(
    ∀U₁,U₂ ∈ τ*_p(
      U₁ ≠ ∅ ∧ U₂ ≠ ∅ → 
      p ∈ U₁ ∧ p ∈ U₂ →
      p ∈ (U₁ ∩ U₂)
    )
  ) →
  
  assert(
    ∀U₁,U₂ ∈ τ*_p(
      U₁ ≠ ∅ ∧ U₂ ≠ ∅ → 
      (U₁ ∩ U₂) ≠ ∅
    )
  ) →
  
  assert(is_irreducible(T*_p))
}