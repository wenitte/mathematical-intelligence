# 

Source: https://proofwiki.org/wiki/Condition_for_Rational_Number_to_be_Square_of_Rational_Number



Theorem
Let $m$ and $n$ be (strictly) positive integers which are coprime.
Then:

$\dfrac m n$ is the square of a rational number
if and only if:

both $m$ and $n$ are square numbers.


Proof
Let $m$ and $n$ be (strictly) positive integers which are coprime.


Sufficient Condition
Suppose that $\dfrac m n$ is the square of a rational number.
Then there exists a rational number $r$ such that:

$\dfrac m n = r^2$
By Existence of Canonical Form of Rational Number, we can find $p \in \mathbb Z, q \in \mathbb Z_{>0}, p \perp q$ such that:

$r = \dfrac p q$
Now we have:

$\dfrac m n = \paren {\dfrac p q}^2 = \dfrac {p^2} {q^2}$
By Powers of Coprime Numbers are Coprime, $p^2$ and $q^2$ are coprime.
Hence both $\dfrac m n$ and $\dfrac {p^2} {q^2}$ are in canonical form.
By Canonical Form of Rational Number is Unique, we must have:

$m = p^2, n = q^2$
which shows that both $m, n$ are square numbers.
$\Box$


Necessary Condition
Suppose that both $m$ and $n$ are square numbers.
Then there exists integers $x, y$ such that:

$m = x^2, n = y^2$
Since $n > 0$, we must have $y \ne 0$.
Therefore we can write:

$\dfrac m n = \dfrac {x^2} {y^2} = \paren {\dfrac x y}^2$
By definition, $\dfrac x y$ is a rational number.
Hence we have shown that $\dfrac m n$ is the square of a rational number.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 5$




