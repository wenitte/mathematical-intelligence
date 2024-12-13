theorem Barber_Paradox() {
  assert(
    ∃U(Set) ∧ ∃b ∈ U ∧
    [U := community of men] ∧
    [b := barber] ∧
    ∀x ∈ U: (¬S(x) ↔ B(x))  // S(x): x shaves self, B(x): b shaves x
  )
} ↔

proof Barber_Paradox_Contradiction() {
  setVar(U: Set) →
  setVar(b: Element[U]) →
  setVar(S: U → {T,F}) →
  setVar(B: U → {T,F}) →
  
  assert(∀x ∈ U: ¬S(x) ↔ B(x)) →  // Premise 1
  assert(B(b) ↔ S(b)) →            // Premise 2
  
  lemma Transitive_Chain() {
    assert(S(b) ↔ B(b) ↔ ¬S(b)) →
    assert(S(b) ↔ ¬S(b))           // By transitivity
  } →
  
  apply(Transitive_Chain()) →
  assert(contradiction)             // P ↔ ¬P is contradictory
} 

resolution Barber_Resolution_1() {
  assert(b ∉ U) →                  // Barber not in universe
  assert(¬(¬S(b) → B(b))) →        // Removes contradiction
  conclude(consistent)
}

resolution Barber_Resolution_2() {
  weakenPremise(
    ∀x ∈ U: ¬S(x) → B(x)          // Only implies one direction
  ) →
  assert(¬(B(x) → ¬S(x))) →
  conclude(consistent)
}

resolution Barber_Resolution_3() {
  weakenPremise(
    ∀x ∈ U: B(x) → ¬S(x)          // Only implies other direction
  ) →
  assert(¬(¬S(x) → B(x))) →
  assert(¬B(b)) →                  // Barber shaves no one
  conclude(consistent)
}