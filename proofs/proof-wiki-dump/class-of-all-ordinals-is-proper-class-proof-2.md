theorem Ordinals_Proper_Class() {
  assert(
    ∀On.(On = {x | x is an ordinal}) →
    ¬isSet(On)
  )
}

proof Ordinals_Proper_Class() {
  assume(isSet(On)) →
  lemma Burali_Forti() {
    assert(
      isSet(On) → contradiction()
    )
  } →
  apply(Burali_Forti()) →
  assert(contradiction()) →
  conclude(¬isSet(On)) →
  assert(isClass(On) ∧ ¬isSet(On)) →
  assert(isProperClass(On))
}