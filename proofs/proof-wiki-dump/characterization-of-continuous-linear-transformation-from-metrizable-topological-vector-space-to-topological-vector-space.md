theorem Continuous_Linear_Transform_Characterization() {
  let(GF ∈ {ℝ, ℂ})
  let(X: MetrizableTVS(GF))
  let(Y: TopologicalVectorSpace(GF))
  let(T: LinearTransform(X → Y))
  
  assert(
    equivalent(
      1: isContinuous(T),
      2: isBounded(T),
      3: ∀{xₙ}(sequence(X)) [
        (xₙ → 0_X) ⇒ isVonNeumannBounded(T(xₙ))
      ],
      4: ∀{xₙ}(sequence(X)) [
        (xₙ → 0_X) ⇒ (T(xₙ) → 0_Y)
      ]
    )
  )
} ↔

proof Continuous_Linear_Transform_Characterization() {
  // 1 ⇒ 2
  proof_1_implies_2() {
    apply(Continuous_Linear_Transform_is_Bounded())
  } →

  // 2 ⇒ 3
  proof_2_implies_3() {
    apply(Bounded_Linear_Transform_Image_is_VNBounded())
  } →

  // 3 ⇒ 4
  proof_3_implies_4() {
    assume(∀{xₙ}[xₙ → 0_X ⇒ isVonNeumannBounded(T(xₙ))]) →
    apply(Null_Sequence_Dominates_Infinity()) {
      obtain(∃{γₙ}(ℝ⁺) [γₙ → ∞ ∧ γₙxₙ → 0_X])
    } →
    assert(isVonNeumannBounded(T(γₙxₙ))) →
    assert(γₙ⁻¹ → 0) →
    apply(Sequential_VNBoundedness_Characterization()) {
      assert(γₙ⁻¹T(γₙxₙ) → 0_Y)
    } →
    apply(linearity(T)) {
      assert(γₙ⁻¹T(γₙxₙ) = T(xₙ))
    } →
    conclude(T(xₙ) → 0_Y)
  } →

  // 4 ⇒ 1
  proof_4_implies_1() {
    proof_by_contrapositive() {
      assume(¬isContinuous(T)) →
      apply(Linear_Transform_Continuous_at_Origin()) →
      obtain(∃W(open(Y)) [
        ∀U(open(X)) [T(U) ⊈ W]
      ]) →
      obtain(d: metric(X)) →
      setVar(Uₙ := {x ∈ X: d(x,0_X) < n⁻¹}) →
      construct({xₙ}(sequence(X))) {
        assert(∀n [xₙ ∈ Uₙ ∧ T(xₙ) ∉ W])
      } →
      assert(xₙ → 0_X) →
      assert(¬(T(xₙ) → 0_Y)) →
      conclude(¬statement(4))
    }
  }
}