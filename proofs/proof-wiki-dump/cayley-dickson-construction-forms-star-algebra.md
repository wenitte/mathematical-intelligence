theorem CayleyDicksonStarAlgebra() {
  assert(
    ∀A(isStarAlgebra(A) ∧ A = ⟨A_F, ⊕⟩) →
    ∀A'(A' = ⟨A'_F, ⊕'⟩ = CayleyDicksonConstruct(A)) →
    isStarAlgebra(A')
  )
} ↔

proof CayleyDicksonStarAlgebra() {
  # Part 1: Bilinearity of ⊕'
  lemma BilinearityAddition() {
    setVar(a₁,b₁,a₂,b₂,c,d: A') →
    assert(
      ⟨a₁,b₁⟩ ⊕' ⟨c,d⟩ + ⟨a₂,b₂⟩ ⊕' ⟨c,d⟩ =
      ⟨(a₁⊕c - d⊕b₁*), (a₁*⊕d + c⊕b₁)⟩ + ⟨(a₂⊕c - d⊕b₂*), (a₂*⊕d + c⊕b₂)⟩ =
      ⟨(a₁+a₂)⊕c - d⊕(b₁+b₂)*, (a₁+a₂)*⊕d + c⊕(b₁+b₂)⟩ =
      (⟨a₁,b₁⟩ + ⟨a₂,b₂⟩) ⊕' ⟨c,d⟩
    )
  } →

  lemma BilinearityScalar() {
    setVar(a,b,c,d: A', α: ℝ) →
    assert(
      (α⟨a,b⟩) ⊕' ⟨c,d⟩ =
      ⟨αa⊕c - d⊕(αb)*, (αa)*⊕d + c⊕(αb)⟩ =
      α(⟨a,b⟩ ⊕' ⟨c,d⟩)
    )
  } →

  # Part 2: Conjugate Properties
  lemma ConjugateInvolution() {
    setVar(a,b: A') →
    assert(
      ((⟨a,b⟩*)*)' =
      (⟨a*,-b⟩*)' =
      ⟨a,b⟩
    )
  } →

  lemma ConjugateDistribution() {
    setVar(a,b,c,d: A') →
    assert(
      (⟨a,b⟩ ⊕' ⟨c,d⟩)*' =
      ⟨(a⊕c - d⊕b*)*,-((a*⊕d + c⊕b))⟩ =
      ⟨c*,-d⟩ ⊕' ⟨a*,-b⟩ =
      ⟨c,d⟩*' ⊕' ⟨a,b⟩*'
    )
  } →

  apply(BilinearityAddition()) ∧
  apply(BilinearityScalar()) ∧
  apply(ConjugateInvolution()) ∧
  apply(ConjugateDistribution()) →
  conclude(isStarAlgebra(A'))
}