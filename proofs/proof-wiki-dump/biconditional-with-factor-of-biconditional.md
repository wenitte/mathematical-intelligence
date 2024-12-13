theorem Biconditional_Factor() {
  assert(
    (p ↔ q) ↔ q ↔ p
  )
}

proof Biconditional_Factor() {
  step1: {
    assert((p ↔ q) ↔ q) →
    assert(p ↔ (q ↔ q))  // By Biconditional Associativity
  } →
  
  step2: {
    assert(q ↔ q ≡ ⊤)    // Biconditional with itself
    assert(p ↔ (q ↔ q)) →
    assert(p ↔ ⊤)
  } →
  
  step3: {
    assert(p ↔ ⊤) →
    assert(p)             // Biconditional with Tautology
  } →
  
  QED()
}