# 

Source: https://proofwiki.org/wiki/Identity_Mapping_between_Metrics_separated_by_Scale_Factor_is_Continuous

Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $d_1$ and $d_2$ be such that:

$\forall x, y \in A: \map {d_2} {x, y} \le K \map {d_2} {x, y}$

Let $I_A: A \to A$ be the identity mapping on $A$.
Then $I_A$ is continuous from $M_1$ to $M_2$.


Proof
Let $\epsilon \in \R_{>0}$.
Let $a \in A$.
Set $\delta = \dfrac \epsilon K$.
Then:














\(\ds \map {d_1} {x, a}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map {I_A} x, \map {I_A} a}\)

\(\le\)







\(\ds K \map {d_1} {x, a}\)




















\(\ds \)

\(<\)







\(\ds K \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence by definition $I_A$ is continuous at $a$.
As $a$ is arbitrary, it follows that this is true for all $a \in A$.
Thus $I_A$ is continuous on the whole of $M_1$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Lemma $7.8$




