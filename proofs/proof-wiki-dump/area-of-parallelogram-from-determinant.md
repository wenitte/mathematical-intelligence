theorem Parallelogram_Area_From_Determinant() {
  assert(
    ∀O,A,B,C ∈ ℝ² ∧
    O = (0,0) ∧ 
    A = (a,c) ∧
    B = (a+b,c+d) ∧ 
    C = (b,d) ⇒
    Area(OABC) = |a b|
                  |c d|
  )
} ↔

proof Parallelogram_Area_From_Determinant() {
  setVar(O,A,B,C: ℝ²) →
  
  lemma Verify_Parallelogram() {
    assert(
      vec(AB) = (b,d) = vec(OC) ∧
      vec(CB) = (a,c) = vec(OA)
    ) →
    apply(Opposite_Sides_Equal_Implies_Parallelogram) →
    conclude(OABC is parallelogram)
  } →

  lemma Area_Calculation() {
    assert(
      Area(OABC) = 
      (a+b)(c+d)                              // large rectangle
      - (ac/2) - ((a+b-b)(c+d-d)/2)          // top/bottom triangles
      - (bd/2) - ((a+b-a)(c+d-c)/2)          // left/right triangles
      - ((a+b-a)c) - (b(c+d-d))              // small rectangles
    ) →
    simplify() →
    assert(
      Area(OABC) = ac + ad + bc + bd - ac/2 - ac/2 - bd/2 - bd/2 - 2bc
    ) →
    simplify() →
    assert(
      Area(OABC) = ad - bc
    ) →
    assert(
      ad - bc = |a b|
                |c d|
    )
  } →
  
  apply(Verify_Parallelogram()) →
  apply(Area_Calculation()) →
  conclude(
    Area(OABC) = |a b|
                 |c d|
  )
}