# 

Source: https://proofwiki.org/wiki/Beta_Function_of_Half_with_Half/Proof_3

Theorem
$\map \Beta {\dfrac 1 2, \dfrac 1 2} = \pi$
where $\Beta$ denotes the Beta function.


Proof
By definition of the Beta function:

$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$
Thus:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{\frac 1 2 - 1} \paren {1 - t}^{\frac 1 2 - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {\rd t} {t^{1/2} \paren {1 - t}^{1/2} }\)










Let $t = u^2$.
Then:

$\rd t = 2 u \rd u$
and:














\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds 0\)




















\(\ds t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 1\)










and so:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \frac {2 u \rd u} {u \paren {1 - u^2}^{1/2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 2 \int_{\mathop \to 0}^{\mathop \to 1} \frac {\rd u} {\sqrt {\paren {1 - u^2} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \bigintlimits {\arcsin u} 0 1\)





Primitive of $\dfrac 1 {\sqrt {1 - u^2} }$














\(\ds \)

\(=\)







\(\ds 2 \times \pi / 2 - 0\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $43$




