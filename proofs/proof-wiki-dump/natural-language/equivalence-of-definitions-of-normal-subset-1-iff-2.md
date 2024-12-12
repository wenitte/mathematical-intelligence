# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subset/1_iff_2



Theorem
Let $\struct {G, \circ}$ be a group.
Let $S$ be a subset of $G$.

Then Normal Subset/Definition 1 is equivalent to Normal Subset/Definition 2.

That is, the following three statements are equivalent:

$(1): \quad \forall g \in G: g \circ S = S \circ g$
$(2): \quad \forall g \in G: g \circ S \circ g^{-1} = S$
$(3): \quad \forall g \in G: g^{-1} \circ S \circ g = S$


Proof
Let $e$ be the identity of $G$.
First note that:

$(4): \quad \paren {\forall g \in G: g \circ S \circ g^{-1} = S} \iff \paren {\forall g \in G: g^{-1} \circ S \circ g = S}$
which is shown by, for example, setting $h := g^{-1}$ and substituting.


Necessary Condition
Suppose that $S$ satisfies $(1)$.

Let $g \in G$.
Then:














\(\ds g \circ S\)

\(=\)







\(\ds S \circ g\)





$(1)$








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ g^{-1}\)

\(=\)







\(\ds \paren {S \circ g} \circ g^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S \circ \paren {g \circ g^{-1} }\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S \circ e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S\)





Subset Product by Identity Singleton








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ S \circ g\)

\(=\)







\(\ds S\)





$(4)$



$\Box$


Sufficient Condition
Suppose that $S$ satisfies $(2)$ or $(3)$.
By $(4)$, as long as one of these statements holds, the other one holds as well.

Let $g \in G$.
Then:














\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S \circ g^{-1} } \circ g\)

\(=\)







\(\ds S \circ g\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ \paren {g^{-1} \circ g}\)

\(=\)







\(\ds S \circ g\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ e\)

\(=\)







\(\ds S \circ g\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ S\)

\(=\)







\(\ds S \circ g\)





Subset Product by Identity Singleton



$\blacksquare$





