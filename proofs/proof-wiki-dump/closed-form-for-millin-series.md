theorem Millin_Series_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ ∑_{n=0}^∞ 1/F_{2^n} = (7 - √5)/2
    where F_k is kth Fibonacci number
  )
} ↔

proof Millin_Series_Proof_1() {
  lemma Finite_Sum() {
    assert(
      ∀n ≥ 1 ⇒ ∑_{r=0}^n 1/F_{2^r} = 3 - F_{2^n-1}/F_{2^n}
    )
  } →
  
  proveBase(n = 1) {
    assert(1/F_1 + 1/F_2 = 2 = 3 - F_1/F_2)
  } →
  
  proveInductive(k) {
    assert(∑_{r=0}^{k+1} 1/F_{2^r}) →
    equals(3 - F_{2^k-1}/F_{2^k} + 1/F_{2^{k+1}}) →
    equals(3 - (F_{2^k-1}F_{2^{k+1}} - F_{2^k})/(F_{2^k}F_{2^{k+1}})) →
    apply(FibonacciRecurrence) →
    equals(3 - (F_{2^k-1}F_{2^k+1} + F_{2^k-1}^2 - 1)/F_{2^{k+1}}) →
    apply(CassiniIdentity) →
    equals(3 - F_{2^{k+1}-1}/F_{2^{k+1}})
  } →
  
  takeLimits() {
    assert(∑_{r=0}^∞ 1/F_{2^r}) →
    equals(lim_{n→∞} (3 - F_{2^n-1}/F_{2^n})) →
    apply(FibonacciRatioLimit) →
    equals(3 - 2/(√5 + 1)) →
    equals(3 - (2(√5 - 1))/4) →
    equals(3 - (√5 - 1)/2) →
    equals((7 - √5)/2)
  }
}

proof Millin_Series_Proof_2() {
  setDefs() {
    F(x) := ∑_{k=1}^∞ x^{2^{k-1}}/F_{2^k}
    α := (1 + √5)/2
    β := (1 - √5)/2
  } →
  
  proveConvergence() {
    assert(|x^{2^{k-1}}/F_{2^k}| ≤ 1/F_{2^k} for |x| ≤ 1) →
    apply(ComparisonTest) →
    assert(F(x) converges for |x| ≤ 1)
  } →
  
  proveFunctionalEquation() {
    assert(F(αx) + F(βx) = x + F(x^2)) →
    apply(x = -β) →
    assert(-β + F(β^2) = F(-β^2) + F(-αβ)) →
    solve(F(1) = -β + 2β^2)
  } →
  
  conclude() {
    assert(∑_{k=0}^∞ 1/F_{2^k} = 1 + F(1)) →
    equals(1 - β + 2β^2) →
    equals((7 - √5)/2)
  }
}