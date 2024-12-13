theorem Annings_Theorem() {
  assert(
    ∀b > 1, ∀k ∈ ℤ₊ ⇒
    (101010101_b)/(110010011_b) = 
    (1 + b^2 + b^4 + b^5 + ... + b^(2k+2) + b^(2k+4) + b^(2k+6))/
    (1 + b + b^4 + b^5 + ... + b^(2k+2) + b^(2k+5) + b^(2k+6))
  )
}

proof Annings_Theorem() {
  setVar(b: ℝ, b > 1) →
  setVar(k: ℤ₊) →
  setVar(F = (101010101_b)/(110010011_b)) →
  
  assert(F = (1 + b^2 + b^4 + b^6 + b^8)/(1 + b + b^4 + b^7 + b^8)) →
  
  lemma Equal_Products() {
    assert(
      (1 + b^2 + b^4 + b^6 + b^8)(1 + b + b^4 + b^5 + ... + b^(2k+2) + b^(2k+5) + b^(2k+6)) =
      (1 + b + b^4 + b^7 + b^8)(1 + b^2 + b^4 + b^5 + ... + b^(2k+2) + b^(2k+4) + b^(2k+6))
    )
  } →
  
  expand(Left_Side) →
  expand(Right_Side) →
  compare(Left_Side, Right_Side) →
  
  assert(
    Equal_Products() ⇒ 
    F = (1 + b^2 + b^4 + b^5 + ... + b^(2k+2) + b^(2k+4) + b^(2k+6))/
        (1 + b + b^4 + b^5 + ... + b^(2k+2) + b^(2k+5) + b^(2k+6))
  )
}