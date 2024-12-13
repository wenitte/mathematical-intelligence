theorem Boolean_Interpretation_Well_Defined() {
  let(ℒ₀: PropositionalLogic) ∧
  let(v: ℒ₀ → {T,F}) ∧
  assert(v is_boolean_interpretation) →
  assert(v is_well_defined)
}

proof Boolean_Interpretation_Well_Defined() {
  apply(StrongInduction(WFF_length)) →
  
  // Base case for atomic propositions
  assert(∀p ∈ 𝒫₀: v(p) is_well_defined) ∧
  
  // Base case for length 1
  assert(∀A ∈ WFF: length(A) = 1 → 
    unique(parsing_sequence(A)) ∧
    unique(v(A))
  ) →
  
  // Inductive step
  lemma Inductive_Hypothesis() {
    assert(∀k ∈ ℕ: ∀A ∈ WFF: length(A) ≤ k → unique(v(A)))
  } →
  
  let(A: WFF, length(A) = k+1) →
  
  // Case 1: Negation
  case_analysis(
    case(A = ¬B) {
      assert(length(B) = k) →
      apply(Inductive_Hypothesis()) →
      assert(unique(v(B))) →
      assert(v(A) = f^¬(v(B))) →
      assert(unique(v(A)))
    },
    
    case(A = (B * C)) {
      apply(Unique_Parsability_Theorem()) →
      assert(unique(*)) ∧
      assert(length(B) < k+1 ∧ length(C) < k+1) →
      apply(Inductive_Hypothesis()) →
      assert(unique(v(B)) ∧ unique(v(C))) →
      assert(v(A) = f^*(v(B), v(C))) →
      assert(unique(v(A)))
    }
  ) →
  
  apply(Second_Mathematical_Induction_Principle()) →
  conclude(∀A ∈ WFF: unique(v(A)))
}