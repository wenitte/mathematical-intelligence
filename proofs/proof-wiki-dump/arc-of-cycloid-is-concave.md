theorem Cycloid_Arc_Concavity() {
  assert(
    ∀a ∈ ℝ⁺,
    ∀P(x,y) ∈ cycloid(a) →
    isConcave(cycloid(a))
  )
} ↔

proof Cycloid_Arc_Concavity() {
  setVar(a: ℝ⁺) →
  setVar(P: Point(x,y)) →
  
  lemma Second_Derivative() {
    assert(
      d²y/dx² = -a/y²
    )
  } →
  
  apply(Second_Derivative()) →
  
  assert(
    ∀y ∈ range(cycloid(a)) → (
      (y ≥ 0) ∧
      (y ≠ 0 → d²y/dx² < 0)
    )
  ) →
  
  lemma Concavity_Criterion() {
    assert(
      ∀f: ℝ → ℝ,
      (d²f/dx² ≤ 0) → isConcave(f)
    )
  } →
  
  apply(Concavity_Criterion()) →
  
  assert(isConcave(cycloid(a)))
}