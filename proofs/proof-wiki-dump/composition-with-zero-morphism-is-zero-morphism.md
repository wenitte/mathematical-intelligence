theorem Composition_With_Zero_Morphism() {
  assert(
    ∀C: Category,
    ∀O: Object(C) where isZeroObject(O),
    ∀A,B,C,D: Object(C),
    ∀f: Morphism(A,B),
    ∀g: Morphism(B,C),
    ∀h: Morphism(C,D),
    isZeroMorphism(g) ⇒
    (isZeroMorphism(g ∘ f) ∧ isZeroMorphism(h ∘ g))
  )
} ↔

proof Composition_With_Zero_Morphism() {
  setVar(C: Category) →
  setVar(O: Object(C), isZeroObject(O)) →
  setVar(A,B,C,D: Object(C)) →
  setVar(f: Morphism(A,B)) →
  setVar(g: Morphism(B,C)) →
  setVar(h: Morphism(C,D)) →
  assume(isZeroMorphism(g)) →
  
  lemma ZeroMorphismDecomposition() {
    assert(∃α: Morphism(B,O), ∃β: Morphism(O,C),
           isUnique(α) ∧ isUnique(β) ∧
           g = β ∘ α)
  } →
  
  assert(isUnique(α ∘ f: Morphism(A,O))) by(isTerminal(O)) →
  assert(isZeroMorphism(β ∘ α ∘ f)) →
  assert(g ∘ f = β ∘ α ∘ f) →
  assert(isZeroMorphism(g ∘ f)) →
  
  assert(isUnique(h ∘ β: Morphism(O,D))) by(isInitial(O)) →
  assert(isZeroMorphism(h ∘ β ∘ α)) →
  assert(h ∘ g = h ∘ β ∘ α) →
  assert(isZeroMorphism(h ∘ g))
}