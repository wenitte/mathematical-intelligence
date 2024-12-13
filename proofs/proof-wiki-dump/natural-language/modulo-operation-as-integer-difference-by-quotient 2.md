# 

Source: https://proofwiki.org/wiki/Modulo_Operation_as_Integer_Difference_by_Quotient

Theorem
Let $x, y, z \in \R$ be real numbers.
Let $y > 0$.
Let $0 \le z < y$.

Let:

$\dfrac {x - z} y = k$
for some integer $k$.

Then:

$z = x \bmod y$
where $\bmod$ denotes the modulo operation.


Proof
We have:














\(\ds \dfrac {x - z} y\)

\(=\)







\(\ds k\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z - k y\)










We also have:

$0 \le z < y$
Hence:

$0 \le \dfrac z y < 1$
and so by definition of floor function:

$(2): \quad \floor {\dfrac z y} = 0$

Thus:














\(\ds x \bmod y\)

\(=\)







\(\ds x - y \floor {\dfrac x y}\)





Definition of Modulo Operation: note that $y \ne 0$ by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {z - k y} - y \floor {\dfrac {z - k y} y}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds z - k y - y \floor {\dfrac z y - k}\)




















\(\ds \)

\(=\)







\(\ds z - k y - y \paren {\floor {\dfrac z y} - k}\)





Floor of Number plus Integer














\(\ds \)

\(=\)







\(\ds z - k y + k y - y \floor {\dfrac z y}\)




















\(\ds \)

\(=\)







\(\ds z - y \times 0\)





from $(2)$




The result follows.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $16$




