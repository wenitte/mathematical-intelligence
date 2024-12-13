theorem Absolutely_Convergent_Series_Convergence() {
  let(X: NormedVectorSpace, ∥·∥: Norm)
  let(Σa_n: Series[X], n ∈ ℕ)
  assert(
    (X is BanachSpace ∧ Σa_n is AbsolutelyConvergent) →
    (Σa_n is Convergent)
  )
} ↔

proof Absolutely_Convergent_Series_Convergence() {
  setDef(AbsolutelyConvergent: Σ∥a_n∥ converges in ℝ) →
  lemma CauchySequence() {
    assert(Σ∥a_n∥ converges → PartialSums(Σa_n) is Cauchy)
  } →
  
  let(ε > 0) →
  ∃N ∈ ℕ: ∀m,n ∈ ℕ: (m ≥ n ≥ N) → {
    assert(
      ∥Σ[k=n+1 to m] a_k∥ = ∥Σ[k=1 to m] a_k - Σ[k=1 to n] a_k∥
    ) →
    assert(
      ∥Σ[k=n+1 to m] a_k∥ ≤ Σ[k=n+1 to m] ∥a_k∥
    ) by TriangleInequality →
    assert(
      Σ[k=n+1 to m] ∥a_k∥ < ε
    )
  } →
  
  conclude(PartialSums(Σa_n) is Cauchy) →
  apply(BanachSpaceProperty: CauchySequence → Convergent) →
  conclude(Σa_n is Convergent)
}