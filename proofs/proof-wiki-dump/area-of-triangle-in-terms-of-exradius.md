theorem TriangleAreaExradius() {
  assert(
    ∀triangle(ABC) ∧
    let(a,b,c: sides(ABC)) ∧
    let(ρₐ: exradius(ABC, a)) ∧
    let(s: semiperimeter(ABC)) →
    area(ABC) = ρₐ(s - a)
  )
}

proof TriangleAreaExradius() {
  let(C: excircle(ABC, a)) →
  let(Iₐ: center(C)) →
  
  lemma AreaDecomposition() {
    assert(
      area(ABC) = area(ABIₐ) + area(ACIₐ) - area(CBIₐ)
    )
  } →

  lemma TriangleAreas() {
    assert(
      area(ABIₐ) = (c·ρₐ)/2 ∧
      area(ACIₐ) = (b·ρₐ)/2 ∧
      area(CBIₐ) = (a·ρₐ)/2
    )
  } →

  apply(AreaDecomposition()) →
  apply(TriangleAreas()) →
  
  assert(
    area(ABC) = (c·ρₐ)/2 + (b·ρₐ)/2 - (a·ρₐ)/2
  ) →
  
  assert(
    area(ABC) = ρₐ((b + c - a)/2)
  ) →
  
  lemma SemiPerimeterDef() {
    assert(s = (a + b + c)/2)
  } →
  
  apply(SemiPerimeterDef()) →
  
  assert(
    area(ABC) = ρₐ(s - a)
  )
}