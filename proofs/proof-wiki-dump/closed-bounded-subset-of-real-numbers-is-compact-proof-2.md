theorem Closed_Bounded_Is_Compact() {
  assert(
    ∀S ⊆ ℝ, (closed(S) ∧ bounded(S)) → compact(S)
  )
} ↔

proof Closed_Bounded_Is_Compact() {
  setVar(S: subset(ℝ)) →
  assume(closed(S) ∧ bounded(S)) →
  assert(∃a,b ∈ ℝ: S ⊆ (a,b)) →
  assert(S ⊆ [a,b]) →
  
  letVar(U = (ℝ\S) ∩ (a-1,b+1)) →
  assert(U = (a-1,a) ∪ (b,b+1)) →
  assert(open(U)) →
  
  letVar(𝒞: open_cover(S)) →
  construct(𝒞' = 𝒞 ∪ {U}) →
  assert(open_cover(𝒞', [a,b])) →
  
  lemma Finite_Subcover_Exists() {
    letVar(T = {x ∈ [a,b] | ∃finite_subcover(𝒞, [a,x])}) →
    assert(a ∈ T) →
    assert(bounded_above(T)) →
    letVar(l = sup(T)) →
    letVar(L ∈ 𝒞: l ∈ L) →
    assert(∃ε > 0: (l-ε,l+ε) ⊆ L) →
    assert(∃t ∈ T: t > l-ε) →
    letVar(ℱ: finite_subset(𝒞)) →
    assert([a,t] ⊆ ∪ℱ) →
    assert(ℱ ∪ {L} covers [a,l+δ] ∀δ ∈ (0,ε)) →
    assert(l+δ ∉ T ∀δ > 0) →
    assert(l ≥ b) →
    assert(l ≤ b) →
    conclude(l = b)
  } →
  
  apply(Finite_Subcover_Exists()) →
  letVar(ℱ': finite_subcover(𝒞', [a,b])) →
  construct(ℱ = ℱ'\{U}) →
  assert(finite_subcover(ℱ, S)) →
  conclude(compact(S))
}