theorem AntilexicographicOrderIsOrdering() {
  let S₁, S₂: Set
  let ≤₁: Order(S₁)
  let ≤₂: Order(S₂)
  let ≤ₐ: BinaryRelation(S₁ × S₂)
  
  assert(
    ∀(x₁,x₂),(y₁,y₂) ∈ S₁×S₂ ⇒
    [(x₁,x₂) ≤ₐ (y₁,y₂) ↔ (x₂ <₂ y₂) ∨ (x₂ = y₂ ∧ x₁ ≤₁ y₁)] →
    IsOrder(≤ₐ)
  )
} ↔

proof AntilexicographicOrderIsOrdering() {
  setVar((x₁,x₂),(y₁,y₂),(z₁,z₂): S₁×S₂)

  lemma Reflexivity() {
    assert((x₁,x₂) = (x₁,x₂)) →
    assert(x₂ = x₂ ∧ x₁ = x₁) →
    assert((x₁,x₂) ≤ₐ (x₁,x₂))
  }

  lemma Transitivity() {
    assume((x₁,x₂) ≤ₐ (y₁,y₂) ∧ (y₁,y₂) ≤ₐ (z₁,z₂)) →
    
    case1(x₂ = y₂ = z₂) {
      assert(x₁ ≤₁ y₁ ∧ y₁ ≤₁ z₁) →
      apply(Transitivity(≤₁)) →
      assert(x₁ ≤₁ z₁) →
      assert((x₁,x₂) ≤ₐ (z₁,z₂))
    }

    case2(x₂ = y₂ ∧ y₂ ≠ z₂) {
      assert(y₂ <₂ z₂) →
      assert(x₂ <₂ z₂) →
      assert((x₁,x₂) ≤ₐ (z₁,z₂))
    }

    case3(x₂ ≠ y₂ ∧ y₂ = z₂) {
      assert(x₂ <₂ y₂) →
      assert(x₂ <₂ z₂) →
      assert((x₁,x₂) ≤ₐ (z₁,z₂))
    }

    case4(x₂ ≠ y₂ ∧ y₂ ≠ z₂) {
      assert(x₂ <₂ y₂ ∧ y₂ <₂ z₂) →
      apply(Transitivity(≤₂)) →
      assert(x₂ <₂ z₂) →
      assert((x₁,x₂) ≤ₐ (z₁,z₂))
    }
  }

  lemma Antisymmetry() {
    assume((x₁,x₂) ≤ₐ (y₁,y₂) ∧ (y₁,y₂) ≤ₐ (x₁,x₂)) →
    byContradiction(x₂ ≠ y₂) {
      assert(x₂ ≤₂ y₂ ∧ y₂ ≤₂ x₂) →
      apply(Antisymmetry(≤₂)) →
      assert(x₂ = y₂)
    } →
    assert(x₁ ≤₁ y₁ ∧ y₁ ≤₁ x₁) →
    apply(Antisymmetry(≤₁)) →
    assert(x₁ = y₁) →
    assert((x₁,x₂) = (y₁,y₂))
  }

  apply(Reflexivity()) →
  apply(Transitivity()) →
  apply(Antisymmetry()) →
  assert(IsOrder(≤ₐ))
}