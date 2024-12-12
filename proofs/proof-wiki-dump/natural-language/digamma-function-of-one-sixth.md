# 

Source: https://proofwiki.org/wiki/Digamma_Function_of_One_Sixth

Theorem
$\map \psi {\dfrac 1 6} = -\gamma - 2 \ln 2 - \dfrac 3 2 \ln 3 - \dfrac {\pi \sqrt 3} 2$
where:

$\psi$ denotes the digamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof 1













\(\ds \map \psi {\frac 1 6}\)

\(=\)







\(\ds -\gamma - \ln 12 - \frac \pi 2 \map \cot {\frac 1 6 \pi} + 2 \sum_{n \mathop = 1}^{\ceiling {6 / 2} - 1} \map \cos {\frac {2 \pi n} 6} \map \ln {\map \sin {\frac {\pi n} 6} }\)





Gauss's Digamma Theorem














\(\ds \)

\(=\)







\(\ds -\gamma - 2 \ln 2 - \ln 3 - \frac \pi 2 \times \sqrt 3 + 2 \paren {\frac 1 2 \times \map \ln {\frac 1 2} + \paren {-\frac 1 2} \times \map \ln {\frac {\sqrt 3} 2} }\)





Cotangent of $30 \degrees$, Cosine of $60 \degrees$, Cosine of $120 \degrees$, Sine of $30 \degrees$, Sine of $60 \degrees$ and Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma - 2 \ln 2 - \ln 3 - \dfrac {\pi \sqrt 3} 2 + \paren {\map \ln {\frac 1 2} - \map \ln {\frac {\sqrt 3} 2} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma - 2 \ln 2 - \ln 3 - \dfrac {\pi \sqrt 3} 2 + \paren {\paren {\ln 1 - \ln 2} - \paren {\frac 1 2 \ln 3 - \ln 2} }\)





Difference of Logarithms and Logarithm of Power














\(\ds \)

\(=\)







\(\ds -\gamma - 2 \ln 2  - \dfrac 3 2 \ln 3 - \dfrac {\pi \sqrt 3} 2\)





Logarithm of 1 is 0



$\blacksquare$


Proof 2













\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n}\)

\(=\)







\(\ds -\paren {n - 1} \gamma - n \ln n\)





Digamma Additive Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{6 - 1} \map \psi {\frac k 6}\)

\(=\)







\(\ds -\paren {6 - 1} \gamma - 6 \ln 6\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 6} + \map \psi {\frac 2 6} + \map \psi {\frac 3 6} + \map \psi {\frac 4 6} + \map \psi {\frac 5 6}\)

\(=\)







\(\ds -5 \gamma - 6 \ln 6\)










\(\text {(2)}: \quad\)









\(\ds \map \psi {\frac 1 6} - \map \psi {\frac 5 6}\)

\(=\)







\(\ds -\pi \map \cot {\frac \pi 6}\)





Digamma Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\frac 1 6} + \map \psi {\frac 2 6} + \map \psi {\frac 3 6} + \map \psi {\frac 4 6}\)

\(=\)







\(\ds -5 \gamma - 6 \ln 6 - \pi \map \cot {\frac \pi 6}\)





adding lines $1$ and $2$








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\frac 1 6}\)

\(=\)







\(\ds -5 \gamma - 6 \ln 6 - \pi \map \cot {\frac \pi 6} - \map \psi {\frac 1 3} - \map \psi {\frac 1 2} - \map \psi {\frac 2 3}\)





rearranging














\(\ds \)

\(=\)







\(\ds -5 \gamma - 6 \ln 2 - 6 \ln 3 - \pi \times \sqrt 3\)





Sum of Logarithms, Cotangent of $30 \degrees$,














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {-\gamma - \dfrac 3 2 \ln 3 - \dfrac \pi {2 \sqrt 3} }\)





Digamma Function of One Third,














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {-\gamma - 2 \ln 2}\)





Digamma Function of One Half,














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {-\gamma - \dfrac 3 2 \ln 3 + \dfrac \pi {2 \sqrt 3} }\)





and Digamma Function of Two Thirds














\(\ds \)

\(=\)







\(\ds -2 \gamma - 4 \ln 2  - 3 \ln 3 - \pi \sqrt 3\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 6}\)

\(=\)







\(\ds -\gamma - 2 \ln 2 - \dfrac 3 2 \ln 3 - \dfrac {\pi \sqrt 3} 2\)





dividing by $2$



$\blacksquare$





