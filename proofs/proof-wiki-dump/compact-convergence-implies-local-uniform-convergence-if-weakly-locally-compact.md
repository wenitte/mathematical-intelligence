theorem Compact_Conv_Implies_Local_Uniform() {
  assert(
    let(T: TopologicalSpace) ∧
    let(T = ⟨S,τ⟩) ∧
    let(M: MetricSpace) ∧
    let(M = ⟨A,d⟩) ∧
    let({fn}: Sequence(S → M)) ∧
    let(f: S → M) ∧
    isWeaklyLocallyCompact(T) ∧
    convergesCompactly(fn, f) ⇒
    convergesLocallyUniformly(fn, f)
  )
} ↔

proof Compact_Conv_Implies_Local_Uniform() {
  premise1: isWeaklyLocallyCompact(T) →
  assert(∀x ∈ S ⇒ ∃N: Neighborhood(x) | isCompact(N)) →
  
  premise2: convergesCompactly(fn, f) →
  assert(∀K ⊆ S | isCompact(K) ⇒ convergesUniformly(fn, f, K)) →
  
  lemma Point_Neighborhood_Convergence() {
    assert(
      ∀x ∈ S ⇒ 
      ∃N: Neighborhood(x) | 
      (isCompact(N) ∧ convergesUniformly(fn, f, N))
    )
  } →
  
  apply(Point_Neighborhood_Convergence()) →
  assert(convergesLocallyUniformly(fn, f))
}