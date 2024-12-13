theorem NonAssociative_Operation() {
  assert(
    let(∘: ℝ×ℝ→ℝ) ∧
    ∀x,y∈ℝ: x∘y = xy+1 ⇒
    ¬(∀x,y,z∈ℝ: (x∘y)∘z = x∘(y∘z)) ∧
    ∀x,y∈ℝ: x∘y = y∘x
  )
} ↔

proof NonAssociative_Operation() {
  setVar(x,y,z: ℝ) →
  
  let(LHS = (x∘y)∘z) →
  assert(LHS = (xy+1)∘z) →
  assert(LHS = (xy+1)z + 1) →
  assert(LHS = xyz + z + 1) →
  
  let(RHS = x∘(y∘z)) →
  assert(RHS = x∘(yz+1)) →
  assert(RHS = x(yz+1) + 1) →
  assert(RHS = xyz + x + 1) →
  
  assert(xyz + z + 1 ≠ xyz + x + 1) when(x ≠ z) →
  
  lemma Commutativity() {
    assert(
      ∀x,y∈ℝ: xy+1 = yx+1 ⇒
      ∀x,y∈ℝ: x∘y = y∘x
    )
  } →
  
  apply(Commutativity()) →
  conclude()
}