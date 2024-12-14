theorem ChebyshevDistanceTranslationInvariant() {
  let(τ_t: ℝ² → ℝ²) ∧
  let(t = [a; b] ∈ ℝ²) ∧
  let(d_∞: ℝ² × ℝ² → ℝ) ∧
  assert(
    ∀x,y ∈ ℝ² ⇒ d_∞(τ_t(x), τ_t(y)) = d_∞(x,y)
  )
}

proof ChebyshevDistanceTranslationInvariant() {
  setVar(x = (x₁,x₂) ∈ ℝ²) ∧
  setVar(y = (y₁,y₂) ∈ ℝ²) →
  
  assert(d_∞(τ_t(x), τ_t(y))) →
  
  lemma TranslationDefinition() {
    assert(τ_t(x) = x - t ∧ τ_t(y) = y - t)
  } →
  apply(TranslationDefinition()) →
  assert(d_∞(x - t, y - t)) →
  
  lemma ChebyshevDistanceDefinition() {
    assert(d_∞(x - t, y - t) = max{|(x₁-a)-(y₁-a)|, |(x₂-b)-(y₂-b)|})
  } →
  apply(ChebyshevDistanceDefinition()) →
  
  lemma Simplification() {
    assert(
      |(x₁-a)-(y₁-a)| = |x₁-y₁| ∧
      |(x₂-b)-(y₂-b)| = |x₂-y₂|
    )
  } →
  apply(Simplification()) →
  assert(max{|x₁-y₁|, |x₂-y₂|}) →
  
  lemma ChebyshevDistanceDefinitionReverse() {
    assert(max{|x₁-y₁|, |x₂-y₂|} = d_∞(x,y))
  } →
  apply(ChebyshevDistanceDefinitionReverse()) →
  assert(d_∞(x,y))
}