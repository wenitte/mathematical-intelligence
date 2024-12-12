# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Power_of_u_over_1_%2B_Power_of_u

Theorem













\(\ds \int_0^1 \dfrac {u^{a - 1} \rd u} {1 + u^d}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^\infty \frac {\paren {-1}^j} {a + j d}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a - \frac 1 {a + d} + \frac 1 {a + 2 d} - \frac 1 {a + 3 d} + \cdots\)









where $a, d > 0$. 


Proof













\(\ds \int_0^1 \frac {u^{a - 1} \rd u} {1 + u^d}\)

\(=\)







\(\ds \int_0^1 \frac {u^{a - 1} \rd u} {1 - \paren {-u^d} }\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 u^{a - 1} \sum_{j \mathop = 0}^\infty \paren {-1}^j u^{j d} \rd u\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \int_0^1 \sum_{j \mathop = 0}^\infty \paren {-1}^j u^{a - 1 + j d} \rd u\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^\infty \paren {-1}^j \int_0^1 u^{a - 1 + j d} \rd u\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^\infty \paren {-1}^j \intlimits {\frac {u^{a + j d} } {a + j d} } 0 1\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^\infty \frac {\paren {-1}^j} {a + j d}\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.34$




