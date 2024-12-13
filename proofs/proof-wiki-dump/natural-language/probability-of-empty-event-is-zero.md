# 

Source: https://proofwiki.org/wiki/Probability_of_Empty_Event_is_Zero



Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.

The probability measure $\Pr$ of $\EE$ has the following property:

$\map \Pr \O = 0$


Proof
From the conditions for $\Pr$ to be a probability measure, we have:

$(1): \quad \forall A \in \Sigma: 0 \le \map \Pr A$
$(2): \quad \map \Pr \Omega = 1$
$(3): \quad \ds \map \Pr {\bigcup_{i \mathop \ge 1} A_i} = \sum_{i \mathop \ge 1} \map \Pr {A_i}$ where all $A_i$ are pairwise disjoint.

From the definition of event space, we have:

$\Omega \in \Sigma$
$A \in \Sigma \implies \relcomp \Omega A \in \Sigma$

From Intersection with Empty Set:

$\O \cap \Omega = \O$
Therefore $\O$ and $\Omega$ are pairwise disjoint.
From Union with Empty Set:

$\O \cup \Omega = \Omega$
Therefore we have:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \map \Pr {\O \cup \Omega}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr \O + \map \Pr \Omega\)









As $\map \Pr \Omega = 1$, it follows that $\map \Pr \O = 0$.
$\blacksquare$


Also see
Elementary Properties of Probability Measure


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Example $10$




