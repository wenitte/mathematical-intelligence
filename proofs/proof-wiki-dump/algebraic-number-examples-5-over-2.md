theorem Is_Algebraic_Number_Five_Halves() {
  assert(
    ∃p ∈ ℙ[x] | p(5/2) = 0 
    ↔ 
    5/2 is algebraic
  )
}

proof Is_Algebraic_Number_Five_Halves() {
  setVar(p: ℙ[x]) →
  let(p(x) = 2x - 5) →
  assert(p ∈ ℙ[x]) →
  calc {
    p(5/2)
    = 2(5/2) - 5
    = 5 - 5
    = 0
  } →
  apply(def_algebraic_number: ∀n ∈ ℝ, (∃p ∈ ℙ[x] | p(n) = 0) ↔ n is algebraic) →
  conclude(5/2 is algebraic)
}