theorem Cardinal_Of_Cardinal_Equal() {
  assert(
    ∀x ∈ On → (x ∈ ℕℕ ↔ x = card(x))
  )
}

proof Cardinal_Of_Cardinal_Equal() {
  // Necessary Condition
  block Forward_Direction() {
    assume(x = card(x)) →
    ∃y(x = card(y)) →
    def_Cardinals(ℕℕ = {x ∈ On : ∃y(x = card(y))}) →
    conclude(x ∈ ℕℕ)
  }

  // Sufficient Condition
  block Reverse_Direction() {
    assume(x ∈ ℕℕ) →
    def_Cardinals() →
    assert(∃y(x = card(y))) →
    setVar(y: Set) →
    assert(x = card(y)) →
    apply(Cardinal_Of_Cardinal_Equal_Theorem()) →
    assert(card(x) = card(y)) →
    apply(Equality_Transitive()) →
    conclude(x = card(x))
  }

  conclude(
    (x ∈ ℕℕ ↔ x = card(x))
  )
}