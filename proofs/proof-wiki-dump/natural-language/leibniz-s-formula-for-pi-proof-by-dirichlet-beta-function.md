# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi/Proof_by_Dirichlet_Beta_Function

Theorem
$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

That is:

$\ds \pi = 4 \sum_{k \mathop \ge 0} \paren {-1}^k \frac 1 {2 k + 1}$


Proof
Recall the Dirichlet beta function:

$\ds \map \beta s = \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^s}$
From Dirichlet Beta Function at Odd Positive Integers, we obtain:

$\map \beta {2 n + 1} = \paren {-1}^n \dfrac {E_{2 n} \pi^{2 n + 1} } {4^{n + 1} \paren {2 n}!}$
Therefore, setting $n = 0$ above:














\(\ds \map \beta 1\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}^1}\)





Definition of Dirichlet Beta Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^0 \dfrac {E_0 \pi } {4 \times 0!}\)





Dirichlet Beta Function at Odd Positive Integers














\(\ds \)

\(=\)







\(\ds \frac \pi 4\)





Definition of Euler Numbers and Factorial of Zero



$\blacksquare$





