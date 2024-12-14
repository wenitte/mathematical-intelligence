theorem CompleteTotallyBoundedIsSequentiallyCompact() {
  assert(
    ∀M: MetricSpace ∧ isComplete(M) ∧ isTotallyBounded(M) ⇒ 
    isSequentiallyCompact(M)
  )
} ↔

proof CompleteTotallyBoundedIsSequentiallyCompact() {
  setVar(M: MetricSpace) →
  setVar(A: set) →
  setVar(d: metric) →
  assert(M = ⟨A,d⟩) →
  
  setVar(x_m: sequence[ℕ → A]) →
  
  lemma GetFiniteNets() {
    assert(∀n ∈ ℕ ⇒ ∃F_n: set where (
      isFinite(F_n) ∧
      is2PowNNet(F_n, M, n)
    ))
  } →
  apply(AxiomCountableChoice()) →
  
  defineFunction(S_n[y] := {m ∈ ℕ: d(x_m,y) < 2^(-n)}) →
  assert(∀n ∈ ℕ ⇒ ℕ = ⋃(y ∈ F_n) S_n[y]) →
  
  defineSet(G_n := {y ∈ F_n: isInfinite(S_n[y])}) →
  assert(∀n ∈ ℕ ⇒ isNonEmpty(G_n)) →
  
  defineFunction(T_n[y] := {z ∈ G_(n+1): isInfinite(S_n[y] ∩ S_(n+1)[z])}) →
  assert(∀n ∈ ℕ, ∀y ∈ G_n ⇒ isNonEmpty(T_n[y])) →
  
  lemma ConstructSequence() {
    assert(∃φ_n: sequence[ℕ → (G_n → G_(n+1))] where (
      ∀n ∈ ℕ, ∀y ∈ G_n ⇒ φ_n(y) ∈ T_n[y]
    ))
  } →
  
  constructSequence(m_k: ℕ, {
    base: choose(y_0 ∈ G_0 ∧ m_0 ∈ S_0[y_0]),
    step: ∀k ∈ ℕ ⇒ (
      y_(k+1) = (φ_k ∘ ... ∘ φ_0)(y_0) ∧
      m_(k+1) = min{m > m_k: m ∈ S_k[y_k] ∩ S_(k+1)[y_(k+1)]}
    )
  }) →
  
  defineSequence(x̂_k := x_(m_k)) →
  
  assert(∀i,j ∈ ℕ where i < j ⇒ 
    d(x̂_i, x̂_j) < 2^(2-i)
  ) →
  
  assert(isCauchy(x̂_k)) →
  assert(isConvergent(x̂_k)) →
  assert(isSubsequence(x̂_k, x_m)) →
  
  conclude(isSequentiallyCompact(M))
}