theorem TopologicalEvaluationEmbedding() {
  let(X: TopologicalSpace) ∧
  let(I: IndexingSet) ∧
  let({Yi}i∈I: IndexedFamily[TopologicalSpace]) ∧
  let({fi: X → Yi}i∈I: IndexedFamily[ContinuousMapping]) ∧
  let(Y = ∏i∈I Yi) ∧
  let(f: X → Y: EvaluationMapping({fi}i∈I)) →
  assert(
    IsEmbedding(f) ↔ (
      IsInitialTopology(X, {fi}i∈I) ∧
      SeparatesPoints({fi}i∈I)
    )
  )
}

proof TopologicalEvaluationEmbedding() {
  // Necessary Condition
  section NecessaryCondition() {
    assume(IsEmbedding(f)) →
    
    // Part 1: Initial Topology
    let(f[X]: Image(f)) ∧
    let(τf[X]: SubspaceTopology(f[X])) →
    assert(IsHomeomorphism(f|X×f[X], X, f[X])) →
    
    lemma SubspaceProductTopology() {
      assert(
        IsInitialTopology(τf[X], {pri|f[X]: f[X] → Yi}i∈I)
      )
    } →
    
    let(τ: Topology(X)) →
    assert(
      pri|f[X] ∘ f|X×f[X] = pri ∘ f = fi
    ) →
    conclude(IsInitialTopology(X, {fi}i∈I)) ∧

    // Part 2: Separates Points
    assert(IsHomeomorphism(f|X×f[X], X, f[X])) →
    assert(IsInjective(f)) →
    apply(EvaluationMappingInjectiveIffSeparatesPoints()) →
    conclude(SeparatesPoints({fi}i∈I))
  } →

  // Sufficient Condition
  section SufficientCondition() {
    assume(
      IsInitialTopology(X, {fi}i∈I) ∧
      SeparatesPoints({fi}i∈I)
    ) →
    
    apply(EvaluationMappingInjectiveIffSeparatesPoints()) →
    assert(IsInjective(f)) →
    assert(IsBijective(f|X×f[X])) →
    assert(IsContinuous(f)) →
    assert(IsContinuous(f|X×f[X])) →
    
    let(S = {fi⁻¹[V] | i∈I, V⊆Yi, IsOpen(V)}) →
    ∀(V: OpenSet, i: I) {
      assert(
        f[fi⁻¹[V]] = pri⁻¹[V] ∩ f[X] ∧
        IsOpen(pri⁻¹[V] ∩ f[X], f[X])
      )
    } →
    
    assert(IsSubBasis(S, X)) →
    apply(InjectionOpenMappingIffImageSubBasisOpen()) →
    conclude(IsOpenMapping(f|X×f[X])) →
    conclude(IsHomeomorphism(f|X×f[X])) →
    conclude(IsEmbedding(f))
  }
}