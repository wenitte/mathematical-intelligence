theorem Birkhoff_Kakutani_Lemma() {
  assert(
    ∀X: TopVectorSpace, GF ∈ {ℝ,ℂ}, D: BinaryTerminating, {Vₙ}ₙ∈ℕ: LocalBasis →
    (isHausdorff(X) ∧ isFirstCountable(X) ∧
     ∀n∈ℕ: Vₙ₊₁ + Vₙ₊₁ ⊆ Vₙ) →
    ∀r,s ∈ D: (r + s < 1) →
    Aᵣ + Aₛ ⊆ Aᵣ₊ₛ
    where Aᵣ := ∑ⱼ₌₁^∞ cⱼ(r)Vⱼ
  )
}

proof Birkhoff_Kakutani_Lemma() {
  lemma Induction_Prop(m: ℕ) {
    assert(
      ∀n>m: (cₙ(r) = 0 ∧ cₙ(s) = 0) →
      Aᵣ + Aₛ ⊆ Aᵣ₊ₛ
    )
  } →

  // Base case
  proof Base_Case() {
    setVar(m := 1) →
    assert(r,s ∈ {0, 2⁻¹}) →
    assert(r + s < 1) →
    assert(r + s = 2⁻¹) →
    assert(Aᵣ + Aₛ = 2⁻¹V₁ = Aᵣ₊ₛ)
  } →

  // Inductive step
  proof Inductive_Step() {
    assume(Induction_Prop(N)) →
    setVar(r' := r - cₙ₊₁(r)2⁻ⁿ⁻¹) →
    setVar(s' := s - cₙ₊₁(s)2⁻ⁿ⁻¹) →
    
    assert(∀n>N: cₙ(r') = cₙ(s') = 0) →
    assert(Aᵣ′ + Aₛ′ ⊆ Aᵣ′₊ₛ′) →
    
    // Case analysis
    cases {
      case(cₙ₊₁(r) = 0 ∧ cₙ₊₁(s) = 0) {
        assert(r = r' ∧ s = s') →
        assert(Aᵣ + Aₛ ⊆ Aᵣ₊ₛ)
      }
      case(cₙ₊₁(r) = 0 ∧ cₙ₊₁(s) = 1) {
        assert(Aᵣ + Aₛ ⊆ Aᵣ′₊ₛ′ + Vₙ₊₁) →
        assert(Aᵣ′₊ₛ′ + Vₙ₊₁ = Aᵣ₊ₛ)
      }
      case(cₙ₊₁(r) = 1 ∧ cₙ₊₁(s) = 1) {
        assert(Aᵣ + Aₛ ⊆ Aᵣ′₊ₛ′ + Vₙ + Vₙ₊₁) →
        assert(Aᵣ′₊ₛ′ + Vₙ = Aᵣ₊ₛ)
      }
    }
  } →
  
  conclude(Induction_Prop(N) → Induction_Prop(N+1)) →
  conclude(∀N∈ℕ: Induction_Prop(N)) →
  conclude(Aᵣ + Aₛ ⊆ Aᵣ₊ₛ)
}