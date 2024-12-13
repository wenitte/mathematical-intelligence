theorem Apotome_Not_Binomial() {
  assert(
    ∀AB: StraightLine where isApotome(AB) ⇒
    ¬(isBinomial(AB))
  )
} ↔

proof Apotome_Not_Binomial() {
  setVar(AB: StraightLine, isApotome(AB)) →
  assume(isBinomial(AB)) →
  setVar(DC: StraightLine, isRational(DC)) →
  setVar(CE: Rectangle, area(CE) = square(AB)) →
  setVar(DE: StraightLine, isBreathOf(DE, CE)) →

  lemma ApotomeProperties() {
    assert(isFirstApotome(DE)) by Prop_97_Book_X →
    setVar(EF: StraightLine, isAnnex(EF, DE)) →
    assert(
      isRational(DF) ∧ isRational(EF) ∧
      commensurableInSquareOnly(DF, EF) ∧
      (∃λ: StraightLine)(
        commensurableInLength(λ, DF) ∧
        DF² = FE² + λ²
      ) ∧
      commensurableInLength(DF, DC)
    ) by Def_1_Book_X_III
  } →

  lemma BinomialProperties() {
    assert(isFirstBinomial(DE)) by Prop_60_Book_X →
    setVar(G: Point, dividesBinomial(G, DE)) →
    setVar(DG: StraightLine, isGreaterTerm(DG)) →
    assert(
      isRational(DG) ∧ isRational(GE) ∧
      commensurableInSquareOnly(DG, GE) ∧
      (∃μ: StraightLine)(
        commensurableInLength(μ, DF) ∧
        DG² = GE² + μ²
      ) ∧
      commensurableInLength(DG, DC)
    ) by Def_1_Book_X_II
  } →

  apply(ApotomeProperties()) →
  apply(BinomialProperties()) →
  
  assert(commensurableInLength(DG, DF)) by Prop_12_Book_X →
  assert(commensurableInLength(GF, DG)) by Prop_15_Book_X →
  assert(incommensurableInLength(DF, EF)) →
  assert(incommensurableInLength(FG, EF)) by Prop_13_Book_X →
  
  assert(
    isRational(GF) ∧ isRational(EF) ∧
    commensurableInSquareOnly(GF, EF)
  ) →
  assert(isApotome(EG)) →
  assert(isRational(EG)) →
  assert(contradiction()) →
  conclude(¬(isBinomial(AB)))
}