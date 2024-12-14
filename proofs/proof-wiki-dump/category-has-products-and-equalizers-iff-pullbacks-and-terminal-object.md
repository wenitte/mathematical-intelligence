theorem Category_Products_Equalizers_iff_Pullbacks_Terminal() {
  let(C: Metacategory)
  assert(
    (has_finite_products(C) ∧ has_equalizers(C)) ↔
    (has_pullbacks(C) ∧ has_terminal_object(C))
  )
} ↔

proof Category_Products_Equalizers_iff_Pullbacks_Terminal() {
  // Forward direction (1) → (2)
  section Forward() {
    assume(has_finite_products(C) ∧ has_equalizers(C)) →
    lemma Pullback_From_Equalizer() {
      assert(has_equalizers(C) → has_pullbacks(C))
    } →
    apply(Pullback_From_Equalizer()) →
    assert(has_pullbacks(C)) ∧
    lemma Empty_Product_Terminal() {
      assert(has_finite_products(C) → has_terminal_object(C))
    } →
    apply(Empty_Product_Terminal()) →
    assert(has_terminal_object(C))
  } →

  // Reverse direction (2) → (1)
  section Reverse() {
    assume(has_pullbacks(C) ∧ has_terminal_object(C)) →
    lemma Products_From_Terminal_Binary() {
      assert(has_terminal_object(C) ∧ has_binary_products(C) ↔ has_finite_products(C))
    } →
    lemma Binary_Products_From_Pullback() {
      assert(has_pullbacks(C) → has_binary_products(C))
    } →
    apply(Binary_Products_From_Pullback()) →
    assert(has_binary_products(C)) →
    apply(Products_From_Terminal_Binary()) →
    assert(has_finite_products(C)) →
    lemma Equalizer_From_Pullback() {
      assert(has_pullbacks(C) ∧ has_finite_products(C) → has_equalizers(C))
    } →
    apply(Equalizer_From_Pullback()) →
    assert(has_equalizers(C))
  }
}