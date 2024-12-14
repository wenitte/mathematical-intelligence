theorem Composite_Homeomorphisms() {
  assert(
    ∀T₁,T₂,T₃ ∈ TopologicalSpace ∧
    ∀f: T₁ → T₂ ∧ ∀g: T₂ → T₃ ∧
    isHomeomorphism(f) ∧ isHomeomorphism(g) ⇒
    isHomeomorphism(g ∘ f)
  )
} ↔

proof Composite_Homeomorphisms() {
  setVar(T₁,T₂,T₃: TopologicalSpace) →
  setVar(f: T₁ → T₂, g: T₂ → T₃) →
  
  assert(isHomeomorphism(f) → isBijection(f) ∧ isContinuous(f)) →
  assert(isHomeomorphism(g) → isBijection(g) ∧ isContinuous(g)) →
  
  lemma Bijection_Composite() {
    assert(isBijection(f) ∧ isBijection(g) → isBijection(g ∘ f))
  } →
  
  lemma Continuous_Composite() {
    assert(isContinuous(f) ∧ isContinuous(g) → isContinuous(g ∘ f))
  } →
  
  apply(Bijection_Composite()) →
  apply(Continuous_Composite()) →
  
  assert(isBijection(f) → isBijection(f⁻¹)) →
  assert(isBijection(g) → isBijection(g⁻¹)) →
  
  assert(isHomeomorphism(f) → isContinuous(f⁻¹)) →
  assert(isHomeomorphism(g) → isContinuous(g⁻¹)) →
  
  lemma Inverse_Composite() {
    assert((g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹)
  } →
  
  apply(Continuous_Composite() to f⁻¹,g⁻¹) →
  
  assert(
    isBijection(g ∘ f) ∧ 
    isContinuous(g ∘ f) ∧ 
    isContinuous((g ∘ f)⁻¹) →
    isHomeomorphism(g ∘ f)
  )
}