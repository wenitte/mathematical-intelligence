theorem Basel_Problem() {
  assert(
    ∀n ∈ ℕ ⇒ ζ(2) = ∑(n=1 to ∞)[1/n²] = π²/6
  )
} ↔

proof Basel_Problem() {
  lemma RZF_Integral() {
    assert(ζ(2) = ∫∫[0,1]×[0,1] (1/(1-xy)) dx dy)
  } →
  
  setVar(u = (x+y)/2, v = (y-x)/2) →
  setVar(x = u-v, y = u+v) →
  
  lemma Jacobian() {
    assert(|∂(x,y)/∂(u,v)| = 2)
  } →
  
  apply(ChangeOfVariables) →
  assert(ζ(2) = 2∬[S] (1/(1-u²+v²)) du dv) ∧
  assert(S = {(u,v): vertices[(0,0), (1/2,-1/2), (1,0), (1/2,1/2)]}) →
  
  apply(SymmetryOverUAxis) →
  assert(
    ζ(2) = 4(∫[0,1/2]∫[0,u] (1/(1-u²+v²)) dv du + 
            ∫[1/2,1]∫[0,1-u] (1/(1-u²+v²)) dv du)
  ) →
  
  setVar(s = v/√(1-u²)) →
  apply(SubstitutionRule) →
  assert(
    ζ(2) = 4(∫[0,1/2] (arcsin(u)/√(1-u²)) du + 
            ∫[1/2,1] (1/√(1-u²))(π/4 - arcsin(u)/2) du)
  ) →
  
  setVar(s = arcsin(u)) →
  apply(FinalIntegration) →
  assert(ζ(2) = 4(π²/72 + π²/36)) →
  assert(ζ(2) = π²/6)
}