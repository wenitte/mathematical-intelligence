theorem CircleTangencyCondition() {
  assert(
    ∀C ∈ Circle, ∀L ∈ Line, ∀r,l,m,n ∈ ℝ ⇒
    (C.center = Origin ∧ C.radius = r ∧
     L.equation = (lx + my + n = 0) ∧ l ≠ 0) ⇒
    (L.tangentTo(C) ↔ ((l² + m²)r² = n²))
  )
}

proof CircleTangencyCondition() {
  setVar(C: Circle, L: Line, r,l,m,n: ℝ) →
  assert(C.equation = (x² + y² = r²)) →
  assert(L ∩ C ≠ ∅) →
  
  lemma IntersectionPoints() {
    assert(lx + my + n = 0) →
    assert(x = -(my/l) - n/l) →
    assert((-my/l - n/l)² + y² = r²) →
    assert((m²y² + 2mny + n²)/l² + y² = r²) →
    assert((l² + m²)y² + 2mny + (n² - l²r²) = 0)
  } →

  lemma TangencyCondition() {
    assert(L.tangentTo(C) ↔ IntersectionPoints().hasEqualRoots) →
    assert(IntersectionPoints().hasEqualRoots ↔ 
           IntersectionPoints().discriminant = 0) →
    assert(IntersectionPoints().discriminant = 
           (2mn)² - 4(l² + m²)(n² - l²r²)) →
    assert(m²n² = (l² + m²)(n² - l²r²)) →
    assert(l²n² - l²m²r² - l⁴r² = 0) →
    assert((l² + m²)r² = n²)
  } →
  
  apply(TangencyCondition()) →
  assert(L.tangentTo(C) ↔ ((l² + m²)r² = n²))
}