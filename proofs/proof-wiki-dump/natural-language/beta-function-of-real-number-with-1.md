# 

Source: https://proofwiki.org/wiki/Beta_Function_of_Real_Number_with_1

Theorem
Let $\map \Beta {x, y}$ denote the Beta function.
Then:

$\map \Beta {x, 1} = \map \Beta {1, x} = \dfrac 1 x$


Proof
By definition:














\(\ds \map \Beta {x, 1}\)

\(=\)







\(\ds \int_0^1 t^{x - 1} \paren {1 - t}^{1 - 1} \rd t\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \int_0^1 t^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 t^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {t^x} x} 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac 0 x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)









$\Box$















\(\ds \map \Beta {1, x}\)

\(=\)







\(\ds \int_0^1 t^{1 - 1} \paren {1 - t}^{x - 1} \rd t\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \int_0^1 \paren {1 - t}^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_1^0 -\paren z^{x - 1} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\intlimits {\frac {z^x} x} 1 0\)




















\(\ds \)

\(=\)







\(\ds -\frac 0 x + \frac 1 x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $40 \ \text{(a)}$




