theorem CartesianProductClosure() {
  assert(
    ∀T₁(S₁, τ₁), T₂(S₂, τ₂) ∈ TopologicalSpaces ∧
    T = (T₁ × T₂, τ) isProductSpace ∧
    H ⊆ T₁ ∧ K ⊆ T₂ ⇒
    cl(H × K) = cl(H) × cl(K)
  )
} ↔

proof CartesianProductClosure() {
  setVar(T₁, T₂: TopologicalSpaces) →
  setVar(H: Subset(T₁), K: Subset(T₂)) →
  
  define(H̄: RelativeComplement) {
    H̄ = S₁ \ H
  } →
  
  define(K̄: RelativeComplement) {
    K̄ = S₂ \ K
  } →
  
  lemma InteriorProduct() {
    assert(Int(H̄ × K̄) = Int(H̄) × Int(K̄))
  } →
  
  lemma ComplementInteriorProperties() {
    assert(
      cl(H) = Int(H̄) ∧
      cl(K) = Int(K̄) ∧
      cl(H × K) = Int(H̄ × K̄)
    )
  } →
  
  apply(InteriorProduct()) →
  apply(ComplementInteriorProperties()) →
  
  assert(
    cl(H × K) = Int(H̄ × K̄) = Int(H̄) × Int(K̄) = cl(H) × cl(K)
  )
}