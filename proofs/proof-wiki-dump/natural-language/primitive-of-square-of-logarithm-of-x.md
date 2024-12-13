# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Logarithm_of_x

Theorem
$\ds \int \ln^2 x \rd x = x \ln^2 x - 2 x \ln x + 2 x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x \ln x - x\)





Primitive of $\ln x$




Then:














\(\ds \int \ln^2 x \rd x\)

\(=\)







\(\ds \int \paren {\ln x} \paren {\ln x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\ln x} \paren {x \ln x - x} - \int \paren {x \ln x - x} \frac 1 x \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \ln^2 x - x \ln x - \int \ln x \rd x + \int \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds x \ln^2 x - x \ln x - \paren {x \ln x - x} + \int \rd x + C\)





Primitive of $\ln x$














\(\ds \)

\(=\)







\(\ds x \ln^2 x - x \ln x - \paren {x \ln x - x} + x + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds x \ln^2 x - 2 x \ln x + 2 x + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.530$




