# 

Source: https://proofwiki.org/wiki/Conditional_Probability_Defines_Probability_Space

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a measure space.
Let $B \in \Sigma$ such that $\map \Pr B > 0$.

Let $Q: \Sigma \to \R$ be the real-valued function defined as:

$\map Q A = \condprob A B$
where:

$\condprob A B = \dfrac {\map \Pr {A \cap B} }{\map \Pr B}$
is the conditional probability of $A$ given $B$.

Then $\struct {\Omega, \Sigma, Q}$ is a probability space.


Proof
It is to be shown that $Q$ is a probability measure on $\struct {\Omega, \Sigma}$.

As $\Pr$ is a measure, we have that:

$\forall A \in \Omega: \map Q A \ge 0$
Also, we have that:














\(\ds \map Q \Omega\)

\(=\)







\(\ds \condprob \Omega B\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Pr {\Omega \cap B} } {\map \Pr B}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Pr B} {\map \Pr B}\)





Intersection with Universal Set














\(\ds \)

\(=\)







\(\ds 1\)





as $\map \Pr B > 0$




Now, suppose that $A_1, A_2, \ldots$ are disjoint events in $\Sigma$.
Then:














\(\ds \map Q {\bigcup_{i \mathop = 1}^\infty A_i}\)

\(=\)







\(\ds \frac 1 {\map \Pr B} \map \Pr {\paren {\bigcup_{i \mathop = 1}^\infty A_i} \cap B}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Pr B} \map \Pr {\bigcup_{i \mathop = 1}^\infty \paren {A_i \cap B} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \frac {\map \Pr {A_i \cap B} } {\map \Pr B}\)





as $\Pr$ is a measure














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \map Q {A_i}\)









$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.6$: Theorem $1 \text {A}$




