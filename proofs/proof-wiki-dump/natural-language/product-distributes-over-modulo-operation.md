# 

Source: https://proofwiki.org/wiki/Product_Distributes_over_Modulo_Operation

Theorem
Let $x, y, z \in \R$ be real numbers.
Let $x \bmod y$ denote the modulo operation.
Then:

$z \paren {x \bmod y} = \paren {z x} \bmod \paren {z y}$


Proof
By definition of modulo operation:

$x \bmod y := \begin {cases}
x - y \floor {\dfrac x y} & : y \ne 0 \\
x & : y = 0
\end {cases}$
If $y = 0$ we have that:

$z \paren {x \bmod 0} = z x = \paren {z x} \bmod \paren {z 0}$

If $y \ne 0$ we have that:














\(\ds z \paren {x \bmod y}\)

\(=\)







\(\ds z x - z y \floor {\frac x y}\)




















\(\ds \)

\(=\)







\(\ds z x - z y \floor {\frac {z x} {z y} }\)




















\(\ds \)

\(=\)







\(\ds \paren {z x} \bmod \paren {z y}\)





Definition of Modulo Operation



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $15$




