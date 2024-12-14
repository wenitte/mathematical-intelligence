theorem Platonic_Figures_Comparison() {
  assert(
    ∀sphere ∈ R³ ∧ 
    let tetrahedron, octahedron, cube, icosahedron, dodecahedron ∈ RegularSolids ∧
    inscribed(tetrahedron, sphere) ∧ 
    inscribed(octahedron, sphere) ∧
    inscribed(cube, sphere) ∧
    inscribed(icosahedron, sphere) ∧
    inscribed(dodecahedron, sphere) ⇒
    compareRegularSolidSides()
  )
}

proof Platonic_Figures_Comparison() {
  setVar(AB: diameter(sphere)) →
  setPoint(C: midpoint(AB)) →
  setPoint(D: point(AB) | AD = 2·DB) →
  constructArc(AEB: semicircle(AB)) →
  constructLine(CE ⊥ AB) →
  constructLine(DF ⊥ AB) →
  constructLines([AF, FB, EB]) →

  lemma TetrahedronSide() {
    assert(AD = 2·DB) →
    assert(AB = 3·DB) →
    assert(AB = 3/2·AD) →
    apply(SimilarTriangles(AFB, AFD)) →
    apply(Prop_VI_8) →
    apply(Prop_V_9) →
    assert(BA:AD = BA²:AF²) →
    assert(BA² = 3/2·AF²) →
    apply(Prop_XIII_13) →
    conclude(AF = tetrahedron.side)
  } →

  lemma CubeSide() {
    assert(AB = 3·DB) →
    apply(Prop_VI_8) →
    apply(Prop_V_9) →
    assert(AB:BD = AB²:BF²) →
    assert(AB² = 3·BF²) →
    apply(Prop_XIII_15) →
    conclude(BF = cube.side)
  } →

  lemma OctahedronSide() {
    assert(AC = CB) →
    assert(AB = 2·BC) →
    assert(AB:BC = AB²:BE²) →
    apply(Prop_XIII_14) →
    conclude(BE = octahedron.side)
  } →

  # [Additional lemmas for icosahedron and dodecahedron omitted for brevity]

  assert(
    tetrahedron.side² = 4/3·octahedron.side² ∧
    tetrahedron.side² = 2·cube.side² ∧
    octahedron.side² = 3/2·cube.side² ∧
    icosahedron.side > dodecahedron.side ∧
    ¬∃r∈ℚ (icosahedron.side = r·cube.side ∨ 
           dodecahedron.side = r·cube.side)
  )
}