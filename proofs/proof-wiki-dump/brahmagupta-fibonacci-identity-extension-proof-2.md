theorem Brahmagupta_Fibonacci_Extension() {
  assert(
    ∀n ∈ ℤ₊, ∀aⱼ,bⱼ ∈ ℤ (j∈[1..n]) ⇒ 
    ∃c,d ∈ ℤ : ∏ⱼ₌₁ⁿ(aⱼ² + bⱼ²) = c² + d²
  )
} ↔

proof Brahmagupta_Fibonacci_Extension() {
  define(P(n) := ∃c,d ∈ ℤ : ∏ⱼ₌₁ⁿ(aⱼ² + bⱼ²) = c² + d²) →
  
  // Base case P(1)
  assert(∏ⱼ₌₁¹(aⱼ² + bⱼ²) = a₁² + b₁²) →
  setVar(c := a₁, d := b₁) →
  conclude(P(1)) →
  
  // Base case P(2)
  lemma Brahmagupta_Fibonacci() {
    assert((a₁² + b₁²)(a₂² + b₂²) = (a₁a₂ + b₁b₂)² + (a₁b₂ - b₁a₂)²)
  } →
  apply(Brahmagupta_Fibonacci()) →
  setVar(c := a₁a₂ + b₁b₂, d := a₁b₂ - b₁a₂) →
  conclude(P(2)) →
  
  // Inductive step
  assume(P(k) ∧ k ≥ 2) →
  assert(∃c',d' ∈ ℤ : ∏ⱼ₌₁ᵏ(aⱼ² + bⱼ²) = c'² + d'²) →
  assert(∏ⱼ₌₁ᵏ⁺¹(aⱼ² + bⱼ²) = (c'² + d'²)(aₖ₊₁² + bₖ₊₁²)) →
  apply(Brahmagupta_Fibonacci()) →
  conclude(P(k) → P(k+1)) →
  
  // Conclusion by induction
  applyInduction(P(n), n ∈ ℤ₊) →
  assert(∀n ∈ ℤ₊ : P(n))
}