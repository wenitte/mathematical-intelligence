# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_Decreases_if_More_Given/Corollary

Corollary to Conditional Entropy Decreases if More Given
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\map H \AA \ge \map H {\AA \mid \DD} $
where:

$\map H \cdot$ denotes the entropy
$\map H {\cdot \mid \cdot}$ denotes the conditional entropy


Proof
Let $\NN := \set {\O, \Omega}$ be the trivial $\sigma$-algebra.
Then:














\(\ds \map H \AA\)

\(=\)







\(\ds \map H {\AA \mid \NN}\)





Conditional Entropy Given Trivial $\sigma$-Algebra is Entropy














\(\ds \)

\(\ge\)







\(\ds \map H {\AA \mid \DD}\)





by Conditional Entropy Decreases if More Given, since $\NN \subseteq \DD$



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




