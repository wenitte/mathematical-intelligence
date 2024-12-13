# 

Source: https://proofwiki.org/wiki/Intersection_of_Congruence_Classes



Theorem
Let $\RR_m$ denote congruence modulo $m$ on the set of integers $\Z$.

Then:

$\RR_m \cap \RR_n = \RR_{\lcm \set {m, n} }$
where $\lcm \set {m, n}$ is the lowest common multiple of $m$ and $n$.

In the language of modulo arithmetic, this is equivalent to:

$a \equiv b \pmod m, a \equiv b \pmod n \implies a \equiv b \pmod {\lcm \set {m, n} }$


Corollary
If $m \perp n$ then $\RR_m \cap \RR_n = \RR_{m n}$.


Proof
Let $\tuple {a, b} \in \RR_m \cap \RR_n$.
That is, let $\tuple {a, b} \in \RR_m$ and $\tuple {a, b} \in \RR_n$.

That means, by definition of congruence:

$a \equiv b \pmod m$
$a \equiv b \pmod n$
Thus by definition of congruence:

$\exists r, s \in \Z: a - b = r m, a - b = s n$

Let $d = \gcd \set {m, n}$ so that $m = d m', n = d n', m' \perp n'$.
Substituting for $m$ and $n$:

$r d m' = s d n'$ and so $r m' = s n'$.
So $n' \divides r m'$ and $m' \perp n'$ so by Euclid's Lemma $n' \divides r$.
So we can put $r = k n'$ and get:

$a - b = r m = k m n' = k m \dfrac n d = k \dfrac {m n} d$
But:

$\dfrac {m n} d = \dfrac {m n} {\gcd \set {m, n} }$
So by Product of GCD and LCM:

$a - b = k \lcm \set {m, n}$
So:

$a \equiv b \pmod {\lcm \set {m, n} }$
and hence the result.
$\blacksquare$


Examples
Intersection of $\eqclass 1 3$ with $\eqclass {-1} 4$
$\eqclass 1 3 \cap \eqclass {-1} 4 = \eqclass 7 {12}$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 18 \beta$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \delta$




