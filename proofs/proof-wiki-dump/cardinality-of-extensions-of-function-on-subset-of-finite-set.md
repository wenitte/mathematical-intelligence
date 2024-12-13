theorem CardinalityOfFunctionExtensions() {
  assert(
    ∀m,n ∈ ℤ_{>0} ∧
    ∀S: |S| = m ∧
    ∀T: |T| = n ∧
    ∀A ⊆ S: |A| = r ∧
    0 ≤ r < m ∧
    ∀f: A → T ⇒
    |{g: S → T | g|_A = f}| = n^{m-r}
  )
} ↔

proof CardinalityOfFunctionExtensions() {
  setVar(E := {g: S → T | g|_A = f}) →
  setVar(N := |E|) →
  
  lemma ExtensionEquivalence() {
    assert(
      |E| = |{h: S\A → T}|
    )
  } →
  
  apply(ExtensionEquivalence()) →
  
  assert(|S\A| = m - r) →
  
  lemma CardinalityOfMappings() {
    assert(
      ∀X,Y: |{f: X → Y}| = |Y|^{|X|}
    )
  } →
  
  apply(CardinalityOfMappings(), X := S\A, Y := T) →
  
  assert(N = n^{m-r})
}