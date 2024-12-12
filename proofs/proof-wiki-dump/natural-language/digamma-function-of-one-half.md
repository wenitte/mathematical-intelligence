# 

Source: https://proofwiki.org/wiki/Digamma_Function_of_One_Half

Theorem
$\map \psi {\dfrac 1 2} = -\gamma - 2 \ln 2$
where:

$\psi$ denotes the digamma function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof 1













\(\ds \map \psi {\frac 1 2}\)

\(=\)







\(\ds -\gamma - \ln 4 - \frac \pi 2 \map \cot {\frac 1 2 \pi} + 2 \sum_{n \mathop = 1}^0 \map \cos {\frac {2 \pi n} 2} \map \ln {\map \sin {\frac {\pi n} 2} }\)





Gauss's Digamma Theorem














\(\ds \)

\(=\)







\(\ds -\gamma - \ln 4\)





Cotangent of Right Angle, noting also that the summation is an empty sum














\(\ds \)

\(=\)







\(\ds -\gamma - 2 \ln 2\)





Logarithm of Power



$\blacksquare$


Proof 2













\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n}\)

\(=\)







\(\ds -\paren {n - 1} \gamma - n \ln n\)





Digamma Additive Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{2 - 1} \map \psi {\frac k 2}\)

\(=\)







\(\ds -\paren {2 - 1} \gamma - 2 \ln 2\)














\(\ds \leadsto \ \ \)





\(\ds \map \psi {\frac 1 2}\)

\(=\)







\(\ds -\gamma - 2 \ln 2\)









$\blacksquare$





