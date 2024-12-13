# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_of_Rational_Numbers_is_not_Banach_Space



Theorem
Let $\struct {\Q, \size {\, \cdot \,}}$ be the normed vector space of rational numbers.

Then $\struct {\Q, \size {\, \cdot \,}}$ is not a Banach space.


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $\Q$ defined recursively in the following way:

$\ds x_0 = \frac 3 2$
$\ds \forall n \in \N_{> 0} : x_{n \mathop + 1} = \frac {4 + 3 x_n} {3 + 2 x_n}$
We have that:

$\forall n \in \N : x_n \ge 0$
Note that:














\(\ds x_{n \mathop + 1}^2 - 2\)

\(=\)







\(\ds \frac {\paren {4 + 3 x_n}^2 } {\paren {3 + 2 x_n}^2} - 2\)




















\(\ds \)

\(=\)







\(\ds \frac {16 + 24 x_n + 9 x_n^2 - 18 - 24 x_n - 8 x_n^2} {\paren {3 + 2 x_n}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {x_n^2 - 2} {\paren {3 + 2 x_n}^2}\)









Hence:

$\paren {x_n \ge \sqrt 2} \implies \paren {x_{n \mathop + 1} \ge \sqrt 2}$
For $n = 0$ we have $\ds \frac 9 4 \ge 2$, or $\ds \frac 3 2 \ge \sqrt 2$.
Therefore:

$\forall n \in \N : x_n \ge \sqrt 2$
Furthermore:














\(\ds x_n - x_{n \mathop + 1}\)

\(=\)







\(\ds x_n - \frac {4 + 3 x_n} {3 + 2 x_n}\)




















\(\ds \)

\(=\)







\(\ds \frac {3 x_n + 2 x_n^2 - 4 - 3x_n} {3 + 2 x_n}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {x_n^2 - 2} } {3 + 2 x_n}\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









Hence:

$\forall n \in \N : x_n \ge x_{n \mathop + 1}$
By monotone convergence theorem, $\sequence {x_n}_{n \mathop \in \N}$ converges in $\struct {\R, \size {\, \cdot \,}}$.
By Convergent Sequence in Normed Vector Space is Cauchy Sequence, $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy in $\struct {\R, \size {\, \cdot \,}}$.
On the other hand:

$\forall n \in \N : x_n \in \Q$
Thus, $\sequence {x_n}_{n \mathop \in \N}$ is also Cauchy in $\struct {\Q, \size {\, \cdot \,}}$.
Suppose $\sequence {x_n}_{n \mathop \in \N}$ converges to $L \in \Q$.
By combination theorem for sequences:

$\ds L = \frac {4 + 3 L} {3 + 2 L}$
or $L^2 = 2$.
$L$ has to be positive, so $L = \sqrt 2$.
However, $\sqrt 2 \notin \Q$.
Hence, $\sequence {x_n}_{n \mathop \in \N}$ does not converge in $\struct {\Q, \size {\, \cdot \,} }$.
Altogether, we have that $\sequence {x_n}_{n \mathop \in \N} \in \Q$ is a Cauchy sequence which is not convergent in $\struct {\Q, \size {\, \cdot \,} }$.
By definition, $\struct {\Q, \size {\, \cdot \,}}$ is not a Banach space.
$\blacksquare$


Also see
Rational Number Space is not Complete Metric Space


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




