theorem Cardinals_Subset_Ordinals() {
  assert(
    let ℕ = {x: x is a cardinal} ∧
    let On = {x: x is an ordinal} →
    ℕ ⊆ On
  )
} ↔

proof Cardinals_Subset_Ordinals() {
  lemma Cardinal_Definition() {
    assert(
      ℕ = {x ∈ On: ∃y(x = card(y))}
    )
  } →
  
  setVar(x: ℕ) →
  assert(x ∈ ℕ) →
  apply(Cardinal_Definition()) →
  assert(x ∈ {x ∈ On: ∃y(x = card(y))}) →
  assert(x ∈ On) →
  assert(∀x(x ∈ ℕ → x ∈ On)) →
  assert(ℕ ⊆ On)
}