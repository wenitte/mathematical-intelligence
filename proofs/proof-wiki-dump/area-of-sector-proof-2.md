theorem Area_of_Sector() {
  let(C: Circle, A: Point, B: Point, C: Point)
  let(r = length(AB))
  let(θ = angle(BAC))
  assert(
    (isCenter(A, C) ∧ 
     isRadius(AB) ∧ 
     isRadius(AC) ∧ 
     isSector(BAC)) →
    area(BAC) = (r²θ)/2
  )
}

proof Area_of_Sector() {
  let(A_circle = area(C))
  let(A_sector = area(BAC))
  
  assert(A_circle = πr²) →
  
  lemma Full_Circle_Angle() {
    assert(angle(circle) = 2π)
  } →
  
  assert(
    A_sector/A_circle = θ/(2π)
  ) →
  
  assert(
    A_sector = A_circle × (θ/(2π))
  ) →
  
  assert(
    A_sector = πr² × (θ/(2π))
  ) →
  
  assert(
    A_sector = (r²θ)/2
  )
}