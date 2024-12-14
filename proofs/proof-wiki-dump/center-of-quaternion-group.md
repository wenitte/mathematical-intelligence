theorem Quaternion_Group_Center() {
  let Q = Dic2 = ⟨a,b: a⁴=e, b²=a², aba=b⟩
  let Z(Dic2) = center(Dic2)
  assert(
    Z(Dic2) = {e, a²}
  )
} ↔

proof Quaternion_Group_Center() {
  define(Z(Dic2) = {g ∈ Dic2: gx = xg, ∀x ∈ Dic2}) →
  assert(Dic2 = ⟨a,b: a⁴=e, b²=a², aba=b⟩) →
  
  lemma Center_Characterization() {
    assert(x ∈ Z(Dic2) ↔ (xa = ax ∧ xb = bx))
  } →
  
  setVar(x ∈ Z(Dic2)) →
  assert(∃i∈{0,1,2,3}, j∈{0,1}: x = aⁱbʲ) →
  
  lemma Contradiction_Case_j1() {
    assume(j = 1) →
    assert(xa = ax) →
    assert(aⁱbʲa = aⁱ⁺¹bʲ) →
    assert(bʲa = abʲ) →
    assert(ab = ba) →
    assert(a = a⁻¹) →
    assert(a² = e) →
    assert(contradiction(order(a) = 4))
  } →
  
  apply(Contradiction_Case_j1()) →
  assert(j = 0) →
  assert(x = aⁱ for some i ∈ ℤ₍₀₎) →
  
  lemma Center_Elements() {
    assert(xb = bx) →
    assert(aⁱb = baⁱ) →
    assert(aⁱb = a⁻ⁱb) →
    assert(aⁱ = a⁻ⁱ) →
    assert(a²ⁱ = e) →
    assert(a²ⁱ = a⁴) →
    assert(i ∈ {0,2})
  } →
  
  apply(Center_Elements()) →
  assert(i = 0 → x = e) →
  assert(i = 2 → x = a²) →
  conclude(Z(Dic2) = {e, a²})
}