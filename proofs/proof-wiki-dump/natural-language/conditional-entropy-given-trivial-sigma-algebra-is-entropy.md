# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_Given_Trivial_Sigma-Algebra_is_Entropy

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA \subseteq \Sigma$ be a finite sub-$\sigma$-algebra.
Let $\NN := \set {\O, \Omega}$ be the trivial $\sigma$-algebra.

Then:

$\ds \map H {\AA \mid \NN} = \map H \AA$
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$\map H {\, \cdot \,}$ denotes the entropy


Proof













\(\ds \map H {\AA \mid \NN}\)

\(=\)







\(\ds \map H {\map \xi \AA  \mid \map \xi \NN}\)





Definition of Conditional Entropy of Finite Sub-$\sigma$-Algebra














\(\ds \)

\(=\)







\(\ds \sum_{\substack {B \mathop \in {\map \xi \NN } \\ \map \Pr B \mathop > 0} } \sum_{A \mathop \in {\map \xi \AA } } \map \Pr B \map \phi {\dfrac {\map \Pr {A \cap B} } {\map \Pr B} }\)





Definition of Conditional Entropy of Finite Partitions














\(\ds \)

\(=\)







\(\ds \sum_{A \mathop \in {\map \xi \AA } } \map \Pr \Omega \map \phi {\dfrac {\map \Pr {A \cap \Omega} } {\map \Pr \Omega} }\)





as $\map \xi \NN = \set \Omega$ by definition of Finite Partition Generated by Finite Sub-$\sigma$-Algebra














\(\ds \)

\(=\)







\(\ds \sum_{A \mathop \in {\map \xi \AA } } \map \phi {\map \Pr {A \cap \Omega} }\)





as $\map \Pr \Omega = 1$ by definition of Probability Measure














\(\ds \)

\(=\)







\(\ds \sum_{A \mathop \in {\map \xi \AA } } \map \phi {\map \Pr A }\)





$\forall A \in \Sigma : A \subseteq \Omega$














\(\ds \)

\(=\)







\(\ds \map H {\map \xi \AA}\)





Definition of Entropy of Finite Partition














\(\ds \)

\(=\)







\(\ds \map H \AA\)





Definition of Entropy of Finite Sub-$\sigma$-Algebra



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




