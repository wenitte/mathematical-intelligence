theorem Cauchy_Mean_Value_Theorem() {
  assert(
    ∀f,g: ℝ→ℝ ∧
    Continuous(f, [a,b]) ∧ 
    Continuous(g, [a,b]) ∧
    Differentiable(f, (a,b)) ∧
    Differentiable(g, (a,b)) ∧
    (∀x ∈ (a,b): g'(x) ≠ 0) →
    ∃ξ ∈ (a,b): (f'(ξ)/g'(ξ) = (f(b)-f(a))/(g(b)-g(a)))
  )
} ↔

proof Cauchy_Mean_Value_Theorem() {
  // First prove g(a) ≠ g(b)
  lemma G_Values_Different() {
    assume(g(a) = g(b)) →
    apply(Rolle_Theorem(g, [a,b])) →
    assert(∃ξ ∈ (a,b): g'(ξ) = 0) →
    contradiction(∀x ∈ (a,b): g'(x) ≠ 0)
  } →
  
  // Define auxiliary function F
  setVar(h := (f(b)-f(a))/(g(b)-g(a))) →
  setVar(F(x) := f(x) - h·g(x)) →
  
  // Show F(a) = F(b)
  assert(F(b) - F(a) = 
    (f(b) - h·g(b)) - (f(a) - h·g(a))) →
  assert(= (f(b) - f(a)) - h·(g(b) - g(a))) →
  assert(= 0) →
  
  // Apply Rolle's Theorem to F
  apply(Rolle_Theorem(F, [a,b])) →
  assert(∃ξ ∈ (a,b): F'(ξ) = 0) →
  assert(F'(ξ) = f'(ξ) - h·g'(ξ) = 0) →
  
  // Final step
  assert(f'(ξ)/g'(ξ) = h) →
  assert(f'(ξ)/g'(ξ) = (f(b)-f(a))/(g(b)-g(a)))
}