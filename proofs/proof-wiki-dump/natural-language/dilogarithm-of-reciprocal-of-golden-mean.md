# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_Reciprocal_of_Golden_Mean

Theorem
$\map {\Li_2} {\dfrac 1 \phi} = \dfrac 3 5 \map \zeta 2 - \paren {\map \ln \phi}^2$

where:

$\map {\Li_2} x$ is the dilogarithm function of $x$
$\map \zeta 2$ is the Riemann $\zeta$ function of $2$
$\phi$ denotes the golden mean.


Proof
We first note the following:














\(\ds -\frac 1 \phi\)

\(=\)







\(\ds 1 - \phi\)





Reciprocal Form of One Minus Golden Mean




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\phi^2}\)

\(=\)







\(\ds 1 - \dfrac 1 \phi\)





dividing through by $-\phi$ and rearranging




We now note:














\(\ds \map {\Li_2} z + \map {\Li_2} {-z}\)

\(=\)







\(\ds \dfrac 1 2 \map {\Li_2} {z^2}\)





Dilogarithm of Square








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\frac 1 \phi} + \map {\Li_2} {-\frac 1 \phi}\)

\(=\)







\(\ds \dfrac 1 2 \map {\Li_2} {\frac 1 {\phi^2} }\)





setting $z := \dfrac 1 \phi$








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\dfrac 1 \phi}\)

\(=\)







\(\ds \dfrac 1 2 \map {\Li_2} {1 - \dfrac 1 \phi} - \map {\Li_2} {-\frac 1 \phi}\)





substituting $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\dfrac 2 5 \map \zeta 2 - \paren {\map \ln \phi}^2} - \paren {-\dfrac 2 5 \map \zeta 2 + \dfrac 1 2 \paren {\map \ln \phi}^2}\)





Dilogarithm of One Minus Reciprocal of Golden Mean and Dilogarithm of Minus Reciprocal of Golden Mean








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\dfrac 1 \phi}\)

\(=\)







\(\ds \dfrac 3 5 \map \zeta 2 - \paren {\map \ln \phi}^2\)









$\blacksquare$


Sources
1981: Leonard Lewin: Polylogarithms and Associated Functions: Chapter $1$. Dilogarithm




