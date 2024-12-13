# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_of_x_over_a_over_x



Theorem













\(\ds \int \frac 1 x \map \arctan {\frac x a} \rd x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {x^{2 k + 1} } {\paren {2 k + 1}^2 a^{2 k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac x a - \frac {x^3} {3^2 a^3} + \frac {x^5} {5^2 a^5} - \frac {x^7} {7^2 a^7} + \cdots + C\)











Proof













\(\ds \int \frac 1 x \map \arctan {\frac x a} \rd x\)

\(=\)







\(\ds \int \frac 1 x \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac 1 {2 k + 1} \paren {\frac x a}^{2 k + 1} \rd x\)





Power Series Expansion for Real Arctangent Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac 1 {\paren {2 k + 1} a^{2 k + 1} } \int x^{2 k} \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \frac{x^{2 k + 1} } {\paren {2 k + 1}^2 a^{2 k + 1} } + C\)









$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arcsin \dfrac x a$
Primitive of $\dfrac 1 x \arccos \dfrac x a$
Primitive of $\dfrac 1 x \arccot \dfrac x a$
Primitive of $\dfrac 1 x \arcsec \dfrac x a$
Primitive of $\dfrac 1 x \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.486$




