theorem Closed_Element_Composite_Closure() {
  require(
    S: OrderedSet,
    f: S → S,
    g: S → S,
    h: S → S,
    h = f ∘ g,
    IsClosureOperator(f) ∧ IsClosureOperator(g) ∧ IsClosureOperator(h)
  )
  assert(
    ∀x ∈ S ⇒ (IsClosed(x,h) ↔ (IsClosed(x,f) ∧ IsClosed(x,g)))
  )
} ↔

proof Closed_Element_Composite_Closure() {
  lemma ClosedEquivFixedPoint() {
    assert(
      ∀op: ClosureOperator, ∀x ∈ S ⇒
      (IsClosed(x,op) ↔ IsFixedPoint(x,op))
    )
  } →
  
  lemma ClosureIsInflationary() {
    assert(
      IsClosureOperator(f) ∧ IsClosureOperator(g) ⇒
      IsInflationary(f) ∧ IsInflationary(g)
    )
  } →
  
  apply(FixedPointCompositionInflationary(f,g)) →
  
  assert(
    ∀x ∈ S ⇒ (IsFixedPoint(x,h) ↔ (IsFixedPoint(x,f) ∧ IsFixedPoint(x,g)))
  ) →
  
  apply(ClosedEquivFixedPoint()) →
  
  conclude(
    ∀x ∈ S ⇒ (IsClosed(x,h) ↔ (IsClosed(x,f) ∧ IsClosed(x,g)))
  )
}