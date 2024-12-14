theorem Constant_Sequence_Cauchy() {
  assert(
    ∀R(NormedDivisionRing(R)) ∧
    ∀a ∈ R ⇒
    (∀n ∈ ℕ, x_n = a) →
    IsCauchySequence({x_n})
  )
}

proof Constant_Sequence_Cauchy() {
  setStruct(R: NormedDivisionRing) →
  setVar(a: R) →
  setVar({x_n}: Sequence(R)) →
  
  assert(∀n ∈ ℕ, x_n = a) →
  
  lemma Distance_Zero() {
    assert(
      ∀n,m ∈ ℕ:
      ‖x_n - x_m‖ = ‖a - a‖ = ‖0‖ = 0
    )
  } →
  
  setVar(ε: ℝ) →
  assert(ε > 0) →
  
  apply(Distance_Zero()) →
  assert(
    ∀n,m ∈ ℕ:
    ‖x_n - x_m‖ = 0 < ε
  ) →
  
  conclude(
    ∀ε > 0, ∃N ∈ ℕ, ∀n,m ≥ N:
    ‖x_n - x_m‖ < ε
  ) →
  
  conclude(IsCauchySequence({x_n}))
}