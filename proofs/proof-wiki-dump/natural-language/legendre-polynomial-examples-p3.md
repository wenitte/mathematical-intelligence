# 

Source: https://proofwiki.org/wiki/Legendre_Polynomial/Examples/P3

Example of Legendre Polynomial
The $3$rd Legendre polynomial is:

$\map {P_3} x = \dfrac 1 2 \paren {5 x^3 - 3 x}$


Proof









\(\ds \forall n \in \N: \, \)



\(\ds \paren {n + 1} \map {P_{n + 1} } x\)

\(=\)







\(\ds \paren {2 n + 1} x \map {P_n} x - n \map {P_{n - 1} } x\)





Bonnet's Recursion Formula








\(\ds \leadsto \ \ \)





\(\ds 3 \map {P_3} x\)

\(=\)







\(\ds 5 x \map {P_2} x - 2 \map {P_1} x\)





setting $n = 2$














\(\ds \)

\(=\)







\(\ds 5 x \paren {\dfrac 1 2 \paren {3 x^2 - 1} } - 2 x\)





Legendre Polynomial $P_2$ and Legendre Polynomial $P_1$














\(\ds \)

\(=\)







\(\ds \dfrac {15} 2 x^3 - \dfrac {5 x} 2 - \dfrac {4 x} 2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map {P_3} x\)

\(=\)







\(\ds \dfrac 1 2 \paren {5 x^3 - 3 x}\)





simplifying



$\blacksquare$





