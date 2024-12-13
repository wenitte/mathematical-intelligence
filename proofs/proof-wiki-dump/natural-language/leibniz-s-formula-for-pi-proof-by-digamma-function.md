# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi/Proof_by_Digamma_Function

Theorem
$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

That is:

$\ds \pi = 4 \sum_{k \mathop \ge 0} \paren {-1}^k \frac 1 {2 k + 1}$


Proof













\(\ds 2 b \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^{k + 1} } {a + b k}\)

\(=\)







\(\ds \map \psi {\dfrac a {2 b} + 1} - \map \psi {\dfrac a {2 b} + \dfrac 1 2}\)





Reciprocal times Derivative of Gamma Function: Corollary $2$








\(\ds \leadsto \ \ \)





\(\ds -4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \map \psi {\dfrac 1 4 + 1} - \map \psi {\dfrac 1 4 + \dfrac 1 2}\)





$a := 1$ and $b := 2$








\(\ds \leadsto \ \ \)





\(\ds 4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \map \psi {\dfrac 3 4} - \map \psi {\dfrac 5 4}\)





multiplying both sides by $-1$














\(\ds \)

\(=\)







\(\ds \paren {-\gamma - 3 \ln 2 + \dfrac \pi 2} - \paren {-\gamma - 3 \ln 2 - \dfrac \pi 2 + 4}\)





Digamma Function of Three Fourths and Digamma Function of Five Fourths














\(\ds \)

\(=\)







\(\ds \pi - 4\)





grouping terms








\(\ds \leadsto \ \ \)





\(\ds 4 + 4 \sum_{k \mathop = 1}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \pi\)





adding $4$ to both sides








\(\ds \leadsto \ \ \)





\(\ds 4 \times \paren {1 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \cdots}\)

\(=\)







\(\ds \pi\)














\(\ds \leadsto \ \ \)





\(\ds 4 \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {1 + 2 k}\)

\(=\)







\(\ds \pi\)









$\blacksquare$





