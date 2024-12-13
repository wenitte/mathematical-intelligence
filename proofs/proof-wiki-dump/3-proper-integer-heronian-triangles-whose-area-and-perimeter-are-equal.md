theorem HeronianTrianglesAreaPerimeterEqual() {
  assert(
    ∃! T ∈ {(a,b,c) | a,b,c ∈ ℕ+} : |T| = 3 ∧
    isHeronianTriangle(T) ∧ 
    area(T) = perimeter(T)
  ) ∧
  assert(
    T = {(6,25,29), (7,15,20), (9,10,17)}
  )
}

proof HeronianTrianglesAreaPerimeterEqual() {
  // First prove given triangles are proper (not right-angled)
  lemma ProperTriangles() {
    assert(6² + 25² ≠ 29² ∧ 7² + 15² ≠ 20² ∧ 9² + 10² ≠ 17²)
  } →

  // Verify area equals perimeter for each triangle
  lemma VerifyAreaPerimeter() {
    setDef(s = (a + b + c)/2) →  // semiperimeter
    setDef(A = √(s(s-a)(s-b)(s-c))) →  // Heron's formula
    
    // Triangle (6,25,29)
    assert(s₁ = (6 + 25 + 29)/2 = 30) →
    assert(A₁ = √(30·24·5·1) = 60 = 6 + 25 + 29) ∧

    // Triangle (7,15,20)
    assert(s₂ = (7 + 15 + 20)/2 = 21) →
    assert(A₂ = √(21·14·6·1) = 42 = 7 + 15 + 20) ∧

    // Triangle (9,10,17)
    assert(s₃ = (9 + 10 + 17)/2 = 18) →
    assert(A₃ = √(18·9·8·1) = 36 = 9 + 10 + 17)
  } →

  // Prove these are the only solutions
  lemma UniqueSolutions() {
    setVar(a,b,c: ℕ+) →
    assert(2s = √(s(s-a)(s-b)(s-c))) →
    assert(4s² = s(s-a)(s-b)(s-c)) →
    assert(4s = (s-a)(s-b)(s-c)) →
    
    setVar(x = s-a, y = s-b, z = s-c) →
    assert(x + y + z = s) →
    assert(4(x + y + z) = xyz) →
    
    apply(TripleProductQuadrupleSum()) →
    assert(Solutions = {(1,5,24), (1,6,14), (1,8,9), (2,3,10), (2,4,6)}) →
    
    setDef(a = y + z, b = x + z, c = x + y) →
    assert(PossibleTriangles = {(29,25,6), (20,15,7), (17,10,9), (13,12,5), (10,8,6)}) →
    assert((13,12,5) ∧ (10,8,6) are Pythagorean) →
    assert(ValidTriangles = {(29,25,6), (20,15,7), (17,10,9)})
  }
}