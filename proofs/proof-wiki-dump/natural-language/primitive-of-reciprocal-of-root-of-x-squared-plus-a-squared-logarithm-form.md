# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared/Logarithm_Form



Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \map \ln {x + \sqrt {x^2 + a^2} } + C$


Corollary
$\ds \int \frac {\d x} {-\sqrt {x^2 + a^2} } = \ln \size {x - \sqrt {x^2 + a^2} } + C$


Proof 1













\(\ds \int \frac {\d x} {\sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \arsinh {\frac x a} + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$ in $\arsinh$ form














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 + a^2} } - \ln a + C\)





$\arsinh \dfrac x a$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 + a^2} } + C\)





subsuming $-\ln a$ into arbitrary constant



$\blacksquare$


Proof 2
Let $y^2 = a^2 + x^2$.
Then:














\(\ds 2 y \frac {\d y} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds y \frac {\d y} {\d x}\)

\(=\)







\(\ds x\)





simplification








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} x\)

\(=\)







\(\ds \frac {\d x} y\)




















\(\ds \)

\(=\)







\(\ds \frac {\d x + \d y} {x + y}\)






A specific link is needed here.In particular: We don't actually have a result for thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {\d x} y\)





substituting for $y$














\(\ds \)

\(=\)







\(\ds \frac {\d x + \d y} {x + y}\)





from above














\(\ds \)

\(=\)







\(\ds \ln \size {x + y} + C\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \ln \size {x + \sqrt {x^2 + a^2} } + C\)





substituting back














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 + a^2} } + C\)





argument of $\ln$ always positive



$\blacksquare$


Also presented as
Some sources present this in the form:

$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \map \ln {\dfrac {x + \sqrt {x^2 + a^2} } a} + C$
which is the same as above, except that the constant $a$ has not been subsumed into the arbitrary constant $C$.

Some sources present it as:

$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \ln \size {x + \sqrt {x^2 + a^2} } + C$


Also see
Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$: Logarithm Form
Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $14$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.40$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.43$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.182$
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $23$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $26$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




