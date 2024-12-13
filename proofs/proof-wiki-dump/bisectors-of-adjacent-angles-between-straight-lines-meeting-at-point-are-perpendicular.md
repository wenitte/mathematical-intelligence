theorem BisectorsArePerpendicular() {
  assert(
    ∀L₁,L₂ ∈ Lines ∧ ∀E ∈ Points ⇒
    (intersect(L₁,L₂,E) ∧ 
     ∃F,G ∈ Points : 
     isBisector(EF, angle(L₁,L₂)) ∧
     isBisector(EG, angle(L₂,L₁))) →
    perpendicular(EF,EG)
  )
} ↔

proof BisectorsArePerpendicular_Geometric() {
  setVar(L₁,L₂: Lines, E,F,G: Points) →
  assert(intersect(L₁,L₂,E)) →
  let(θ₁ = angle(L₁,L₂)) →
  let(θ₂ = angle(L₂,L₁)) →
  
  lemma StraightLineAngles() {
    assert(θ₁ + θ₂ = 2·rightAngle)
  } →
  
  assert(isBisector(EF,θ₁) → angle(L₁,EF) = θ₁/2) →
  assert(isBisector(EG,θ₂) → angle(L₂,EG) = θ₂/2) →
  
  calc {
    angle(F,E,G) = angle(L₁,EF) + angle(L₂,EG);
    = θ₁/2 + θ₂/2;
    = (θ₁ + θ₂)/2;
    = rightAngle;
  } →
  
  assert(perpendicular(EF,EG))
} ↔

proof BisectorsArePerpendicular_Algebraic() {
  setVar(L₁,L₂: Lines) →
  let(L₁: x·cos(α) + y·sin(α) = p) →
  let(L₂: x·cos(β) + y·sin(β) = q) →
  
  lemma BisectorEquations() {
    assert(
      bisector₁: x(cos(α)-cos(β)) + y(sin(α)-sin(β)) = p-q ∧
      bisector₂: x(cos(α)+cos(β)) + y(sin(α)+sin(β)) = p+q
    )
  } →
  
  let(l₁ = cos(α)-cos(β), m₁ = sin(α)-sin(β)) →
  let(l₂ = cos(α)+cos(β), m₂ = sin(α)+sin(β)) →
  
  calc {
    l₁l₂ + m₁m₂;
    = (cos(α)-cos(β))(cos(α)+cos(β)) + (sin(α)-sin(β))(sin(α)+sin(β));
    = cos²(α)-cos²(β) + sin²(α)-sin²(β);
    = (cos²(α)+sin²(α)) - (cos²(β)+sin²(β));
    = 1 - 1;
    = 0;
  } →
  
  assert(perpendicular(bisector₁,bisector₂))
}