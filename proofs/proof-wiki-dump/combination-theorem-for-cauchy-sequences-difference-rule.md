theorem Combination_Theorem_Cauchy_Sequences_Difference() {
  assert(
    let R: NormedDivisionRing ∧
    let {xₙ}: Sequence(R) ∧
    let {yₙ}: Sequence(R) ∧
    isCauchy({xₙ}) ∧
    isCauchy({yₙ}) ⇒
    isCauchy({xₙ - yₙ})
  )
}

proof Combination_Theorem_Cauchy_Sequences_Difference() {
  // First establish that negation of sequence is Cauchy
  lemma NegativeSequence() {
    assert(
      let {-yₙ} = {(-1)yₙ} ∧
      isCauchy({yₙ}) ⇒ isCauchy({-yₙ})
    )
  } →
  
  apply(MultipleRuleNormedDivisionRingSequences()) →
  apply(NegativeSequence()) →
  
  // Then use sum rule on original and negative sequence
  lemma SumSequence() {
    assert(
      {xₙ - yₙ} = {xₙ + (-yₙ)} ∧
      isCauchy({xₙ}) ∧
      isCauchy({-yₙ}) ⇒
      isCauchy({xₙ - yₙ})
    )
  } →
  
  apply(SumRuleNormedDivisionRingSequences()) →
  apply(SumSequence()) →
  
  assert(isCauchy({xₙ - yₙ}))
}