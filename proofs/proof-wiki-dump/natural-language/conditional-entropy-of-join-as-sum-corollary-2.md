# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_of_Join_as_Sum/Corollary_2

Corollary to Conditional Entropy of Join as Sum
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\AA \subseteq \CC \implies \map H {\AA \mid \DD} \le \map H {\CC \mid \DD} $
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$\vee$ denotes the join


Proof
Let $\AA \subseteq \CC$.
Then:














\(\ds \map H {\CC \mid \DD}\)

\(=\)







\(\ds \map H {\AA \vee \CC \mid \DD}\)





as $\AA \vee \CC = \CC$ by Definition of Join of Finite Sub-Sigma-Algebras














\(\ds \)

\(=\)







\(\ds \map H {\AA \mid \DD} + \map H {\CC \mid \DD \vee \AA}\)





Conditional Entropy of Join as Sum














\(\ds \)

\(\ge\)







\(\ds \map H {\AA \mid \DD}\)





as $\map H { \CC \mid \DD \vee \AA } \ge 0$ by Definition of Conditional Entropy of Finite Sub-Sigma-Algebra



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




