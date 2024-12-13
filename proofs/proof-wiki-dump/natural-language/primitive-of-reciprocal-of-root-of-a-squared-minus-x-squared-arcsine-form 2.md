# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_squared_minus_x_squared/Arcsine_Form



Theorem
$\ds \int \frac {\d x} {\sqrt {a^2 - x^2} } = \arcsin \frac x a + C$
where $a$ is a strictly positive constant and $a^2 > x^2$.


Corollary 1
$\ds \int \frac {\d x} {\sqrt {1 - x^2} } = \arcsin x + C$


Corollary 2
$\ds \int_0^x \frac {\d t} {\sqrt{1 - t^2} } = \arcsin x$


Corollary 3
$\ds \int \frac {\d x} {\sqrt {2 a x - x^2} } = \arcsin \dfrac {x - a} a + C$


Proof













\(\ds \int \frac {\d x} {\sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \int \frac {\d x} {\sqrt {a^2 \paren {1 - \frac {x^2} {a^2} } } }\)





factor $a^2$ out of the radicand














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {\sqrt {a^2} \sqrt {1 - \paren {\frac x a}^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {\sqrt {1 - \paren {\frac x a}^2} }\)









Substitute:

$\sin \theta = \dfrac x a \iff x = a \sin \theta$
for $\theta \in \openint {-\dfrac \pi 2} {\dfrac \pi 2}$.
From Real Sine Function is Bounded and Shape of Sine Function, this substitution is valid for all $x / a \in \openint {-1} 1$.

Then:














\(\ds a^2\)

\(>\)







\(\ds x^2\)





by hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)







\(\ds \frac {x^2} {a^2}\)





dividing both terms by $a^2$








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)







\(\ds \paren {\frac x a}^2\)





Powers of Group Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(>\)







\(\ds \size {\frac x a}\)





taking the square root of both terms








\(\ds \leadstoandfrom \ \ \)





\(\ds -1\)

\(<\)







\(\ds \paren {\frac x a} < 1\)





Negative of Absolute Value



so this substitution will not change the domain of the integrand.

Then:














\(\ds x\)

\(=\)







\(\ds a \sin \theta\)





from above








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds a \cos \theta \frac {\d \theta} {\d x}\)





Differentiating with respect to $x$, Derivative of Sine Function, Chain Rule for Derivatives














\(\ds \frac 1 a \int \frac {\d x} {\sqrt {1 - \paren {\frac x a}^2 } }\)

\(=\)







\(\ds \frac 1 a \int \frac {a \cos \theta} {\sqrt {1 - \sin^2 \theta} } \frac {\d \theta} {\d x} \rd x\)





from above














\(\ds \)

\(=\)







\(\ds \frac a a \int \frac {\cos \theta} {\sqrt {1 - \sin^2 \theta} } \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {\cos \theta} {\sqrt {\cos^2 \theta} } \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\cos \theta} {\size {\cos \theta} } \rd \theta\)









We have defined $\theta$ to be in the open interval $\openint {-\dfrac \pi 2} {\dfrac \pi 2}$.
From Sine and Cosine are Periodic on Reals, $\cos \theta > 0$ for the entire interval.
Therefore the absolute value is unnecessary, and the integral simplifies to:














\(\ds \int \rd \theta\)

\(=\)







\(\ds \theta + C\)









As $\theta$ was stipulated to be in the open interval $\openint {-\dfrac \pi 2} {\dfrac \pi 2}$:

$\sin \theta = \dfrac x a \iff \theta = \arcsin \dfrac x a$
The answer in terms of $x$, then, is:

$\ds \int \frac {\d x} {\sqrt {a^2 - x^2} } = \arcsin \frac x a + C$
$\blacksquare$


Also see
Primitive of Reciprocal of $\sqrt {x^2 + a^2}$
Primitive of Reciprocal of $\sqrt {x^2 - a^2}$
Derivative of Arcsine Function


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $12$.
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: $\text {III}$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(ix)}$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.44$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.42$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.237$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $28$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $18$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $25$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1983: K.G. Binmore: Calculus ... (previous): $9$ Sums and Integrals: $9.8$ Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals
For a video presentation of the contents of this page, visit the Khan Academy.




