theorem Irreducible_Element_Equals_Infimum() {
  let(L: CompleteLattice) →
  let(S, ∨, ∧, ⪯: Elements(L)) →
  let(X: Subset(S)) →
  let(p: Element(S)) →
  assert(
    (isCompletelyIrreducible(p) ∧ p = inf(X)) → p ∈ X
  )
} ↔

proof Irreducible_Element_Equals_Infimum() {
  assume(¬(p ∈ X)) →
  
  lemma Irreducible_Characterization() {
    assert(
      ∃q ∈ S: (
        p ≺ q ∧
        (∀s ∈ S: p ≺ s → q ⪯ s) ∧
        upperClosure(p) = {p} ∪ upperClosure(q)
      )
    )
  } →

  setVar(q: Element(S)) →
  
  lemma Q_Is_Lower_Bound() {
    assert(∀x ∈ X: q ⪯ x) →
    let(x: Element(X)) →
    assert(p ⪯ x) →
    assert(x ≠ p) →
    assert(p ≺ x) →
    assert(q ⪯ x)
  } →

  assert(p ⪯ q) →
  
  lemma Greatest_Lower_Bound() {
    assert(∀b ∈ S: (isLowerBound(b, X) → b ⪯ q)) →
    let(b: Element(S)) →
    assume(isLowerBound(b, X)) →
    assert(b ⪯ p) →
    assert(b ⪯ q)
  } →

  assert(q = inf(X)) →
  assert(q = p) →
  assert(contradiction(p ≺ q ∧ p = q))
}