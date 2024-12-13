# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_does_not_Vanish_at_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f : X \to \C$ be a continuous function that vanishes at infinity such that:

$\map f x \ne 0$ for each $x \in X$.

Then $\dfrac 1 f : X \to \C$ does not vanish at infinity.


Proof
From Quotient Rule for Continuous Complex Functions:

$\dfrac 1 f$ is continuous.
Aiming for a contradiction, suppose $\dfrac 1 f$ vanishes at infinity.
Then from Continuous Complex-Valued Function Vanishing at Infinity is Bounded and Attains Supremum, $\dfrac 1 f$ is bounded.
Since $f$ vanishes at infinity, for each $n \in \N$ there exists a compact set $K_n \subseteq X$ such that:

$0 < \cmod {\map f x} < \dfrac 1 n$ for each $x \in X \setminus K_n$
That is:

$\ds \cmod {\frac 1 {\map f x} } > n$ for each $x \in X \setminus K_n$
This contradicts that $\dfrac 1 f$ is bounded.
Hence $\dfrac 1 f$ does not vanish at infinity.
$\blacksquare$





