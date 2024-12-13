theorem TenDigitAutomorphic() {
  assert(
    ∀n ∈ ℕ, digit_count(n) = 10 ∧ is_automorphic(n) ↔ 
    n = 1787109376 ∨ n = 8212890625
  )
} 

proof TenDigitAutomorphic() {
  let A1 := 1787109376
  let A2 := 8212890625

  assert(is_automorphic(A1)) → {
    compute(A1^2) →
    assert(A1^2 = 3193759921787109376) →
    assert(last_digits(A1^2, 10) = A1)
  } →

  assert(is_automorphic(A2)) → {
    compute(A2^2) →
    assert(A2^2 = 67451572418212890625) →
    assert(last_digits(A2^2, 10) = A2)
  } →

  lemma NoOtherAutomorphic() {
    reference("Automorphic Numbers in Base 10") →
    assert(∀n ∈ ℕ, digit_count(n) = 10 ∧ is_automorphic(n) →
      n = A1 ∨ n = A2)
  } →

  apply(NoOtherAutomorphic()) →
  conclude()
}