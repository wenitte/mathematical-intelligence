# 

Source: https://proofwiki.org/wiki/Digamma_Function_of_One_Fourth

Theorem
$\map \psi {\dfrac 1 4} = -\gamma - 3 \ln 2 - \dfrac \pi 2$
where:

$\psi$ denotes the digamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof 1













\(\ds \map \psi {\frac 1 4}\)

\(=\)







\(\ds -\gamma - \ln 8 - \frac \pi 2 \map \cot {\frac 1 4 \pi} + 2 \sum_{n \mathop = 1}^{\ceiling {4 / 2} - 1} \map \cos {\frac {2 \pi n} 4} \map \ln {\map \sin {\frac {\pi n} 4} }\)





Gauss's Digamma Theorem














\(\ds \)

\(=\)







\(\ds -\gamma - 3 \ln 2 - \frac \pi 2 \times 1 + 2 \times 0 \times \map \ln {\frac {\sqrt 2} 2}\)





Cotangent of $45 \degrees$, Cosine of $90 \degrees$, Sine of $45 \degrees$ and Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma - 3 \ln 2 - \dfrac \pi 2\)









$\blacksquare$


Proof 2













\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n}\)

\(=\)







\(\ds -\paren {n - 1} \gamma - n \ln n\)





Digamma Additive Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{4 - 1} \map \psi {\frac k 4}\)

\(=\)







\(\ds -\paren {4 - 1} \gamma - 4 \ln 4\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 4} + \map \psi {\frac 2 4} + \map \psi {\frac 3 4}\)

\(=\)







\(\ds -3 \gamma - 4 \ln 4\)










\(\text {(2)}: \quad\)









\(\ds \map \psi {\frac 1 4} - \map \psi {\frac 3 4}\)

\(=\)







\(\ds -\pi \map \cot {\frac \pi 4}\)





Digamma Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\frac 1 4} + \map \psi {\frac 1 2}\)

\(=\)







\(\ds -3 \gamma - 4 \ln 4 - \pi \map \cot {\frac \pi 4}\)





adding lines $1$ and $2$








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\frac 1 4}\)

\(=\)







\(\ds -3 \gamma - 4 \ln 4 - \pi \map \cot {\frac \pi 4} - \map \psi {\frac 1 2}\)





subtracting $\map \psi {\frac 1 2}$ from both sides














\(\ds \)

\(=\)







\(\ds -3 \gamma - 8 \ln 2 - \pi \paren 1 - \paren {-\gamma - 2 \ln 2}\)





Digamma Function of One Half, Logarithm of Power and Cotangent of $45 \degrees$














\(\ds \)

\(=\)







\(\ds -2 \gamma - 6 \ln 2 -\pi\)














\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 4}\)

\(=\)







\(\ds -\gamma - 3 \ln 2 - \dfrac \pi 2\)





dividing by $2$



$\blacksquare$




