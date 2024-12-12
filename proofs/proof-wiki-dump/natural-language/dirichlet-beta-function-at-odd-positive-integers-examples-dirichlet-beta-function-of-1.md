# 

Source: https://proofwiki.org/wiki/Dirichlet_Beta_Function_at_Odd_Positive_Integers/Examples/Dirichlet_Beta_Function_of_1

Theorem
Let $\beta$ denote the Dirichlet beta function.
Then:

$\map \beta 1 = \dfrac \pi 4 $


Proof 1













\(\ds \map \beta {2 n + 1}\)

\(=\)







\(\ds \paren {-1}^n \dfrac {E_{2 n} \pi^{2 n + 1} } {4^{n + 1} \paren {2 n}!}\)





Dirichlet Beta Function at Odd Positive Integers








\(\ds \leadsto \ \ \)





\(\ds \map \beta 1\)

\(=\)







\(\ds \paren {-1}^0 \dfrac {E_0 \pi} {4 \paren 0!}\)





setting $n \gets 0$














\(\ds \)

\(=\)







\(\ds \frac \pi 4\)





Factorial of Zero, Zeroth Power of Real Number equals One and Euler Number Values:$E_0 = 1$



$\blacksquare$


Proof 2













\(\ds \frac 1 {1 + x^2}\)

\(=\)







\(\ds 1 - x^2 + x^4 - x^6 + \cdots\)





Sum of Infinite Geometric Sequence














\(\ds \int_0^1 \frac 1 {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {1 - x^2 + x^4 - x^6 + \cdots } \rd x\)





integrating both sides from $0$ to $1$








\(\ds \leadsto \ \ \)





\(\ds \map \arctan 1 - \map \arctan 0\)

\(=\)







\(\ds \intlimits {x - \frac {x^3} 3 + \frac {x^5} 5 - \frac {x^7} 7 + \cdots } 0 1\)





Derivative of Arctangent Function, Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds \frac \pi 4 - 0\)

\(=\)







\(\ds 1 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \cdots\)





Arctangent of One, Arctangent of Zero is Zero








\(\ds \leadsto \ \ \)





\(\ds \frac \pi 4\)

\(=\)







\(\ds \map \beta 1\)





Definition of Dirichlet Beta Function



$\blacksquare$





