# 

Source: https://proofwiki.org/wiki/Coset_Product_on_Non-Normal_Subgroup_is_not_Well-Defined

Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a subgroup of $G$ which is not normal.
Let $a, b \in G$.

Then it is not necessarily the case that the coset product:

$\paren {a \circ H} \circ \paren {b \circ H} = \paren {a \circ b} \circ H$
is well-defined.


Proof
Proof by Counterexample:
Let $S_3$ denote the Symmetric Group on 3 Letters, whose Cayley table is given as:

$\begin{array}{c|cccccc}\circ & e & (123) & (132) & (23) & (13) & (12) \\ \hline e & e & (123) & (132) & (23) & (13) & (12) \\ (123) & (123) & (132) & e & (13) & (12) & (23) \\ (132) & (132) & e & (123) & (12) & (23) & (13) \\ (23) & (23) & (12) & (13) & e & (132) & (123) \\ (13) & (13) & (23) & (12) & (123) & e & (132) \\ (12) & (12) & (13) & (23) & (132) & (123) & e \\ \end{array}$

Consider the subgroups of $S_3$:
The subsets of $S_3$ which form subgroups of $S_3$ are:














\(\ds \)

\(\)







\(\ds S_3\)




















\(\ds \)

\(\)







\(\ds \set e\)




















\(\ds \)

\(\)







\(\ds \set {e, \tuple {123}, \tuple {132} }\)




















\(\ds \)

\(\)







\(\ds \set {e, \tuple {12} }\)




















\(\ds \)

\(\)







\(\ds \set {e, \tuple {13} }\)




















\(\ds \)

\(\)







\(\ds \set {e, \tuple {23} }\)










Let $H = \set {e, \tuple {12} }$.
From Normal Subgroups in Symmetric Group on 3 Letters, $H$ is not normal.

Let $A = \set {\tuple {123}, \tuple {23} }$.
We have:














\(\ds \tuple {123} H\)

\(=\)







\(\ds \set {\tuple {123}, \tuple {23} }\)




















\(\ds \tuple {23} H\)

\(=\)







\(\ds \set {\tuple {123}, \tuple {23} }\)









and so $A$ is the left coset of $H$ by both $\tuple {123}$ and $\tuple {23}$.

Let $B = \set {\tuple {132}, \tuple {13} }$.














\(\ds \tuple {132} H\)

\(=\)







\(\ds \set {\tuple {132}, \tuple {13} }\)




















\(\ds \tuple {13} H\)

\(=\)







\(\ds \set {\tuple {132}, \tuple {13} }\)









and so $B$ is the left coset of $H$ by both $\tuple {132}$ and $\tuple {13}$.

Now consider:














\(\ds A \circ B\)

\(=\)







\(\ds \tuple {123} H \tuple {132} H\)




















\(\ds \)

\(=\)







\(\ds \tuple {123} \tuple {132} H\)




















\(\ds \)

\(=\)







\(\ds e H\)




















\(\ds \)

\(=\)







\(\ds H\)










But:














\(\ds A \circ B\)

\(=\)







\(\ds \tuple {23} H \tuple {13} H\)




















\(\ds \)

\(=\)







\(\ds \tuple {23} \tuple {13} H\)




















\(\ds \)

\(=\)







\(\ds \tuple {132} H\)




















\(\ds \)

\(=\)







\(\ds B\)




















\(\ds \)

\(\ne\)







\(\ds H\)









So two different evaluations of the coset product give two different result.
Hence by definition the coset product is not well-defined on $H$.
The result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.7$. Quotient groups: Example $125$




