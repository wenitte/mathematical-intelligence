theorem Composite_Quotient_Mappings() {
  assert(
    ∀T₁(S₁,τ₁),T₂(S₂,τ₂),T₃(S₃,τ₃) ∈ TopologicalSpaces ∧
    ∀f:S₁→S₂, g:S₂→S₃ ∈ QuotientMappings ⇒
    (g∘f):S₁→S₃ ∈ QuotientMappings
  )
} ↔

proof Composite_Quotient_Mappings() {
  setVar(T₁,T₂,T₃: TopologicalSpaces) →
  setVar(f:S₁→S₂, g:S₂→S₃: QuotientMappings) →
  
  lemma Composite_Surjective() {
    assert(g∘f ∈ Surjective)
  } →
  
  lemma Composite_Continuous() {
    assert(g∘f ∈ Continuous)
  } →
  
  setVar(U ⊆ S₃) →
  assume((g∘f)⁻¹[U] ∈ Open(T₁)) →
  
  assert(
    f[(g∘f)⁻¹[U]] ∈ Open(T₂)
  ) →
  
  assert(
    g∘f[(g∘f)⁻¹[U]] ∈ Open(T₃)
  ) →
  
  lemma Image_Preimage() {
    assert(g∘f[(g∘f)⁻¹[U]] = U)
  } →
  
  apply(Image_Preimage()) →
  assert(U ∈ Open(T₃)) →
  
  conclude(
    (g∘f) ∈ QuotientMappings
  )
}