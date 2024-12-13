theorem Triangle_Area_Inradius() {
  assert(
    ∀triangle(ABC) ∧ ∀r,s ∈ ℝ+ ∧
    let(sides(a,b,c) ∧ vertices(A,B,C) ∧ inradius(r) ∧ s = (a+b+c)/2) ⇒
    area(ABC) = r*s
  )
}

proof Triangle_Area_Inradius() {
  setVar(I: incenter(ABC)) →
  setVar(r: inradius(ABC)) →
  
  lemma Triangle_Decomposition() {
    assert(
      area(ABC) = area(AIB) + area(BIC) + area(CIA)
    )
  } →

  lemma Base_Heights() {
    assert(
      length(AB) = c ∧
      length(BC) = a ∧
      length(CA) = b ∧
      height(AIB) = height(BIC) = height(CIA) = r
    )
  } →

  apply(Triangle_Area_Formula()) →
  assert(
    area(AIB) = (c*r)/2 ∧
    area(BIC) = (a*r)/2 ∧
    area(CIA) = (b*r)/2
  ) →

  apply(Triangle_Decomposition()) →
  assert(
    area(ABC) = (c*r)/2 + (a*r)/2 + (b*r)/2
  ) →

  simplify() →
  assert(
    area(ABC) = r*(a+b+c)/2
  ) →

  substitute(s = (a+b+c)/2) →
  assert(
    area(ABC) = r*s
  )
}