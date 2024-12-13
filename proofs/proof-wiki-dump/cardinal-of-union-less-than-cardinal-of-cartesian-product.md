theorem Cardinal_Union_Product() {
  assert(
    ∀S,T: Set where
      (S ≡ card(S) ∧ T ≡ card(T)) ∧
      (card(S) > 1 ∧ card(T) > 1) ⇒
      card(S ∪ T) ≤ card(S × T)
  )
} ↔

proof Cardinal_Union_Product() {
  setVar(x₁,x₂: S where x₁ ≠ x₂) →
  setVar(y₁,y₂: T where y₁ ≠ y₂) →
  
  define(f: S × T → S ∪ T) {
    f(x,y) = {
      case x = x₁: y
      case x = x₂ ∧ y = y₁: x₁
      case otherwise: x
    }
  } →

  lemma Surjectivity() {
    assert(∀z ∈ S ∪ T ⇒ ∃(x,y) ∈ S × T: f(x,y) = z) {
      case z ∈ S: {
        subcase z = x₁: assert(f(x₂,y₁) = x₁)
        subcase z ≠ x₁: assert(f(z,y₂) = z)
      } →
      case z ∈ T: assert(f(x₁,z) = z)
    }
  } →

  apply(Surjectivity()) →
  apply(Surjection_Cardinal_Inequality(f)) →
  assert(card(S ∪ T) ≤ card(S × T))
}