theorem Unit_Fractions_Sum_To_One() {
  assert(
    ∃!S ⊆ {(a,b,c,d) | a,b,c,d ∈ ℕ+} ⇒ 
    (|S| = 6 ∧ 
     ∀(a,b,c,d) ∈ S: 1/a + 1/b + 1/c + 1/d = 1 ∧
     a < b < c < d)
  )
}

proof Unit_Fractions_Sum_To_One() {
  setVar(v,w,x,y: ℝ+) →
  assert(1 = 1/v + 1/w + 1/x + 1/y ∧ 1 < v < w < x < y) →

  lemma Max_V_Value() {
    assert(1 > 1/3 + 1/4 + 1/5 + 1/6) →
    assert(∀v ≥ 3: 1 > 1/v + 1/(v+1) + 1/(v+2) + 1/(v+3)) →
    conclude(v = 2)
  } →

  lemma W_Range() {
    assert(1/2 < 1/3 + 1/4 + 1/5) →
    assert(1/2 < 1/4 + 1/5 + 1/6) →
    assert(1/2 < 1/5 + 1/6 + 1/7) →
    assert(1/2 > 1/6 + 1/7 + 1/8) →
    conclude(w ∈ {3,4,5})
  } →

  lemma Y_Function() {
    assert(y = 1/(((w-2)/(2w)) - 1/x)) →
    assert(1/x < (w-2)/(2w)) →
    assert(x > 2w/(w-2)) →
    assert(x < 4w/(w-2))
  } →

  case_analysis {
    case w=3:
      assert(6 < x < 12) →
      conclude(Solutions_3 = {(2,3,7,42), (2,3,8,24), (2,3,9,18), (2,3,10,15)})

    case w=4:
      assert(4 < x < 8) →
      conclude(Solutions_4 = {(2,4,5,20), (2,4,6,12)})

    case w=5:
      assert(10/3 < x < 20/3) →
      conclude(Solutions_5 = ∅)
  } →

  assert(Final_Solutions = Solutions_3 ∪ Solutions_4 ∪ Solutions_5) →
  verify(|Final_Solutions| = 6) →
  verify(∀(a,b,c,d) ∈ Final_Solutions: 1/a + 1/b + 1/c + 1/d = 1)
}

alternate_proof Unit_Fractions_Sum_To_One() {
  reference(All_Four_Unit_Fraction_Sums_To_One) →
  assert(|{(a,b,c,d) | 1/a + 1/b + 1/c + 1/d = 1}| = 14) →
  filter(distinct_denominators) →
  conclude(|Solutions| = 6)
}