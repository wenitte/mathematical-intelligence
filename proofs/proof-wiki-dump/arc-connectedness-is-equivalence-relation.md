theorem ArcConnectednessEquivalence() {
  let(T = ⟨S,τ⟩: TopologicalSpace)
  let(∼: BinaryRelation(S))
  assert(
    ∀a,b ∈ S: (a ∼ b ↔ isArcConnected(a,b))
    ⇒ isEquivalenceRelation(∼)
  )
} ↔

proof ArcConnectednessEquivalence() {
  require(
    ∀R: isEquivalenceRelation(R) ↔ 
    (isReflexive(R) ∧ isSymmetric(R) ∧ isTransitive(R))
  ) →

  lemma Reflexivity() {
    assert(∀a ∈ S: a ∼ a) →
    assert(isReflexive(∼))
  } →

  lemma Symmetry() {
    setVar(x,y: S) →
    assume(x ∼ y) →
    case(x = y) {
      apply(Reflexivity()) →
      assert(y ∼ x)
    } →
    case(x ≠ y) {
      let(f: [0,1] → S, continuous ∧ injective) →
      let(g(t) = 1-t: ℝ → ℝ) →
      assert(continuous(g) ∧ injective(g)) →
      assert(continuous(g∘f) ∧ injective(g∘f)) →
      assert(g∘f(0) = y ∧ g∘f(1) = x) →
      assert(y ∼ x)
    } →
    assert(isSymmetric(∼))
  } →

  lemma Transitivity() {
    apply(JoiningArcsTheorem) →
    assert(isTransitive(∼))
  } →

  apply(Reflexivity()) →
  apply(Symmetry()) →
  apply(Transitivity()) →
  assert(isEquivalenceRelation(∼))
}