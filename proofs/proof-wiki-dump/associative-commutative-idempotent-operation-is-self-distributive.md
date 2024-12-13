theorem Associative_Commutative_Idempotent_Self_Distributive() {
  assume(S: Set, ∘: Operation(S)) →
  assert(
    (associative(∘) ∧ commutative(∘) ∧ idempotent(∘)) →
    ∀a,b,c ∈ S: (a ∘ b) ∘ (a ∘ c) = a ∘ b ∘ c = (a ∘ c) ∘ (b ∘ c)
  )
} ↔

proof Associative_Commutative_Idempotent_Self_Distributive() {
  setVar(a,b,c: S) →
  
  # Left equality
  assert((a ∘ b) ∘ (a ∘ c)) →
  apply(associative(∘)) →
  assert(a ∘ (b ∘ a) ∘ c) →
  apply(commutative(∘)) →
  assert(a ∘ (a ∘ b) ∘ c) →
  apply(associative(∘)) →
  assert((a ∘ a) ∘ b ∘ c) →
  apply(idempotent(∘)) →
  assert(a ∘ b ∘ c) →

  # Right equality  
  assert((a ∘ c) ∘ (b ∘ c)) →
  apply(associative(∘)) →
  assert(a ∘ (c ∘ b) ∘ c) →
  apply(commutative(∘)) →
  assert(a ∘ (b ∘ c) ∘ c) →
  apply(associative(∘)) →
  assert(a ∘ b ∘ (c ∘ c)) →
  apply(idempotent(∘)) →
  assert(a ∘ b ∘ c) →

  conclude((a ∘ b) ∘ (a ∘ c) = a ∘ b ∘ c = (a ∘ c) ∘ (b ∘ c))
}