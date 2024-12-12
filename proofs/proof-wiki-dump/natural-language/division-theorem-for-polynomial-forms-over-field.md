# 

Source: https://proofwiki.org/wiki/Division_Theorem_for_Polynomial_Forms_over_Field



Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental over $F$.
Let $F \sqbrk X$ be the ring of polynomials in $X$ over $F$.
Let $d$ be an element of $F \sqbrk X$ of degree $n \ge 1$.

Then $\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ such that either:

$(1): \quad r = 0_F$
or:

$(2): \quad r \ne 0_F$ and $r$ has degree that is less than $n$.


Proof 1
From the equation $0_F = 0_F \circ d + 0_F$, the theorem is true for the trivial case $f = 0_F$.
So, if there is a counterexample to be found, it will have a degree.

Aiming for a contradiction, suppose there exists at least one counterexample.
By a version of the Well-Ordering Principle, we can assign a number $m$ to the lowest degree possessed by any counterexample.
So, let $f$ denote a counterexample which has that minimum degree $m$.

If $m < n$, the equation $f = 0_F \circ d + f$ would show that $f$ was not a counterexample.
Therefore $m \ge n$.

Suppose $d \divides f$ in $F \sqbrk X$.
Then:

$\exists q \in F \sqbrk X: f = q \circ d + 0_F$
and $f$ would not be a counterexample.
So $d \nmid f$ in $F \sqbrk X$.

So, suppose that:














\(\ds f\)

\(=\)







\(\ds \sum_{k \mathop = 0}^m {a_k \circ X^k}\)




















\(\ds d\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n {b_k \circ X^k}\)




















\(\ds m\)

\(\ge\)







\(\ds n\)










We can create the polynomial $\paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d$ which has the same degree and leading coefficient as $f$.
Thus $f_1 = f - \paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d$ is a polynomial of degree less than $m$.
Since $d \nmid f$, $f_1$ is a non-zero polynomial.

There is no counterexample of degree less than $m$.
Therefore:

$f_1 = q_1 \circ d + r$
for some $q_1, r \in F \sqbrk X$, where either:

$r = 0_F$
or:

$r$ is non-zero with degree strictly less than $n$.
Hence:














\(\ds f\)

\(=\)







\(\ds f_1 + \paren {a_m \circ b_n^{-1} \circ X^{m - n} } \circ d\)




















\(\ds \)

\(=\)







\(\ds \paren {q_1 + a_m \circ b_n^{-1} \circ X^{m - n} } \circ d + r\)









Thus $f$ is not a counterexample.
From this contradiction follows the result.
$\blacksquare$


Proof 2
Suppose $\map \deg f < \map \deg d$.
Then we take $\map q X = 0$ and $\map r X = \map a X$ and the result holds.

Otherwise, $\map \deg f \ge \map \deg d$.
Let:

$\map f X = a_0 + a_1 X + a_2 x^2 + \cdots + a_m X^m$
$\map d X = b_0 + b_1 X + b_2 x^2 + \cdots + b_n X^n$
We can subtract from $f$ a suitable multiple of $d$ so as to eliminate the highest term in $f$:

$\map f X - \map d X \cdot \dfrac {a_m} {b_n} x^{m - n} = \map p X$
where $\map p X$ is some polynomial whose degree is less than that of $f$.
If $\map p X$ still has degree higher than that of $d$, we do the same thing again.
Eventually we reach:

$\map f X - \map d X \cdot \paren {\dfrac {a_m} {b_n} x^{m - n} + \dotsb} = \map r X$
where either $r = 0_F$ or $r$ has degree that is less than $n$.

This approach can be formalised using the Principle of Complete Induction.
$\blacksquare$


Proof 3
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < n$


Basis for the Induction
$\map P 0$ is the statement that $q$ and $r$ exist when $f = 0$.
This is shown trivially to be true by taking $q = r = 0$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < k$

Then we need to show:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ provided that $\map \deg f < k + 1$


Induction Step
This is our induction step:
Let $f$ be such that $\map \deg f = n$.
Let:

$f = a_0 + a_1 \circ x + a_2 \circ x^2 + \cdots + a_n \circ x^n$ where $a_n \ne 0$
Let:

$d = b_0 + b_1 \circ x + b_2 \circ x^2 + \cdots + b_j \circ x^j$ where $b_j \ne 0$
If $n < l$ then take $q = 0, r = f$.
If $n \ge l$, consider:

$c := f - a_n b_j^{-1} x^{n - j} d$
This has been carefully arranged so that the coefficient of $x^n$ in $c$ is zero.
Thus $\map \deg c < n$.
Therefore, by the induction hypothesis:

$c = d q_0 + r$
where $\map \deg r < \map \deg d$.
Therefore:














\(\ds f\)

\(=\)







\(\ds d \paren {q_0 + a_n b_j^{-1} x^{n - j} } + r\)




















\(\ds \)

\(=\)







\(\ds d q + r\)





where $\map \deg r < \map \deg d$ and $q = q_0 + a_n b_j^{-1} x^{n - j}$



Thus the existence of $q$ and $r$ have been established.

As for uniqueness, assume:

$d q + r = d q' + r'$
with $\map \deg r < \map \deg d, \map \deg {r'} < \map \deg d$
Then:

$d \paren {q - q'} = r' - r$
By Degree of Sum of Polynomials:

$\map \deg {r' - r} \le \max \set {\map \deg {r'}, \map \deg r} < \map \deg d$
and by Degree of Product of Polynomials over Integral Domain:

$\map \deg {d \paren {q - q'} } = \map \deg d + \map \deg {q - q'}$
That is:

$\map \deg d < \map \deg d + \map \deg {q - q'}$
and the only way for that to happen is for:

$\map \deg {q - q'} = -\infty$
that is, for $q - q'$ to be the null polynomial.
That is, $q - q' = 0_F$ and by a similar argument $r' - r = 0_F$, demonstrating the uniqueness of $q$ and $r$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall f \in F \sqbrk X: \exists q, r \in F \sqbrk X: f = q \circ d + r$ such that either:
$(1): \quad r = 0_F$
or:
$(2): \quad r \ne 0_F$ and $r$ has degree that is less than $n$.
$\blacksquare$


Also see
Definition:Polynomial Division




