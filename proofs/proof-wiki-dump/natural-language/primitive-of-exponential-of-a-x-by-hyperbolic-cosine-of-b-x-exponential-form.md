# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Hyperbolic_Cosine_of_b_x/Exponential_Form



Theorem
$\ds \int e^{a x} \cosh b x \rd x = \frac {e^{a x} } 2 \paren {\frac {e^{b x} } {a + b} + \frac {e^{-b x} } {a - b} } + C$
for $a^2 \ne b^2$.


Proof













\(\ds \int e^{a x} \cosh b x \rd x\)

\(=\)







\(\ds \int e^{a x} \paren {\frac {e^{b x} + e^{-b x} } 2} \rd x\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int e^{a x} \paren {e^{b x} + e^{-b x} } \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \paren {e^{a x} e^{b x} + e^{a x} e^{-b x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \paren {e^{a x + b x} + e^{a x - b x} } \rd x\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int e^{a x + b x} \rd x + \frac 1 2 \int e^{a x - b x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int e^{\paren {a + b} x} \rd x + \frac 1 2 \int e^{\paren {a - b} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {e^{\paren {a + b} x} } {a + b} + \frac 1 2 \frac {e^{\paren {a - b} x} } {a - b} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {e^{a x + b x} } {a + b} + \frac 1 2 \frac {e^{a x - b x} } {a - b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {e^{a x} e^{b x} } {a + b} + \frac 1 2 \frac {e^{a x} e^{-b x} } {a - b} + C\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } 2 \paren {\frac {e^{b x} } {a + b} + \frac {e^{-b x} } {a - b} } + C\)









$\blacksquare$


Also see
Primitive of $e^{a x} \sinh b x$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $138$.




