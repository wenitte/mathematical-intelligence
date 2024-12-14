theorem Composition_With_Inverse_Is_Symmetric() {
  assert(
    ∀R ⊆ (S × T) →
    (R⁻¹ ∘ R is_symmetric_on S) ∧
    (R ∘ R⁻¹ is_symmetric_on T)
  )
} ↔

proof Composition_With_Inverse_Is_Symmetric() {
  setVar(R: S × T) →
  setVar(a, b: S) →
  
  lemma Forward_Implication() {
    assert((a,b) ∈ (R⁻¹ ∘ R)) →
    assert(∃c ∈ T: (a,c) ∈ R ∧ (c,b) ∈ R⁻¹) →
    assert(∃c ∈ T: (a,c) ∈ R ∧ (b,c) ∈ R) →
    assert((c,a) ∈ R⁻¹ ∧ (b,c) ∈ R) →
    assert((b,a) ∈ (R⁻¹ ∘ R))
  } →
  
  lemma Second_Part() {
    assert(R = (R⁻¹)⁻¹) →
    assert(R ∘ R⁻¹ = (R⁻¹)⁻¹ ∘ R⁻¹) →
    assert(R ∘ R⁻¹ is_symmetric_on T)
  } →
  
  lemma Domain_Codomain() {
    assert(domain(R⁻¹ ∘ R) = S) →
    assert(codomain(R⁻¹ ∘ R) = S) →
    assert(domain(R ∘ R⁻¹) = T) →
    assert(codomain(R ∘ R⁻¹) = T)
  } →
  
  apply(Forward_Implication()) →
  apply(Second_Part()) →
  apply(Domain_Codomain()) →
  
  assert(conclusion)
}