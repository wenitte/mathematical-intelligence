theorem CherylsBirthday() {
  assert(
    ∃date ∈ {May15,May16,May19,Jun17,Jun18,Jul14,Jul16,Aug14,Aug15,Aug17} ∧
    (Albert knows month) ∧ (Bernard knows day) →
    (date = Jul16)
  )
} ↔

proof CherylsBirthday() {
  setVar(possibleDates: Set) = {May15,May16,May19,Jun17,Jun18,Jul14,Jul16,Aug14,Aug15,Aug17} →
  
  lemma AlbertFirstStatement() {
    assert(Albert knows ¬(Bernard knows date)) →
    assert(¬(month ∈ {May,June})) →
    assert(month ∈ {July,August})
  } →
  
  lemma BernardKnows() {
    apply(AlbertFirstStatement()) →
    assert(month ∈ {July,August}) →
    assert(day ≠ 14) →
    assert(day ∈ {15,16,17}) →
    assert(date ∈ {Jul16,Aug15,Aug17})
  } →
  
  lemma AlbertFinalKnowledge() {
    apply(BernardKnows()) →
    assert(date ∈ {Jul16,Aug15,Aug17}) →
    assert(month = July) →
    assert(date = Jul16)
  } →
  
  lemma WrongAnswerRefutation() {
    assert(¬(Bernard assumes Albert has prior knowledge)) →
    assert(Albert deduces ¬(Bernard knows) from month info only) →
    assert(Bernard must eliminate May from month set) →
    assert(Aug17 solution requires invalid assumptions)
  } →
  
  apply(AlbertFirstStatement()) →
  apply(BernardKnows()) →
  apply(AlbertFinalKnowledge()) →
  apply(WrongAnswerRefutation()) →
  assert(date = Jul16)
}