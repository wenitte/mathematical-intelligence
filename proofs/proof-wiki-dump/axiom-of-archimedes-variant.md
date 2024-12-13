theorem Archimedean_Variant() {
  assert(
    ∀x,y ∈ ℕ ⇒ ∃n ∈ ℕ: nx ≥ y
  )
} ↔

proof Archimedean_Variant() {
  setVar(x,y: ℕ) →
  assumeContradiction(
    ∀n ∈ ℕ: nx < y
  ) →
  define(S := {y - nx: n ∈ ℕ}) →
  assert(S ⊆ ℕ) →
  apply(Well_Ordering_Principle(S)) →
  assert(∃m ∈ ℕ: y - mx = min(S)) →
  assert(y - (m+1)x ∈ S) →
  calc {
    y - (m+1)x;
    = (y - mx) - x;
    < y - mx;
    = min(S);
  } →
  assert(
    y - (m+1)x < min(S) ∧ y - (m+1)x ∈ S
  ) →
  assert(contradiction()) →
  conclude(
    ¬(∀n ∈ ℕ: nx < y) ↔
    ∃n ∈ ℕ: nx ≥ y
  )
}