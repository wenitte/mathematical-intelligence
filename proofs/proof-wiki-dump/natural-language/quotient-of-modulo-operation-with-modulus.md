# 

Source: https://proofwiki.org/wiki/Quotient_of_Modulo_Operation_with_Modulus

Theorem
Let $x, y \in \R$ be real numbers.
Let $x \bmod y$ denote the modulo operation:

$x \bmod y := \begin{cases}
x - y \floor {\dfrac x y} & : y \ne 0 \\
x & : y = 0
\end{cases}$
where $\floor {\dfrac x y}$ denotes the floor of $\dfrac x y$.

Let $y \ne 0$.

Then:

$0 \le \dfrac x y - \floor {\dfrac x y} = \dfrac {x \bmod y} y < 1$


Proof
From Real Number minus Floor:

$\dfrac x y - \floor {\dfrac x y} \in \hointr 0 1$
Thus by definition of half-open real interval:

$0 \le \dfrac x y - \floor {\dfrac x y} < 1$

Then:














\(\ds x \bmod y\)

\(=\)







\(\ds x - y \floor {\frac x y}\)





Definition of Modulo Operation








\(\ds \leadsto \ \ \)





\(\ds \frac {x \bmod y} y\)

\(=\)







\(\ds \frac {x - y \floor {\dfrac x y} } y\)




















\(\ds \)

\(=\)







\(\ds \frac x y - \frac y y \floor {\dfrac x y}\)




















\(\ds \)

\(=\)







\(\ds \frac x y - \floor {\dfrac x y}\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: $(2)$




