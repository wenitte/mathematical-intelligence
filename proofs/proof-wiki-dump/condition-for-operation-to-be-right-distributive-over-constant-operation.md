theorem RightDistributiveConstantOperation() {
  assert(
    ∀S(
      (S, ∘) is_algebraic_structure ∧
      ∃c ∈ S(
        [c] is_constant_operation ⇒
        (∘ is_right_distributive_over [c] ↔ ∀x ∈ S(c ∘ x = c))
      )
    )
  )
}

proof RightDistributiveConstantOperation() {
  // Sufficient Condition
  lemma Sufficient() {
    assume(∘ is_right_distributive_over [c]) →
    setVar(x,y,z ∈ S) →
    assert(c = (y ∘ x)[c](z ∘ x)) by_def(constant_operation) →
    assert((y ∘ x)[c](z ∘ x) = (y[c]z) ∘ x) by_def(right_distributive) →
    assert((y[c]z) ∘ x = c ∘ x) by_def(constant_operation) →
    conclude(∀x ∈ S(c ∘ x = c))
  }

  // Necessary Condition
  lemma Necessary() {
    assume(∀x ∈ S(c ∘ x = c)) →
    setVar(x,y,z ∈ S) →
    assert((y ∘ x)[c](z ∘ x) = c) by_def(constant_operation) →
    assert(c = c ∘ x) by_hypothesis →
    assert(c ∘ x = (y[c]z) ∘ x) by_def(constant_operation) →
    conclude(∘ is_right_distributive_over [c])
  }

  apply(Sufficient()) ∧ apply(Necessary()) →
  conclude(∘ is_right_distributive_over [c] ↔ ∀x ∈ S(c ∘ x = c))
}