# 

Source: https://proofwiki.org/wiki/Number_minus_Modulo_is_Integer_Multiple

Theorem
Let $x, y \in \R$ be real numbers.
Let $x \bmod y$ denote the modulo operation:

$x \bmod y := \begin{cases}
x - y \floor {\dfrac x y} & : y \ne 0 \\
x & : y = 0
\end{cases}$
where $\floor {\dfrac x y}$ denotes the floor of $\dfrac x y$.

Let $y < 0$.

Then:

$x - \paren {x \bmod y}$
is an integer multiple of $y$.


Proof
When $y = 0$ we have:

$x \bmod y := x$
Thus:

$x - \paren {x \bmod y} = 0$
From Zero is Integer Multiple of Zero it follows that:

$x - \paren {x \bmod y}$
is an integer multiple of $y$.

Let $y \ne 0$.
Then:














\(\ds x \bmod y\)

\(=\)







\(\ds x - y \floor {\dfrac x y}\)





Definition of Modulo Operation








\(\ds \leadsto \ \ \)





\(\ds x - \paren {x \bmod y}\)

\(=\)







\(\ds y \floor {\dfrac x y}\)





Definition of Modulo Operation



From Floor Function is Integer, $\floor {\dfrac x y}$ is an integer.
Thus:

$\exists n \in \Z: x - \paren {x \bmod y} = n y$
where in the case $n = \floor {\dfrac x y}$
Hence the result by definition of integer multiple.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: $(2) \ \text{c)}$




