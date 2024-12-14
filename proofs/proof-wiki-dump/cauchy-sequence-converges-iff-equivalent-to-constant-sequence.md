theorem CauchySequenceConvergence() {
  assert(
    let R: NormedDivisionRing ∧
    let CC: CauchySequences(R) ∧
    let NN: NullSequences(R) ∧
    let quotient: CC/NN ∧
    let {xₙ}: Sequence ∈ CC ⇒
    (converges({xₙ}, R) ↔ 
     ∃a ∈ R: {xₙ} ∈ ({a,a,a,...} + NN))
  )
}

proof CauchySequenceConvergence() {
  setVar(R: NormedDivisionRing) →
  setVar({xₙ}: Sequence ∈ CC) →
  setVar(a: R) →
  
  lemma ConvergenceDefinition() {
    assert(
      converges({xₙ}, a) ↔ 
      lim(n→∞)||xₙ - a|| = 0
    )
  } →
  
  assert(
    lim(n→∞)||xₙ - a|| = 0 ↔
    {xₙ - a} ∈ NN
  ) by NullSequenceDefinition() →
  
  assert(
    {xₙ - a} ∈ NN ↔
    {xₙ} - {a,a,a,...} ∈ NN
  ) by CauchySequenceAddition() →
  
  assert(
    {xₙ} - {a,a,a,...} ∈ NN ↔
    {xₙ} ∈ ({a,a,a,...} + NN)
  ) by LeftCosetDefinition() →
  
  conclude(
    converges({xₙ}, R) ↔
    ∃a ∈ R: {xₙ} ∈ ({a,a,a,...} + NN)
  )
}