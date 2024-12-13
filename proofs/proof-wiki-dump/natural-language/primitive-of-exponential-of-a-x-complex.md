# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x/Complex

Theorem
$\ds \int e^{a x} \rd x = \frac {e^{a x} } a + C$


Proof for Complex Numbers
Let $z \in \C$ be a complex variable.














\(\ds \map {D_x} {\frac {e^{a z} } a}\)

\(=\)







\(\ds \map {D_x} {\frac 1 a \sum_{n \mathop = 0}^\infty \frac {\paren {a z}^n} {n!} }\)





Definition of Complex Exponential Function














\(\ds \)

\(=\)







\(\ds \map {D_x} {\frac 1 a \sum_{n \mathop = 0}^\infty \frac {a^n z^n} {n!} }\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \map {D_x} {\sum_{n \mathop = 0}^\infty \frac {a^{n - 1} z^n} {n!} }\)





Summation is Linear: Scaling of Summations














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \frac {a^{n - 1} z^{n - 1} } {n!}\)





Derivative of Complex Power Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \frac {\paren {a z}^{n - 1} } {n!}\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {a z}^{n - 1} } {\paren {n - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {a z}^n} {n!}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds e^{a z}\)





Definition of Complex Exponential Function



The result follows by the definition of the primitive.
$\blacksquare$



This article, or a section of it, needs explaining.In particular: what about summation to infinity?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




