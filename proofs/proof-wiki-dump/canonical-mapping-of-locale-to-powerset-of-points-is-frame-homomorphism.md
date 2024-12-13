theorem Canonical_Mapping_Frame_Homomorphism() {
  let L: Locale with preorder ≼
  let pt(L): Points of L as completely prime filters
  let Σₐ = {p ∈ pt(L) : a ∈ p} for a ∈ L
  let Σ: L → P(pt(L)) where ∀a ∈ L, Σ(a) = Σₐ
  
  assert(
    Σ: (L,≼) → (P(pt(L)),⊆) is a frame homomorphism
  )
} ↔

proof Canonical_Mapping_Frame_Homomorphism() {
  // First part: Preserves arbitrary supremums
  lemma Preserves_Supremums() {
    setVar({aᵢ : i ∈ I}: indexed_family(L)) →
    let(∨ᵢ∈I aᵢ: supremum({aᵢ : i ∈ I})) →
    
    assert(
      ∀p ∈ pt(L): [
        p ∈ Σ(∨ᵢ∈I aᵢ) ↔ 
        (∨ᵢ∈I aᵢ) ∈ p ↔ 
        ∃i ∈ I: aᵢ ∈ p ↔ 
        ∃i ∈ I: p ∈ Σ(aᵢ) ↔ 
        p ∈ ∪ᵢ∈I Σ(aᵢ)
      ]
    ) →
    conclude(Σ(∨ᵢ∈I aᵢ) = ∪ᵢ∈I Σ(aᵢ))
  } →

  // Second part: Preserves finite infimums
  lemma Preserves_Finite_Infimums() {
    setVar({aᵢ : i ∈ I}: finite_indexed_family(L)) →
    let(∧ᵢ∈I aᵢ: infimum({aᵢ : i ∈ I})) →
    
    assert(
      ∀p ∈ pt(L): [
        p ∈ Σ(∧ᵢ∈I aᵢ) ↔ 
        (∧ᵢ∈I aᵢ) ∈ p ↔ 
        ∀i ∈ I: aᵢ ∈ p ↔ 
        ∀i ∈ I: p ∈ Σ(aᵢ) ↔ 
        p ∈ ∩ᵢ∈I Σ(aᵢ)
      ]
    ) →
    conclude(Σ(∧ᵢ∈I aᵢ) = ∩ᵢ∈I Σ(aᵢ))
  } →

  apply(Preserves_Supremums()) ∧
  apply(Preserves_Finite_Infimums()) →
  conclude(
    Σ is a frame homomorphism by preserving 
    arbitrary joins and finite meets
  )
}