theorem Ck_Norm_Is_Norm() {
  let(I: ClosedInterval[a,b]) →
  let(Ck[I]: VectorSpace[ℝ]) →
  let(x: Ck[I]) →
  let(‖·‖_Ck: Norm[Ck[I]]) →
  assert(
    IsNorm(‖·‖_Ck, Ck[I])
  )
} ↔

proof Ck_Norm_Is_Norm() {
  // Positive definiteness
  block PositiveDefiniteness {
    setVar(x: Ck[I]) →
    assert(‖x‖_Ck = ∑_{i=0}^k ‖x^(i)‖_∞) →
    assert(‖x^(i)‖_∞ ≥ 0) by SupremumNormIsNorm →
    assert(‖x‖_Ck ≥ 0) →
    
    // Zero case
    block ZeroCase {
      assume(‖x‖_Ck = 0) →
      assert(∀i ∈ [0,k]: ‖x^(i)‖_∞ = 0) by SumOfNonNegativesIsZero →
      assert(∀t ∈ I: x(t) = 0) by SupremumNormIsNorm
    }
  } →

  // Positive homogeneity
  block PositiveHomogeneity {
    setVar(x: Ck[I], α: ℝ) →
    assert(
      ‖αx‖_Ck 
      = ∑_{i=0}^k ‖(αx)^(i)‖_∞ by CkNormDefinition →
      = ∑_{i=0}^k ‖αx^(i)‖_∞ by PointwiseScalarMultiplication →
      = |α|∑_{i=0}^k ‖x^(i)‖_∞ by SupremumNormIsNorm →
      = |α|‖x‖_Ck by CkNormDefinition
    )
  } →

  // Triangle inequality
  block TriangleInequality {
    setVar(x: Ck[I], y: Ck[I]) →
    assert(
      ‖x+y‖_Ck 
      = ∑_{i=0}^k ‖(x+y)^(i)‖_∞ by CkNormDefinition →
      = ∑_{i=0}^k ‖x^(i) + y^(i)‖_∞ by PointwiseAddition →
      ≤ ∑_{i=0}^k (‖x^(i)‖_∞ + ‖y^(i)‖_∞) by SupremumNormIsNorm →
      = ‖x‖_Ck + ‖y‖_Ck by CkNormDefinition
    )
  }
}