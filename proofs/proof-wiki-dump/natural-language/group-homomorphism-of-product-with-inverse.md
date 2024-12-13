# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_of_Product_with_Inverse

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Then:




\(\text {(1)}: \quad\)





\(\ds \forall x, y \in G: \, \)



\(\ds \map \phi {x \circ y^{-1} }\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)










\(\text {(2)}: \quad\)





\(\ds \forall x, y \in G: \, \)



\(\ds \map \phi {y^{-1} \circ x}\)

\(=\)







\(\ds \paren {\map \phi y}^{-1} * \map \phi x\)









where $y^{-1}$ denotes the inverse of $y$.


Proof
Let $e_G$ and $e_H$ be the identities of $\struct {G, \circ}$ and $\struct {H, *}$ respectively.
By Group Axiom $\text G 0$: Closure:

$\forall x, y \in G: x \circ y^{-1} \in G, y^{-1} \circ x \in G$


Result $(1)
$:













\(\ds \map \phi {x \circ y^{-1} } * \map \phi y\)

\(=\)







\(\ds \map \phi { \paren {x \circ y^{-1} } \circ y}\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ \paren { y^{-1} \circ y} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi x\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {\map \phi {x \circ y^{-1} } * \map \phi y} * \paren {\map \phi y}^{-1}\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \map \phi {x \circ y^{-1} } * \paren {\map \phi y * \paren {\map \phi y}^{-1} }\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \map \phi {x \circ y^{-1} } * e_H\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)





Definition of Inverse Element














\(\ds \map \phi {x \circ y^{-1} }\)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)





Definition of Identity Element





Result $(2)
$:













\(\ds \map \phi y * \map \phi {y^{-1} \circ x}\)

\(=\)







\(\ds \map \phi {y \circ \paren {y^{-1} \circ x} }\)





Definition of Group Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {\paren {y \circ y^{-1} } \circ x }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map \phi {e_G \circ  x }\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi x\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {\map \phi y}^{-1} * \paren {\map \phi y * \map \phi {y^{-1} \circ x} }\)

\(=\)







\(\ds \paren {\map \phi y}^{-1} * \map \phi x\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \paren {\paren {\map \phi y}^{-1} * \map \phi y } * \map \phi {y^{-1} \circ x}\)

\(=\)







\(\ds \paren {\map \phi y}^{-1} * \map \phi x\)





Group Axiom $\text G 1$: Associativity














\(\ds e_H * \map \phi {y^{-1} \circ x}\)

\(=\)







\(\ds \paren {\map \phi y}^{-1} * \map \phi x\)





Definition of Inverse Element














\(\ds \map \phi {y^{-1} \circ x}\)

\(=\)







\(\ds \paren {\map \phi y}^{-1} * \map \phi x\)





Definition of Identity Element



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Lemma $\text{(i)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Proposition $8.6$




