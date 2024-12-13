theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀S,T: [(T ∼ S₁ ⊆ S) ∧ (S ∼ T₁ ⊆ T)] → (S ∼ T)
  )
  equiv(
    ∀S,T: [(T ≼ S) ∧ (S ≼ T)] → (S ∼ T)
  )
}

proof Cantor_Bernstein_Schroeder() {
  // Using Proof 1 approach
  
  setVar(f: S → T₁) →
  setVar(g: T → S₁) →
  
  lemma Image_Chain() {
    let(S₂ = g[f[S]]) →
    assert(S₂ ⊆ S₁) →
    assert(S₂ ∼ S)
  } →

  lemma Descending_Chain() {
    ∀k∈ℕ: let(Sₖ₊₂ = g∘f[Sₖ]) →
    assert(S ⊇ S₁ ⊇ S₂ ⊇ ... ⊇ Sₖ ⊇ Sₖ₊₁)
  } →

  let(D = ⋂ₖ₌₁^∞ Sₖ) →

  lemma Set_Decomposition() {
    assert(S = (S\S₁) ∪ (S₁\S₂) ∪ ... ∪ (Sₖ\Sₖ₊₁) ∪ ... ∪ D) →
    assert(S₁ = (S₁\S₂) ∪ (S₂\S₃) ∪ ... ∪ (Sₖ\Sₖ₊₁) ∪ ... ∪ D)
  } →

  let(M = (S₁\S₂) ∪ (S₃\S₄) ∪ (S₅\S₆) ∪ ...) →
  let(N = (S\S₁) ∪ (S₂\S₃) ∪ (S₄\S₅) ∪ ...) →
  let(N₁ = (S₂\S₃) ∪ (S₄\S₅) ∪ (S₆\S₇) ∪ ...) →

  assert(N ∼ N₁) →
  assert(S = D ∪ M ∪ N) →
  assert(S₁ = D ∪ M ∪ N₁) →
  
  // Construct bijection
  assert(∃h: S → S₁) →
  assert(S₁ ∼ T) →
  conclude(S ∼ T)
}

proof_end