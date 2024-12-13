theorem BoundedSubsetHasGreatest() {
  assert(
    ∀N: Class ∧ ∀g: ProgressingMapping ∧ ∀b ∈ N ∧
    isClosedUnder(N, g) ∧ isMinimallyClosedWRT(N, g, b) ⇒
    (∀S ⊆ N: isBounded(S) ⇒ ∃m ∈ S: isGreatestElement(m, S))
  )
} ↔

proof BoundedSubsetHasGreatest() {
  setVar(P(x): Proposition := "∀S ⊆ N: (isBoundedBy(S, x) ⇒ ∃m ∈ S: isGreatestElement(m, S))") →
  
  lemma Basis() {
    assert(x = b) →
    apply(SmallestElementTheorem) →
    assert(∀y ∈ N: b ⊆ y) →
    assert(∀B ⊆ N: isBoundedBy(B, b) ⇒ B = {b}) →
    assert(isGreatestElement(b, {b})) →
    assert(P(b))
  } →

  lemma InductionStep() {
    assume(P(x) ∧ x ∈ N) →
    setVar(B ⊆ N: isBoundedBy(B, g(x))) →
    
    case g(x) ∈ B {
      assert(∀y ∈ B: y ⊆ g(x)) →
      assert(isGreatestElement(g(x), B))
    } →
    
    case g(x) ∉ B {
      assert(∀y ∈ B: y ⊂ g(x)) →
      apply(MinimallyClosedNestTheorem) →
      assert(∀y ∈ B: g(x) ⊆ y ∨ y ⊆ x) →
      assert(∀y ∈ B: y ⊆ x) →
      assert(isBoundedBy(B, x)) →
      apply(P(x)) →
      assert(∃m ∈ B: isGreatestElement(m, B))
    } →
    
    assert(P(x) ⇒ P(g(x)))
  } →
  
  apply(GeneralInductionPrinciple) →
  assert(∀x ∈ N: P(x)) →
  assert(∀S ⊆ N: isBounded(S) ⇒ ∃m ∈ S: isGreatestElement(m, S))
}