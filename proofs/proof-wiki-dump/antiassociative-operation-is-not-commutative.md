theorem Antiassociative_Not_Commutative() {
  assert(
    ∀S[∀a,b ∈ S ∧ ∃(∘: S×S→S)] ∧
    (antiassociative(∘) ⇒ ¬commutative(∘))
  )
} ↔

proof Antiassociative_Not_Commutative() {
  lemma Existence_NonCommuting_Elements() {
    setVar(a ∈ S) →
    apply(Antiassociative_No_Idempotents) →
    assert(a ∘ a ≠ a) →
    setVar(b ∈ S: a ∘ a = b) →
    assert((a ∘ a) ∘ a = b ∘ a) →
    assert(a ∘ (a ∘ a) = a ∘ b) →
    apply(antiassociative(∘)) →
    assert((a ∘ a) ∘ a ≠ a ∘ (a ∘ a)) →
    therefore(b ∘ a ≠ a ∘ b)
  } →
  
  assert(
    ∃a,b ∈ S: a ∘ b ≠ b ∘ a
  ) →
  
  conclude(¬commutative(∘))
}