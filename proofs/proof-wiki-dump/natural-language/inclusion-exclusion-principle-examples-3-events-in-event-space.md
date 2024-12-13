# 

Source: https://proofwiki.org/wiki/Inclusion-Exclusion_Principle/Examples/3_Events_in_Event_Space

Examples of Use of Inclusion-Exclusion Principle
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A, B, C \in \Sigma$.
Then:














\(\ds \map \Pr {A \cup B \cup C}\)

\(=\)







\(\ds \map \Pr A + \map \Pr B + \map \Pr C\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \map \Pr {A \cap B} - \map \Pr {B \cap C} - \map \Pr {A \cap C}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map \Pr {A \cap B \cap C}\)











Proof
The Inclusion-Exclusion Principle is applicable for an additive function on an algebra of sets.

We have that $\Sigma$ is a $\sigma$-algebra.
Hence by definition, $\Sigma$ is an algebra of sets which is closed under countable unions.
Hence, a fortiori, $\Sigma$ is an algebra of sets.

We have by definition of probability measure, that $\Pr$ is an additive function fulfilling certain conditions.
The result then follows as a special case of the Inclusion-Exclusion Principle.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: Exercise $8$




