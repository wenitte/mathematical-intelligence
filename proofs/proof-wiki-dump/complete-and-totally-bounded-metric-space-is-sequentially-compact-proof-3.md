theorem MetricSpaceSequentiallyCompact() {
  let(M = ⟨A,d⟩: MetricSpace) →
  assert(
    Complete(M) ∧ TotallyBounded(M) ⇒ SequentiallyCompact(M)
  )
} ↔

proof MetricSpaceSequentiallyCompact() {
  setVar(M: MetricSpace, Complete(M) ∧ TotallyBounded(M)) →
  setVar(⟨ak⟩: InfiniteSequence(A)) →
  setVar(ε: ℝ>0) →
  
  lemma FiniteCover() {
    assert(∃x1,...,xn ∈ A: A = ⋃i=1..n Bε(xi)) →
    assert(∀k ∈ ℕ ∃jk ∈ {1,...,n}: d(ak,xjk) ≤ ε) →
    assert(∃j ∈ {1,...,n}: |{k: jk = j}| = ∞)
  } →

  lemma EpsilonBoundedSubsequence() {
    assert(∃x ∈ A: |{k: d(ak,x) ≤ ε}| = ∞)
  } →

  lemma InductiveConstruction() {
    setVar(x1 ∈ A: |{k: d(ak,x1) ≤ 1/2}| = ∞) →
    setVar(x2 ∈ A: |{k: d(ak,x1) ≤ 1/2 ∧ d(ak,x2) ≤ 1/4}| = ∞) →
    assert(∀m ∈ ℕ ∃xm ∈ A ∀j≤m: |{k: d(ak,xj) ≤ 2^(-j)}| = ∞)
  } →

  lemma CauchySubsequence() {
    setVar(⟨akm⟩: Subsequence(⟨ak⟩)) →
    assert(∀ε>0 ∃N ∀r,s≥N: d(akr,aks) < ε) →
    assert(∀r,s≥n: d(akr,aks) ≤ 2·2^(-n) < ε)
  } →

  apply(Complete(M)) →
  assert(∃⟨akm⟩: Subsequence(⟨ak⟩) ∧ Convergent(⟨akm⟩)) →
  assert(SequentiallyCompact(M))
}

note AxiomDependency() {
  assert(RequiresAxiom(CountableChoice))
}