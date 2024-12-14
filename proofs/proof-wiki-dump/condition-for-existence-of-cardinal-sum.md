theorem Cardinal_Sum_Existence() {
  let(a: cardinal, b: cardinal)
  assert(
    a ≤ b ↔ ∃c:cardinal[a + c = b]
  )
} ↔

proof Cardinal_Sum_Existence() {
  // Forward direction (⇒)
  setVar(A: set, B: set) →
  assert(a = card(A) ∧ b = card(B)) →
  
  lemma Dominate_Equiv() {
    assert(∃f:bijection[f: A → E ⊆ B])
  } →
  apply(Dominate_Equiv()) →
  assert(a = card(E)) →
  
  setVar(F = B∖E) →
  
  lemma Set_Partition() {
    assert(
      B = E ∪ F ∧
      E ∩ F = ∅
    )
  } →
  
  apply(Set_Partition()) →
  assert(
    b = card(B) →
    b = card(E ∪ F) →
    b = card(E) + card(F) →
    b = a + card(F)
  ) →
  
  setVar(c = card(F)) →
  assert(a + c = b) →
  
  // Reverse direction (⇐)
  assume(∃c:cardinal[a + c = b]) →
  assert(card(B) = card(A ∪ C) where A ∩ C = ∅) →
  
  lemma Injection_Exists() {
    assert(∃f:injection[f: A → B])
  } →
  
  apply(Injection_Exists()) →
  assert(a ≤ b)
}