theorem Addition_Codewords_V2_3() {
  assert(
    ∀x,y ∈ V(2,3) ∧ x=12 ∧ y=11 ⇒ x+y=20
  )
} ↔

proof Addition_Codewords_V2_3() {
  setVar(x: 12, y: 11) →
  
  lemma First_Digit_Addition() {
    assert(1 + 1 = 2) →
    assert(2 ≡ 2 (mod 3))
  } →

  lemma Second_Digit_Addition() {
    assert(2 + 1 = 3) →
    assert(3 ≡ 0 (mod 3))
  } →

  apply(First_Digit_Addition()) →
  apply(Second_Digit_Addition()) →
  
  assert(
    concatenate(2,0) = 20
  ) →
  
  conclude(12 + 11 = 20)
}