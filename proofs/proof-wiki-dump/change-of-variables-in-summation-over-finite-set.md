theorem Change_of_Variables_in_Finite_Summation() {
  assert(
    ∀A ∈ {ℕ,ℤ,ℚ,ℝ,ℂ} ∧
    ∀S,T: FiniteSet ∧
    ∀f: S → A ∧
    ∀g: T → S where isBijection(g) ⇒
    (∑_{s∈S} f(s) = ∑_{t∈T} f(g(t)))
  )
} ↔

proof Change_of_Variables_in_Finite_Summation() {
  setVar(n: ℕ = |S| = |T|) →
  setVar(ℕ_{<n} = {i ∈ ℕ | 0 ≤ i < n}) →
  setVar(h: ℕ_{<n} → T where isBijection(h)) →

  assert(∑_{t∈T} f(g(t)) = ∑_{i=0}^{n-1} f(g(h(i)))) by(summation_definition) →

  lemma Composite_Bijection() {
    assert(g ∘ h: ℕ_{<n} → S is_bijection)
  } →

  apply(Composite_Bijection()) →
  
  assert(∑_{s∈S} f(s) = ∑_{i=0}^{n-1} f((g ∘ h)(i))) by(summation_definition) →
  
  assert(∑_{i=0}^{n-1} f((g ∘ h)(i)) = ∑_{i=0}^{n-1} f(g(h(i)))) by(function_composition) →
  
  conclude(∑_{s∈S} f(s) = ∑_{t∈T} f(g(t)))
}