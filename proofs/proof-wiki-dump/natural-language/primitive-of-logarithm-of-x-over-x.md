# 

Source: https://proofwiki.org/wiki/Primitive_of_Logarithm_of_x_over_x



Theorem
$\ds \int \frac {\ln x} x \rd x = \frac {\ln^2 x} 2 + C$


Corollary
$\ds \int \frac {\ln a x} x \rd x = \frac {\paren {\ln a x}^2} 2 + C$


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







\(\ds \frac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \ln x\)





Primitive of Reciprocal




Then:














\(\ds \int \frac {\ln x} x \rd x\)

\(=\)







\(\ds \ln x \ln x - \int \ln x \paren {\frac 1 x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \ln^2 x - \int \frac {\ln x} x \rd x + C\)





tidying








\(\ds \leadsto \ \ \)





\(\ds 2 \int \frac {\ln x} x \rd x\)

\(=\)







\(\ds \ln^2 x + C\)





adding $\ds\int \frac {\ln x} x \rd x$ to both sides








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\ln x} x \rd x\)

\(=\)







\(\ds \frac {\ln^2 x} 2 + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.528$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




