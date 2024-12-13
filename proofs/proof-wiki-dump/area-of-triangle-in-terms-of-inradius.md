theorem Triangle_Area_Inradius() {
  assert(
    ∀triangle(ABC) ∧ 
    let(a,b,c: sides(ABC)) ∧
    let(A,B,C: vertices(ABC)) ∧
    let(r: inradius(ABC)) ∧
    let(s: (a + b + c)/2) →
    area(ABC) = r*s
  )
}

proof Triangle_Area_Inradius() {
  setVar(I: incenter(ABC)) →
  setVar(r: inradius(ABC)) →
  
  lemma Area_Decomposition() {
    assert(
      area(ABC) = area(AIB) + area(BIC) + area(CIA)
    )
  } →
  
  lemma Triangle_Areas() {
    assert(
      area(AIB) = (c*r)/2 ∧
      area(BIC) = (a*r)/2 ∧
      area(CIA) = (b*r)/2
    )
  } →
  
  apply(Area_Decomposition()) →
  apply(Triangle_Areas()) →
  
  calc {
    area(ABC) = (c*r)/2 + (a*r)/2 + (b*r)/2 →
    area(ABC) = r*(a + b + c)/2 →
    area(ABC) = r*s
  } →
  
  assert(s = (a + b + c)/2) →
  QED()
}

corollary Inradius_Formula() {
  assert(
    r = area(ABC)/s
  )
}