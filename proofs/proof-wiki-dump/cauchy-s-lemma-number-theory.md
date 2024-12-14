theorem CauchysLemma() {
  assert(
    (a, b ∈ ℤ⁺) ∧ 
    isOdd(a) ∧ isOdd(b) ∧
    (b² < 4a) ∧ 
    (3a < b² + 2b + 4) →
    ∃s,t,u,v ∈ ℤ⁺∪{0}: [
      (a = s² + t² + u² + v²) ∧
      (b = s + t + u + v)
    ]
  )
} ↔

proof CauchysLemma() {
  setVar(k ∈ ℤ⁺): a = 2k + 1 →
  assert(4a - b² ≡ 8k + 4 - 1 ≡ 3 (mod 8)) →
  
  lemma OddSquareMod8() {
    assert(∀x∈ℤ: isOdd(x) → x² ≡ 1 (mod 8))
  } →
  
  lemma ThreeOddSquares() {
    assert(∃x,y,z ∈ ℤ⁺: isOdd(x) ∧ isOdd(y) ∧ isOdd(z) ∧
           4a - b² = x² + y² + z²)
  } →
  
  apply(ThreeOddSquares()) →
  assert(isEven(b + x + y + z)) →
  
  lemma DivisibleBy4() {
    assert((b + x + y + z ≢ 0 (mod 4)) →
           (b + x + y - z ≡ 0 (mod 4)))
  } →
  
  setVar(s = (b + x + y ± z)/4) →
  setVar(t = (b + x - y ∓ z)/4) →
  setVar(u = (b - x + y ∓ z)/4) →
  setVar(v = (b - x - y ± z)/4) →
  
  lemma NonNegative() {
    apply(CauchyInequality()): x + y + z ≤ √(3(4a - b²)) →
    apply(hypothesis): √(3(4a - b²)) < √(b² + 8b + 16) = b + 4 →
    assert((b - x - y - z)/4 > -1)
  } →
  
  verify(s² + t² + u² + v² = a) {
    expand() →
    simplify() →
    assert(s² + t² + u² + v² = (4a)/4 = a)
  } →
  
  verify(s + t + u + v = b) {
    expand() →
    simplify() →
    assert(s + t + u + v = 4b/4 = b)
  }
}