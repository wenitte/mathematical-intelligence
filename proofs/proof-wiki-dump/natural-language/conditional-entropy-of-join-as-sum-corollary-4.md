# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_of_Join_as_Sum/Corollary_4

Corollary to Conditional Entropy of Join as Sum
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\map H {\AA \vee \CC \mid \DD} \le \map H {\AA \mid \DD} + \map H {\CC \mid \DD}$
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$\vee$ denotes the join


Proof













\(\ds \map H {\AA \vee \CC \mid \DD}\)

\(=\)







\(\ds \map H {\AA \mid \DD} + \map H {\CC \mid \AA \vee \DD}\)





Conditional Entropy of Join as Sum














\(\ds \)

\(\le\)







\(\ds \map H {\AA \mid \DD} + \map H {\DD}\)





by Conditional Entropy Decreases if More Given since $\DD \subseteq \AA \vee \DD$



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




