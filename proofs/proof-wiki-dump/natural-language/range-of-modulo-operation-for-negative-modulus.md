# 

Source: https://proofwiki.org/wiki/Range_of_Modulo_Operation_for_Negative_Modulus

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

$0 \ge x \bmod y > y$


Proof













\(\ds 0\)

\(\le\)

\(\, \ds \frac {x \bmod y} y \, \)

\(\, \ds < \, \)



\(\ds 1\)





Quotient of Modulo Operation with Modulus








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\ge\)

\(\, \ds \frac {x \bmod y} y \times y \, \)

\(\, \ds > \, \)



\(\ds 1 \times y\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\ge\)

\(\, \ds x \bmod y \, \)

\(\, \ds > \, \)



\(\ds y\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: $(2) \ \text{b)}$




