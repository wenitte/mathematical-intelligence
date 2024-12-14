theorem CharacterizationPseudoprimeElement() {
  assert(
    ∀L(L = ⟨S,∨,∧,≼⟩ ∧ isContinuousLattice(L)) ∧
    ∀p(p ∈ S ∧ isPseudoprime(p)) ∧
    ∀A(A ⊆ S ∧ isFinite(A) ∧ A ≠ ∅) ∧
    inf(A) ≪ p
    ⇒ ∃a(a ∈ A ∧ a ≼ p)
  )
} ↔

proof CharacterizationPseudoprimeElement() {
  setVar(L: ContinuousLattice) →
  setVar(p: Element(S)) →
  setVar(A: Subset(S)) →
  
  lemma PseudoprimeDefinition() {
    assert(∃P(isPrimeIdeal(P,L) ∧ p = sup(P)))
  } →
  
  assert(inf(A) ∈ p^≪) →
  assert(p ≼ sup(P)) →
  
  lemma ContinuousProperty() {
    assert(isContinuous(L) → p^≪ ⊆ P)
  } →
  
  apply(ContinuousProperty()) →
  assert(inf(A) ∈ P) →
  
  lemma PrimeIdealProperty() {
    assert(isPrimeIdeal(P) ∧ inf(A) ∈ P → ∃a(a ∈ A ∧ a ∈ P))
  } →
  
  apply(PrimeIdealProperty()) →
  setVar(a: Element(A)) →
  
  assert(isUpComplete(P)) →
  assert(isUpperBound(p,P)) →
  assert(a ∈ P → a ≼ p) →
  
  conclude(∃a(a ∈ A ∧ a ≼ p))
}