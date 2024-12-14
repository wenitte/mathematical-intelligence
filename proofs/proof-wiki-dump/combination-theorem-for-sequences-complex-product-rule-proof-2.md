theorem ComplexProductLimit() {
  assert(
    ∀{zₙ, wₙ, c, d} ∈ ℂ ⇒ 
    (lim[n→∞](zₙ) = c ∧ lim[n→∞](wₙ) = d) ⇒ 
    lim[n→∞](zₙwₙ) = cd
  )
} ↔

proof ComplexProductLimit() {
  setVar(zₙ: xₙ + iyₙ, wₙ: uₙ + ivₙ, c: a + ib, d: e + if) →
  
  lemma ComplexLimit1() {
    assert(lim[n→∞](zₙ) = c) ⇒
    lim[n→∞](xₙ) + i·lim[n→∞](yₙ) = a + ib
  } →

  lemma ComplexLimit2() {
    assert(lim[n→∞](wₙ) = d) ⇒
    lim[n→∞](uₙ) + i·lim[n→∞](vₙ) = e + if
  } →

  apply(ComplexMultiplication) →
  assert(lim[n→∞](zₙwₙ) = lim[n→∞]((xₙuₙ - yₙvₙ) + i(yₙuₙ + xₙvₙ))) →
  
  apply(ComplexSequenceDefinition) →
  assert(= lim[n→∞](xₙuₙ - yₙvₙ) + i·lim[n→∞](yₙuₙ + xₙvₙ)) →
  
  apply(RealSequenceSumRule) →
  assert(= (lim[n→∞](xₙuₙ) - lim[n→∞](yₙvₙ)) + i(lim[n→∞](yₙuₙ) + lim[n→∞](xₙvₙ))) →
  
  apply(RealSequenceProductRule) →
  assert(= (lim[n→∞](xₙ)·lim[n→∞](uₙ) - lim[n→∞](yₙ)·lim[n→∞](vₙ)) + 
         i(lim[n→∞](yₙ)·lim[n→∞](uₙ) + lim[n→∞](xₙ)·lim[n→∞](vₙ))) →
  
  apply(SubstitutionRule) →
  assert(= (ae - bf) + i(be + af)) →
  
  apply(ComplexMultiplication) →
  assert(= (a + ib)(e + if)) →
  
  assert(= cd)
}