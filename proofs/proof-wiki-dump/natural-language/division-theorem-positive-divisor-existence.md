# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Existence



Theorem
For every pair of integers $a, b$ where $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$

In the above equation:

$a$ is the dividend
$b$ is the divisor
$q$ is the quotient
$r$ is the principal remainder, or, more usually, just the remainder.


Proof 1
From Division Theorem: Positive Divisor: Positive Dividend: Existence:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$
That is, the result holds for positive $a$.
$\Box$

It remains to be shown that the statement holds for $a < 0$.

From Division Theorem: Positive Divisor: Positive Dividend:

$\exists \tilde q, \tilde r \in \Z: \size a = \tilde q b + \tilde r, 0 \le \tilde r < b$
where $\size a$ denotes the absolute value of $a$: by definition $\size a \ge 0$.

As $a < 0$ it follows by definition of absolute value that $\size a = -a$.
This gives:














\(\ds a\)

\(=\)







\(\ds -\size a\)




















\(\ds \)

\(=\)







\(\ds -\paren {\tilde q b + \tilde r}\)




















\(\ds \)

\(=\)







\(\ds b \paren {-\tilde q} + \paren {-\tilde r}\)










Let $\tilde r = 0$.
Then:

$q = -\tilde q, r = \tilde r = 0$
which gives:

$a = q b + r, 0 \le r < b$
as required.

Otherwise:

$0 < \tilde r < b \implies 0 < b - \tilde r < b$
which suggests a rearrangement of the expression for $a$ above:














\(\ds a\)

\(=\)







\(\ds b \paren {-\tilde q} + \paren {-\tilde r}\)




















\(\ds \)

\(=\)







\(\ds b \paren {-\tilde q} - b + b - \tilde r\)




















\(\ds \)

\(=\)







\(\ds b \paren {-1 - \tilde q} + \paren {b - \tilde r}\)










Taking:

$q = \paren {-1 - \tilde q}$
and:

$r = \paren {b - \tilde r}$
the required result follows.

Uniqueness of $q$ and $r$ follow from the Uniqueness of $\tilde q$ and $\tilde r$.
$\blacksquare$


Proof 2
Let:

$q = \floor {\dfrac a b}, t = \dfrac a b - \floor {\dfrac a b}$
where $\floor {\, \cdot \,}$ denotes the floor function.
Thus $q \in \Z$ and $t \in \hointr 0 1$.
So:

$\dfrac a b = q + t$
and so:

$(1): \quad a = q b + r$
where $r = t d$.
Since $a, q, b \in \Z$, it follows from $(1)$ that:

$r = a - q b$
and so $r \in \Z$ also.
Since $0 \le t < 1$ and $b > 0$, it follows that:

$0 \le t b < b$
that is:

$0 \le r < b$
$\blacksquare$


Proof 3
Let there exist $q \in Z$ such that $a - b q = 0$.
Then $a = b q$ as required, with $r = 0$.
Otherwise, let $S$ be defined as the set of all positive integers of the form $a - z b$ where $z$ is an integer:

$S = \set {x \in \Z_{\ge 0}: \exists z \in \Z: x = a - z b}$
Setting $z = 0$ it is seen that $a \in S$, so $S \ne \O$.
From Set of Integers Bounded Below by Integer has Smallest Element, $S$ has a smallest element.
Let $r$ be the smallest element of $S$.
Let $r = a - b q$.
As there does not exist $q \in Z$ such that $a - b q = 0$:

$r > 0$
Suppose $r = b$.
Then $a = b \paren {q + 1}$ and it has already been declared that there does not exist such a $q + 1 \in Z$.
Suppose $r > b$.
Then $x = a - b \paren {q + 1} \in S$ such that $x < r$, which contradicts the assumption that $r$ is the smallest element of $S$.
Hence the result.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.1$. Arithmetic: Theorem $2$




