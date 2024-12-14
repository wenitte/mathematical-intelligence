theorem Cofinal_Limit_Ordinals() {
  assert(
    ∀x,y [x,y ∈ Ord ∧ cof(x,y)] →
    [x ∈ K_II ↔ y ∈ K_II]
  )
} ↔

proof Cofinal_Limit_Ordinals() {
  // Necessary Condition: y ∈ K_II → x ∈ K_II
  setVar(x,y: Ord) →
  assume(cof(x,y) ∧ y ∈ K_II) →
  assert(x ≠ 0) by(Cofinal_Zero_Theorem) →
  
  lemma Successor_Contradiction() {
    assume(∃z[x = z⁺]) →
    assert(z = ⋃x) by(Union_Successor_Ordinal) →
    assert(∀a∈x ∃b∈y[f(b) ≥ a]) by(def_cofinal) →
    assert(∃b∈y[f(b) ≥ z]) →
    assert(b⁺ ∈ y) by(Limit_Successor_Property) →
    assert(f(b⁺) ∈ x ∧ f(b⁺) > f(b) ≥ z) →
    assert(contradiction(z_upper_bound))
  } →
  
  apply(Successor_Contradiction()) →
  assert(x ∈ K_II) →

  // Sufficient Condition: x ∈ K_II → y ∈ K_II
  assume(x ∈ K_II) →
  assert(y ≠ 0) by(Cofinal_Zero_Theorem) →
  
  lemma Successor_Contradiction_Reverse() {
    assume(∃z[y = z⁺]) →
    assert(z = ⋃y) by(Union_Successor_Ordinal) →
    assert(∀a∈x ∃b∈y[f(b) ≥ a]) by(def_cofinal) →
    assert(f(z) ∈ x) →
    assert(f(z⁺) ∈ x) by(Limit_Successor_Property) →
    assert(∃b∈y[f(b) ≥ f(z⁺)]) →
    assert(f(b) > f(z)) by(Successor_Greater) →
    assert(b > z) by(Strictly_Increasing_Property) →
    assert(contradiction(z_upper_bound))
  } →
  
  apply(Successor_Contradiction_Reverse()) →
  assert(y ∈ K_II)
}