theorem Conditional_From_Negated_Conjunction() {
  assert(
    ∀p,q ∈ Propositions ⇒ [¬(p ∧ ¬q) ⊢ (p → q)]
  )
} ↔

proof Conditional_From_Negated_Conjunction() {
  setVar(p,q: Propositions) →
  
  lemma DeMorgans() {
    assert(¬(p ∧ ¬q) ↔ (¬p ∨ ¬¬q))
  } →
  
  lemma MaterialImplication() {
    assert((¬p ∨ ¬¬q) ↔ (p → ¬¬q))
  } →
  
  step1: assert(¬(p ∧ ¬q)) [premise] →
  step2: assert(¬p ∨ ¬¬q) [apply(DeMorgans(), step1)] →
  step3: assert(p → ¬¬q) [apply(MaterialImplication(), step2)] →
  
  assumeBlock() {
    assume(p) →
    step4: assert(¬¬q) [apply(ModusPonens(), step3, p)] →
    step5: assert(q) [apply(DoubleNegationElim(), step4)]
  } →
  
  step6: assert(p → q) [apply(ImplicationIntro(), assumeBlock())] →
  conclude(step6)
}

requirements {
  assert(requires(LawOfExcludedMiddle))
  assert(requires(DoubleNegationElimination))
  assert(scope = ClassicalLogic)
  assert(¬scope = IntuitionisticLogic)
}