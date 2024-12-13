theorem Field_Groups_Not_Isomorphic() {
  assert(
    ∀F: Field ⇒
    let G₁ = ⟨F,+⟩ ∧
    let G₂ = ⟨F\{0_F},×⟩ ⇒
    ¬(G₁ ≅ G₂)
  )
} ↔

proof Field_Groups_Not_Isomorphic() {
  setVar(F: Field) →
  assumeContradiction(∃φ: G₂ → G₁ | isIsomorphism(φ)) →
  
  lemma Identity_Properties() {
    assert(
      identity(G₁) = 0_F ∧
      identity(G₂) = 1_F
    )
  } →

  assert(φ(1_F) = 0_F) by(epimorphism_preserves_identity) →
  assert(φ((-1_F)×(-1_F)) = φ(-1_F) + φ(-1_F)) by(isomorphism_def) →
  assert(φ(1_F) = φ(-1_F) + φ(-1_F)) →
  assert(0_F = φ(-1_F) + φ(-1_F)) →
  assert(char(F) = 2) →

  lemma Square_Maps() {
    setVar(x: F\{0_F}) →
    assert(φ(x²) = φ(x) + φ(x)) by(isomorphism_def) →
    assert(φ(x²) = 0_F) by(char_2)
  } →

  assert(ker(φ) = {1_F}) by(monomorphism_def) →
  assert(∀x ∈ F\{0_F} ⇒ x² = 1_F) →
  assert(|F\{0_F}| = 1) →
  assert(|F| = 2) →
  
  lemma Cardinality_Contradiction() {
    assert(
      dom(φ) = F\{0_F} ∧
      |dom(φ)| = 1 ∧
      cod(φ) = F ∧
      |cod(φ)| = 2 ⇒
      ¬isBijective(φ)
    )
  } →
  
  assert(¬isIsomorphism(φ)) →
  conclude(contradiction)
}