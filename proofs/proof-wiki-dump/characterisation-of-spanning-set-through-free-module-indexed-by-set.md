theorem SpanningSet_Characterization() {
  define(M: UnitaryRModule) →
  define(S: Family[M, I] = {m_i}_{i∈I}) →
  define(Ψ: R^(I) → M) →  // morphism from universal property
  assert(
    isSpanningSet(S, M) ↔ isSurjective(Ψ)
  )
}

proof SpanningSet_Characterization() {
  define(r_i: Family[R, I]) →
  assert(
    ∀r_i ∈ R^(I) → 
    Ψ(r_i) = ∑_{i∈I} m_i r_i
  ) →
  lemma Equivalence() {
    assert(
      isSurjective(Ψ) ↔
      ∀m ∈ M → ∃r_i ∈ R^(I) →
      m = ∑_{i∈I} m_i r_i
    )
  } →
  apply(Equivalence()) →
  assert(
    ∀m ∈ M → ∃r_i ∈ R^(I) →
    m = ∑_{i∈I} m_i r_i ↔
    isSpanningSet(S, M)
  )
}