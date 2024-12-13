# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_of_x_over_a_over_x



Theorem













\(\ds \int \frac 1 x \arcsin \frac x a \rd x\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac x a}^{2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac x a + \frac 1 {2 \times 3 \times 3} \paren {\frac x a}^3 + \frac {1 \times 3} {2 \times 4 \times 5 \times 5} \paren {\frac x a}^5 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 7 \times 7} \paren {\frac x a}^7 + \cdots + C\)











Proof













\(\ds \arcsin \frac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac x a}^{2 n + 1}\)





Power Series Expansion for Real Arcsine Function








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcsin \frac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcsin \frac x a \rd x\)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\int {\frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n} } \rd x}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} \frac {x^{2 n + 1} } {2 n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac x a}^{2 n + 1}\)





rearranging



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arccos \dfrac x a$
Primitive of $\dfrac 1 x \arctan \dfrac x a$
Primitive of $\dfrac 1 x \arccot \dfrac x a$
Primitive of $\dfrac 1 x \arcsec \dfrac x a$
Primitive of $\dfrac 1 x \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.474$




