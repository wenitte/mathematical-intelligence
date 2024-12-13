theorem ZornsLemma() {
  assert(
    [AxiomOfChoice holds] →
    ∀X[Partially_ordered_set(X) ∧ 
       (∀C ⊆ X)[Chain(C) → ∃b ∈ X[UpperBound(b,C)]] →
       ∃m ∈ X[Maximal(m,X)]]
  )
}

proof ZornsLemma() {
  setDef(x⪯: ℘(X)) {
    x⪯ := {y ∈ X | y ⪯ x}
  } →

  setDef(𝕊: ℘(℘(X))) {
    𝕊 := {x⪯ | x ∈ X}
  } →

  lemma OrderEquiv() {
    assert(∀x,y ∈ X: x⪯ ⊆ y⪯ ↔ x ⪯ y)
  } →

  setDef(𝕏: ℘(℘(X))) {
    𝕏 := {C ⊆ X | Chain(C)}
  } →

  assert(∀C ∈ 𝕏: ⋃C ∈ 𝕏) →

  letExist(f: ℘(X)∖{∅} → X) {
    assert(∀A ∈ ℘(X)∖{∅}: f(A) ∈ A)  // choice function
  } →

  setDef(Â: X → ℘(X)) {
    Â(A) := {x ∈ X | A ∪ {x} ∈ 𝕏}
  } →

  funcDef(g: 𝕏 → 𝕏) {
    g(A) := if(Â(A)∖A ≠ ∅) then
              A ∪ {f(Â(A)∖A)}
            else 
              A
  } →

  setDef(𝕋₀: ℘(𝕏)) {
    𝕋₀ := ⋂{𝕋 ⊆ 𝕏 | Tower(𝕋)}
  } →

  assert(Chain(𝕋₀)) →

  letDef(M: ℘(X)) {
    M := ⋃𝕋₀
  } →

  assert(M ∈ 𝕋₀) →
  assert(g(M) = M) →
  assert(Maximal(M,X))
}

where Tower(𝕋) is defined as:
∅ ∈ 𝕋 ∧
(∀A ∈ 𝕋: g(A) ∈ 𝕋) ∧
(∀C ⊆ 𝕋: Chain(C) → ⋃C ∈ 𝕋)