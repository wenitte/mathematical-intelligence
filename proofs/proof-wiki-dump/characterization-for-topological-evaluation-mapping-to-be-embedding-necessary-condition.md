theorem Topological_Evaluation_Embedding_Characterization() {
  assert(
    ∀X(TopologicalSpace(X) ∧
    ∃I,{Yi}i∈I,{fi}i∈I(
      IndexedFamily({Yi}i∈I) ∧
      ∀i∈I(ContinuousMapping(fi, X, Yi)) ∧
      Let(Y = ∏i∈I Yi) ∧
      Let(f = EvaluationMapping({fi}i∈I)) ∧
      IsEmbedding(f)
    )) ⇒
    (InitialTopology(X, {fi}i∈I) ∧ SeparatesPoints({fi}i∈I))
  )
}

proof Topological_Evaluation_Embedding_Characterization() {
  setVar(X: TopologicalSpace) →
  setVar(f[X]: Image(f)) →
  setVar(τf[X]: SubspaceTopology(f[X])) →

  // Part 1: Initial Topology
  assert(Homeomorphism(f|X×f[X], X, f[X])) →
  
  lemma SubspaceProductInitialTopology() {
    assert(InitialTopology(τf[X], {pri|f[X]}i∈I))
  } →
  
  lemma HomeomorphicInitialTopology() {
    assert(InitialTopology(τ, {pri|f[X] ∘ f|X×f[X]}i∈I))
  } →
  
  assert(∀i∈I(pri|f[X] ∘ f|X×f[X] = pri ∘ f)) →
  assert(∀i∈I(pri ∘ f = fi)) →
  conclude(InitialTopology(X, {fi}i∈I)) →

  // Part 2: Separates Points
  assert(Homeomorphism(f, X, f[X])) →
  assert(Injection(f)) →
  
  lemma EvaluationMappingInjective() {
    assert(Injection(f) ↔ SeparatesPoints({fi}i∈I))
  } →
  
  conclude(SeparatesPoints({fi}i∈I))
}