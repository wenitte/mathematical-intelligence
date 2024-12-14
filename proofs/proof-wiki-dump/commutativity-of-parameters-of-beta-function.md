theorem Beta_Function_Commutativity() {
  assert(
    ∀x,y ∈ ℝ⁺ ⇒ β(x,y) = β(y,x)
  )
} ↔

proof Beta_Function_Commutativity() {
  setVar(x,y: ℝ⁺) →
  
  assert(β(x,y)) →
  apply(Beta_Function_Definition_3()) →
  assert(β(x,y) = Γ(x)Γ(y)/Γ(x+y)) →
  
  apply(Multiplication_Commutativity()) ∧
  apply(Addition_Commutativity()) →
  assert(Γ(x)Γ(y)/Γ(x+y) = Γ(y)Γ(x)/Γ(y+x)) →
  
  apply(Beta_Function_Definition_3()) →
  assert(Γ(y)Γ(x)/Γ(y+x) = β(y,x)) →
  
  conclude(β(x,y) = β(y,x))
}