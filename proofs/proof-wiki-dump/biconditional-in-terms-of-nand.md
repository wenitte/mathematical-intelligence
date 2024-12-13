theorem Biconditional_NAND_Equivalence() {
  assert(
    ∀p,q ∈ BOOL: (p ⟺ q) ⟺ ((p↑p)↑(q↑q))↑(p↑q)
  )
}

proof Biconditional_NAND_Equivalence() {
  setVar(p,q: BOOL) →
  
  assert((p ⟺ q) ⟺ ¬(p ⊕ q)) →      // Exclusive Or is Negation of Biconditional
  
  assert(
    ¬(p ⊕ q) ⟺ ¬((p ∨ q) ∧ ¬(p ∧ q))
  ) →      // Definition of Exclusive Or
  
  assert(
    ¬((p ∨ q) ∧ ¬(p ∧ q)) ⟺ 
    ¬((p ∨ q) ∧ (p↑q))
  ) →      // Definition of Logical NAND
  
  assert(
    ¬((p ∨ q) ∧ (p↑q)) ⟺ 
    ¬(((p↑p)↑(q↑q)) ∧ (p↑q))
  ) →      // Disjunction in terms of NAND
  
  assert(
    ¬(((p↑p)↑(q↑q)) ∧ (p↑q)) ⟺ 
    ((p↑p)↑(q↑q))↑(p↑q)
  ) →      // Definition of Logical NAND
  
  QED
}