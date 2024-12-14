theorem CompositionDirectImageMappings() {
  assert(
    ∀A,B,C ∈ Sets ∧ A≠∅ ∧ B≠∅ ∧ C≠∅ ∧
    R₁ ⊆ A×B ∧ R₂ ⊆ B×C ∧
    R₁→: 𝒫(A) → 𝒫(B) ∧
    R₂→: 𝒫(B) → 𝒫(C) 
    ⇒ (R₂∘R₁)→ = R₂→∘R₁→
  )
} ↔

proof CompositionDirectImageMappings() {
  lemma NonEmptyCase() {
    setVar(S ⊆ A ∧ S≠∅) →
    assert((R₂→∘R₁→)(S) = R₂→(R₁→(S))) →
    assert(R₂→(R₁→(S)) = {R₂(x): x ∈ R₁→(S)}) →
    assert({R₂(x): x ∈ R₁→(S)} = {R₂(x): ∃y ∈ S: (x,y) ∈ R₁}) →
    assert({R₂(x): ∃y ∈ S: (x,y) ∈ R₁} = {R₂(R₁(y)): y ∈ S}) →
    assert({R₂(R₁(y)): y ∈ S} = {(R₂∘R₁)(y): y ∈ S}) →
    assert({(R₂∘R₁)(y): y ∈ S} = (R₂∘R₁)→(S))
  } →

  lemma EmptyCase() {
    setVar(S = ∅) →
    assert((R₂→∘R₁→)(∅) = ∅) →
    assert(∅ = (R₂∘R₁)→(∅))
  } →

  apply(NonEmptyCase()) ∧ apply(EmptyCase()) →
  assert((R₂∘R₁)→ = R₂→∘R₁→)
}