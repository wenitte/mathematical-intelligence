# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Natural_Logarithm/Proof_2

Theorem
$\laptrans {\ln t} = \dfrac {\map {\Gamma'} 1 - \ln s} s = -\dfrac {\gamma + \ln s} s$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Gamma$ denotes the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof
From Laplace Transform of Power:

$\ds \int_0^\infty e^{-s t} t^k \rd t = \dfrac {\map \Gamma {k + 1} } {s^{k + 1} }$
for $k > -1$.

Differentiating with respect to $k$:

$\ds \int_0^\infty e^{-s t} t^k \ln t \rd t = \dfrac {\map {\Gamma'} {k + 1} - \map \Gamma {k + 1} \ln s} {s^{k + 1} }$

Setting $k = 0$:














\(\ds \int_0^\infty e^{-s t} \ln t \rd t\)

\(=\)







\(\ds \laptrans {\ln t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {\Gamma'} 1 - \ln s}s\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\gamma + \ln s} s\)





Derivative of Gamma Function at 1



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Miscellaneous Problems: $50$




