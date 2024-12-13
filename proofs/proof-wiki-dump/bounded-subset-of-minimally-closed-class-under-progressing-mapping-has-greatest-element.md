theorem BoundedSubsetHasGreatestElement() {
  assert(
    ∀N: Class ∧ ∀g: ProgMapping ∧ ∀b ∈ N ⇒
    (isClosedUnder(N, g) ∧ isMinimallyClosed(N, g, b)) →
    (∀S ⊆ N: isBounded(S) → ∃m ∈ S: isGreatestElement(m, S))
  )
} ↔

proof BoundedSubsetHasGreatestElement() {
  setVar(N: Class, g: ProgMapping, b: Element) →
  
  define(P(x) := "∀S ⊆ N: isBoundedBy(S, x) → ∃m ∈ S: isGreatestElement(m, S)") →
  
  lemma Basis() {
    assert(isSmallestElement(b, N)) →
    assert(∀x ∈ N: b ⊆ x) →
    assert(∀B ⊆ N: isBoundedBy(B, b) → B = {b}) →
    assert(isGreatestElement(b, {b})) →
    assert(P(b))
  } →
  
  lemma InductionStep() {
    setVar(x ∈ N) →
    assume(P(x)) →
    setVar(B ⊆ N: isBoundedBy(B, g(x))) →
    
    case g(x) ∈ B {
      assert(∀y ∈ B: y ⊆ g(x)) →
      assert(isGreatestElement(g(x), B))
    } ∨
    
    case g(x) ∉ B {
      assert(∀y ∈ B: y ⊂ g(x)) →
      lemma NestProperty() {
        assert(∀x,y ∈ N: g(x) ⊆ y ∨ y ⊆ x)
      } →
      assert(∀y ∈ B: y ⊆ x) →
      assert(isBoundedBy(B, x)) →
      apply(P(x)) →
      assert(∃m ∈ B: isGreatestElement(m, B))
    } →
    
    assert(P(x) → P(g(x)))
  } →
  
  apply(GeneralInduction(P, Basis, InductionStep)) →
  assert(∀x ∈ N: P(x)) →
  assert(∀S ⊆ N: isBounded(S) → ∃m ∈ S: isGreatestElement(m, S))
}