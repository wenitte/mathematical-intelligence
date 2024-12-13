theorem BoundedLinearTransformationEquality() {
  assert(
    ℱ ∈ {ℝ,ℂ} ∧
    ∃(X,∥⋅∥_X): NormedVectorSpace ∧
    ∃(Y,∥⋅∥_Y): BanachSpace ∧
    ∃D: LinearSubspace(X) ∧
    isDense(D,X) ∧
    ∃T₁,T₂: BoundedLinearMap(X,Y) ∧
    (∀x ∈ D ⇒ T₁(x) = T₂(x))
    ⇒
    T₁ = T₂
  )
} ↔

proof BoundedLinearTransformationEquality() {
  setMap(T₀: D → Y) →
  assert(∀x ∈ D ⇒ T₀(x) = T₁(x) = T₂(x)) →
  
  lemma T₀Properties() {
    assert(
      isBoundedLinear(T₀) ∧
      D ⊆ X ∧
      isDense(D,X)
    )
  } →
  
  apply(UniqueExtensionTheorem(T₀)) →
  assert(∃!T̃: BoundedLinearMap(X,Y) | T̃|_D = T₀) →
  
  assert(
    T₁|_D = T₀ ∧
    T₂|_D = T₀ ∧
    isBoundedLinear(T₁) ∧
    isBoundedLinear(T₂)
  ) →
  
  apply(UniquenessProperty()) →
  conclude(T₁ = T₂)
}