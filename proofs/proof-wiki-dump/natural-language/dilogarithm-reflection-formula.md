# 

Source: https://proofwiki.org/wiki/Dilogarithm_Reflection_Formula

Theorem
$\map {\Li_2} z + \map {\Li_2} {1 - z} = \map \zeta 2 - \map \ln z \map \ln {1 - z}$
where:

$\map {\Li_2} z$ is the Dilogarithm function of $z$
$\map \zeta 2$ is the Riemann $\zeta$ function of $2$.


Proof
From the definition of the dilogarithm function:

$\ds \map {\Li_2} z = -\int_0^z \dfrac {\map \ln {1 - x} } x \rd x$
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \map \ln {1 - x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\frac 1 {1 - x}\)





Derivative of $\ln x$, Chain Rule




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \map \ln x\)





Primitive of Reciprocal




Then:














\(\ds -\int_0^z \dfrac {\map \ln {1 - x} } x \rd x\)

\(=\)







\(\ds -\paren {\bigintlimits {\map \ln {1 - x} \map \ln x} 0 z   + \int_0^z \frac {\map \ln x} {1 - x} \rd x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\map \ln z \map \ln {1 - z} - \int_0^z \frac {\map \ln x} {1 - x} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds -\map \ln z \map \ln {1 - z} + \int_1^{1 - z} \dfrac {\map \ln {1 - t} } t \rd t\)





$\paren {1 - x} \to t$ and $\rd x \to -\rd t$














\(\ds \)

\(=\)







\(\ds -\map \ln z \map \ln {1 - z} - \paren {\map {\Li_2} {1 - z} - \map {\Li_2} 1}\)





Definition of Dilogarithm Function














\(\ds \)

\(=\)







\(\ds -\map \ln z \map \ln {1 - z} - \map {\Li_2} {1 - z} + \map {\Li_2} 1\)














\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} z + \map {\Li_2} {1 - z}\)

\(=\)







\(\ds -\map \ln z \map \ln {1 - z} - \map {\Li_2} {1 - z} + \map {\Li_2} 1 +  \map {\Li_2} {1 - z}\)




















\(\ds \)

\(=\)







\(\ds \map \zeta 2 - \map \ln z \map \ln {1 - z}\)





Dilogarithm of One



$\blacksquare$


Sources
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions




