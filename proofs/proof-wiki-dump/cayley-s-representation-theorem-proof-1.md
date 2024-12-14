theorem CayleyRepresentation() {
  assert(
    ∀G(G is_finite_group) ⇒ 
    ∃n ∈ ℤ ∧ ∃H ⊆ Sₙ: G ≅ H
  )
} ↔

proof CayleyRepresentation() {
  setVar(G: finite_group) →
  setVar(H = {e}) →
  
  lemma PermutationCosets() {
    assert(
      ∀G(G is_group) ∧ H ⊆ G ⇒
      ∃θ: G → Sₙ is_homomorphism ∧
      ker(θ) = {e}
    )
  } →

  apply(PermutationCosets()) →
  assert(∃θ: G → Sₙ is_homomorphism) ∧
  assert(ker(θ) = {e}) →

  lemma FirstIsomorphismTheorem() {
    assert(
      ∀θ(θ is_homomorphism) ∧ ker(θ) = {e} ⇒
      G ≅ im(θ) ⊆ Sₙ
    )
  } →

  apply(FirstIsomorphismTheorem()) →
  assert(G ≅ im(θ) ⊆ Sₙ)
}