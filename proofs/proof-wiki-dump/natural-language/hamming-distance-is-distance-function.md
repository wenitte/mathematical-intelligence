# 

Source: https://proofwiki.org/wiki/Hamming_Distance_is_Distance_Function



Theorem
Let $\map V {n, p}$ be a master code.
Let $d: V \times V \to \Z$ be the mapping defined as:

$\forall u, v \in V: \map d {u, v} =$ the Hamming distance between $u$ and $v$
that is, the number of corresponding terms at which $u$ and $v$ are different.

Then $d$ defines a distance function in the sense of a metric space.


Proof
It is to be demonstrated that $d$ satisfies all the metric space axioms.
Let $u, v, w \in \map V {n, p}$ be arbitrary.


Proof of Metric Space Axiom $(\text M 1)$
By definition of Hamming distance:

$\map d {u, u} = 0$
So Metric Space Axiom $(\text M 1)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Consider $\map d {u, v} + \map d {v, w}$.
Let $\map d {u, w} \ne 0$.
Then at each term at which $u$ and $w$ are different, those corresponding terms in either $u$ and $v$ or $v$ and $w$ must be different.
So every contribution to the value of $\map d {u, w}$ is present in either $\map d {u, v}$ or $\map d {v, w}$.
It follows that $\map d {u, v} + \map d {v, w} \ge \map d {u, w}$.
So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$
$\map d {u, v} = \map d {v, u}$ by definition of Hamming distance.
So Metric Space Axiom $(\text M 3)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds u\)

\(\ne\)







\(\ds v\)














\(\ds \leadsto \ \ \)





\(\ds \map d {u, v}\)

\(>\)







\(\ds 0\)





Definition of Hamming Distance



So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\Box$

Thus $d$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Proposition $6.7$




