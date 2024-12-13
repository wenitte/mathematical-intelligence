# 

Source: https://proofwiki.org/wiki/Group_Direct_Product/Examples/R-0_x_R



Example of Group Direct Product
Let $G$ be the Cartesian product of $\R \setminus \set 0$ with $\R$:

$G = \set {\tuple {a, b} \in \R^2: a \ne 0}$
Let $\circ$ be a group product on $G$ defined as:

$\tuple {a_1, b_1} \circ \tuple {a_2, b_2} = \tuple {a_1 a_2, a_1 b_2 + b_1}$
Then the algebraic structure $\struct {G, \circ}$ is a group which is non-abelian.


Isomorphism to Set of Affine Mappings on Real Line under Composition
Let $S$ be the set of all real functions $f: \R \to \R$ of the form:

$\forall x \in \R: \map f x = r x + s$
where $r \in \R_{\ne 0}$ and $s \in \R$
Let $\struct {S, \circ}$ be the algebraic structure formed from $S$ and the composition operation $\circ$.

Then $\struct {G, \circ}$ is (group) isomorphic to $\struct {S, \circ}$.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
By Definition of $\circ$:

$\tuple {a_1, b_1} \circ \tuple {a_2, b_2} = \tuple {a_1 a_2, a_1 b_2 + b_1}$
where $a_1, a_2 \ne 0$.
Hence:

$a_1 a_2 \ne 0$
from which:

$\tuple {a_1 a_2, a_1 b_2 + b_1} \in \paren {\R \setminus \set 0} \times \R$
Thus $\circ$ is closed in $G$.
$\Box$


Group Axiom $\text G 1$: Associativity













\(\ds \paren {\tuple {a_1, b_1} \circ \tuple {a_2, b_2} } \circ \tuple {a_3, b_3}\)

\(=\)







\(\ds \tuple {a_1 a_2, a_1 b_2 + b_1} \circ \tuple {a_3, b_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_2 a_3, a_1 a_2 b_3 + a_1 b_2 + b_1}\)






















\(\ds \tuple {a_1, b_1} \circ \paren {\tuple {a_2, b_2} \circ \tuple {a_3, b_3} }\)

\(=\)







\(\ds \tuple {a_1, b_1} \circ \tuple {a_2 a_3, a_2 b_3 + b_2}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 a_2 a_3, a_1 a_2 b_3 + a_1 b_2 + b_1}\)









Thus $\circ$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element













\(\ds \tuple {a_1, b_1} \circ \tuple {1, 0}\)

\(=\)







\(\ds \tuple {a_1 \times 1, a_1 \times 0 + b_1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1, b_1}\)
























\(\ds \tuple {1, 0} \circ \tuple {a_2, b_2}\)

\(=\)







\(\ds \tuple {1 \times a_2, 1 \times b_2 + 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_2, b_2}\)









Thus $\tuple {1, 0}$ is the identity element of $\struct {G, \circ}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $\tuple {1, 0}$ is the identity element of $\struct {G, \circ}$.
We need to find $\tuple {a_2, b_2} \in G$ such that:














\(\ds a_1 a_2\)

\(=\)







\(\ds 1\)




















\(\ds a_1 b_2 + b_1\)

\(=\)







\(\ds 0\)









Hence:














\(\ds a_2\)

\(=\)







\(\ds \dfrac 1 {a_1}\)




















\(\ds b_2\)

\(=\)







\(\ds -\dfrac {b_1} {a_1}\)










We verify:














\(\ds \tuple {a_1, b_1} \circ \tuple {\dfrac 1 {a_1}, -\dfrac {b_1} {a_1} }\)

\(=\)







\(\ds \tuple {a_1 \times \dfrac 1 {a_1}, a_1 \times \paren {-\dfrac {b_1} {a_1} } + b_1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1, 0}\)






















\(\ds \tuple {\dfrac 1 {a_1}, -\dfrac {b_1} {a_1} } \circ \tuple {a_1, b_1}\)

\(=\)







\(\ds \tuple {\dfrac 1 {a_1} \times a_1, \dfrac 1 {a_1} \times b_1 + \paren {-\dfrac {b_1} {a_1} } }\)




















\(\ds \)

\(=\)







\(\ds \tuple {1, 0}\)









Thus every element $\tuple {a_1, b_1}$ of $\struct {G, \circ}$ has an inverse $\tuple {\dfrac 1 {a_1}, -\dfrac {b_1} {a_1} }$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {G, \circ}$ is a group.
It remains to show that $\struct {G, \circ}$ is not abelian.














\(\ds \tuple {a_1, b_1} \circ \tuple {a_2, b_2}\)

\(=\)







\(\ds \tuple {a_1 a_2, a_1 b_2 + b_1}\)




















\(\ds \tuple {a_2, b_2} \circ \tuple {a_1, b_1}\)

\(=\)







\(\ds \tuple {a_2 a_1, a_2 b_1 + b_2}\)









Selecting arbitrary values, let:

$\tuple {a_1, b_1} = \tuple {1, 2}$
$\tuple {a_2, b_2} = \tuple {3, 4}$
Then:

$a_1 b_2 + b_1 = 1 \times 4 + 2 = 6$
$a_2 b_1 + b_2 = 3 \times 2 + 4 = 10$
As it is not generally true that $a_1 b_2 + b_1$ equals $a_2 b_1 + b_2$, it follows that $\circ$ is not commutative on $G$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{N}$




