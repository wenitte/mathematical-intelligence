# 

Source: https://proofwiki.org/wiki/Logarithm_Tends_to_Infinity/Proof_1

Theorem
$\ln x \to +\infty$ as $x \to +\infty$


Proof
From Natural Logarithm of 2 is Greater than One Half:

$\ln 2 \ge \dfrac 1 2$
From the definition of infinite limit at infinity, our assertion is:

$\forall M \in \R_{>0} : \exists N > 0 : x > N \implies \ln x > M$.
As $x \to +\infty$, we will restrict our attention to sufficiently large $M$.
From Logarithm is Strictly Increasing:

$\ln x$ is strictly increasing.
So, for sufficiently large $M$:

$x > 2^{2 M} \implies \ln x > \ln 2^{2 M}$
From the Laws of Logarithms:














\(\ds \ln 2^{2 M}\)

\(=\)







\(\ds 2 M \ln 2\)




















\(\ds \)

\(\ge\)







\(\ds 2 M \cdot \dfrac 1 2\)




















\(\ds \)

\(=\)







\(\ds M\)









Choosing $N = \ln 2^{2 M}$:

$\forall M \ge a: \exists N > 0: x > N \implies \ln x > M$
for some $a \in \R$.
Hence the result, by the definition of infinite limit at infinity.
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): Appendix $A$: Properties of the Natural Logarithmic Function




