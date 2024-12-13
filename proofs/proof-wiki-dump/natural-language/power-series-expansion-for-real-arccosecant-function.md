# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Arccosecant_Function



Theorem
The arccosecant function has a Taylor Series expansion:














\(\ds \arccsc x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} x^{2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x + \frac 1 {2 \times 3 x^3} + \frac {1 \times 3} {2 \times 4 \times 5 x^5} + \frac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 7 x^7} + \cdots\)









which converges for $\size x \ge 1$.


Proof
From Arcsine of Reciprocal equals Arccosecant:

$\arccsc x = \arcsin \dfrac 1 x$

From Power Series Expansion for Real Arcsine Function:

$\ds \arcsin x = \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}$
which is converges for $\size x \le 1$.
The result follows by subtituting $\dfrac 1 x$ for $x$.
This converges for $\size {\dfrac 1 x} \le 1$, that is, for $\size x \ge 1$.
$\blacksquare$


Also see
Power Series Expansion for Real Arcsine Function
Power Series Expansion for Real Arccosine Function
Power Series Expansion for Real Arctangent Function
Power Series Expansion for Real Arccotangent Function
Power Series Expansion for Real Arcsecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.32$




