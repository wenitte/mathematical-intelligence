theorem VectorComponents() {
  assert(
    ∀r ∈ ℝ³, ∀i,j,k ∈ UnitVectors, 
    ∀α,β,γ ∈ DirectionCosines,
    ∀x,y,z ∈ Components ⇒
    (r = |r| ∧
     r = xi + yj + zk) ⇒
    (x = r cos(α) ∧
     y = r cos(β) ∧
     z = r cos(γ))
  )
} ↔

proof VectorComponents() {
  setVar(r: Vector(ℝ³)) →
  setVar(i,j,k: UnitVectors) →
  setVar(α,β,γ: Angles) →
  setVar(x,y,z: ℝ) →
  
  lemma DirectionCosinesDef() {
    assert(
      cos(α) = angle(r,i) ∧
      cos(β) = angle(r,j) ∧
      cos(γ) = angle(r,k)
    )
  } →
  
  lemma VectorDecomposition() {
    assert(r = xi + yj + zk)
  } →
  
  apply(DirectionCosinesDef()) →
  apply(VectorDecomposition()) →
  
  assert(r = r cos(α)i + r cos(β)j + r cos(γ)k) →
  
  conclude(
    x = r cos(α) ∧
    y = r cos(β) ∧
    z = r cos(γ)
  ) →
  
  corollary ComponentRatios() {
    assert(
      cos(α) = x/r ∧
      cos(β) = y/r ∧
      cos(γ) = z/r
    )
  }
}