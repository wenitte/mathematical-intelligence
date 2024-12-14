theorem Characterization_Paracompactness() {
  let(X: Set, W: X×X, BB: Set[Set[X]]) →
  assert(
    isSymmetric(W) ∧
    ∀B ∈ BB, ∀x ∈ X ⇒ 
    (W(x) ∩ W[B] ≠ ∅ → (W∘W)(x) ∩ B ≠ ∅)
  )
} ↔

proof Characterization_Paracompactness() {
  setVar(B: BB) →
  setVar(x: X) →
  setVar(y: X) →
  
  assume(y ∈ W(x) ∩ W[B]) →
  
  lemma Intersection_Elements() {
    assert(y ∈ W(x)) ∧
    assert(y ∈ W[B])
  } →

  lemma Element_Image() {
    assert(⟨x,y⟩ ∈ W) →
    apply(isSymmetric(W)) →
    assert(⟨y,x⟩ ∈ W)
  } →

  lemma Subset_Image() {
    assert(y ∈ W[B]) →
    assert(∃z ∈ B: ⟨z,y⟩ ∈ W)
  } →
  
  lemma Composite_Relation() {
    apply(Element_Image()) →
    apply(Subset_Image()) →
    assert(∃z ∈ B: ⟨z,x⟩ ∈ W∘W)
  } →

  assert(∃z ∈ (W∘W)(x) ∩ B) →
  assert((W∘W)(x) ∩ B ≠ ∅) →
  
  apply(Arbitrary(B, BB)) →
  apply(Arbitrary(x, X)) →
  
  assert(
    ∀B ∈ BB, ∀x ∈ X ⇒ 
    (W(x) ∩ W[B] ≠ ∅ → (W∘W)(x) ∩ B ≠ ∅)
  )
}