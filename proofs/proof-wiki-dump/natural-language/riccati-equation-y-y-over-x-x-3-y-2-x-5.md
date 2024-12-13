# 

Source: https://proofwiki.org/wiki/Riccati_Equation/y%27_%3D_(y_over_x)_%2B_x%5E3_y%5E2_-_x%5E5

Theorem
The Riccati equation:

$(1): \quad y' = \dfrac y x + x^3 y^2 - x^5$
has the general solution:

$C \exp \dfrac {2 x^5} 5 = \dfrac {y - x} {y + x}$


Proof
It can be seen by inspection that:

$\map {y_1} x = x$
is a particular solution to $(1)$.
Thus from General Solution of Riccati Equation from Particular Solution:

$y = x + \map z x$
where:

$z' - \paren {\dfrac 1 x + 2 x^4} z = x^3 z^2$
From Bernoulli's Equation: $y' - \paren {\dfrac 1 x + 2 x^4} y = x^3 y^2$:

$z = \dfrac {2 x} {C \map \exp {-\dfrac {2 x^5} 5} - 1}$

Thus:














\(\ds y\)

\(=\)







\(\ds x + \frac {2 x} {C \map \exp {-\dfrac {2 x^5} 5} - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y - x} \paren {C \map \exp {-\dfrac {2 x^5} 5} - 1}\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds y C \map \exp {-\dfrac {2 x^5} 5} - y - x C \map \exp {-\dfrac {2 x^5} 5} + x\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds y C \map \exp {-\dfrac {2 x^5} 5} - y - x C \map \exp {-\dfrac {2 x^5} 5} - x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y - x} C \map \exp {-\dfrac {2 x^5} 5}\)

\(=\)







\(\ds y + x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y - x} {y + x}\)

\(=\)







\(\ds C \map \exp {\dfrac {2 x^5} 5}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $28$




