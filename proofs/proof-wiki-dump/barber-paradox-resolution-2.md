theorem Barber_Paradox() {
  let(𝕌: Set) →
  let(S: 𝕌 → {T,F}) →
  let(B: 𝕌 → {T,F}) →
  let(b ∈ 𝕌) →
  assert(
    ∀x ∈ 𝕌: S(x) ↔ "x shaves x" ∧
    ∀x ∈ 𝕌: B(x) ↔ "x is shaved by b"
  )
}

proof Barber_Contradiction() {
  premise1(∀x ∈ 𝕌: (¬S(x)) ↔ B(x)) →
  premise2(B(b) ↔ S(b)) →
  
  chain_equivalence() {
    S(b) ↔ B(b) ↔ (¬S(b))
  } →
  
  apply(Biconditional_Transitive) {
    S(b) ↔ (¬S(b))
  } →
  
  assert(contradiction)
}

theorem Barber_Resolution() {
  let(𝕌: Set) →
  let(S: 𝕌 → {T,F}) →
  let(B: 𝕌 → {T,F}) →
  let(b ∈ 𝕌) →
  assert(
    ∀x ∈ 𝕌: (¬S(x)) → B(x) ∧
    B(b) ↔ S(b)
  )
}

proof Barber_Resolution() {
  premise1(∀x ∈ 𝕌: (¬S(x)) → B(x)) →
  premise2(B(b) ↔ S(b)) →
  
  assert(¬(B(x) → (¬S(x)))) →
  conclude(
    ∃x ∈ 𝕌: (B(x) ∧ S(x)) ∧
    (b must be such an x)
  )
}