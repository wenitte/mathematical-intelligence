theorem Bounded_Scalar_Multiple() {
  assert(
    ∀S[TopologicalSpace] ∧
    ∀f: S → ℝ[Bounded] ∧
    ∀λ ∈ ℝ ∧
    (∀s ∈ S: (λf)(s) = λf(s)) →
    isBounded(λf)
  )
}

proof Bounded_Scalar_Multiple() {
  setVar(f: S → ℝ[Bounded]) →
  assert(∃M_f ∈ ℝ_≥0: ∀s ∈ S: |f(s)| ≤ M_f) →
  
  let(M = |λ|M_f) →
  
  assert(
    ∀s ∈ S: |((λf)(s))| = 
    |λf(s)| →                  // by definition of pointwise scalar multiplication
    |λ||f(s)| →                // absolute value multiplicative property
    |λ|M_f →                   // by boundedness of f
    M                          // by definition of M
  ) →

  conclude(
    ∃M ∈ ℝ_≥0: ∀s ∈ S: |(λf)(s)| ≤ M →
    isBounded(λf)              // by definition of bounded function
  )
}