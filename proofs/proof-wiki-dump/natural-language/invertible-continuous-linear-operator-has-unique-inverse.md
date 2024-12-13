# 

Source: https://proofwiki.org/wiki/Invertible_Continuous_Linear_Operator_has_Unique_Inverse

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be the normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be a continuous linear transformation space.
Let $I \in \map {CL} X$ be the identity element.
Suppose $A \in \map {CL} X$ is invertible.

Then there is a unique $B \in \map {CL} X$ such that $A \circ B = B \circ A = I$.


Proof
Let $B_1, B_2 \in \map {CL} X$.
Suppose:

$A \circ B_1 = I = B_1 \circ A$
$A \circ B_2 = I = B_2 \circ A$
Then:














\(\ds B_1\)

\(=\)







\(\ds I \circ B_1\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds B_2 \circ A \circ B_1\)




















\(\ds \)

\(=\)







\(\ds B_2 \circ I\)




















\(\ds \)

\(=\)







\(\ds B_2\)





Definition of Identity Element



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




