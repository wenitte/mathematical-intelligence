theorem BasisInjectsIntoGenerator() {
  assert(
    ∀K: DivisionRing, ∀V: VectorSpace(K), ∀B: Basis(V), ∀G: Generator(V) ⇒
    ∃f: (B → G) where Injective(f)
  )
} ↔

proof BasisInjectsIntoGenerator() {
  setVar(K: DivisionRing) →
  setVar(V: VectorSpace(K)) →
  setVar(B: Basis(V)) →
  setVar(G: Generator(V)) →

  lemma BasisInGenerator() {
    assert(∃C ⊆ G where Basis(C, V))
  } →
  apply(VectorSpaceHasBasisBetweenLinIndepAndSpanning()) →
  setVar(C: Basis(V) where C ⊆ G) →

  lemma BasisBijection() {
    assert(∃h: (B → C) where Bijective(h))
  } →
  apply(BasesHaveEqualCardinality()) →
  setVar(h: (B → C) where Bijective(h)) →

  lemma InclusionMap() {
    assert(∃i: (C → G) where i(x) = x)
  } →
  setVar(i: (C → G) where i(x) = x) →

  setVar(f: (B → G) where f = i ∘ h) →
  apply(CompositeOfInjectionsIsInjection()) →
  assert(Injective(f))
}