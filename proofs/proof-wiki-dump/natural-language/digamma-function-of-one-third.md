# 

Source: https://proofwiki.org/wiki/Digamma_Function_of_One_Third

Theorem
$\map \psi {\dfrac 1 3} = -\gamma - \dfrac 3 2 \ln 3 - \dfrac \pi {2 \sqrt 3}$
where:

$\psi$ denotes the digamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof 1













\(\ds \map \psi {\frac 1 3}\)

\(=\)







\(\ds -\gamma - \ln 6 - \frac \pi 2 \map \cot {\frac 1 3 \pi} + 2 \sum_{n \mathop = 1}^{\ceiling {3 / 2} - 1} \map \cos {\frac {2 \pi n} 3} \map \ln {\map \sin {\frac {\pi n} 3} }\)





Gauss's Digamma Theorem














\(\ds \)

\(=\)







\(\ds -\gamma - \ln 2 - \ln 3 - \frac \pi 2 \paren {\frac 1 {\sqrt 3} } + 2 \paren {-\frac 1 2} \map \ln {\frac {\sqrt 3} 2 }\)





Cotangent of $60 \degrees$, Cosine of $120 \degrees$, Sine of $60 \degrees$ and Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma - \ln 2 - \ln 3 - \frac \pi 2 \paren {\frac 1 {\sqrt 3} } - \paren {\frac 1 2 \ln 3 - \ln 2}\)





Difference of Logarithms and Logarithm of Power














\(\ds \)

\(=\)







\(\ds -\gamma - \dfrac 3 2 \ln 3 - \dfrac {\pi} {2 \sqrt 3}\)









$\blacksquare$


Proof 2













\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n}\)

\(=\)







\(\ds -\paren {n - 1} \gamma - n \ln n\)





Digamma Additive Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{3 - 1} \map \psi {\frac k 3}\)

\(=\)







\(\ds -\paren {3 - 1} \gamma - 3 \ln 3\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 3} + \map \psi {\frac 2 3}\)

\(=\)







\(\ds -2 \gamma - 3 \ln 3\)










\(\text {(2)}: \quad\)









\(\ds \map \psi {\frac 1 3} - \map \psi {\frac 2 3}\)

\(=\)







\(\ds -\pi \map \cot {\frac \pi 3}\)





Digamma Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\frac 1 3}\)

\(=\)







\(\ds -2 \gamma - 3 \ln 3 - \pi \map \cot {\frac \pi 3}\)





adding lines $1$ and $2$








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 3}\)

\(=\)







\(\ds -\gamma - \dfrac 3 2 \ln 3 - \dfrac \pi {2 \sqrt 3}\)





dividing by $2$ and Cotangent of $60 \degrees$



$\blacksquare$





