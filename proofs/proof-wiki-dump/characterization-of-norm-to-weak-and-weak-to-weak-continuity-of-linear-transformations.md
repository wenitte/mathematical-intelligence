theorem Norm_Weak_Continuity_Equivalence() {
  assert(
    ∀GF ∈ {ℝ,ℂ} ∧
    ∀X,Y: NormedVectorSpace(GF) ∧
    ∀T: LinearTransform(X,Y) ⇒
    [T is (∥⋅∥_X, ∥⋅∥_Y)-continuous ↔
     T is (∥⋅∥_X, w_Y)-continuous ↔
     T is (w_X, w_Y)-continuous]
  )
} ↔

proof Norm_Weak_Continuity_Equivalence() {
  setVar(X*: DualSpace(X)) →
  setVar(Y*: DualSpace(Y)) →

  // (1) ⇒ (2)
  lemma One_Implies_Two() {
    assume(T: (∥⋅∥_X, ∥⋅∥_Y)-continuous) →
    assert(∀f ∈ Y* ⇒ f∘T: (X,∥⋅∥_X) → GF is continuous) →
    apply(ContinuityInitialTopology()) →
    apply(CompositeContinuousMapping()) →
    conclude(T: (∥⋅∥_X, w_Y)-continuous)
  } →

  // (2) ⇒ (3)
  lemma Two_Implies_Three() {
    assume(T: (∥⋅∥_X, w_Y)-continuous) →
    assert(∀f ∈ Y* ⇒ f∘T: (X,∥⋅∥_X) → GF is continuous) →
    apply(ContinuousLinearFunctionalWeakTopology()) →
    assert(∀f ∈ Y* ⇒ f∘T: (X,w_X) → GF is continuous) →
    apply(ContinuityInitialTopology()) →
    conclude(T: (w_X, w_Y)-continuous)
  } →

  // (3) ⇒ (1)
  lemma Three_Implies_One() {
    assume(T: (w_X, w_Y)-continuous) →
    byContradiction() {
      assume(¬(T: (∥⋅∥_X, ∥⋅∥_Y)-continuous)) →
      apply(ContinuityLinearTransformations()) →
      assert(T is not bounded) →
      
      setSequence(x_n ∈ X: ∥x_n∥_X ≤ 1/n ∧ ∥T(x_n)∥_Y > n) →
      assert(∥x_n∥_X → 0) →
      apply(NormedSequenceConvergence()) →
      assert(x_n →_{w_X} 0_X) →
      apply(ContinuousSequentialContinuous()) →
      assert(T(x_n) →_{w_Y} 0_Y) →
      apply(WeaklyConvergentBounded()) →
      assert(sup{∥T(x_n)∥_Y: n ∈ ℕ} < ∞) →
      assert(∥T(x_n)∥_Y > n) →
      assert(sup{∥T(x_n)∥_Y: n ∈ ℕ} = ∞) →
      conclude(contradiction)
    } →
    conclude(T: (∥⋅∥_X, ∥⋅∥_Y)-continuous)
  }
}