theorem Automorphic_Numbers_Base10() {
  assert(
    ∀n ∈ ℤ_{>0} ⇒ (AutomorphicNumbers(n) = {
      00...00,
      00...01,
      5^(2^(n-1)) mod 10^n,
      6^(5^(n-1)) mod 10^n
    })
  )
}

proof Automorphic_Numbers_Base10() {
  letVar(P(n): PropositionalFunction) →
  define(P(n) ↔ "n-digit automorphic numbers = specified 4 forms") →
  
  // Base case
  assert(P(1)) {
    verify({0,1,5,6} = {
      0,
      1,
      5^(2^0) mod 10,
      6^(5^0) mod 10
    })
  } →

  // Inductive step
  assume(P(k) ∧ k ≥ 1) →
  
  lemma Construction_Step() {
    setVar(x: (k+1)-digit number) →
    write(x = 10^k * a + b) {
      where(a: leftmost digit) ∧
      where(b: k-digit automorphic number)
    } →
    compute(x^2 mod 10^(k+1)) {
      = (10^k * a + b)^2 →
      = 10^(2k) * a^2 + 2*10^k * a*b + b^2 →
      = 10^k * (2*a*b + N) + b →
      ≡ 10^k * a + b (mod 10^(k+1))
    } →
    conclude(2*a*b + N ≡ a (mod 10)) →
    conclude(N ≡ a*(1 - 2*b) (mod 10))
  } →

  lemma Verify_Forms() {
    verify(∀n ∈ ℤ_{>0}) {
      assert(0^2 ≡ 0 (mod 10^n)) ∧
      assert(1^2 ≡ 1 (mod 10^n)) ∧
      assert((5^(2^(n-1)))^2 ≡ 5^(2^(n-1)) (mod 10^n)) ∧
      assert((6^(5^(n-1)))^2 ≡ 6^(5^(n-1)) (mod 10^n))
    }
  } →

  apply(Construction_Step()) →
  apply(Verify_Forms()) →
  conclude(P(k) → P(k+1)) →
  apply(MathematicalInduction(P))
}