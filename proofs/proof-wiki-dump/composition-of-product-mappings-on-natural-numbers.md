theorem Product_Mappings_Composition() {
  setVar(a: ℕ) ∧
  setVar(b: ℕ) ∧
  setVar(μₐ: ℕ → ℕ) ∧
  assert(
    ∀x ∈ ℕ: μₐ(x) = xa ∧
    ∀x ∈ ℕ: μab(x) = x(ab)
  ) →
  assert(μab = μb ∘ μa)
} ↔

proof Product_Mappings_Composition() {
  setVar(x: ℕ) →
  assert(μab(x)) →
  apply(Definition_of_μ) →
  assert(x(ab)) →
  apply(Associativity_of_Multiplication) →
  assert((xa)b) →
  apply(Definition_of_μa) →
  assert((μa(x))b) →
  apply(Definition_of_μb) →
  assert(μb(μa(x))) →
  apply(Definition_of_Composition) →
  assert((μb ∘ μa)(x)) →
  apply(Function_Equality) →
  conclude(μab = μb ∘ μa)
}