theorem Relation_Composition_Not_Commutative() {
  assert(
    ∃R₁,R₂: Relation ⇒ (R₁ ∘ R₂ ≠ R₂ ∘ R₁)
  )
} ↔

proof Relation_Composition_Not_Commutative() {
  // Proof by counterexample
  letSet(S = {0, 1, 2}) →
  letRelation(R₁ = ⟨S, S, {⟨0, 1⟩}⟩) →
  letRelation(R₂ = ⟨S, S, {⟨1, 2⟩}⟩) →

  lemma Composition_R1R2() {
    assert(R₁ ∘ R₂ = ⟨S, S, {⟨0, 2⟩}⟩) →
    assert(∃x,y,z ∈ S : ⟨x,y⟩ ∈ R₁ ∧ ⟨y,z⟩ ∈ R₂ ⇒ ⟨0,2⟩ ∈ (R₁ ∘ R₂))
  } →

  lemma Composition_R2R1() {
    assert(R₂ ∘ R₁ = ⟨S, S, ∅⟩) →
    assert(¬∃x,y,z ∈ S : ⟨x,y⟩ ∈ R₂ ∧ ⟨y,z⟩ ∈ R₁)
  } →

  apply(Composition_R1R2()) →
  apply(Composition_R2R1()) →
  assert(R₁ ∘ R₂ ≠ R₂ ∘ R₁)
}