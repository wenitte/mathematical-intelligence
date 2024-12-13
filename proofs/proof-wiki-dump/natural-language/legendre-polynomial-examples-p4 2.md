# 

Source: https://proofwiki.org/wiki/Legendre_Polynomial/Examples/P4

Example of Legendre Polynomial
The $4$th Legendre polynomial is:

$\map {P_4} x = \dfrac 1 8 \paren {35 x^4 - 30 x^2 + 3}$


Proof









\(\ds \forall n \in \N: \, \)



\(\ds \paren {n + 1} \map {P_{n + 1} } x\)

\(=\)







\(\ds \paren {2 n + 1} x \map {P_n} x - n \map {P_{n - 1} } x\)





Bonnet's Recursion Formula








\(\ds \leadsto \ \ \)





\(\ds 4 \map {P_4} x\)

\(=\)







\(\ds 7 x \map {P_3} x - 3 \map {P_2} x\)





setting $n = 3$














\(\ds \)

\(=\)







\(\ds 7 x \paren {\dfrac 1 2 \paren {5 x^3 - 3 x} } - 3 \paren {\dfrac 1 2 \paren {3 x^2 - 1} }\)





Legendre Polynomial $P_3$ and Legendre Polynomial $P_2$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {35 x^4 - 21 x^2 - 9 x^2 + 3}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map {P_4} x\)

\(=\)







\(\ds \dfrac 1 8 \paren {35 x^4 - 30 x^2 + 3}\)





simplifying



$\blacksquare$





