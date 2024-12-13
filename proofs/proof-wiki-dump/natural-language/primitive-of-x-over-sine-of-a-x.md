# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Sine_of_a_x



Theorem













\(\ds \int \frac {x \rd x} {\sin a x}\)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {a x + \frac {\paren {a x}^3} {18} + \frac {7 \paren {a x}^5} {1800} \cdots} + C\)









where $B_n$ denotes the $n$th Bernoulli number.


Proof













\(\ds \csc x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} \paren {-1}^{n - 1} x^{2 n - 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!}\)





Power Series Expansion for Cosecant Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac x {\sin a x}\)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} \paren {-1}^{n - 1} \paren {a x}^{2 n - 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!}\)





Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds \dfrac 1 a \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} \paren {-1}^{n - 1} \paren {a x}^{2 n} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!}\)














\(\ds \leadsto \ \ \)





\(\ds \int \dfrac x {\sin a x} \rd x\)

\(=\)







\(\ds \dfrac 1 {a^2} \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} \paren {-1}^{n - 1} \paren {a x}^{2 n + 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n + 1}!}\)





Primitive of Power, Linear Combination of Primitives



$\blacksquare$


Also see
Primitive of $\dfrac x {\cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.346$




