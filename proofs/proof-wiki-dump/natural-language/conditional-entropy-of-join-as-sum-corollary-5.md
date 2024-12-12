# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_of_Join_as_Sum/Corollary_5

Corollary to Conditional Entropy of Join as Sum
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\map H {\AA \vee \CC} \le \map H \AA + \map H \CC $
where:

$\map H \cdot$ denotes the conditional entropy
$\vee$ denotes the join


Proof
Let $\NN := \set {\O, \Omega}$ be the trivial $\sigma$-algebra.
Then:














\(\ds \map H {\AA \vee \CC}\)

\(=\)







\(\ds \map H {\AA \vee \CC \mid \NN}\)





Conditional Entropy Given Trivial $\sigma$-Algebra is Entropy














\(\ds \)

\(\le\)







\(\ds \map H {\AA \mid \NN} + \map H {\CC \mid \NN}\)





Conditional Entropy of Join as Sum: Corollary 4














\(\ds \)

\(=\)







\(\ds \map H \AA + \map H \CC\)





Conditional Entropy Given Trivial $\sigma$-Algebra is Entropy



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




