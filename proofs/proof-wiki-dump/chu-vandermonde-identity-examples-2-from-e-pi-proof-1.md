theorem ChakuVandermonde_Example() {
  assert(
    ∀(r,s,n) ∈ ℝ × ℝ × ℤ⁺ ∧ r=e ∧ s=π ∧ n=2 ⇒
    (∑_{k=0}^2 (r choose k)(s choose (2-k))) = ((r+s) choose 2)
  )
} ↔

proof ChakuVandermonde_Example() {
  setVar(r: ℝ = e) →
  setVar(s: ℝ = π) →
  setVar(n: ℤ⁺ = 2) →
  
  lemma ChakuVandermonde_Identity() {
    assert(
      ∀(r,s,n) ∈ ℝ × ℝ × ℤ⁺ ⇒
      (∑_{k=0}^n (r choose k)(s choose (n-k))) = ((r+s) choose n)
    )
  } →
  
  apply(ChakuVandermonde_Identity()) →
  substitute(r=e, s=π, n=2) →
  assert(
    (∑_{k=0}^2 (e choose k)(π choose (2-k))) = ((e+π) choose 2)
  )
}