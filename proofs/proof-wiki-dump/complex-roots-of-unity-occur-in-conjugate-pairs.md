theorem ComplexRootsUnityConjugatePairs() {
  let(n ∈ ℤ_{>0}) →
  let(U_n = {z ∈ ℂ: z^n = 1}) →
  let(α ∈ U_n) →
  assert(
    ∀k ∈ ℤ_{>0}, k < n/2 ⇒ 
    (α^k = conjugate(α^{n-k}))
  )
}

proof ComplexRootsUnityConjugatePairs() {
  setVar(n: ℤ_{>0}) →
  setVar(k: ℤ_{>0}, k < n/2) →
  
  lemma PolyRoots() {
    assert(z^n - 1 = 0 has roots {1, α, α^2, ..., α^{n-1}}) ∧
    assert(roots occur in conjugate pairs)
  } →

  assert(α^{n-k} = cos(2π(n-k)/n) + i·sin(2π(n-k)/n)) →
  assert(= cos(2πn/n - 2πk/n) + i·sin(2πn/n - 2πk/n)) →
  assert(= cos(2π - 2πk/n) + i·sin(2π - 2πk/n)) →
  assert(= cos(-2πk/n) + i·sin(-2πk/n)) →
  assert(= cos(2πk/n) - i·sin(2πk/n)) →
  assert(= conjugate(α^k)) →

  lemma EvenCase() {
    assume(n is even) →
    let(s = n/2) →
    assert(α^s = cos(π) + i·sin(π)) →
    assert(= -1) →
    assert(α^s = α^{n-s})
  } →

  lemma OddCase() {
    assume(n is odd) →
    let(s = (n-1)/2) →
    assert(pairs = {⟨α^k, α^{n-k}⟩: k ∈ [1,s]})
  } →

  apply(EvenCase() ∨ OddCase()) →
  assert(∀k ∈ ℤ_{>0}, k < n/2 ⇒ conjugate(α^k) = α^{n-k})
}