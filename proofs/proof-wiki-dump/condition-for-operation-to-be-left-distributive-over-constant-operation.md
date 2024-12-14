theorem LeftDistributiveConstantOperation() {
  let(S: Set, ∘: Operation, c: Element(S))
  assert(
    (∀x,y,z ∈ S: x ∘ (y ⟦c⟧ z) = (x ∘ y) ⟦c⟧ (x ∘ z)) ↔
    (∀x ∈ S: x ∘ c = c)
  )
}

proof LeftDistributiveConstantOperation() {
  // Sufficient Condition (→)
  branch_forward {
    assume(∀x,y,z ∈ S: x ∘ (y ⟦c⟧ z) = (x ∘ y) ⟦c⟧ (x ∘ z)) →
    setVar(x,y,z: S) →
    assert((x ∘ y) ⟦c⟧ (x ∘ z) = c) by(def_constant_operation) →
    assert(x ∘ (y ⟦c⟧ z) = c) by(left_distributive) →
    assert(x ∘ c = c) by(def_constant_operation)
  }

  // Necessary Condition (←)
  branch_reverse {
    assume(∀x ∈ S: x ∘ c = c) →
    setVar(x,y,z: S) →
    assert((x ∘ y) ⟦c⟧ (x ∘ z) = c) by(def_constant_operation) →
    assert(x ∘ c = c) by(hypothesis) →
    assert(x ∘ (y ⟦c⟧ z) = c) by(def_constant_operation) →
    assert(x ∘ (y ⟦c⟧ z) = (x ∘ y) ⟦c⟧ (x ∘ z))
  }
}