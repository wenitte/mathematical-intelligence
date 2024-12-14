theorem Centralizer_is_Subring() {
  assert(
    ∀R: Ring, ∀S ⊆ R ⇒ 
    CR(S) = {x ∈ R | ∀s ∈ S: s ∘ x = x ∘ s} ⇒
    isSubring(CR(S), R)
  )
} ↔

proof Centralizer_is_Subring() {
  setVar(R: Ring, S ⊆ R) →
  
  // Show 0ᵣ is in centralizer
  assert(∀s ∈ S: s ∘ 0ᵣ = 0ᵣ = 0ᵣ ∘ s) →
  assert(0ᵣ ∈ CR(S)) →
  
  // Show closure under subtraction
  setVar(x, y ∈ CR(S)) →
  assert(
    ∀s ∈ S: s ∘ (x + (-y))
    = s ∘ x + s ∘ (-y)    // by distributivity
    = x ∘ s + (-y) ∘ s    // as x,y ∈ CR(S)
    = (x + (-y)) ∘ s      // by distributivity
  ) →
  assert(x + (-y) ∈ CR(S)) →
  
  // Show closure under multiplication
  setVar(x, y ∈ CR(S)) →
  lemma Element_Commutes_With_Product() {
    assert(∀s ∈ S: s ∘ (x ∘ y) = (x ∘ y) ∘ s)
  } →
  apply(Element_Commutes_With_Product()) →
  assert(x ∘ y ∈ CR(S)) →
  
  // Apply subring test
  lemma Subring_Test() {
    assert(
      (0ᵣ ∈ CR(S)) ∧
      (∀x,y ∈ CR(S): x + (-y) ∈ CR(S)) ∧
      (∀x,y ∈ CR(S): x ∘ y ∈ CR(S)) ⇒
      isSubring(CR(S), R)
    )
  } →
  apply(Subring_Test()) →
  assert(isSubring(CR(S), R))
}