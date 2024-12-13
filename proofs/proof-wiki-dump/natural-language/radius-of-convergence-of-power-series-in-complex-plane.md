# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Power_Series_in_Complex_Plane

Theorem
Consider the complex power series:

$S = \ds \sum_{k \mathop = 0}^\infty z^n$
The radius of convergence $S$ is $1$.


Proof













\(\ds \lim_{n \mathop \to \infty} \dfrac {\cmod {z^n} } {\cmod {z^{n - 1} } }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {z^n} {z^{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod z\)




















\(\ds \)

\(=\)







\(\ds \cmod z\)









By the Ratio Test, it follows that:

$S$ is convergent for $\cmod z < 1$
$S$ is divergent for $\cmod z > 1$.
Hence the result by definition of radius of convergence.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.4$. Power Series: Example $\text {(i)}$




