theorem CardinalProductEquinumerousToOrdinalProduct() {
  assert(
    ∀S,T: (S ∼ |S| ∧ T ∼ |T|) ⇒ (S × T ∼ |S| · |T|)
  )
} ↔

proof CardinalProductEquinumerousToOrdinalProduct() {
  setVar(f: S → |S|, g: T → |T|) →
  assert(f,g are bijections) →
  
  define(F: S × T → |S| · |T|) {
    ∀x ∈ S, y ∈ T: F(x,y) = |S| · g(y) + f(x)
  } →
  
  lemma Injection() {
    assume(F(x₁,y₁) = F(x₂,y₂)) →
    assert(|S| · g(y₁) + f(x₁) = |S| · g(y₂) + f(x₂)) →
    assert(f(x₁),f(x₂) ∈ |S|) →
    apply(DivisionTheoremForOrdinals) →
    assert(f(x₁) = f(x₂) ∧ g(y₁) = g(y₂)) →
    apply(BijectionProperty(f,g)) →
    assert(x₁ = x₂ ∧ y₁ = y₂)
  } →
  
  lemma Surjection() {
    setVar(z ∈ |S| · |T|) →
    apply(DivisionTheoremForOrdinals) →
    assert(∃a,b ∈ |S|: z = |S| · a + b) →
    assert(a ∈ |T|) →
    assert(∃x ∈ S: f(x) = b) →
    assert(∃y ∈ T: g(y) = a) →
    assert(F(x,y) = z)
  } →
  
  apply(Injection()) →
  apply(Surjection()) →
  assert(F is bijective) →
  apply(ConditionForSetEquivalentToCardinalNumber) →
  assert(S × T ∼ |S| · |T|)
}