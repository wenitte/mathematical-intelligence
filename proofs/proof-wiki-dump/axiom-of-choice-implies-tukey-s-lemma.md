theorem TukeyLemmaFromAC() {
  assert(
    AC() → TukeysLemma()
  )
} ↔

proof TukeyLemmaFromAC() {
  assume(AC()) →
  lemma ACtoKuratowski() {
    assert(AC() → KuratowskisLemma())
  } →
  lemma KuratowskiToTukey() {
    assert(KuratowskisLemma() → TukeysLemma())
  } →
  apply(ACtoKuratowski()) →
  assert(KuratowskisLemma()) →
  apply(KuratowskiToTukey()) →
  assert(TukeysLemma())
}