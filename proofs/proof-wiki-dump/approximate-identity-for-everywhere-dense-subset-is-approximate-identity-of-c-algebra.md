theorem Approx_Identity_Dense_Subset() {
  assert(
    ∀A(C*-algebra(A) ∧ 
    ∃D(D ⊆ A ∧ everywhere_dense(D)) ∧
    ∃Λ,≺(directed_set(Λ,≺)) ∧
    ∃{eλ}λ∈Λ(
      (∀λ∈Λ → Hermitian(eλ) ∧ σA(eλ) ⊆ [0,1]) ∧
      (∀x∈D → lim{xeλ}λ∈Λ = x)
    )) →
    approx_identity(A, {eλ}λ∈Λ)
  )
} ↔

proof Approx_Identity_Dense_Subset() {
  setVar(A: C*-algebra, D: subset(A), Λ: directed_set, {eλ}λ∈Λ: net) →
  
  lemma Bound_Norm() {
    assert(∀λ∈Λ → σA(eλ) ⊆ [0,1]) →
    assert(∀λ∈Λ → rA(eλ) ≤ 1) →
    apply(Spectral_Radius_Normal_Element()) →
    assert(∀λ∈Λ → ||eλ|| ≤ 1)
  } →

  setVar(x: A, ε: ℝ+) →
  apply(Dense_Subset_Convergence(D, A)) →
  assert(∃{xn}n∈ℕ ∈ D(limn→∞ xn = x)) →
  
  assert(
    ||x - xeλ|| ≤ ||((x - xn) - (x - xn)eλ)|| + ||xn - xneλ||
    by(Triangle_Inequality)
  ) →
  
  assert(
    ||x - xeλ|| ≤ ||x - xn|| + ||(x - xn)eλ|| + ||xn - xneλ||
    by(Triangle_Inequality)
  ) →
  
  apply(Bound_Norm()) →
  assert(||x - xeλ|| ≤ 2||x - xn|| + ||xn - xneλ||) →
  
  setVar(n: ℕ, ||x - xn|| < ε/3) →
  assert(∃a∈Λ(∀λ≽a → ||xn - xneλ|| < ε/3)) →
  
  conclude(∀λ≽a → ||x - xeλ|| < ε) →
  assert(lim{xeλ}λ∈Λ = x) →
  assert(approx_identity(A, {eλ}λ∈Λ))
}