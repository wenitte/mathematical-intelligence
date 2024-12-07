Yoneda Lemma: A Textbook Explanation
The Yoneda Lemma is a central result in category theory. It establishes a deep and precise relationship between functors and the natural transformations involving hom-functors. Let’s break it down step by step, following the structure provided.

1. Context and Definitions
Category CC:
Let CC be a small category. This means the objects and morphisms of CC form sets rather than proper classes.
Hom-functor haha​:
For any object aa in CC, define the hom-functor haha​:
ha(x)=Mor(x,a)ha​(x)=Mor(x,a)
Here, ha(x)ha​(x) is the set of morphisms from xx to aa in the category CC.
For a morphism g:y→xg:y→x in CC, the functor haha​ acts by precomposition:
ha(g):Mor(x,a)→Mor(y,a),f↦f∘gha​(g):Mor(x,a)→Mor(y,a),f↦f∘g
So, haha​ maps objects xx to sets ha(x)ha​(x), and morphisms g:y→xg:y→x to functions ha(g)ha​(g).
Functor FF:
Let F:C→SetF:C→Set be a functor. It assigns to each object xx in CC a set F(x)F(x), and to each morphism g:x→yg:x→y in CC a function F(g):F(x)→F(y)F(g):F(x)→F(y).
Natural transformations Nat(ha,F)Nat(ha​,F):
A natural transformation α:ha⇒Fα:ha​⇒F is a collection of functions:
αx:ha(x)→F(x)for each object x in C,αx​:ha​(x)→F(x)for each object x in C,
such that for every morphism g:y→xg:y→x in CC, the following naturality condition holds:
αy(ha(g)(f))=F(g)(αx(f)),∀f∈ha(x).αy​(ha​(g)(f))=F(g)(αx​(f)),∀f∈ha​(x).
Intuitively, αxαx​ "respects" the structure of CC.

2. The Evaluation Map
Definition:
Define the evaluation map evaeva​ as follows:
eva:Nat(ha,F)→F(a)eva​:Nat(ha​,F)→F(a)
For each natural transformation α∈Nat(ha,F)α∈Nat(ha​,F),
eva(α)=αa(ida),eva​(α)=αa​(ida​),
where idaida​ is the identity morphism on aa in CC.
Purpose:
The evaluation map takes a natural transformation αα and produces an element of F(a)F(a). This element is αa(ida)αa​(ida​), which is the image of the identity morphism idaida​ under the function αaαa​.

3. Bijection Proof
To show that the evaluation map evaeva​ establishes a bijection between the set of natural transformations Nat(ha,F)Nat(ha​,F) and the set F(a)F(a), we must verify two properties: injectivity and surjectivity.
Injectivity:
If two natural transformations α,β∈Nat(ha,F)α,β∈Nat(ha​,F) satisfy eva(α)=eva(β)eva​(α)=eva​(β), then α=βα=β.
For any object xx in CC and any morphism f∈ha(x)f∈ha​(x), the naturality condition ensures:αx(f)=F(f)(αa(ida)),and similarly,βx(f)=F(f)(βa(ida)).αx​(f)=F(f)(αa​(ida​)),and similarly,βx​(f)=F(f)(βa​(ida​)). Since eva(α)=αa(ida)eva​(α)=αa​(ida​) and eva(β)=βa(ida)eva​(β)=βa​(ida​), it follows that αx(f)=βx(f)αx​(f)=βx​(f) for all ff, hence α=βα=β.
Surjectivity:
For any v∈F(a)v∈F(a), we construct a natural transformation α∈Nat(ha,F)α∈Nat(ha​,F) such that eva(α)=veva​(α)=v.
Define αx:ha(x)→F(x)αx​:ha​(x)→F(x) by:αx(f)=F(f)(v),∀f∈Mor(x,a).αx​(f)=F(f)(v),∀f∈Mor(x,a). Verify that αxαx​ satisfies the naturality condition:
For any g:y→xg:y→x,αy(ha(g)(f))=αy(f∘g)=F(f∘g)(v),αy​(ha​(g)(f))=αy​(f∘g)=F(f∘g)(v), andF(g)(αx(f))=F(g)(F(f)(v))=F(f∘g)(v).F(g)(αx​(f))=F(g)(F(f)(v))=F(f∘g)(v). Therefore, αy(ha(g)(f))=F(g)(αx(f))αy​(ha​(g)(f))=F(g)(αx​(f)), so αα is natural.

4. Correspondence
The Yoneda Lemma states:
For any object aa in CC and any functor F:C→SetF:C→Set, there is a natural isomorphism:
Nat(ha,F)≅F(a).Nat(ha​,F)≅F(a).
The evaluation map eva:Nat(ha,F)→F(a)eva​:Nat(ha​,F)→F(a) is this isomorphism.
This correspondence is natural in both aa and FF.

Intuition and Importance
The Yoneda Lemma essentially says:
"To understand FF at the object aa, you only need to understand how FF interacts with morphisms coming into aa."
It provides a way to embed the category CC into a functor category [Cop,Set][Cop,Set], highlighting the power of morphisms in understanding objects.
This result underpins many advanced concepts in category theory, including representable functors, adjunctions, and limits.

