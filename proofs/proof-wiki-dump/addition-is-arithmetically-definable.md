theorem Addition_Arithmetically_Definable() {
  assert(
    ∃f: ℕ² → ℕ ∧
    ∀x,y ∈ ℕ: f(x,y) = x + y ⇒
    ∃φ(z,x,y): WFF ∧
    ¬∃Q ∈ φ ∧ // No quantifiers in φ
    ∀z,x,y ∈ ℕ: (z = f(x,y) ↔ ℕ ⊨ φ([z],[x],[y]))
  )
} ↔

proof Addition_Arithmetically_Definable() {
  define(φ(z,x,y) := "z = x + y") →
  assert(
    ∀z,x,y ∈ ℕ: (
      z = f(x,y) ↔ z = x + y ↔ ℕ ⊨ φ([z],[x],[y])
    )
  ) →
  verify(
    φ(z,x,y) ∈ WFF ∧
    ¬∃Q ∈ φ(z,x,y)  // φ contains no quantifiers
  )
}