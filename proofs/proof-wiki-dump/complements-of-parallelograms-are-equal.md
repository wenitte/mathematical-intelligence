theorem Complements_Of_Parallelograms_Equal() {
  assert(
    ∀ parallelogram ABCD,
    ∀ diameter AC,
    ∀ parallelograms EKHA, FKGC about AC,
    let BEKG, DFKH be complements →
    Area(BEKG) = Area(DFKH)
  )
} ↔

proof Complements_Of_Parallelograms_Equal() {
  setVar(ABCD: parallelogram) →
  setVar(AC: diameter of ABCD) →
  setVar(EKHA, FKGC: parallelograms about AC) →
  setVar(BEKG, DFKH: complements) →
  
  lemma Parallelogram_Equal_Triangles() {
    assert(Area(△ABC) = Area(△ACD))
  } →
  
  lemma Equal_Parallelogram_Parts() {
    assert(Area(△AEK) = Area(△AHK)) ∧
    assert(Area(△KFC) = Area(△KGC))
  } →
  
  apply(Common_Notion_2) →
  assert(Area(△AEK) + Area(△KGC) = Area(△AHK) + Area(△KFC)) →
  
  apply(Parallelogram_Equal_Triangles) →
  assert(Area(△ABC) = Area(△ACD)) →
  
  apply(Common_Notion_3) →
  assert(Area(BEKG) = Area(DFKH))
}