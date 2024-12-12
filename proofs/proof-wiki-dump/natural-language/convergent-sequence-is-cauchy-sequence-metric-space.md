# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_is_Cauchy_Sequence/Metric_Space



Theorem
Let $M = \struct {A, d}$ be a metric space.

Every convergent sequence in $M$ is a Cauchy sequence.


Proof
Let $\sequence {x_n}$ be a sequence in $A$ that converges to the limit $l \in A$.
Let $\epsilon > 0$. 
Then also $\dfrac \epsilon 2 > 0$.
Because $\sequence {x_n}$ converges to $l$, we have:

$\exists N: \forall n > N: \map d {x_n, l} < \dfrac \epsilon 2$
So if $m > N$ and $n > N$, then:














\(\ds \map d {x_n, x_m}\)

\(\le\)







\(\ds \map d {x_n, l} + \map d {l, x_m}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





by choice of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Also see
Definition:Complete Metric Space, where the converse is true.
Cauchy's Convergence Criterion on Real Numbers
Cauchy's Convergence Criterion on Complex Numbers


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (next): $3.11a$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Proposition $7.2.4$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $4$: Complete Normed Spaces




