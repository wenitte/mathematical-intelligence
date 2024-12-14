theorem CNF_SAT_NP_Complete() {
  assert(
    CNF_SAT ∈ NP-complete
  )
} ↔

proof CNF_SAT_NP_Complete() {
  setVar(P: CNF_SAT_instance) →
  
  lemma CNF_SAT_in_NP() {
    assert(∀solution ∈ P →
      verify_time(solution) ∈ O(polynomial) ∧
      verify_method(solution) = checkAllClauses(solution)
    ) →
    conclude(CNF_SAT ∈ NP)
  } →

  lemma CNF_SAT_NP_hard() {
    assert(∀SAT_instance → ∃reduction_to_CNF_SAT) →
    
    sublemma Remove_Special_Ops() {
      setVar(x: new_variable) →
      assert(A ⟺ B ↔ x) →
      addClauses([
        (A ∨ B ∨ x),
        (A ∨ ¬B ∨ ¬x),
        (¬A ∨ B ∨ ¬x),
        (¬A ∨ ¬B ∨ x)
      ]) →
      assert(size_increase ∈ O(n))
    } →
    
    sublemma Convert_Unary_Ops() {
      assert(∀op ∈ {¬,fT,fF,fI} →
        ∃conversion_rule(op) ∧
        size_increase ∈ O(1)
      )
    } →
    
    sublemma Convert_Binary_Ops() {
      assert(∀op ∈ {∧,∨,→,↑,↓} →
        ∃conversion_rule(op) ∧
        size_increase ∈ O(1)
      )
    } →
    
    assert(total_reduction_size ∈ O(n)) →
    assert(reduction_time ∈ O(polynomial)) →
    conclude(CNF_SAT is NP-hard)
  } →
  
  apply(CNF_SAT_in_NP()) →
  apply(CNF_SAT_NP_hard()) →
  assert(CNF_SAT ∈ NP ∧ CNF_SAT is NP-hard) →
  conclude(CNF_SAT ∈ NP-complete)
}