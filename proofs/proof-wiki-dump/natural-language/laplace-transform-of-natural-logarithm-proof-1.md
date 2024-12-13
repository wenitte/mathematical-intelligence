# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Natural_Logarithm/Proof_1

Theorem
$\laptrans {\ln t} = \dfrac {\map {\Gamma'} 1 - \ln s} s = -\dfrac {\gamma + \ln s} s$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Gamma$ denotes the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof
We have:














\(\ds \map \Gamma r\)

\(=\)







\(\ds \int_0^\infty u^{r - 1} e^{-u} \rd u\)














\(\ds \leadsto \ \ \)





\(\ds \map {\Gamma'} r\)

\(=\)







\(\ds \int_0^\infty u^{r - 1} e^{-u} \ln u \rd u\)





Differentiating with respect to $r$








\(\ds \leadsto \ \ \)





\(\ds \map {\Gamma'} 1\)

\(=\)







\(\ds \int_0^\infty e^{-u} \ln u \rd u\)




















\(\ds \)

\(=\)







\(\ds s \int_0^\infty e^{-s t} \paren {\ln s + \ln t} \rd t\)





setting $u = s t$ with $s > 0$




Hence:














\(\ds \laptrans {\ln t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \ln t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \dfrac {\map {\Gamma'} 1} s - \ln s \int_0^\infty e^{-s t}\rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {\Gamma'} 1} s - \dfrac {\ln s} s\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\gamma + \ln s} s\)





Derivative of Gamma Function at 1



$\blacksquare$



This article, or a section of it, needs explaining.In particular: Some of the above steps may need more explanation and/or justificationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Miscellaneous Problems: $50$




