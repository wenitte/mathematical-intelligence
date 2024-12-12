# 

Source: https://proofwiki.org/wiki/Endorelation/Examples/Properties_of_Arbitrary_Relation_2

Examples of Endorelation
Let $V = \set {a, b, c, d}$.
Let $R$ be the relation on $V$ defined as:

$E = \set {\tuple {a, a}, \tuple {a, b}, \tuple {a, c}, \tuple {a, d}, \tuple {b, b}, \tuple {b, c}, \tuple {b, d}, \tuple {c, c}, \tuple {c, d}, \tuple {d, d} }$
Then $E$ is:

reflexive
antisymmetric
transitive.


Proof
For all $x \in V$, we have that:

$\tuple {x, x} \in R$
and so $R$ is reflexive.

For all $\tuple {x, y} \in R$, we have that:

$\tuple {y, x} \in R \iff x = y$
and so $R$ is antisymmetric.

We have:

$\tuple {x, y} \in R$ and $\tuple {y, z} \in R$ implies that $ \tuple {x, z} \in R$
and so $R$ is not transitive.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations: Problem Set $\text{A}.2$: $8$




