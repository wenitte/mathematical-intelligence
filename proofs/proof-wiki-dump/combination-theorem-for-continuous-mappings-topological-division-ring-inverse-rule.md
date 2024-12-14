theorem Continuous_Inverse_Rule() {
  input(
    S: TopologicalSpace,
    R: TopologicalDivisionRing,
    g: ContinuousMapping(S → R),
    U := S \ {x | g(x) = 0},
    g⁻¹: Mapping(U → R),
    ∀x ∈ U ⇒ g⁻¹(x) = (g(x))⁻¹,
    τᵤ: SubspaceTopology(U)
  ) →
  assert(
    g⁻¹: (U,τᵤ) → (R,τᵣ) is_continuous
  )
} ↔

proof Continuous_Inverse_Rule() {
  setVar(R* := R \ {0}) →
  setVar(τ* := SubspaceTopology(R*)) →
  
  lemma TopDivRing_Property() {
    assert(
      ∃φ: (R*,τ*) → (R,τᵣ) | 
      (∀x ∈ R* ⇒ φ(x) = x⁻¹) ∧
      φ is_continuous
    )
  } →
  
  setVar(g* := Restriction(g, U → R*)) →
  
  lemma Restriction_Continuity() {
    assert(g* is_continuous)
  } →
  
  lemma Composition_Continuity() {
    assert(
      φ ∘ g*: (U,τᵤ) → (R,τᵣ) is_continuous
    )
  } →
  
  assert(
    ∀x ∈ U ⇒
    g⁻¹(x) = g(x)⁻¹ = φ(g(x)) = φ(g*(x)) = (φ ∘ g*)(x)
  ) →
  
  apply(Equality_of_Mappings) →
  assert(g⁻¹ = φ ∘ g*) →
  
  conclude(g⁻¹ is_continuous)
}