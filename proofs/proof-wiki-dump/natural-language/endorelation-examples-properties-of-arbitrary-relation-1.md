# 

Source: https://proofwiki.org/wiki/Endorelation/Examples/Properties_of_Arbitrary_Relation_1

Examples of Endorelation
Let $V = \set {u, v, w, x}$.
Let $E$ be the relation on $V$ defined as:

$E = \set {\tuple {u, v}, \tuple {v, u}, \tuple {v, w}, \tuple {w, v} }$
Then $E$ is:

antireflexive
symmetric
non-transitive.


Proof
For all $a \in V$, we have that:

$\tuple {a, a} \notin E$
and so $E$ is antireflexive.

For all $\tuple {a, b} \in E$, we have that:

$\tuple {b, a} \in E$
and so $E$ is symmetric.

We have:

$\tuple {u, v} \in E$ and $\tuple {v, w} \in E$, but not $ \tuple {u, w} \in E$
and so $E$ is not non-transitive.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations: Example $\text{A}.1$




