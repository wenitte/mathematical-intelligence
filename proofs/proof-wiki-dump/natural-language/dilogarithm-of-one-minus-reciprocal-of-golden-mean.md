# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_One_Minus_Reciprocal_of_Golden_Mean

Theorem
$\map {\Li_2} {1 - \dfrac 1 \phi} = \dfrac 2 5 \map \zeta 2 - \paren {\map \ln \phi}^2$

where:

$\map {\Li_2} x$ is the dilogarithm function of $x$
$\map \zeta 2$ is the Riemann $\zeta$ function of $2$
$\phi$ denotes the golden mean.


Proof
We first note the following:




\(\text {(1)}: \quad\)









\(\ds -\frac 1 \phi\)

\(=\)







\(\ds 1 - \phi\)





Reciprocal Form of One Minus Golden Mean




\(\text {(2)}: \quad\)



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




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\frac 1 \phi} + \map {\Li_2} {1 - \phi} - \dfrac 1 2 \map {\Li_2} {1 - \dfrac 1 \phi}\)

\(=\)







\(\ds 0\)





substituting from $(1)$ and $(2)$ above














\(\ds \map {\Li_2} {1 - z} + \map {\Li_2} {1 - \dfrac 1 z}\)

\(=\)







\(\ds -\dfrac 1 2 \map {\ln^2} z\)





Dilogarithm of One Minus Z Plus Dilogarithm of One Minus Reciprocal of Z








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {1 - \frac 1 \phi} + \map {\Li_2} {1 - \dfrac 1 {\frac 1 \phi} }\)

\(=\)







\(\ds -\dfrac 1 2 \map {\ln^2} {\frac 1 \phi}\)





setting $z := \dfrac 1 \phi$








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {1 - \frac 1 \phi} + \map {\Li_2} {1 - \phi}\)

\(=\)







\(\ds -\dfrac 1 2 \paren {\map \ln 1 - \map \ln \phi}^2\)





Difference of Logarithms




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {1 - \frac 1 \phi} + \map {\Li_2} {1 - \phi}\)

\(=\)







\(\ds -\dfrac 1 2 \map {\ln^2} \phi\)





Natural Logarithm of 1 is 0




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\frac 1 \phi} - \dfrac 3 2 \map {\Li_2} {1 - \dfrac 1 \phi}\)

\(=\)







\(\ds \dfrac 1 2 \map {\ln^2} \phi\)





$(3) - (4)$














\(\ds \map {\Li_2} z + \map {\Li_2} {1 - z}\)

\(=\)







\(\ds \map \zeta 2 - \map \ln z \map \ln {1 - z}\)





Dilogarithm Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\frac 1 \phi} + \map {\Li_2} {1 - \frac 1 \phi}\)

\(=\)







\(\ds \map \zeta 2 - \map \ln {\frac 1 \phi} \map \ln {1 - \frac 1 \phi}\)





$z := \dfrac 1 \phi$














\(\ds \)

\(=\)







\(\ds \map \zeta 2 - \map \ln {\frac 1 \phi} \map \ln {\frac 1 {\phi^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \zeta 2 - \paren {\map \ln 1 - \map \ln \phi} \paren {\map \ln 1 - \map \ln {\phi^2} }\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \map \zeta 2 + \map \ln \phi \paren {-2 \map \ln \phi}\)





Natural Logarithm of 1 is 0














\(\ds \)

\(=\)







\(\ds \map \zeta 2 - 2 \paren {\map \ln \phi}^2\)










\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {\frac 1 \phi} + \map {\Li_2} {1 - \frac 1 \phi}\)

\(=\)







\(\ds \map \zeta 2 - 2 \paren {\map \ln \phi}^2\)














\(\ds \leadsto \ \ \)





\(\ds -\dfrac 5 2 \map {\Li_2} {1 - \dfrac 1 \phi}\)

\(=\)







\(\ds \dfrac 1 2 \map {\ln^2} \phi - \paren {\map \zeta 2 - 2 \paren {\map \ln \phi}^2}\)





$(5) - (6)$








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {1 - \dfrac 1 \phi}\)

\(=\)







\(\ds \dfrac 2 5 \map \zeta 2 - \paren {\map \ln \phi}^2\)





multiplying through by $-\dfrac 2 5$ and rearranging



$\blacksquare$


Sources
1981: Leonard Lewin: Polylogarithms and Associated Functions: Chapter $\text {1}$. Dilogarithm




