theorem Cube_Bisecting_Planes() {
  assert(
    ∀cube[AF] ∧ 
    let(CF, AH: opposite_faces) ∧
    let(K,L,M,N,O,P,Q,R: bisection_points) ∧
    let(KN, OR: planes) ∧
    let(US: common_section) ∧
    let(DG: cube_diameter) ⇒
    (UT = TS ∧ DT = TG)
  )
} ↔

proof Cube_Bisecting_Planes() {
  construct(AF: cube) →
  setBisectionPoints(CF, AH, [K,L,M,N,O,P,Q,R]) →
  constructPlane(KN, [K,L,M,N]) →
  constructPlane(OR, [O,P,Q,R]) →
  setIntersection(US, KN ∩ OR) →
  setDiagonal(DG, AF) →
  
  join(DU, UE, BS, SG) →
  assert(DO ∥ PE) →
  
  lemma Parallel_Alternate_Angles() {
    assert(DO ∥ PE ⇒ ∠DOU = ∠UPE)
  } →
  
  assert(DO = PE ∧ OU = UP ∧ ∠DOU = ∠UPE) →
  
  lemma Triangle_SAS() {
    assert(△DOU = △PUE)
  } →
  
  assert(∠OUD = ∠PUE) →
  assert(DUE: straight_line) →
  assert(BSG: straight_line ∧ BS = SG) →
  
  assert(CA = DB ∧ CA ∥ DB) →
  assert(CA = EG ∧ CA ∥ EG) →
  
  lemma Parallel_Transitivity() {
    assert((CA ∥ DB ∧ CA ∥ EG) ⇒ (DB = EG ∧ DB ∥ EG))
  } →
  
  lemma Parallel_Lines_Equal_Angles() {
    assert(DE ∥ BG ⇒ ∠EDT = ∠BGT)
  } →
  
  assert(∠DTU = ∠GTS) →
  
  lemma Triangle_AAS() {
    assert(△DTU = △GTS)
  } →
  
  conclude(DT = TG ∧ UT = TS)
}