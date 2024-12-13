theorem Apotome_Binomial_Area_Rational() {
  let(AB: Apotome, CD: BinomialLine) →
  assert(
    (∃G: Line) ∧
    (Rectangle(AB, CD) = G²) ∧
    commensurable(terms(AB), terms(CD)) ∧
    ratio_equal(terms(AB), terms(CD)) ⇒
    rational(G)
  )
}

proof Apotome_Binomial_Area_Rational() {
  setVars(
    AB: Apotome,
    CD: BinomialLine,
    CE: Line = greater_term(CD),
    ED: Line = lesser_term(CD),
    AF: Line = greater_term(AB),
    FB: Line = lesser_term(AB),
    G: Line,
    H: RationalLine
  ) →
  
  assert(
    commensurable(CE, AF) ∧
    commensurable(ED, FB) ∧
    ratio(CE, ED) = ratio(AF, FB)
  ) →
  
  let(Rectangle(KL, CD) = H²) →
  assert(KL: Apotome) →
  
  setVars(
    KM: Line = greater_term(KL),
    ML: Line = lesser_term(KL)
  ) →
  
  lemma Terms_Commensurable() {
    apply(Prop_112_Book_X) →
    assert(
      commensurable(CE, AF) ∧
      commensurable(ED, FB)
    )
  } →
  
  assert(ratio(AF, FB) = ratio(KM, ML)) →
  assert(ratio(AF, KM) = ratio(BF, LM)) →
  
  apply(Prop_19_Book_V) →
  assert(ratio(AB, KL) = ratio(AF, KM)) →
  
  apply(Prop_12_Book_X) →
  assert(commensurable(AF, KM)) →
  
  apply(Prop_11_Book_X) →
  assert(commensurable(AB, KL)) →
  
  apply(Prop_1_Book_VI) →
  assert(ratio(AB, KL) = ratio(Rectangle(CD, AB), Rectangle(CD, KL))) →
  
  apply(Prop_11_Book_X) →
  assert(commensurable(Rectangle(CD, AB), Rectangle(CD, KL))) →
  
  assert(Rectangle(CD, KL) = H²) →
  assert(Rectangle(CD, AB) = G²) →
  assert(commensurable(G², H²)) →
  
  assert(rational(H²)) →
  assert(rational(G²)) →
  conclude(rational(G))
}

porism Area_By_Irrationals() {
  assert(
    ∃(x,y: IrrationalLine) →
    rational(Rectangle(x,y))
  )
}