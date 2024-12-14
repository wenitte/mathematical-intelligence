theorem Closure_Operator_From_Closed_Elements() {
  let(S: OrderedSet, ≼: Order) →
  let(C: Subset(S)) →
  assert(∀x ∈ S → ∃min(succ(x) ∩ C)) →
  define(cl: S → S, x ↦ min(C ∩ x≽)) →
  assert(
    isClosureOperator(cl) ∧
    closedElements(cl) = C
  )
}

proof Closure_Operator_From_Closed_Elements() {
  // Prove Inflationary Property
  lemma Inflationary() {
    setVar(x: S) →
    assert(x ∈ lowerBound(x≽)) →
    assert(x ∈ lowerBound(C ∩ x≽)) →
    conclude(x ≼ cl(x))
  }

  // Prove Order-Preserving
  lemma OrderPreserving() {
    setVar(x,y: S) →
    assume(x ≼ y) →
    assert(C ∩ y≽ ⊆ C ∩ x≽) →
    apply(SmallestElementSubset) →
    conclude(cl(x) ≼ cl(y))
  }

  // Prove Idempotent
  lemma Idempotent() {
    setVar(x: S) →
    assert(cl(x) = min(C ∩ x≽)) →
    assert(cl(x) ∈ (C ∩ x≽) ⊆ C) →
    assert(cl(x) = min(C ∩ cl(x)≽)) →
    conclude(cl(x) = cl(cl(x)))
  }

  // Prove Closed Elements Equivalence
  lemma ClosedElementsEquivalence() {
    // Forward direction
    assume(x ∈ C) →
    assert(x = min(C ∩ x≽)) →
    conclude(x ∈ closedElements(cl)) →
    
    // Backward direction
    assume(x ∈ closedElements(cl)) →
    assert(x = min(C ∩ x≽)) →
    conclude(x ∈ C)
  }

  apply(Inflationary) →
  apply(OrderPreserving) →
  apply(Idempotent) →
  apply(ClosedElementsEquivalence) →
  conclude(isClosureOperator(cl) ∧ closedElements(cl) = C)
}