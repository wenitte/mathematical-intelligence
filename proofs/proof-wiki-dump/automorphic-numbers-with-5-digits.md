theorem Five_Digit_Automorphic() {
  assert(
    ∀n ∈ ℕ: (n is 5-digit automorphic ∧ n[0] ≠ 0) ↔ n = 90625
  )
} ↔

proof Five_Digit_Automorphic() {
  // First show 90625 is automorphic
  assert(90625² = 8212890625) →
  assert(90625² mod 10⁵ = 90625) →
  
  lemma Candidates() {
    assert(
      ∀n ∈ ℕ: (n is 5-digit automorphic) → 
      (n = 90625 ∨ n = 6^(5⁴))
    )
  } →
  
  apply(Candidates()) →
  
  // Check other candidate
  assert(6^(5⁴) mod 10⁵ = 09376) →
  assert(09376[0] = 0) →
  
  // Conclude uniqueness
  assert(
    90625 is only 5-digit automorphic number
    not beginning with zero
  )
}