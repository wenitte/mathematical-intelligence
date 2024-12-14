theorem Centroid_Weighted_Pair() {
  assert(
    ∀A,B ∈ EuclideanSpace ∧
    ∀p,q ∈ ℝ₊ ∧
    ∃G ∈ EuclideanSpace : G = centroid(A,B) →
    (AG = (q/(p+q))×AB ∧ BG = (p/(p+q))×AB)
  )
} ↔

proof Centroid_Weighted_Pair() {
  setVar(A,B: EuclideanSpace) →
  setVar(p,q: ℝ₊) →
  setVar(a,b: PositionVector) →
  assert(a = positionVector(A)) →
  assert(b = positionVector(B)) →
  
  lemma Centroid_Definition() {
    assert(
      ∀G: G = centroid(A,B) →
      OG = (p×a + q×b)/(p+q)
    )
  } →
  
  apply(Centroid_Definition()) →
  
  lemma Point_Division_Ratio() {
    assert(
      ∀P,Q,R ∈ EuclideanSpace ∧
      ∀m,n ∈ ℝ₊ :
      R = (m×P + n×Q)/(m+n) →
      (PR = (n/(m+n))×PQ ∧ QR = (m/(m+n))×PQ)
    )
  } →
  
  apply(Point_Division_Ratio(), {P:A, Q:B, R:G, m:p, n:q}) →
  assert(AG = (q/(p+q))×AB ∧ BG = (p/(p+q))×AB)
}