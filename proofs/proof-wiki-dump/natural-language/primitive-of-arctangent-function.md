# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_Function



Theorem
$\ds \int \arctan x \rd x = x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C$


Corollary
$\ds \int \arctan \frac x a \rd x = x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arctan x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \tan u\)

\(=\)







\(\ds x\)





Definition of Real Arctangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sec u\)

\(=\)







\(\ds \sqrt {1 + x^2}\)





Difference of Squares of Secant and Tangent




Then:














\(\ds \int \arctan x \rd x\)

\(=\)







\(\ds \int u \sec^2 u \rd u\)





Primitive of Function of Arctangent














\(\ds \)

\(=\)







\(\ds u \tan u + \ln \size {\cos u} + C\)





Primitive of $x \sec^2 a x$ with $a = 1$














\(\ds \)

\(=\)







\(\ds u \tan u - \ln \size {\sec u} + C\)





Logarithm of Reciprocal and Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds u x - \ln \size {\sec u} + C\)





Substitution for $\tan u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds u x - \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $\sec u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arctan x - \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\ln \size {x^2 + 1} } 2 + C\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C\)





$x^2 + 1$ always positive



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arctan x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2 + 1}\)





Derivative of $\arctan x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arctan x \rd x\)

\(=\)







\(\ds x \arctan x - \int x \paren {\frac 1 {x^2 + 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arctan x - \int \frac {x \rd x} {x^2 + 1} + C\)





rearranging














\(\ds \)

\(=\)







\(\ds x \arctan x - \paren {\frac 1 2 \ln \paren {x^2 + 1} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds x \arctan x - \frac {\ln \paren {x^2 + 1} } 2 + C\)





simplifying



$\blacksquare$


Also presented as
This result can also be presented as:

$\ds \int \arctan x \rd x = x \arctan x - \ln \sqrt {x^2 + 1} + C$


Also see
Primitive of $\arcsin x$
Primitive of $\arccos x$
Primitive of $\arccot x$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): arc-tangent
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




