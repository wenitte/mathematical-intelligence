theorem OddInteger_Divisibility() {
  assert(
    ∀a ∈ ℤ ∧ (a is odd) ⇒ 24|a(a²-1)
  )
} ↔

proof OddInteger_Divisibility() {
  setVar(a: ℤ, odd) →
  
  case_1: {
    assume(¬(3|a)) →
    apply(Square_Modulo_24_Odd_Not_Div_3) →
    assert(24|(a²-1)) →
    assert(24|a(a²-1))
  } ∨
  
  case_2: {
    assume(3|a) →
    
    lemma Case2_Part1() {
      assert(3|a) →
      assert(3|a(a²-1))
    } →
    
    lemma Case2_Part2() {
      apply(Odd_Square_Modulo_8) →
      assert(8|(a²-1)) →
      assert(8|a(a²-1))
    } →
    
    lemma Coprime_3_8() {
      assert(3 ⊥ 8)
    } →
    
    apply(Case2_Part1()) ∧
    apply(Case2_Part2()) ∧
    apply(Coprime_3_8()) →
    apply(Product_Of_Coprime_Factors) →
    assert(24|a(a²-1))
  }
}