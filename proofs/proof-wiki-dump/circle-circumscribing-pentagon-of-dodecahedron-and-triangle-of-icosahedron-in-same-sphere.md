theorem CircleDodecahedronIcosahedron() {
  assert(
    ∀sphere(S) ∧ ∀dodecahedron(D) ∧ ∀icosahedron(I) ∧ inscribed(D,S) ∧ inscribed(I,S) ⇒
    radius(circumCircle(pentagon(D))) = radius(circumCircle(triangle(I)))
  )
} ↔

lemma PentagonSquares() {
  assert(
    ∀pentagon(P) ∧ equilateral(P) ∧ equiangular(P) ∧ ∀circle(C) ∧ inscribed(P,C) ⇒
    square(subtending2Sides(P)) + square(side(P)) = 5·square(radius(C))
  )
} ↔

proof CircleDodecahedronIcosahedron() {
  setVar(AB: diameter(S)) →
  setVar(CDEFG: pentagon(D)) →
  setVar(KLH: triangle(I)) →
  setVar(DG: line) →
  assert(DG = side(cube(S))) → // From XIII.17
  
  setVar(MN: line) →
  assert(square(AB) = 5·square(MN)) →
  assert(MN = radius(circumCircle(CDEFG))) → // From XIII.16 Porism
  
  setVar(O: point) →
  assert(extremeMeanRatio(MN,O) ∧ greater(MO)) →
  assert(MO = side(decagon(circle(MN)))) → // From XIII.9
  
  assert(5·square(MN) = square(AB) = 3·square(DG)) → // From XIII.15
  
  assert(extremeMeanRatio(DG,CG) ∧ greater(CG)) →
  assert(ratio(DG,CG) = ratio(MN,MO)) → // From XIV.8 Lemma
  
  assert(3·square(DG):3·square(CG) = 5·square(MN):5·square(MO)) →
  assert(MO = side(decagon(circle(MN)))) →
  assert(KL = side(pentagon(circle(MN)))) →
  assert(MN = side(hexagon(circle(MN)))) →
  
  assert(5·square(MO) + 5·square(MN) = 5·square(KL)) → // From XIII.10
  assert(5·square(KL) = 3·square(CG) + 3·square(DG)) →
  
  assert(5·square(KL) = square(15·radius(circumCircle(KLH)))) → // From XIII.12
  assert(3·square(DG) + 3·square(CG) = square(15·radius(circumCircle(CDEFG)))) →
  
  conclude(radius(circumCircle(CDEFG)) = radius(circumCircle(KLH)))
}