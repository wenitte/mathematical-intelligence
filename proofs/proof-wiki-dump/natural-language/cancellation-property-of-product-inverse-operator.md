# 

Source: https://proofwiki.org/wiki/Cancellation_Property_of_Product_Inverse_Operator

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\oplus: G \times G \to G$ be the product inverse of $\circ$ on $G$.
Then:

$\forall x, y, z \in G: \paren {x \oplus z} \oplus \paren {y \oplus z} = x \oplus y$


Proof









\(\ds \forall x, y, z \in G: \, \)



\(\ds \paren {x \oplus z} \oplus \paren {y \oplus z}\)

\(=\)







\(\ds \paren {x \circ z^{-1} } \oplus \paren {y \circ z^{-1} }\)





Definition of Product Inverse Operation














\(\ds \)

\(=\)







\(\ds \paren {x \circ z^{-1} } \circ \paren {y \circ z^{-1} }^{-1}\)





Definition of Product Inverse Operation














\(\ds \)

\(=\)







\(\ds \paren {x \circ z^{-1} } \circ \paren {z \circ y^{-1} }\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds x \circ \paren {z^{-1}  \circ z} \circ y^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ e \circ y^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds x \circ y^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds x \oplus y\)





Definition of Product Inverse Operation



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.7 \ \text {(a)}: 4^\circ$




