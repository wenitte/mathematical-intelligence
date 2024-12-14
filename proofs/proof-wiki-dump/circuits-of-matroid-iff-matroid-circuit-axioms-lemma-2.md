theorem Matroid_Circuit_Rho() {
  let(S: Set, finite) →
  let(C: Set[Set], satisfies(C, CIRCUIT_AXIOMS)) →
  let(X: Set, X ⊆ S) →
  let(y: Element, y ∈ S ∧ y ∉ X) →
  assert(
    ρ(X ∪ {y}) = ρ(X) ↔ ∃C ∈ C: y ∈ C ⊆ X ∪ {y}
  )
} ↔

proof Matroid_Circuit_Rho() {
  let(X = {x₁, ..., xq}) →
  
  // Step 1: Expand ρ(X ∪ {y})
  assert(
    ρ(X ∪ {y}) = t(x₁, ..., xq, y)
  ) →

  // Step 2: Expand t function
  assert(
    t(x₁, ..., xq, y) = t(x₁, ..., xq) + θ(x₁, ..., xq, y)q+1
  ) →

  // Step 3: Use ρ definition
  assert(
    t(x₁, ..., xq) = ρ(X)
  ) →

  // Step 4: Combine steps
  assert(
    ρ(X ∪ {y}) = ρ(X) + θ(x₁, ..., xq, y)q+1
  ) →

  // Step 5: Logical equivalence
  assert(
    ρ(X ∪ {y}) = ρ(X) ↔ θ(x₁, ..., xq, y)q+1 = 0
  ) →

  // Step 6: Use θ definition
  assert(
    θ(x₁, ..., xq, y)q+1 = 0 ↔ ∃C ∈ C: y ∈ C ⊆ X ∪ {y}
  )
}