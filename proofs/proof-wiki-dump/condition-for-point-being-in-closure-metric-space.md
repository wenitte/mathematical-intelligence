theorem Closure_Point_Condition_Metric_Space() {
  assert(
    ∀M(M = ⟨S,d⟩ ∧ isMetricSpace(M)) ∧
    ∀H(H ⊆ S) ∧
    ∀x(x ∈ S) ⇒
    (x ∈ cl(H) ⟷ ∀ε(ε ∈ ℝ>0 ⇒ Bε(x) ∩ H ≠ ∅))
  )
} ↔

proof Closure_Point_Condition_Metric_Space() {
  setDef(cl(H) = Hi ∪ H') →
  
  // Sufficient Condition
  proof_part_1() {
    assume(x ∈ cl(H)) →
    
    case_1() {
      assume(x ∈ Hi) →
      assert(∃ε ∈ ℝ>0: Bε(x) ∩ H = {x}) →
      assert(x ∈ H) →
      assert(∀ε ∈ ℝ>0: x ∈ Bε(x)) →
      conclude(∀ε ∈ ℝ>0: Bε(x) ∩ H ≠ ∅)
    } ∧

    case_2() {
      assume(x ∈ H') →
      assert(∀ε ∈ ℝ>0: (Bε(x) ∖ {x}) ∩ H ≠ ∅) →
      conclude(∀ε ∈ ℝ>0: Bε(x) ∩ H ≠ ∅)
    }
  } →

  // Necessary Condition
  proof_part_2() {
    assume(∀ε ∈ ℝ>0: Bε(x) ∩ H ≠ ∅) →
    
    case_1() {
      assume(∃ε ∈ ℝ>0: Bε(x) ∩ H = {x}) →
      conclude(x ∈ Hi)
    } ∧

    case_2() {
      assume(∀ε ∈ ℝ>0: Bε(x) ∩ H ≠ {x}) →
      setVar(ε: ℝ>0) →
      assert(∃y(y ∈ Bε(x) ∩ H ∧ y ≠ x)) →
      assert(y ∈ (Bε(x) ∖ {x}) ∩ H) →
      conclude((Bε(x) ∖ {x}) ∩ H ≠ ∅) →
      conclude(x ∈ H')
    }
  } →
  
  conclude(x ∈ cl(H) ⟷ ∀ε(ε ∈ ℝ>0 ⇒ Bε(x) ∩ H ≠ ∅))
}