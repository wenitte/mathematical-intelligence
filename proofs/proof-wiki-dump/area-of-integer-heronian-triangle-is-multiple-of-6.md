theorem Integer_Heronian_Triangle_Area() {
  assert(
    ∀T(Triangle) ∧ IsHeronian(T) ∧ HasIntegerSides(T) →
    ∃k ∈ ℤ [ Area(T) = 6k ]
  )
}

proof Integer_Heronian_Triangle_Area() {
  setVar(T: Triangle) →
  setVar(a,b,c: ℝ, sides(T)) →
  setVar(s: ℝ, (a+b+c)/2) →
  setVar(A: ℝ, Area(T)) →

  // Heron's Formula
  assert(A = √(s(s-a)(s-b)(s-c))) →
  assert(A² = s(s-a)(s-b)(s-c)) →
  
  // Simplification steps
  assert(16A² = (a+b+c)(-a+b+c)(a-b+c)(a+b-c)) →
  assert(16A² = 2a²b² + 2b²c² + 2c²a² - a⁴ - b⁴ - c⁴) →
  assert((4A)² + (b² + c² - a²)² = (2bc)²) →

  // Prove 2|A
  lemma DivisibleByTwo() {
    assert(2|A²) →
    caseAnalysis({
      case(OddEvenSides): assert(∃side[even(side)]) → assert(2|A²),
      case(AllOdd): assert(FALSE) → contradiction(),
      case(AllEven): assert(2|A²)
    })
  } →

  // Prove 3|A
  lemma DivisibleByThree() {
    assert(3|16A²) →
    caseAnalysis({
      case(NoThreeDivisible): assert(3|16A²),
      case(OneThreeDivisible): assert(3|16A²),
      case(TwoThreeDivisible): assert(FALSE) → contradiction(),
      case(AllThreeDivisible): assert(3|16A²)
    })
  } →

  apply(DivisibleByTwo()) →
  apply(DivisibleByThree()) →
  assert(2|A ∧ 3|A) →
  assert(6|A)
}