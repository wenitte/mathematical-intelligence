theorem ComponentNotAlwaysIntersectionClopen() {
  assert(
    ∀T(IsTopologicalSpace(T) ∧ T = ⟨S,τ⟩) ∧
    ∀x ∈ S ∧
    let Compₓ(T) = ComponentOf(x,T) ∧
    let Kₓ = ⋂{K | K is clopen in T ∧ x ∈ K} →
    ¬(∀T: Compₓ(T) = Kₓ)
  )
} ↔

proof ComponentNotAlwaysIntersectionClopen() {
  lemma ContainmentOne() {
    assert(∀T,x: Compₓ(T) ⊆ Kₓ)
  } →
  
  setVar(T: NestedRectangleSpace) →
  setVar(L₁,L₂: BoundaryLines(T)) →
  setVar(x ∈ L₁) →
  
  assert(L₁ = Compₓ(T)) →
  
  lemma QuasicomponentUnion() {
    assert(L₁ ∪ L₂ = ⋂{K | K is clopen in T ∧ x ∈ K})
  } →
  
  assert(Compₓ(T) ⊆ L₁ ∪ L₂) →
  assert(¬(L₁ ∪ L₂ ⊆ Compₓ(T))) →
  
  conclude(
    ∃T: Compₓ(T) ≠ Kₓ
  )
}