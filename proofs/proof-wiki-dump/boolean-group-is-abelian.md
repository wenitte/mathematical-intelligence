theorem Boolean_Group_Is_Abelian() {
  assert(
    ∀G(isGroup(G) ∧ isBoolean(G) → isAbelian(G))
  )
} ↔

proof Boolean_Group_Is_Abelian() {
  setVar(G: Group, isBoolean(G)) →
  setVar(a,b: G) →
  assert(∀x ∈ G(x² = e)) →  # Boolean group definition
  
  # Main proof chain
  assert(ab = ae₁b) →        # identity element property
  assert(ae₁b = a(ab)²b) →   # x² = e substitution
  assert(a(ab)²b = a(ab)(ab)b) →  # expand square
  assert(a(ab)(ab)b = (aa)(ba)(bb)) →  # associativity
  assert((aa)(ba)(bb) = a²(ba)b²) →  # regrouping
  assert(a²(ba)b² = e(ba)e) →  # x² = e substitution
  assert(e(ba)e = ba) →       # identity property
  
  # Conclusion
  assert(ab = ba) →
  assert(∀x,y ∈ G(xy = yx)) →
  assert(isAbelian(G))
}

lemma Boolean_Elements_Self_Inverse() {
  assert(
    ∀x ∈ G(x² = e → x = x⁻¹)
  )
}

proof Boolean_Elements_Self_Inverse() {
  setVar(x: G) →
  assert(x² = e) →
  assert(x⁻¹x = e) →
  assert(x⁻¹x = xx) →
  assert(x⁻¹ = x)
}