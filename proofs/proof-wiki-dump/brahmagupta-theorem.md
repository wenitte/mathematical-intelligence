theorem Brahmagupta() {
  assert(
    ∀Q[cyclic] ∧ (Q = ABCD) ∧ 
    ∃AC,BD[diagonals] ∧ (AC ⊥ BD) ∧
    intersect(AC,BD) = M ∧
    ∃EF[line] ∧ (M ∈ EF) ∧
    intersect(EF,BC) = E ∧
    intersect(EF,AD) = F ⇒
    (EF ⊥ BC ↔ AF = FD)
  )
}

proof Brahmagupta() {
  // Sufficient direction
  proof_sufficiency() {
    assume(EF ⊥ BC) →
    setVar(∠FAM) →
    assert(∠FAM = ∠CAD) by extend_lines(AF,AM,D,C) →
    assert(∠CAD = ∠CBD) by cyclic_angles(CD) →
    assert(∠CBD = ∠CBM) by extend_line(BM,D) →
    assert(∠CBM = ∠CME) by complement_angles() →
    assert(∠CME = ∠FMA) by vertical_angles() →
    
    lemma Triangle_Isosceles1() {
      assert(∠FAM = ∠FMA ⇒ AF = FM)
    } →
    apply(Triangle_Isosceles1()) →
    
    setVar(∠FDM) →
    assert(∠FDM = ∠ADB) by extend_lines(DF,DM,A,B) →
    assert(∠ADB = ∠ACB) by cyclic_angles(AB) →
    assert(∠ACB = ∠BCM) by extend_line(BM,A) →
    assert(∠BCM = ∠BME) by complement_angles() →
    assert(∠BME = ∠DMF) by vertical_angles() →
    
    lemma Triangle_Isosceles2() {
      assert(∠FDM = ∠DMF ⇒ FD = FM)
    } →
    apply(Triangle_Isosceles2()) →
    
    conclude(AF = FM = FD)
  }

  // Necessary direction
  proof_necessity() {
    assume(AF = FD) →
    assert(AF = FM = FD) by Thales_theorem() →
    
    setVar(∠EBM) →
    assert(∠EBM = ∠CBD) by extend_lines(EB,BM,C,D) →
    assert(∠CBD = ∠CAD) by cyclic_angles(CD) →
    assert(∠CAD = ∠FAM) by extend_lines(AM,FA,C,D) →
    assert(∠FAM = ∠AMF) by isosceles_triangle(AF=FM) →
    assert(∠AMF = ∠EMC) by vertical_angles() →
    
    lemma Right_Angle() {
      assert(∠EBM,∠ECM[complementary]) by triangle_angles(CBM) →
      assert(∠EMC,∠ECM[complementary]) →
      assert(∠CEM = 90°)
    } →
    apply(Right_Angle()) →
    
    conclude(EF ⊥ BC)
  }
}