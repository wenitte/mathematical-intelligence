# 

Source: https://proofwiki.org/wiki/Convergence_of_Sequence_in_Discrete_Space



Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $S$.

Then $\sequence {x_n}_{n \mathop \in \N}$ converges in $T$ to a limit if and only if:

$\exists N \in \N: \forall n \in \N: n > N \implies x_n = x_N$
That is, if and only if the sequence reaches some value of $S$ and "stays there".


Corollary
Let $\sequence {x'_n}_{n \mathop \in \N}$ be a sequence of distinct terms in $S$.

Then $\sequence {x'_n}_{n \mathop \in \N}$ is not convergent in $T$.


Proof
Sufficient Condition
Suppose $\sequence {x_n}_{n \mathop \in \N}$ converges to a limit $L$.
Then:














\(\ds \set L\)

\(\in\)







\(\ds \tau\)





Definition of Discrete Space








\(\ds \leadsto \ \ \)

\(\ds \exists N \in \N: \forall n \in \N: \, \)

\(\, \ds n > N \implies \, \)

\(\ds x_n\)

\(\in\)







\(\ds \set L\)





Definition of Convergent Sequence (Topology)








\(\ds \leadsto \ \ \)

\(\ds \exists N \in \N: \forall n \in \N: \, \)

\(\, \ds n > N \implies \, \)

\(\ds x_n\)

\(=\)







\(\ds L\)





Definition of Singleton








\(\ds \leadsto \ \ \)

\(\ds \exists N \in \N: \, \)



\(\ds x_N\)

\(=\)







\(\ds L\)





Universal Instantiation








\(\ds \leadsto \ \ \)

\(\ds \exists N \in \N: \forall n \in \N: \, \)

\(\, \ds n > N \implies \, \)

\(\ds x_n\)

\(=\)







\(\ds x_N\)









$\Box$


Necessary Condition
Let $N \in \N$ such that:

$\forall n \in \N: n > N \implies x_n = x_N$
Let $U$ be an open neighborhood of $x_N$.
Then:

$\forall n \in \N: n > N \implies x_n = x_N \in U$
Thus $\sequence {x_n}_{n \mathop \in \N}$ converges to $x_N$.
$\blacksquare$





