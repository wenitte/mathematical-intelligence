# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Events



Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$ such that $\map \Pr A > 0$ and $\map \Pr B > 0$.

The following definitions of the concept of Independent Events are equivalent:


Definition 1
The events $A$ and $B$ are defined as independent (of each other) if and only if the occurrence of one of them does not affect the probability of the occurrence of the other one.

Formally, $A$ is independent of $B$ if and only if:

$\condprob A B = \map \Pr A$
where $\condprob A B$ denotes the conditional probability of $A$ given $B$.

Definition 2
The events $A$ and $B$ are defined as independent (of each other) if and only if the occurrence of both of them together has the same probability as the product of the probabilities of each of them occurring on their own.

Formally, $A$ and $B$ are independent if and only if:

$\map \Pr {A \cap B} = \map \Pr A \map \Pr B$


Proof













\(\ds \condprob A B\)

\(=\)







\(\ds \map \Pr A\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {\map \Pr {A \cap B} } {\map \Pr B}\)

\(=\)







\(\ds \map \Pr A\)





Definition of Conditional Probability








\(\ds \leadstoandfrom \ \ \)





\(\ds \map \Pr {A \cap B}\)

\(=\)







\(\ds \map \Pr A \, \map \Pr B\)





which is valid, as $\map \Pr B > 0$



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events




