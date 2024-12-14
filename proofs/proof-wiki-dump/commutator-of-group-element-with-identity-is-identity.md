theorem Commutator_Identity() {
  assert(
    ∀G: Group ∧ ∀g ∈ G ∧ let e = identity(G) →
    [g,e] = e = [e,g]
  )
} ↔

proof Commutator_Identity() {
  setGroup(G) →
  setVar(g: G) →
  setVar(e: identity(G)) →

  // First part: [g,e] = e
  assert([g,e] = g⁻¹ ∘ e⁻¹ ∘ g ∘ e) →   // By commutator definition
  assert(e⁻¹ = e) →                      // Identity is self-inverse
  assert([g,e] = g⁻¹ ∘ e ∘ g ∘ e) →     // Substitute e for e⁻¹
  assert(∀x ∈ G: x ∘ e = x) →           // Identity element property
  assert([g,e] = g⁻¹ ∘ g) →             // Apply identity property
  assert(∀x ∈ G: x ∘ x⁻¹ = e) →         // Inverse element property
  assert([g,e] = e) →                    // Apply inverse property

  // Second part: [e,g] = e
  assert([e,g] = e⁻¹ ∘ g⁻¹ ∘ e ∘ g) →   // By commutator definition
  assert([e,g] = e ∘ g⁻¹ ∘ e ∘ g) →     // e⁻¹ = e
  assert([e,g] = g⁻¹ ∘ g) →             // Apply identity property twice
  assert([e,g] = e)                      // Apply inverse property
}