theorem Accumulation_Points_Distinct_Terms() {
  assert(
    ∀T(T = ⟨S,τₚ⟩ ∧ T is infinite particular point space) ∧
    ∀U(U ∈ τₚ ∧ U is countably infinite open set) ∧
    ∃{aᵢ}(sequence of distinct terms from U) ⇒
    (∀x ∈ U(x ≠ p → x is limit point of U) ∧
     ¬∃x ∈ U(x is accumulation point of {aᵢ}))
  )
} ↔

proof Accumulation_Points_Distinct_Terms() {
  setVar(T: particular_point_space) →
  setVar(U: open_set) →
  setVar({aᵢ}: sequence) →
  
  lemma Limit_Points_Particular() {
    assert(∀x ∈ U(x ≠ p → x is limit point of U))
  } →
  
  proof_by_contradiction() {
    assume(∃β ∈ S(β is accumulation point of {aᵢ})) →
    
    lemma Accumulation_Points_Particular() {
      assert(β is accumulation point → 
             infinite terms of {aᵢ} equal to β or p)
    } →
    
    apply(Accumulation_Points_Particular()) →
    assert(infinite terms equal to β or p) →
    assert(contradicts {aᵢ} has distinct terms) →
    conclude(contradiction)
  } →
  
  conclude(¬∃x ∈ U(x is accumulation point of {aᵢ}))
}