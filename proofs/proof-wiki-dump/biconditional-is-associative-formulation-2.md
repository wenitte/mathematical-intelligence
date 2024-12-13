theorem Biconditional_Associative() {
  assert(
    ∀p,q,r ∈ PROP ⇒ ((p ↔ (q ↔ r)) ↔ ((p ↔ q) ↔ r))
  )
} ↔

proof Biconditional_Associative() {
  // First direction
  assume(A1: p ↔ (q ↔ r)) →
  apply(Biconditional_Associative_Form1(p,q,r)) →
  derive((p ↔ q) ↔ r) →
  discharge(A1) →
  conclude((p ↔ (q ↔ r)) → ((p ↔ q) ↔ r)) →

  // Second direction
  assume(A2: (p ↔ q) ↔ r) →
  apply(Biconditional_Associative_Form1(p,q,r)) →
  derive(p ↔ (q ↔ r)) →
  discharge(A2) →
  conclude(((p ↔ q) ↔ r) → (p ↔ (q ↔ r))) →

  // Combine both directions
  apply(Biconditional_Introduction()) →
  conclude((p ↔ (q ↔ r)) ↔ ((p ↔ q) ↔ r))
}