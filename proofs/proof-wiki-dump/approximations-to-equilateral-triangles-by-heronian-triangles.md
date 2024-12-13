theorem Heronian_Triangle_Sequence() {
  assert(
    ∀a ∈ ℕ[Heronian_Triangle(a-1,a,a+1)] ⇒ 
    sequence = [(3,4,5), (13,14,15), (193,194,195), (37633,37634,37635)] ∧
    ∀n>1[a_n = (a_{n-1})^2 - 2]
  )
} ↔

proof Heronian_Triangle_Sequence() {
  setVar(a: ℕ) →
  lemma HeronArea() {
    assert(
      Area = √(s(s-a+1)(s-a)(s-a-1)) →
      Area = (a/4)√(3(a^2-4)) →
      Area ∈ ℕ
    )
  } →
  
  assert(a ≡ 0 (mod 2)) →
  setVar(n: ℕ, a=2n) →
  assert(Area = n√(3n^2-3)) →
  
  lemma PellEquation() {
    assert(
      x^2 - 3n^2 = -3 ∧
      ∃(x,n)[x^2 - 3n^2 = 1] →
      (x,n) = {(0,1), (1,2)}
    )
  } →
  
  lemma GeneralSolution() {
    assert(
      x^2 - 3y^2 = 1 = (2^2 - 3×1^2)^m ∧
      (x - √3y)(x + √3y) = (2-√3)^m(2+√3)^m →
      x = ((2-√3)^m + (2+√3)^m)/2 ∧
      y = ((2+√3)^m - (2-√3)^m)/(2√3)
    )
  } →
  
  apply(PellEquation()) →
  apply(GeneralSolution()) →
  
  assert(
    a = (2-√3)^m + (2+√3)^m ∧
    m=1 ⇒ a=4 ∧
    ∀k>1[a_k = (a_{k-1})^2 - 2]
  ) →
  
  conclude(
    sequence = [(3,4,5), (13,14,15), (193,194,195), (37633,37634,37635)]
  )
}