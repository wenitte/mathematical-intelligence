# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Cosine_of_a_x_by_1_plus_Hyperbolic_Sine_of_a_x

Theorem
$\ds \int \frac {\rd x} {\cosh a x \paren {1 + \sinh a x} } = \frac 1 {2 a} \ln \size {\frac {1 + \sinh a x} {\cosh a x} } + \frac 1 a \map \arctan {e^{a x} } + C$


Proof













\(\ds \int \frac {\rd x} {\cosh a x \paren {1 + \sinh a x} }\)

\(=\)







\(\ds \int \frac {\sech^2 a x} {\sech a x + \tanh a x} \rd x\)





Definition of Hyperbolic Cosecant, Definition of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {2 \sech^2 a x} {\sech a x + \tanh a x} \rd x\)





multiplying and dividing by $2$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {-\sech a x \tanh a x + \sech^2 a x + \sech^2 a x + \sech a x \tanh a x} {\sech a x + \tanh a x} \rd x\)





adding and subtracting $\sech a x \tanh a x$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {-\sech a x \tanh a x + \sech^2 a x} {\sech a x + \tanh a x} \rd x + \frac 1 2 \int \sech ax \paren {\frac {\sech a x + \tanh a x} {\sech a x + \tanh a x} } \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {-\sech a x \tanh a x + \sech^2 a x} {\sech a x + \tanh a x} \rd x + \frac 1 2 \int \sech a x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {-\sech a x \tanh a x + \sech^2 a x} {\sech a x + \tanh a x} \rd x + \frac 1 a \map \arctan {e^{a x} }\)





Primitive of $\sech a x$: Arctangent of Exponential Form














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {-a \sech a x \tanh a x + a \sech^2 a x} {\sech a x + \tanh a x} \rd x + \frac 1 a \map \arctan {e^{a x} }\)





multiplying and dividing by $a$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\sech a x + \tanh a x} + \frac 1 a \map \arctan {e^{a x} }\)





Derivative of $\sech a x$, Derivative of $\tanh a x$, Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {\frac {1 + \sinh a x} {\cosh a x} } + \frac 1 a \map \arctan {e^{a x} } + C\)





simplifying and adding integration constant



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$ and $\cosh a x$: $14.601$




