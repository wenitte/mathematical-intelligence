theorem ConstantOperationDistributive() {
  assert(
    ∀S,∀c ∈ S: (
      let ⟨S,∘⟩ be algebraic_structure ∧
      let [c] be constant_operation
    ) ⇒ (
      distributive([c], ∘) ↔ (c ∘ c = c)
    )
  )
}

proof ConstantOperationDistributive() {
  // Sufficient Condition
  lemma Sufficient() {
    assume(c ∘ c = c) →
    setVar(x,y,z: S) →
    assert((x [c] y) ∘ (x [c] z) = c ∘ c) by def_constant_operation →
    assert(c ∘ c = c) by assumption →
    assert(x [c] (y ∘ z) = c) by def_constant_operation →
    conclude(distributive([c], ∘))
  }

  // Necessary Condition
  lemma Necessary() {
    assume(distributive([c], ∘)) →
    setVar(x,y,z: S) →
    
    // First distributive property
    assert((x [c] y) ∘ (x [c] z) = c ∘ c) by def_constant_operation →
    assert(c ∘ c = c) required_by distributive →
    assert(x [c] (y ∘ z) = c) by def_constant_operation →
    
    // Second distributive property
    assert((x [c] z) ∘ (y [c] z) = c ∘ c) by def_constant_operation →
    assert(c ∘ c = c) required_by distributive →
    assert((x ∘ y) [c] z = c) by def_constant_operation →
    
    conclude(c ∘ c = c)
  }

  apply(Sufficient()) →
  apply(Necessary()) →
  conclude(distributive([c], ∘) ↔ (c ∘ c = c))
}