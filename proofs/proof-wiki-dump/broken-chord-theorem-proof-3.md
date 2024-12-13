theorem Broken_Chord() {
  assert(
    ∀A,C,M,B ∈ Circle ∧
    arc(A,M) = arc(M,C) ∧
    B ∈ minorArc(A,M) ∧
    ∃D: MD ⊥ BC
    ⇒ AB + BD = DC
  )
}

proof Broken_Chord() {
  setVar(E: Point | BD = DE) →
  
  lemma Equal_Arcs() {
    assert(arc(A,M) = arc(M,C) →
          AM = MC)
  } →
  
  lemma Equal_Angles() {
    assert(arc(A,M) = arc(M,C) →
          ∠BAM = ∠MCB)
  } →
  
  assert(BM shared) →
  
  lemma Triangle_Cases() {
    setVar(△BAM, △MBC, △MEC) →
    assert(AM = MC ∧
           BM shared ∧
           ∠BAM = ∠MCB →
           ambiguousSSA(△BAM, △MBC, △MEC))
  } →
  
  assert(∠MDC = 90°) →
  
  lemma External_Angle() {
    assert(∠MDC = 90° →
          ∠MEC is obtuse)
  } →
  
  lemma Arc_Size() {
    assert(AM = MC ∧ AC = circumference - (arc(A,M) + arc(M,C)) →
          majorArc(A,M) > circle/2)
  } →
  
  assert(majorArc(A,M) > circle/2 →
         ∠ABM is obtuse) →
  
  assert(△ABM ≅ △MEC) →
  assert(AB = EC) →
  assert(AB + BD = DE + EC) →
  assert(AB + BD = DC)
}