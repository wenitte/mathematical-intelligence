theorem Triangular_Numbers() {
  assert(
    ∀n ∈ ℕ: n ≥ 1 ⇒ (∑[i=1 to n] i = (n(n+1))/2)
  )
} ↔

proof Triangular_Numbers() {
  // Base case
  setVar(n: 1) →
  assert(∑[i=1 to 1] i = 1) ∧
  assert((1(1+1))/2 = 1) →
  validate(base_case: true) →

  // Inductive step
  setVar(k: ℕ, k ≥ 1) →
  assume(∑[i=1 to k] i = (k(k+1))/2) →  // Induction hypothesis
  
  // Prove for k+1
  assert(∑[i=1 to k+1] i = ∑[i=1 to k] i + (k+1)) →
  substitute(IH: ∑[i=1 to k] i = (k(k+1))/2) →
  assert(
    ∑[i=1 to k+1] i = (k(k+1))/2 + (k+1)
  ) →
  
  // Algebraic steps
  assert((k(k+1))/2 + (k+1) = (k(k+1) + 2(k+1))/2) →
  assert((k² + 3k + 2)/2) →
  assert(((k+1)(k+2))/2) →
  assert(((k+1)((k+1)+1))/2) →
  
  // Conclusion
  validate(∀k ∈ ℕ: k ≥ 1 ⇒ 
    ∑[i=1 to k+1] i = ((k+1)((k+1)+1))/2
  )
}