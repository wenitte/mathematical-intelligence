# 

Source: https://proofwiki.org/wiki/Pythagorean_Triangle_with_Sides_in_Arithmetic_Sequence

Theorem
The $3-4-5$ triangle is the only Pythagorean triangle such that:

the lengths of whose sides are in arithmetic sequence
and:

the lengths of whose sides form a primitive Pythagorean triple.


Proof
Let $a, b, c$ be the lengths of the sides of a Pythagorean triangle such that $a < b < c$.
Let $a, b, c$ be in arithmetic sequence:

$b - a = c - b$
Let $a, b, c$ form a primitive Pythagorean triple:

$a \perp b$
By definition of primitive Pythagorean triple, $a, b, c$ are in the form:

$2 m n, m^2 - n^2, m^2 + n^2$
We have that $m^2 + n^2$ is always the hypotenuse.
There are two cases:

$(1): \quad 2 m n > m^2 - n^2$, as in, for example, $3, 4, 5$, where $m = 2, n = 1$.
$(2): \quad 2 m n < m^2 - n^2$, as in, for example, $8-15-17$, where $m = 4, n = 1$.

First, let $2 m n > m^2 - n^2$:

$a = m^2 - n^2$
$b = 2 m n$
$c = m^2 + n^2$
Then:














\(\ds 2 m n - \paren {m^2 - n^2}\)

\(=\)







\(\ds m^2 + n^2 - 2 m n\)





Definition of Arithmetic Sequence








\(\ds \leadsto \ \ \)





\(\ds 4 m n\)

\(=\)







\(\ds 2 m^2\)





adding $2 m n + m^2 - n^2$ to both sides








\(\ds \leadsto \ \ \)





\(\ds 2 n\)

\(=\)







\(\ds m\)





dividing both sides by $2 m$



From Solutions of Pythagorean Equation: Primitive, $m$ and $n$ must be coprime.
Hence $n = 1$ and $m = 2$ are the only $m$ and $n$ which fulfil the requirements.
This leads to the $3-4-5$ triangle.

Now let $2 m n < m^2 - n^2$:

$a = 2 m n$
$b = m^2 - n^2$
$c = m^2 + n^2$
Then:














\(\ds m^2 - n^2 - 2 m n\)

\(=\)







\(\ds m^2 + n^2 - \paren {m^2 - n^2}\)





Definition of Arithmetic Sequence








\(\ds \leadsto \ \ \)





\(\ds m^2 - n^2 - 2 m n\)

\(=\)







\(\ds 2 n^2\)





simplifying right hand side








\(\ds \leadsto \ \ \)





\(\ds m^2 - 2 m n - 3 n^2\)

\(=\)







\(\ds 0\)





subtracting $2 n^2$ from both sides



In order for $a, b, c$ to form a primitive Pythagorean triple, then $m$ and $n$ must be of opposite parity.
If $m$ is even, then $m^2 - 2 m n$ is even.
But then $3 n^2$ is even, which makes $n$ even.
Otherwise, if $m$ is odd, then $m^2 - 2 m n$ is odd.
But then $3 n^2$ is odd, which makes $n$ odd.
So when $2 m n < m^2 - n^2$, $a, b, c$ cannot be both in arithmetic sequence and be a primitive Pythagorean triple.

Hence follows the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$




