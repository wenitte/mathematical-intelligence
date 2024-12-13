theorem BoundedLinearTransformation_DualOperator() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X, Y: BanachSpace(GF)) ∧
  let(X*, Y*: NormedDual(X), NormedDual(Y)) ∧
  let(T: X → Y, BoundedLinearTransformation) ∧
  let(T*: Y* → X*, DualOperator(T)) →
  assert(
    IsIntoLinearIsomorphism(T) ↔ IsSurjective(T*)
  )
}

proof BoundedLinearTransformation_DualOperator() {
  let(BX*⁻, BY*⁻: ClosedUnitBall(X*), ClosedUnitBall(Y*)) →
  
  // Necessary Condition
  proof_forward() {
    assume(IsSurjective(T*)) →
    apply(DualOperator_is_BoundedLinear(T*)) →
    apply(BanachSchauderTheorem(T*)) →
    apply(OpenLinearTransformation_Characterization()) →
    assert(∃δ > 0: δBX*⁻ ⊆ T*(BY*⁻)) →
    
    forall(x ∈ X) {
      chain_equality(
        ∥Tx∥_Y,
        sup{f ∈ Y*: |f(Tx)|},                   // by NormedDual_Norm
        sup{f ∈ Y*: |(T*f)(x)|},                // by DualOperator_Definition
        sup{g ∈ T*(BY*⁻): |g(x)|},              // by Substitution
        ≥ sup{g ∈ δBX*⁻: |g(x)|},               // by Subset_Supremum
        = δ·sup{g ∈ BX*⁻: |g(x)|},              // by Supremum_Multiple
        = δ·∥x∥_X                               // by NormedDual_Norm
      ) →
      assert(ker(T) = {0_X}) →
      apply(LinearTransformation_Injective_Kernel()) →
      apply(InvertibleBoundedLinear_Characterization()) →
      conclude(IsIntoLinearIsomorphism(T))
    }
  }

  // Sufficient Condition
  proof_reverse() {
    assume(IsIntoLinearIsomorphism(T)) →
    let(T⁻¹: T(X) → X, BoundedLinearTransformation) →
    forall(f ∈ X*) {
      assert(f∘T⁻¹: T(X) → GF, Continuous) →      // by Composite_Continuous
      apply(LinearFunctionals_Continuity(f∘T⁻¹)) →
      apply(HahnBanach_Theorem()) →
      exists(g ∈ Y*: ∀y ∈ T(X): g(y) = f(T⁻¹(y))) →
      
      forall(x ∈ X) {
        chain_equality(
          (T*g)(x),
          (g∘T)(x),
          ((f∘T⁻¹)∘T)(x),
          f(x)                                    // by Composition_Associative
        ) →
        conclude(T*g = f)
      } →
      conclude(IsSurjective(T*))
    }
  }
}