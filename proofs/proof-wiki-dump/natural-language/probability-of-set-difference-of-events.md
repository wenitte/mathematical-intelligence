# 

Source: https://proofwiki.org/wiki/Probability_of_Set_Difference_of_Events

Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$.
Let $\map \Pr A$ denote the probability of event $A$ occurring.
Then:

$\map \Pr {A \setminus B} = \map \Pr A - \map \Pr {A \cap B}$


Proof
From Set Difference and Intersection form Partition:

$A$ is the union of the two disjoint sets $A \setminus B$ and $A \cap B$
So, by the definition of probability measure:

$\map \Pr A = \map \Pr {A \setminus B} + \map \Pr {A \cap B}$
Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: Exercise $7$




