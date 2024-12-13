theorem CartesianGradient() {
  let(R: Region(ℝ³)) →
  let(F: ScalarField(R)) →
  let(i,j,k: StandardBasis(ℝ³)) →
  assert(
    ∇F = (i∂/∂x + j∂/∂y + k∂/∂z)F ↔
    ∇F = (∂F/∂x)i + (∂F/∂y)j + (∂F/∂z)k ↔
    ∇F = (∂F/∂n)n̂
  )
  where(n̂: UnitNormal(Surface(F,A)))
  where(n: Magnitude(Normal(Surface(F,A))))
} ↔

proof CartesianGradient() {
  lemma VectorRates() {
    assert(
      DirectionalRates(F) = {
        (∂F/∂x)i,
        (∂F/∂y)j,
        (∂F/∂z)k
      }
    )
  } →
  
  lemma DotProductEquivalence() {
    let(dr: PositionVector(A)) →
    assert(
      (∇F)·dr = (∂F/∂n)n̂·dr →
      (∇F)·dr = (∂F/∂n)dr·cos(θ) →
      (∇F)·dr = (∂F/∂n)dn →
      (∇F)·dr = dF
    )
  } →
  
  lemma CartesianExpansion() {
    assert(
      dF = (∂F/∂x)dx + (∂F/∂y)dy + (∂F/∂z)dz →
      (∇F)·dr = (∂F/∂x)dx + (∂F/∂y)dy + (∂F/∂z)dz →
      (∇F)·dr = ((∂F/∂x)i + (∂F/∂y)j + (∂F/∂z)k)·(dxi + dyj + dzk)
    )
  } →
  
  apply(DotProductEquivalence()) ∧
  apply(CartesianExpansion()) →
  assert(
    ∇F = (∂F/∂x)i + (∂F/∂y)j + (∂F/∂z)k ↔
    ∇F = (∂F/∂n)n̂
  )
}