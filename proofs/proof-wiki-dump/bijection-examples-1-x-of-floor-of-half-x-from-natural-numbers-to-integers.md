theorem Bijection_Natural_To_Integers() {
  let f: ℕ → ℤ
  assert(
    ∀x ∈ ℕ: f(x) = (-1)ˣ⌊x/2⌋ ⇒ 
    IsBijection(f)
  )
}

proof Bijection_Natural_To_Integers() {
  // First prove injection
  lemma Injection() {
    setVar(x₁, x₂: ℕ) →
    assume(f(x₁) = f(x₂)) →
    assert((-1)^{x₁} = (-1)^{x₂}) →
    assert(
      (IsEven(x₁) ∧ IsEven(x₂)) ∨ 
      (IsOdd(x₁) ∧ IsOdd(x₂))
    ) →
    
    case EvenCase() {
      assume(IsEven(x₁) ∧ IsEven(x₂)) →
      setVar(m, n: ℕ) →
      assert(x₁ = 2m ∧ x₂ = 2n) →
      assert((-1)^{2m}⌊2m/2⌋ = (-1)^{2n}⌊2n/2⌋) →
      assert(⌊m⌋ = ⌊n⌋) →
      assert(m = n) →
      assert(2m = 2n) →
      assert(x₁ = x₂)
    } →

    case OddCase() {
      assume(IsOdd(x₁) ∧ IsOdd(x₂)) →
      setVar(m, n: ℕ) →
      assert(x₁ = 2m+1 ∧ x₂ = 2n+1) →
      assert((-1)^{2m+1}⌊(2m+1)/2⌋ = (-1)^{2n+1}⌊(2n+1)/2⌋) →
      assert(-⌊m+1/2⌋ = -⌊n+1/2⌋) →
      assert(m = n) →
      assert(2m+1 = 2n+1) →
      assert(x₁ = x₂)
    } →
    
    conclude(∀x₁,x₂ ∈ ℕ: f(x₁) = f(x₂) ⇒ x₁ = x₂)
  } →

  // Then prove surjection
  lemma Surjection() {
    // Non-negative case
    case NonNegative() {
      setVar(y: ℤ≥0) →
      setVar(x = 2y) →
      assert(f(x) = (-1)^{2y}⌊2y/2⌋) →
      assert(f(x) = y) →
      conclude(∀y ∈ ℤ≥0: ∃x ∈ ℕ: f(x) = y)
    } →

    // Negative case
    case Negative() {
      setVar(y: ℤ<0) →
      setVar(x = 2(-y)+1) →
      assert(f(x) = (-1)^{2(-y)+1}⌊(2(-y)+1)/2⌋) →
      assert(f(x) = -⌊-y+1/2⌋) →
      assert(f(x) = y) →
      conclude(∀y ∈ ℤ<0: ∃x ∈ ℕ: f(x) = y)
    } →
    
    conclude(∀y ∈ ℤ: ∃x ∈ ℕ: f(x) = y)
  } →

  apply(Injection()) →
  apply(Surjection()) →
  conclude(IsBijection(f))
}