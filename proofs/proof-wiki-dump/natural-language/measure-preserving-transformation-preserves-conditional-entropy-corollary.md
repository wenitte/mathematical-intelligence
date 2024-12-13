# 

Source: https://proofwiki.org/wiki/Measure-Preserving_Transformation_Preserves_Conditional_Entropy/Corollary

Corollary to Measure-Preserving Transformation Preserves Conditional Entropy
Let $\struct {X, \BB, \mu}$ be a probability space.
Let $T: X \to X$ be a $\mu$-preserving transformation.
Let $\AA \subseteq \Sigma$ be finite sub-$\sigma$-algebra.

Then:

$\map H {T^{-1} \AA} = \map H \AA$
where:

$\map H \cdot$ denotes the entropy
$T^{-1} \AA$ is the pre-image $\sigma$-algebra of $\AA$ on the domain of $T$


Proof
Let $\NN := \set {\O, \Omega}$ be the trivial $\sigma$-algebra.
Since:

$T^{-1} \sqbrk \O = \O$
and:

$T^{-1} \sqbrk \Omega = \Omega$
it follows from the definition of pre-image $\sigma$-algebra that:

$T^{-1} \NN = \NN$
Therefore:














\(\ds \map H \AA\)

\(=\)







\(\ds \map H {\AA \mid \NN}\)





Conditional Entropy Given Trivial $\sigma$-Algebra is Entropy














\(\ds \)

\(=\)







\(\ds \map H {T^{-1} \AA \mid T^{-1} \NN}\)





Measure-Preserving Transformation Preserves Conditional Entropy














\(\ds \)

\(=\)







\(\ds \map H {T^{-1} \AA \mid \NN}\)





as $T^{-1} \NN = \NN$














\(\ds \)

\(=\)







\(\ds \map H {T^{-1} \AA}\)





Conditional Entropy Given Trivial $\sigma$-Algebra is Entropy



$\blacksquare$





