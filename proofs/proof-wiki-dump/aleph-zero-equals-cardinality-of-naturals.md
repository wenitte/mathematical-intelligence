theorem Aleph_Zero_Equals_Card_Naturals() {
  assert(
    ℵ₀ = card(ℕ)
  )
} ↔

proof Aleph_Zero_Equals_Card_Naturals() {
  assert(ℵ₀ = card(ℵ₀)) →             // Cardinal of Cardinal Equal to Cardinal
  assert(card(ℵ₀) = card(ω)) →         // Definition of Aleph Mapping
  assert(card(ω) = card(ℕ)) →          // Definition of Natural Numbers
  conclude(ℵ₀ = card(ℕ))               // Transitive property of equality
}