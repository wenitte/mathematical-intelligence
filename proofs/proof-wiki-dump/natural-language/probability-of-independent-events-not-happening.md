# 

Source: https://proofwiki.org/wiki/Probability_of_Independent_Events_Not_Happening



Theorem
Let $\EE = \struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A_1, A_2, \ldots, A_m \in \Sigma$ be independent events in the event space of $\EE$.

Then the probability of none of $A_1$ to $A_m$ occurring is:

$\ds \prod_{i \mathop = 1}^m \paren {1 - \map \Pr {A_i} }$


Corollary
Let $A$ be an event in an event space of an experiment $\EE$ whose probability space is $\struct {\Omega, \Sigma, \Pr}$.
Let $\map \Pr A = p$.
Suppose that the nature of $\EE$ is that its outcome is independent of previous trials of $\EE$.

Then the probability that $A$ does not occur during the course of $m$ trials of $\EE$ is $\paren {1 - p}^m$.


Proof
Let $A_1, A_2, \ldots, A_m \in \Sigma$ be independent events.
From Independent Events are Independent of Complement, we have that $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_m \in \Sigma$ are also independent.

From the definition of occurrence, if $A$ does not happen then $\Omega \setminus A$ does happen.
So for none of $A_1, A_2, \ldots, A_m$ to happen, all of $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_m$ must happen.

From Elementary Properties of Probability Measure:

$\forall A \in \Omega: \map \Pr {\Omega \setminus A} = 1 - \map \Pr A$
So the probability of none of $A_1$ to $A_m$ occurring is:

$\ds \prod_{i \mathop = 1}^m \paren {1 - \map \Pr {A_i} }$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Exercise $24 \ \text{(i)}$




