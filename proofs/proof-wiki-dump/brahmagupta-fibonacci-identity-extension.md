theorem BrahmaguptaFibonacci_Extension() {
  assert(
    ∀n ∈ ℤ₊ ∧ ∀(a₁,...,aₙ,b₁,...,bₙ) ∈ ℤ ⇒
    ∏ⁿⱼ₌₁(aⱼ² + bⱼ²) = c² + d² 
    where c,d ∈ ℤ
  )
}

proof BrahmaguptaFibonacci_Extension() {
  # Proof by induction
  let P(n) := "∏ⁿⱼ₌₁(aⱼ² + bⱼ²) = c² + d² for some c,d ∈ ℤ"

  # Base case n=1
  assert(P(1)) {
    setVar(a₁,b₁: ℤ) →
    ∏¹ⱼ₌₁(aⱼ² + bⱼ²) = a₁² + b₁² →
    let c := a₁, d := b₁ →
    ∏¹ⱼ₌₁(aⱼ² + bⱼ²) = c² + d²
  }

  # Base case n=2
  assert(P(2)) {
    setVar(a₁,a₂,b₁,b₂: ℤ) →
    ∏²ⱼ₌₁(aⱼ² + bⱼ²) = (a₁² + b₁²)(a₂² + b₂²) →
    apply(BrahmaguptaFibonacci_Identity) →
    = (a₁a₂ + b₁b₂)² + (a₁b₂ - b₁a₂)² →
    let c := (a₁a₂ + b₁b₂), d := (a₁b₂ - b₁a₂) →
    ∏²ⱼ₌₁(aⱼ² + bⱼ²) = c² + d²
  }

  # Inductive step
  assert(∀k ≥ 2: P(k) ⇒ P(k+1)) {
    assume(P(k)) →
    ∏ᵏ⁺¹ⱼ₌₁(aⱼ² + bⱼ²) = (∏ᵏⱼ₌₁(aⱼ² + bⱼ²))(aₖ₊₁² + bₖ₊₁²) →
    = (c'² + d'²)(aₖ₊₁² + bₖ₊₁²) →
    apply(BrahmaguptaFibonacci_Identity) →
    = c² + d² for some c,d ∈ ℤ
  }

  apply(MathematicalInduction) →
  conclude(∀n ∈ ℤ₊: P(n))
}

proof BrahmaguptaFibonacci_Extension_Complex() {
  setVar(n: ℤ₊) →
  let zⱼ := aⱼ + ibⱼ for j ∈ {1,...,n} →
  let c + id := ∏ⁿⱼ₌₁zⱼ →
  
  assert(c² + d² = |c + id|²) →
  = |∏ⁿⱼ₌₁zⱼ|² →
  = ∏ⁿⱼ₌₁|zⱼ|² →
  = ∏ⁿⱼ₌₁(aⱼ² + bⱼ²)
}