# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_squared_minus_x_squared/Arcsine_Form



Theorem
$\ds \int \sqrt {a^2 - x^2} \rd x = \frac {x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a + C$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \cos \theta\)





Derivative of Sine Function




Also:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)














\(\ds \leadsto \ \ \)





\(\ds a^2 - x^2\)

\(=\)







\(\ds a^2 - a^2 \sin^2 \theta\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {1 - \sin^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds a^2 \cos^2 \theta\)





Sum of Squares of Sine and Cosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt {a^2 - x^2}\)

\(=\)







\(\ds a \cos \theta\)










and:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \map \arcsin {\frac x a}\)





Definition of Real Arcsine




Thus:














\(\ds \int \sqrt {a^2 - x^2} \rd x\)

\(=\)







\(\ds \int \sqrt {a^2 - x^2} \, a \cos \theta \rd \theta\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \int a^2 \cos^2 \theta \rd \theta\)





substituting for $\sqrt {a^2 - x^2}$ from $(2)$














\(\ds \)

\(=\)







\(\ds a^2 \int \cos^2 \theta \rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^2 \frac {\sin \theta \cos \theta + \theta} 2 + C\)





Primitive of Square of Cosine Function: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 a \sin \theta \, a \cos \theta + \frac {a^2 \theta} 2 + C\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac 1 2 x a \cos \theta + \frac {a^2 \theta} 2 + C\)





substituting $x = a \sin \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 2 x \sqrt {a^2 - x^2} + \frac {a^2 \theta} 2 + C\)





substituting $\sqrt {a^2 - x^2} = a \cos \theta$ from $(2)$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \map \arcsin {\frac x a} + C\)





substituting for $\theta = \map \arcsin {\dfrac x a}$ from $(3)$



$\blacksquare$


Also see
Primitive of $\sqrt {x^2 + a^2}$
Primitive of $\sqrt {x^2 - a^2}$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.45$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.244$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $29$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $25$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




