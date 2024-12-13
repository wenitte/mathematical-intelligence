theorem Circle_Area_Lemma_3() {
  assert(
    ∀r,c,C,T ∈ ℝ⁺ ⇒
    (isCircle(C, r, c) ∧ 
     isTriangle(T, r, c)) ⇒
    T ≤ C
  )
} ↔

proof Circle_Area_Lemma_3() {
  setVar(r,c,C,T: ℝ⁺) →
  assume(T > C) →

  lemma Polygon_Construction() {
    assert(∃P ∈ ℝ⁺: C < P < T)
  } →

  lemma Polygon_Area_Formula() {
    assert(
      ∀h,q,n ∈ ℝ⁺ ⇒
      (P = (h·q)/2 ∧
       q = perimeter ∧
       h = inradius ∧
       B = q/n ∧
       A = (h·q)/(2n))
    )
  } →

  apply(Polygon_Area_Formula()) →
  
  assert(P < T ⇒ (h·q)/2 < (r·c)/2) →
  assert(h = r ∧ c < q ⇒ (h·q)/2 > (r·c)/2) →
  
  contradiction() →
  
  assert(¬(T > C)) →
  assert(T ≤ C)
} ↔