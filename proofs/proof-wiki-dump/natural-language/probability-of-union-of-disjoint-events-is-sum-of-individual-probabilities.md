# 

Source: https://proofwiki.org/wiki/Probability_of_Union_of_Disjoint_Events_is_Sum_of_Individual_Probabilities

Theorem
Let $\EE$ be an experiment.
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability measure on $\EE$.
Then:

$\forall A, B \in \Sigma: A \cap B = \O \implies \map \Pr {A \cup B} = \map \Pr A + \map \Pr B$
where $A \cap B$ denotes the union of $A$ and $B$.


Proof
From the Kolmogorov Axioms:

$\ds \map \Pr {\bigcup_{i \mathop \ge 1} A_i} = \sum_{i \mathop \ge 1} \map \Pr {A_i}$
where $\set {A_1, A_2, \ldots}$ is a countable set of pairwise disjoint events of $\EE$.
This applies directly to $\map \Pr {A \cup B}$ where $A \cap B = \O$.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): probability
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): probability




