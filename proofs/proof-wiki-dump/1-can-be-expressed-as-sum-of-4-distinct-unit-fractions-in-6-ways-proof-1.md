theorem Unit_Fractions_Sum_To_One() {
  assert(
    ∃!(s₁,s₂,s₃,s₄,s₅,s₆: Solution) where Solution = (a,b,c,d: ℚ⁺) ∧ 
    (∀i ∈ {1..6}: 1 = 1/s_i.a + 1/s_i.b + 1/s_i.c + 1/s_i.d) ∧
    (∀i ∈ {1..6}: s_i.a < s_i.b < s_i.c < s_i.d)
  )
} ↔

proof Unit_Fractions_Sum_To_One() {
  setVar(v,w,x,y: ℚ⁺) →
  assert(1 = 1/v + 1/w + 1/x + 1/y) →
  assert(1 < v < w < x < y) →

  lemma Upper_Bound_V() {
    assert(1 > 1/3 + 1/4 + 1/5 + 1/6) →
    conclude(v < 3)
  } →
  
  apply(Upper_Bound_V()) →
  assert(v = 2) →

  lemma W_Bounds() {
    assert(1/2 < 1/3 + 1/4 + 1/5) ∧
    assert(1/2 < 1/4 + 1/5 + 1/6) ∧ 
    assert(1/2 < 1/5 + 1/6 + 1/7) ∧
    assert(1/2 > 1/6 + 1/7 + 1/8) →
    conclude(w ∈ {3,4,5})
  } →

  setVar(y = 1/(((w-2)/(2w)) - 1/x)) →
  assert(1/x < (w-2)/(2w)) →
  assert(x > 2w/(w-2)) →
  assert(x < y) →
  assert(x < 4w/(w-2)) →

  case w=3 {
    assert(6 < x < 12) →
    setSolutions({(2,3,7,42), (2,3,8,24), (2,3,9,18), (2,3,10,15)})
  } →

  case w=4 {
    assert(4 < x < 8) →
    setSolutions({(2,4,5,20), (2,4,6,12)})
  } →

  case w=5 {
    assert(10/3 < x < 20/3) →
    setSolutions(∅)
  } →

  conclude(
    Solutions = {
      (2,3,7,42), (2,3,8,24), (2,3,9,18), (2,3,10,15),
      (2,4,5,20), (2,4,6,12)
    }
  )
}