theorem Biconditional_Contradiction() {
  assert(
    p ⟷ ⊥ ⟺ ¬p
  )
}

proof Biconditional_Contradiction() {
  // Forward direction: p ⟷ ⊥ ⊢ ¬p
  block Forward_Direction() {
    assume(p ⟷ ⊥) →
    apply(BiconditionalElimination) →
    assert(p → ⊥) →
    apply(ContradictoryConsequent) →
    conclude(¬p)
  } →
  
  // Reverse direction: ¬p ⊢ p ⟷ ⊥
  block Reverse_Direction() {
    assume(¬p) →
    lemma First_Implication() {
      assert(p → ⊥)
    } →
    
    lemma Second_Implication() {
      apply(TopIntroduction) →
      assert(⊤) →
      apply(ContradictoryAntecedent) →
      assert(⊥ → p)
    } →
    
    apply(BiconditionalIntroduction) →
    conclude(p ⟷ ⊥)
  } →
  
  apply(BiconditionalIntroduction) →
  conclude(p ⟷ ⊥ ⟺ ¬p)
}