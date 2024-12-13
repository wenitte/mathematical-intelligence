theorem No_Smallest_Element_Open_Interval() {
  assert(
    ∀I = (0,1) ⊆ ℝ ⇒
    ¬∃x ∈ I: ∀y ∈ I: x ≤ y
  )
}

proof No_Smallest_Element_Open_Interval() {
  setVar(I := (0,1)) →
  
  lemma Contradiction() {
    assume(∃x ∈ I: ∀y ∈ I: x ≤ y) →
    setVar(x₀: smallest element in I) →
    assert(0 < x₀ < 1) →
    setVar(x₁ := x₀/2) →
    
    assert(0 < x₁ < x₀) {
      apply(Mediant_Is_Between) →
      assert(0 < x₀/2 < x₀)
    } →
    
    assert(x₁ ∈ I) {
      assert(0 < x₁) ∧
      assert(x₁ < x₀ < 1)
    } →
    
    assert(x₁ < x₀) ∧
    assert(contradicts(x₀ smallest in I))
  } →
  
  apply(Proof_By_Contradiction) →
  assert(¬∃x ∈ I: ∀y ∈ I: x ≤ y)
}