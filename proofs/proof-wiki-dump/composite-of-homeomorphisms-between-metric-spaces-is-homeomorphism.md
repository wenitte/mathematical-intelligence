theorem Composite_Homeomorphisms_Is_Homeomorphism() {
  assert(
    ∀M₁,M₂,M₃ [MetricSpace(M₁) ∧ MetricSpace(M₂) ∧ MetricSpace(M₃)] ∧
    ∀f:M₁→M₂ [Homeomorphism(f)] ∧
    ∀g:M₂→M₃ [Homeomorphism(g)] ⇒
    Homeomorphism(g∘f)
  )
} ↔

proof Composite_Homeomorphisms_Is_Homeomorphism() {
  setVar(M₁,M₂,M₃: MetricSpace) →
  setVar(f: M₁→M₂, g: M₂→M₃) →
  
  assert(Homeomorphism(f) ↔ [Bijection(f) ∧ Continuous(f)]) →
  assert(Homeomorphism(g) ↔ [Bijection(g) ∧ Continuous(g)]) →
  
  lemma Composite_Bijection() {
    assert(
      Bijection(f) ∧ Bijection(g) ⇒ Bijection(g∘f)
    )
  } →
  
  lemma Composite_Continuous() {
    assert(
      Continuous(f) ∧ Continuous(g) ⇒ Continuous(g∘f)
    )
  } →
  
  apply(Composite_Bijection()) →
  apply(Composite_Continuous()) →
  assert(Bijection(g∘f) ∧ Continuous(g∘f)) →
  
  lemma Inverse_Bijection() {
    assert(
      Bijection(f) ⇒ Bijection(f⁻¹) ∧
      Bijection(g) ⇒ Bijection(g⁻¹)
    )
  } →
  
  apply(Inverse_Bijection()) →
  assert(Continuous(f⁻¹) ∧ Continuous(g⁻¹)) →
  assert((g∘f)⁻¹ = f⁻¹∘g⁻¹) →
  apply(Composite_Continuous()) →
  assert(Continuous((g∘f)⁻¹)) →
  
  assert(Homeomorphism(g∘f))
}