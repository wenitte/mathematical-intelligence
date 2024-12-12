# 

Source: https://proofwiki.org/wiki/Generator_for_Almost_Isosceles_Pythagorean_Triangle



Theorem
Let $P$ be a Pythagorean triangle whose sides correspond to the Pythagorean triple $T = \tuple {a, b, c}$.
Let the generator for $T$ be $\tuple {m, n}$.

Then:

$P$ is almost isosceles
if and only if

$\tuple {2 m + n, m}$ is the generator for the Pythagorean triple $T'$ of another almost isosceles Pythagorean triangle $P'$.


Proof
By definition of almost isosceles:

$\size {a - b} = 1$

First note that, from Consecutive Integers are Coprime, an almost isosceles Pythagorean triangle is a primitive Pythagorean triangle.
Hence $T$ and $T'$ are primitive Pythagorean triples.

Thus it is established that by Solutions of Pythagorean Equation, both $P$ and $P'$ are of the form:

$\tuple {2 m n, m^2 + n^2, m^2 - n^2}$
for some $m, n \in \Z_{>0}$ where:

$m > n$
$m \perp n$
$m$ and $n$ are of opposite parity.


Necessary Condition
Let $\tuple {2 m + n, m}$ be the generator for the Pythagorean triple $T'$ of the almost isosceles Pythagorean triangle $P'$.

Let $p$ and $q$ be the legs of $P'$.
By Solutions of Pythagorean Equation:

$p = 2 \paren {2 m + n} m$
$q = \paren {2 m + n}^2 - m^2$
Thus:














\(\ds \size {2 \paren {2 m + n} m - \paren {\paren {2 m + n}^2 - m^2} }\)

\(=\)







\(\ds 1\)





Definition of Almost Isosceles Pythagorean Triangle








\(\ds \leadsto \ \ \)





\(\ds \size {4 m^2 + 2 m n - \paren {4 m^2 + 4 m n + n^2 - m^2} }\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \size {\paren {m^2 - n^2} - 2 m n}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \size {a - b}\)

\(=\)







\(\ds 1\)





Solutions of Pythagorean Equation



That is, $P$ is almost isosceles.
$\Box$


Sufficient Condition
Let $P$ be almost isosceles.
Without loss of generality, by Solutions of Pythagorean Equation:

$a = 2 m n$
$b = m^2 - n^2$
Thus:














\(\ds \size {a - b}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \size {\paren {m^2 - n^2} - 2 m n}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \size {4 m^2 + 2 m n - \paren {4 m^2 + 4 m n + n^2 - m^2} }\)

\(=\)







\(\ds 1\)





working the above sequence of equations in reverse








\(\ds \leadsto \ \ \)





\(\ds \size {2 \paren {2 m + n} m - \paren {\paren {2 m + n}^2 - m^2} }\)

\(=\)







\(\ds 1\)





Solutions of Pythagorean Equation



By Solutions of Pythagorean Equation, $2 \paren {2 m + n} m$ and $\paren {2 m + n}^2 - m^2$ are the legs of a Pythagorean triangle $P'$ whose generator is $\paren {2 m + n, m}$.
But from the above, these legs differ by $1$.
Hence, by definition, $P'$ is an almost isosceles Pythagorean triangle $P'$.
$\blacksquare$


Sequence
The sequence of almost isosceles Pythagorean triangles can be tabulated as follows:

$\begin{array} {r r | r r | r r r}
m & n & m^2 & n^2 & 2 m n & m^2 - n^2 & m^2 + n^2 \\
\hline
2 & 1 & 4 & 1 & 4 & 3 & 5 \\
5 & 2 & 25 & 4 & 20 & 21 & 29 \\
12 & 5 & 144 & 25 & 120 & 119 & 169 \\
29 & 12 & 841 & 144 & 696 & 697 & 985 \\
70 & 29 & 4900 & 841 & 4060 & 4059 & 5741 \\
169 & 70 & 28 \, 561 & 4900 & 23 \, 660 & 23 \, 661 & 33 \, 461 \\
\hline
\end{array}$
The sequence of elements of the generators are the Pell numbers:

$1, 2, 5, 12, 29, 70, 169, 408, \ldots$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$




