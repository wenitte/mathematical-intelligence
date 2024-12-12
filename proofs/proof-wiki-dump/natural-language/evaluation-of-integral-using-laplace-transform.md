# 

Source: https://proofwiki.org/wiki/Evaluation_of_Integral_using_Laplace_Transform



Theorem
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of the real function $f$.
Then:

$\ds \int_0^{\to \infty} \map f t \rd t = \map F 0$
assuming the integral is convergent.


Proof
By definition of Laplace transform:

$\ds \int_0^{\to \infty} e^{-s t} \map f t \rd t = \map F s$
The result follows by taking the limit as $s \to 0$.
$\blacksquare$


Examples
Example 1
$\ds \int_0^\infty \dfrac {e^{-t} - e^{-3 t} } t \rd t = \ln 3$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Evaluation of Integrals




