theorem CoCntblMeasureIsProbMeasure() {
  assert(
    ∀X[uncountable(X) ∧ 
    ∃𝔸[σ_algebra(𝔸) ∧ 𝔸 = {A ⊆ X: countable(A)}] ∧
    ∃μ[coCntblMeasure(μ, X)]] ⇒
    probMeasure(μ)
  )
}

proof CoCntblMeasureIsProbMeasure() {
  setVar(X: Set, 𝔸: σ_algebra, μ: Measure) →
  assert(uncountable(X)) →
  assert(𝔸 = {A ⊆ X: countable(A)}) →
  assert(coCntblMeasure(μ, X)) →
  
  apply(CoCntblMeasureIsMeasure()) →
  assert(measure(μ)) →
  
  lemma RelCompWithSelf() {
    assert(X \ X = ∅)
  } →
  
  assert(countable(∅)) →
  assert(coCntbl(X)) →
  assert(μ(X) = 1) →
  assert(probMeasure(μ))
}