theorem Commutativity_Powers_Semigroup() {
  assert(
    let(S: Semigroup) ∧
    ∀a,b ∈ S: (Cancellable(a) ∧ Cancellable(b)) ⇒
    (∀m,n ∈ ℕ₊: (a ∘ b = b ∘ a) → (a^m ∘ b^n = b^n ∘ a^m)) ∧
    ¬(∀m,n ∈ ℕ₊: (a^m ∘ b^n = b^n ∘ a^m) → (a ∘ b = b ∘ a))
  )
} ↔

proof Commutativity_Powers_Semigroup() {
  # First part
  setVar(a,b: S) →
  assume(a ∘ b = b ∘ a) →
  apply(Powers_Commuting_Elements_Theorem()) →
  assert(∀m,n ∈ ℕ₊: a^m ∘ b^n = b^n ∘ a^m) →

  # Second part - counterexample
  lemma Counterexample() {
    define(D₃: Group) →
    assert(D₃ = ⟨a,b: a³ = b² = e, bab = a⁻¹⟩) →
    assert(Group(D₃) → Semigroup(D₃)) →
    assert(∀x ∈ D₃: Cancellable(x)) →
    assert(a³ ∘ b² = b² ∘ a³ = e ∘ e = e) ∧
    assert(a ∘ b ≠ b ∘ a)
  } →
  apply(Counterexample()) →
  conclude(¬(∀m,n ∈ ℕ₊: (a^m ∘ b^n = b^n ∘ a^m) → (a ∘ b = b ∘ a)))
}