# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_of_Join_as_Sum/Corollary_1

Corollary to Conditional Entropy of Join as Sum
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\map H {\AA \vee \CC} = \map H {\AA} + \map H {\CC \mid \AA} $
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$\map H \cdot$ denotes the entropy
$\vee$ denotes the join


Proof
Let $\NN := \set {\O, \Omega}$ be the trivial $\sigma$-algebra.
Then:














\(\ds \map H {\AA \vee \CC}\)

\(=\)







\(\ds \map H {\AA \vee \CC \mid \NN}\)





Conditional Entropy Given Trivial Sigma-Algebra is Entropy














\(\ds \)

\(=\)







\(\ds \map H {\AA \mid \NN} + \map H {\CC \mid \NN \vee \AA}\)





Conditional Entropy of Join as Sum














\(\ds \)

\(=\)







\(\ds \map H \AA + \map H {\CC \mid \NN \vee \AA}\)





Conditional Entropy Given Trivial Sigma-Algebra is Entropy














\(\ds \)

\(=\)







\(\ds \map H \AA + \map H {\CC \mid \AA}\)





$\NN \vee \AA = \AA$ by Definition of Join of Finite Sub-Sigma-Algebras



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




