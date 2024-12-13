# 

Source: https://proofwiki.org/wiki/Mapping/Examples/Arbitrary_Sets

Example of Relation which is not a Mapping
Let $A = \set {a, b, c}$.
Let $B = \set {1, 2, 3, 4}$.
Let $g_1 \subseteq {A \times B}$ such that:

$g_1 = \set {\tuple {a, 2}, \tuple {b, 4} }$
Let $g_2 \subseteq {A \times B}$ such that:

$g_2 = \set {\tuple {a, 3}, \tuple {b, 1}, \tuple {c, 2}, \tuple {c, 4} }$
Let $g_3 \subseteq {A \times B}$ such that:

$g_3 = \set {\tuple {a, 4}, \tuple {b, 4}, \tuple {c, 2} }$
Then $g_3$ is a mapping.
However, neither $g_1$ nor $g_2$ is a mapping.


Proof
We have that:

$\forall x \in A: \exists \tuple {x, y} \in g_3$
$\forall x \in A: \exists \tuple {x, y_1} \in g_3 \land \tuple {x, y_2} \in g_3 \implies y_1 = y_2$
and so $g_3$ is indeed a mapping.

We have:

$\nexists \tuple {x, y} \in g_1: x = c$
so $g_1$ is not a mapping.

We have:

$\tuple {c, 2} \in g_2$ and $\tuple {c, 4} \in g_2$
but:

$2 \ne 4$
and so $g_2$ is not a mapping.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.4$: Functions




