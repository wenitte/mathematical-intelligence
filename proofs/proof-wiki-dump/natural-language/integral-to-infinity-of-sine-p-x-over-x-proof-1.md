# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Sine_p_x_over_x/Proof_1

Theorem
$\ds \int_0^\infty \frac {\sin p x} x \rd x = \begin {cases} \dfrac \pi 2 & : p > 0 \\ 0 & : p = 0 \\ -\dfrac \pi 2 & : p < 0 \end {cases}$


Proof
Let $p > 0$.
We have: 














\(\ds \int_0^\infty \frac {\sin p x} x \rd x\)

\(=\)







\(\ds \frac 1 p \int_0^\infty \frac {\sin t} { \frac 1 p t} \rd t\)





substituting $t = p x$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\sin t} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Dirichlet Integral




Then:














\(\ds \int_0^\infty \frac {\sin \left({- p x}\right)} x \rd x\)

\(=\)







\(\ds -\int_0^\infty \frac {\sin p x} x \rd x\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds -\frac \pi 2\)





per above computation




For $p = 0$, we have: 














\(\ds \int_0^\infty \frac {\sin 0 x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 0 x \rd x\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)









Hence the result. 
$\blacksquare$





