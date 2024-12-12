# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_of_Floor_Function

Theorem
Let $\floor x$ be the floor function.
Let $\map {\operatorname {III} } x$ be the Dirac comb.

Then the distributional derivative of $\floor x$ is $\map {\operatorname {III} } 0$.


Proof
By definition:

$\floor x := \sup \set {m \in \Z: m \le x}$
Hence, $\forall m \in \Z : \forall x \in \openint m {m + 1}$ the floor function is constant.
Therefore:

$\forall m \in \Z : \forall x \in \openint m {m + 1} : \dfrac {\d \floor x} {\d x} = 0$
Every $x \in \Z$ is a discontinuity of $\floor x$.
Hence, the jump rule has to be applied to each such $x$.
Suppose $k \in \Z$.
Then:

$\ds \lim_{x \mathop \to k^+} \floor x = k$
$\ds \lim_{x \mathop \to k^-} \floor x = k - 1$
By the Jump Rule:














\(\ds T'_{\floor x}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \delta_k\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname {III} } 0\)





Definition of Dirac Comb



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




