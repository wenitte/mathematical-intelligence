# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Tangent_Function



Theorem
$\ds \int \tan^2 x \rd x = \tan x - x + C$
where $C$ is an arbitrary constant.


Proof 1













\(\ds \int \tan^2 x \rd x\)

\(=\)







\(\ds \int \paren {\sec^2 x - 1} \rd x\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \sec^2 x \rd x + \int \paren {-1} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \tan x + C + \int \paren {-1} \rd x\)





Primitive of Square of Secant Function














\(\ds \)

\(=\)







\(\ds \tan x - x + C\)





Primitive of Constant



$\blacksquare$


Proof 2













\(\ds I_n\)

\(=\)







\(\ds \int \tan^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\tan^{n - 1} x} {n - 1} - I_{n - 2}\)





Reduction Formula for Integral of Power of Tangent














\(\ds I_0\)

\(=\)







\(\ds \int \paren {\tan x}^0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \d x\)




















\(\ds \)

\(=\)







\(\ds x + C\)





Primitive of Constant








\(\ds \leadsto \ \ \)





\(\ds I_2\)

\(=\)







\(\ds \tan x - x + C'\)





setting $n = 2$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.19$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals




