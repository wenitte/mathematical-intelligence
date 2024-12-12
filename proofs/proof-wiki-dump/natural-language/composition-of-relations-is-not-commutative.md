# 

Source: https://proofwiki.org/wiki/Composition_of_Relations_is_not_Commutative

Theorem
Composition of relations is, in general, not commutative.

That is, it is usually the case that:

$\RR_1 \circ \RR_2 \ne \RR_2 \circ \RR_1$
for relations $\RR_1$ and $\RR_2$.


Proof
Proof by Counterexample:
Let $\RR_1 := \struct {S, S, R_1}$ and $\RR_2 := \struct {S, S, R_2}$ be relations defined as:
Let:

$S = \set {0, 1, 2}$
$R_1 = \set {\tuple {0, 1} }$
$R_2 = \set {\tuple {1, 2} }$
We have that:

$\RR_1 \circ \RR_2 = \struct {S, S, \set {\tuple {0, 2} } }$
while:

$\RR_2 \circ \RR_1 = \struct {S, S, \O}$
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations




