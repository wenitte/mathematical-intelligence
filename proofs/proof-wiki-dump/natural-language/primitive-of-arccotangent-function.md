# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccotangent_Function



Theorem
$\ds \int \arccot x \rd x = x \arccot x + \frac {\map \ln {x^2 + 1} } 2 + C$


Corollary
$\ds \int \arccot \frac x a \rd x = x \arccot \frac x a + \frac a 2 \map \ln {x^2 + a^2} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arccot x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cot u\)

\(=\)







\(\ds x\)





Definition of Arccotangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \csc u\)

\(=\)







\(\ds \sqrt {1 + x^2}\)





Difference of Squares of Cosecant and Cotangent




Then:














\(\ds \int \arccot x \rd x\)

\(=\)







\(\ds -\int u \csc^2 u \rd u\)





Primitive of Function of Arccotangent














\(\ds \)

\(=\)







\(\ds -\paren {-u \cot u + \ln \size {\sin u} } + C\)





Primitive of $x \csc^2 a x$ with $a := 1$














\(\ds \)

\(=\)







\(\ds u \cot u - \ln \size {\sin u} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds u \cot u + \ln \size {\csc u} + C\)





Logarithm of Reciprocal and Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds u x + a \ln \size {\csc u} + C\)





Substitution for $\cot u$ from $(1)$














\(\ds \)

\(=\)







\(\ds x u + a \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $\csc u$ from $(2)$














\(\ds \)

\(=\)







\(\ds x \arccot x + \ln \size {\sqrt {1 + x^2} } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccot x + \frac 1 2 \ln \size {x^2 + 1} + C\)





Logarithm of Power and simplifying














\(\ds \)

\(=\)







\(\ds x \arccot x + \frac {\map \ln {x^2 + 1} } 2 + C\)





$x^2 + 1$ always positive



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccot x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {x^2 + 1}\)





Derivative of $\arccot \dfrac x a$, setting $a := 1$




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














\(\ds \int \arccot x \rd x\)

\(=\)







\(\ds x \arccot x - \int x \paren {\frac {-1} {x^2 + 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccot x + \int \frac {x \rd x} {x^2 + 1} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arccot x + \paren {\frac 1 2 \map \ln {x^2 + 1} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds x \arccot x + \frac a 2 \map \ln {x^2 + 1} + C\)





simplifying



$\blacksquare$


Also presented as
This result can also be presented as:

$\ds \int \arccot x \rd x = x \arccot x + \ln \sqrt {x^2 + 1} + C$


Also see
Primitive of $\arcsin x$
Primitive of $\arccos x$
Primitive of $\arctan x$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




