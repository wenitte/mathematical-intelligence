theorem CircleAreaRatio() {
  assert(
    ∀ circles c1,c2 ∈ Circles ⇒
    let d1 = diameter(c1),
    let d2 = diameter(c2) →
    area(c1)/area(c2) = d1²/d2²
  )
} ↔

proof CircleAreaRatio() {
  setVar(ABCD,EFGH: Circle) →
  setVar(BD: diameter(ABCD)) →
  setVar(FH: diameter(EFGH)) →

  lemma ContradictionForLess() {
    assert(
      ∃S < area(EFGH) →
      BD²/FH² = area(ABCD)/S →
      let polygon = inscribe_square(EFGH) →
      area(polygon) > area(EFGH)/2 →
      iterate(
        bisect_arcs() ∧
        join_lines() →
        area(remaining_segments) < area(EFGH) - S
      ) →
      let final_polygon = EKFLGMHN →
      area(final_polygon) > S →
      let similar_polygon = inscribe_similar(ABCD, final_polygon) →
      BD²/FH² = area(similar_polygon)/area(final_polygon) ∧
      BD²/FH² = area(ABCD)/S →
      area(ABCD)/similar_polygon = S/final_polygon →
      area(ABCD) > area(similar_polygon) →
      S > area(final_polygon) ∧ S < area(final_polygon) →
      contradiction()
    )
  } →

  lemma ContradictionForGreater() {
    assert(
      ∃S > area(EFGH) →
      area(ABCD)/S = BD²/FH² →
      FH²/BD² = S/area(ABCD) →
      ∃T < area(ABCD): area(EFGH)/T = S/area(ABCD) →
      contradiction_with(ContradictionForLess())
    )
  } →

  apply(ContradictionForLess()) →
  apply(ContradictionForGreater()) →
  
  assert(
    ¬∃S≠area(EFGH): 
    area(ABCD)/S = BD²/FH² →
    area(ABCD)/area(EFGH) = BD²/FH²
  )
}