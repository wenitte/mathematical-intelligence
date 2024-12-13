theorem Bounded_Linear_Functional_Extension() {
  let(F: {ℝ, ℂ}) ∧
  let((X, ∥·∥_X): NormedVectorSpace(F)) ∧
  let(D_f0: LinearSubspace(X)) ∧
  let(f0: D_f0 → F) ∧
  assert(isLinear(f0)) ∧
  assert(isBounded(f0)) →
  assert(
    ∃!f: (D_f0)̄ → F where (
      isLinear(f) ∧
      isBounded(f) ∧
      ∀x ∈ D_f0: f(x) = f0(x)
    )
  )
} ↔

proof Bounded_Linear_Functional_Extension() {
  assert(∀F ∈ {ℝ, ℂ}: isBanachSpace(F)) → {
    case(F = ℝ) →
      apply(Real_Number_Line_Is_Banach())
    case(F = ℂ) →
      apply(Complex_Plane_Is_Banach())
  } →
  apply(Bounded_Linear_Extension_To_Closure(), {
    Y = F,
    T0 = f0,
    D = D_f0
  }) →
  assert(conclusion)
}