theorem Cartesian_Product_Cardinality_Symmetry() {
  assert(
    ∀S,T: (isFinite(S) ∧ isFinite(T)) → |S × T| = |T × S|
  )
}

proof Cartesian_Product_Cardinality_Symmetry_1() {
  setVar(S: Set, T: Set) →
  assert(|S × T| = |S| × |T|) by CardinalityOfCartesianProduct →
  assert(|S| × |T| = |T| × |S|) by IntegerMultiplicationCommutative →
  assert(|T| × |S| = |T × S|) by CardinalityOfCartesianProduct →
  conclude(|S × T| = |T × S|)
}

proof Cartesian_Product_Cardinality_Symmetry_2() {
  setVar(S: Set, T: Set) →
  define(f: S × T → T × S, f(s,t) = (t,s)) →
  
  lemma Injective() {
    assert(∀s₁,s₂ ∈ S, ∀t₁,t₂ ∈ T:
      f(s₁,t₁) = f(s₂,t₂) → (s₁,t₁) = (s₂,t₂)) →
    assert(f(s₁,t₁) = f(s₂,t₂) → (t₁,s₁) = (t₂,s₂)) →
    assert((t₁,s₁) = (t₂,s₂) → (s₁,t₁) = (s₂,t₂))
  } →

  lemma Surjective() {
    assert(∀(t,s) ∈ T × S: ∃(s,t) ∈ S × T: f(s,t) = (t,s))
  } →

  apply(Injective()) →
  apply(Surjective()) →
  assert(isBijective(f)) →
  assert(|S × T| = |T × S|) by CardinalityOfBijection
}