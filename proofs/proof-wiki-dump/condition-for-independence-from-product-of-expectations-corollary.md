theorem Independence_Product_Expectations() {
  assert(
    ∀(Ω, Σ, Pr): ProbabilitySpace ∧
    ∀X,Y: DiscreteRandomVariable(Ω, Σ, Pr) ∧
    independent(X,Y) ∧
    exists(E[X]) ∧ exists(E[Y]) 
    ⇒ E[XY] = E[X]E[Y]
  )
} ↔

proof Independence_Product_Expectations() {
  reference(Condition_Independence_Product_Expectations) →
  setVar(g: ℝ → ℝ, g(x) = x) →
  setVar(h: ℝ → ℝ, h(y) = y) →
  assert(
    independent(X,Y) →
    E[g(X)h(Y)] = E[g(X)]E[h(Y)]
  ) →
  substitute(g(X) = X, h(Y) = Y) →
  assert(E[XY] = E[X]E[Y])
} ↔

theorem General_Independence_Product_Expectations() {
  assert(
    ∀n ∈ ℕ⁺ ∧
    ∀(X₁,...,Xₙ): DiscreteRandomVariable(Ω, Σ, Pr) ∧
    independent(X₁,...,Xₙ) ∧
    ∀k ∈ [1,n]: exists(E[Xₖ])
    ⇒ E[∏ₖ₌₁ⁿ Xₖ] = ∏ₖ₌₁ⁿ E[Xₖ]
  )
} ↔

lemma Converse_Not_True() {
  assert(
    ∃X,Y: DiscreteRandomVariable(Ω, Σ, Pr) ∧
    E[XY] = E[X]E[Y] ∧
    ¬independent(X,Y)
  )
}