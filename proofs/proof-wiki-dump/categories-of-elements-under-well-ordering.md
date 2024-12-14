theorem ElementCategories_WellOrdering() {
  given(A: Class, ≼: WellOrdering(A), x: Element(A))
  assert(
    ∀x ∈ A ⇒ (
      Category1(x) ∨ Category2(x) ∨ Category3(x)
    ) where
    Category1(x) := isSmallestElement(x,A,≼) ∧
    Category2(x) := ∃y ∈ A: isImmediateSuccessor(x,y,≼) ∧
    Category3(x) := isLimitElement(x,A,≼)
  )
} ↔

proof ElementCategories_WellOrdering() {
  setVar(x: Element(A)) →
  
  lemma Category1_Properties() {
    assert(WellOrdering(≼,A)) →
    assert(A ⊆ A) →
    assert(∃m ∈ A: isSmallestElement(m,A,≼)) →
    assert(∀y ∈ A: m ≼ y) →
    assert(¬∃y ∈ A: isImmediateSuccessor(m,y,≼))
  } →

  lemma Category2_Properties() {
    given(y: Element(A))
    assert(¬isGreatestElement(y,A,≼)) →
    assert(∃x ∈ A: (y ≼ x ∧ isImmediateSuccessor(x,y,≼))) →
    assert(∀x ∈ A: isImmediateSuccessor(x,y,≼) ⇒ ¬isSmallestElement(x,A,≼))
  } →

  lemma Category3_Properties() {
    given(x: Element(A))
    assert(
      ¬isSmallestElement(x,A,≼) ∧
      ¬∃y ∈ A: isImmediateSuccessor(x,y,≼)
    ) →
    assert(isLimitElement(x,A,≼))
  } →

  apply(Category1_Properties()) ∧
  apply(Category2_Properties()) ∧
  apply(Category3_Properties()) →
  
  assert(
    ∀x ∈ A: (
      Category1(x) ∨ Category2(x) ∨ Category3(x)
    )
  )
}