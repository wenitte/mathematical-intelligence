# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Automorphism_iff_Group_is_Abelian



Theorem
Let $\struct {G, \circ}$ be a group.
Let $\iota: G \to G$ be the inversion mapping on $G$, defined as:

$\forall g \in G: \map \iota g = g^{-1}$

Then $\iota$ is an automorphism if and only if $G$ is abelian.


Proof
From Inversion Mapping is Permutation, $\iota$ is a permutation.
It remains to be shown that $\iota$ has the morphism property if and only if $G$ is abelian.


Sufficient Condition
Suppose $\iota$ is an automorphism.
Then:










\(\ds \forall x, y \in G: \, \)



\(\ds \map \iota {x \circ y}\)

\(=\)







\(\ds \map \iota x \circ \map \iota y\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y}^{-1}\)

\(=\)







\(\ds x^{-1} \circ y^{-1}\)





Definition of $\iota$




Thus from Inverse of Commuting Pair, $x$ commutes with $y$.
This holds for all $x, y \in G$.
So $\struct {G, \circ}$ is abelian by definition.
$\Box$


Necessary Condition
Let $\struct {G, \circ}$ be abelian.










\(\ds \forall x, y \in G: \, \)



\(\ds \paren {x \circ y}^{-1}\)

\(=\)







\(\ds x^{-1} \circ y^{-1}\)





Inverse of Commuting Pair








\(\ds \leadsto \ \ \)





\(\ds \map \iota {x \circ y}\)

\(=\)







\(\ds \map \iota x \circ \map \iota y\)





Definition of $\iota$




Thus $\iota$ has the morphism property and is therefore an automorphism.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(9)$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60 \gamma$
except this source requests only that the morphism property is demonstrated, and not the bijectivity.
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
except this source proves only the necessary condition.




