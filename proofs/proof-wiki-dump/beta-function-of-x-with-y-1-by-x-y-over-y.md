theorem Beta_Function_Property() {
  assert(
    ∀x,y ∈ ℝ ⇒ β(x,y) = ((x+y)/y)β(x,y+1)
  )
} ↔

proof Beta_Function_Property() {
  setVar(x,y: ℝ) →
  
  lemma Beta_Definition() {
    assert(β(x+1,y) = ∫₀¹ tˣ(1-t)^(y-1) dt)
  } →
  
  letVar(u = tˣ) →
  letVar(du/dx = xt^(x-1)) →
  letVar(dv/dx = (1-t)^(y-1)) →
  letVar(v = -(1-t)^y/y) →
  
  assert(
    ∫₀¹ t^(x-1)(1-t)^(y-1) dt = 
    [tˣ(-(1-t)^y/y)]₀¹ - ∫₀¹ xt^(x-1)(-(1-t)^y/y) dt
  ) →
  
  assert(
    [tˣ(-(1-t)^y/y)]₀¹ = 0
  ) →
  
  assert(
    ∫₀¹ t^(x-1)(1-t)^(y-1) dt = (x/y)∫₀¹ t^(x-1)(1-t)^y dt
  ) →
  
  assert(
    ∫₀¹ t^(x-1)(1-t)^y dt = β(x,y+1)
  ) →
  
  lemma Beta_Recurrence() {
    assert(β(x,y) = β(x+1,y) + β(x,y+1))
  } →
  
  apply(Beta_Recurrence()) →
  
  assert(
    β(x,y) = (x/y)β(x,y+1) + β(x,y+1)
  ) →
  
  assert(
    β(x,y) = ((x+y)/y)β(x,y+1)
  )
}