# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subset/3_iff_5



Theorem
Let $\struct {G, \circ}$ be a group.
Let $S \subseteq G$.

Then:

$S$ is a normal subset of $G$ by Definition 3
if and only if:

$S$ is a normal subset of $G$ by Definition 5.


Proof
3 implies 5
Suppose that $S$ is a normal subset of $G$ by Definition 3.
That is:

$\forall g \in G: g^{-1} \circ S \circ g \subseteq S$.

Let $x, y \in G$ such that $x \circ y \in S$.
Then:














\(\ds y \circ x\)

\(=\)







\(\ds e \circ \paren {y \circ x}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {x^{-1} \circ x} \circ \paren {y \circ x}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds x^{-1} \circ \paren {x \circ y} \circ x\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds y \circ x\)

\(\in\)







\(\ds x^{-1} \circ S \circ x\)





$x \circ y \in S$








\(\ds \leadsto \ \ \)





\(\ds y \circ x\)

\(\in\)







\(\ds S\)





by hypothesis: Definition 3 of Normal Subset



$\Box$


5 implies 3
Suppose that $S$ is a normal subset of $G$ by Definition 5.
That is:

$\forall x, y \in G: x \circ y \in S \implies y \circ x \in S$

Let $g \in G$.
Then:










\(\ds \forall x \in S: \, \)



\(\ds e \circ x \circ e\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g \circ g^{-1} } \circ x \circ \paren {g \circ g^{-1} }\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds g \circ \paren {g^{-1} \circ x \circ g \circ g^{-1} }\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g \circ g^{-1} } \circ g\)

\(\in\)







\(\ds S\)





by hypothesis: Definition 5 of Normal Subset








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g} \circ \paren {g^{-1} \circ g}\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g} \circ e\)

\(\in\)







\(\ds S\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds g^{-1} \circ x \circ g\)

\(\in\)







\(\ds S\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ S \circ g\)

\(\subseteq\)







\(\ds S\)





Definition of Subset Product



$\blacksquare$





