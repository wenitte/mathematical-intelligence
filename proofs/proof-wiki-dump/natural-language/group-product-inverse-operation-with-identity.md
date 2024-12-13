# 

Source: https://proofwiki.org/wiki/Group_Product_Inverse_Operation_with_Identity

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\oplus: G \times G \to G$ be the product inverse of $\circ$ on $G$.
Then:

$\forall x, y \in G: e \oplus \paren {x \oplus y} = y \oplus x$


Proof









\(\ds \forall x, y \in G: \, \)



\(\ds e \oplus \paren {x \oplus y}\)

\(=\)







\(\ds e \oplus \paren {x \circ y^{-1} }\)





Definition of Product Inverse Operation














\(\ds \)

\(=\)







\(\ds e \circ \paren {x \circ y^{-1} }^{-1}\)





Definition of Product Inverse Operation














\(\ds \)

\(=\)







\(\ds e \circ \paren {y \circ x^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds e \circ \paren {y \oplus x}\)





Definition of Product Inverse Operation














\(\ds \)

\(=\)







\(\ds y \oplus x\)





Group Axiom $\text G 2$: Existence of Identity Element



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.7 \ \text {(a)}: 3^\circ$




