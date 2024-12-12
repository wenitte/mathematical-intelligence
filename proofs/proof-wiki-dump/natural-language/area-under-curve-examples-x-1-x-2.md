# 

Source: https://proofwiki.org/wiki/Area_under_Curve/Examples/(x_-_1)_(x_-_2)

Example of Use of Area under Curve
The area between the $x$-axis and the curve $y = \paren {x - 1} \paren {x - 2}$ is $\dfrac 1 6$.


Proof
Let $\AA$ be the area in question.
The curve $y = \paren {x - 1} \paren {x - 2}$ intercepts the $x$-axis where $y = 0$.
That is, where $x - 1 = 0$ and $x - 2 = 0$, which is $\tuple {1, 0}$ and $\tuple {2, 0}$.




Thus from Area under Curve we need to evaluate the definite integral:

$\AA = \ds \int_1^2 \paren {x - 1} \paren {x - 2} \rd x$
Between those limits, $y$ is negative.
Hence we expect a negative result, which must then be made positive.

So:














\(\ds \AA\)

\(=\)







\(\ds \size {\int_1^2 \paren {x - 1} \paren {x - 2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \size {\int_1^2 \paren {x^2 - 3 x + 2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \size {\intlimits {\dfrac {x^3} 3 - \dfrac {3 x^2} 2 + 2 x} 1 2}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \size {\paren {\dfrac {2^3} 3 - \dfrac {3 \times 2^2} 2 + 2 \times 2} - \paren {\dfrac {1^3} 3 - \dfrac {3 \times 1^2} 2 + 2 \times 1} }\)





Definition of Definite Integral














\(\ds \)

\(=\)







\(\ds \size {\paren {\dfrac 8 3 - 6 + 4} - \paren {\dfrac 1 3 - \dfrac 3 2 + 2} }\)





evaluation














\(\ds \)

\(=\)







\(\ds \size {\dfrac 7 3 + \dfrac 3 2 - 4}\)





evaluation














\(\ds \)

\(=\)







\(\ds \size {\dfrac {14 + 9 - 24} 6}\)





evaluation














\(\ds \)

\(=\)







\(\ds \size {-\dfrac 1 6}\)





evaluation














\(\ds \)

\(=\)







\(\ds \dfrac 1 6\)





evaluation



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XV}$: $2$




