theorem Multiplication_Associativity() {
  assert(
    ∀F ∈ {ℕ,ℤ,ℚ,ℝ,ℂ} ⇒
    ∀x,y,z ∈ F ⇒ 
    (x × (y × z)) = ((x × y) × z)
  )
} ↔

proof Multiplication_Associativity() {
  lemma Natural_Numbers() {
    assert(∀x,y,z ∈ ℕ ⇒ (x × (y × z)) = ((x × y) × z))
  } →
  
  lemma Integers() {
    assert(∀x,y,z ∈ ℤ ⇒ (x × (y × z)) = ((x × y) × z))
  } →
  
  lemma Rationals() {
    assert(∀x,y,z ∈ ℚ ⇒ (x × (y × z)) = ((x × y) × z))
  } →
  
  lemma Reals() {
    assert(∀x,y,z ∈ ℝ ⇒ (x × (y × z)) = ((x × y) × z))
  } →
  
  lemma Complex() {
    assert(∀z₁,z₂,z₃ ∈ ℂ ⇒ (z₁ × (z₂ × z₃)) = ((z₁ × z₂) × z₃))
  } →

  lemma Euclid_Multiple() {
    setVar(a,b: magnitude) ∧
    setVar(m,n: ℕ) →
    assert(
      (m × (n × a)) = ((m × n) × a) ∧
      (m × (n × b)) = ((m × n) × b)
    )
  } →

  proof Euclid_Multiple() {
    setVar(A,B,C,D: magnitude) ∧
    setVar(EF,GH,EK,KF,GL,LH: magnitude) →
    assert(A/B = C/D) →
    assert(EF/A = GH/C) →
    assert(EK = A ∧ KF = A ∧ GL = C ∧ LH = C) →
    assert(EK/B = GL/D) →
    assert(KF/B = LH/D) →
    assert(EF/B = GH/D)
  } →
  
  apply(Natural_Numbers()) ∧
  apply(Integers()) ∧
  apply(Rationals()) ∧
  apply(Reals()) ∧
  apply(Complex()) ∧
  apply(Euclid_Multiple()) →
  assert(theorem_statement)
}