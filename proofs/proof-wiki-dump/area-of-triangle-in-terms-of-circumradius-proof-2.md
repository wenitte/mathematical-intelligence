theorem TriangleAreaCircumradius() {
  assert(
    ∀triangle(ABC) ∧
    ∀sides(a,b,c) ∧
    ∀vertices(A,B,C) ∧
    ∀circumradius(R) ∧
    ∀area(𝔸) ⇒
    𝔸 = (abc)/(4R)
  )
} ↔

proof TriangleAreaCircumradius() {
  setVar(ABC: Triangle, a,b,c: Length, A,B,C: Angle, R: Length, 𝔸: Area) →
  
  assert(2R = a/sin(A)) →  // Law of Sines
  
  assert(2R = (abc)/(bc·sin(A))) → // Multiply both sides by (bc/bc)
  
  lemma TriangleArea() {
    assert(𝔸 = (bc·sin(A))/2)  // Area formula with two sides and angle
  } →
  
  apply(TriangleArea()) →
  
  assert(2R = (abc)/(2𝔸)) →  // Substitute area formula
  
  assert(R = (abc)/(4𝔸)) →  // Divide both sides by 2
  
  assert(𝔸 = (abc)/(4R))    // Solve for 𝔸
}