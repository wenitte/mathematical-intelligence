# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Natural_Logarithm

Theorem
$\laptrans {\ln t} = \dfrac {\map {\Gamma'} 1 - \ln s} s = -\dfrac {\gamma + \ln s} s$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Gamma$ denotes the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof 1
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


Proof 2
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





