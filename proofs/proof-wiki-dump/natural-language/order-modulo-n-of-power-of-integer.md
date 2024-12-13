# 

Source: https://proofwiki.org/wiki/Order_Modulo_n_of_Power_of_Integer

Theorem
Let $a$ have multiplicative order $c$ modulo $n$.
Then for any $k \ge 1$, $a^k$ has multiplicative order $\dfrac c {\gcd \set {c, k}}$ modulo $n$.


Corollary
Let $a$ be a primitive root of $n$.
Then:

$a^k$ is also a primitive root of $n$
if and only if:

$k \perp \map \phi n$
where $\phi$ is the Euler phi function.

Furthermore, if $n$ has a primitive root, it has exactly $\map \phi {\map \phi n}$ of them.


Proof
Let $a$ have multiplicative order $c$ modulo $n$.
Consider $a^k$ and let $d = \gcd \set {c, k}$.
Let $c = d c'$ and $k = d k'$ where $\gcd \set {c', k'} = 1$ from Integers Divided by GCD are Coprime.
We want to show that the multiplicative order $a^k$ modulo $n$ is $c'$.

Let the order $a^k$ modulo $n$ be $r$.
Then:














\(\ds \paren {a^k}^{c'}\)

\(=\)







\(\ds \paren {a^{d k'} }^{c/d}\)




















\(\ds \)

\(=\)







\(\ds a^{k' c}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^c}^{k'}\)




















\(\ds \)

\(\equiv\)







\(\ds \paren 1^{k'}\)

\(\ds \pmod n\)


















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod n\)







So, by Integer to Power of Multiple of Order, $c'$ is a multiple of $r$, that is, $r \divides c'$.

On the other hand, $a^{k r} = \paren {a^k}^r \equiv 1 \pmod n$, and so $k r$ is a multiple of $c$.
Substituting for $k$ and $c$, we see that $d k' r$ is a multiple of $d c'$ which shows $c'$ divides $k' r$.
But from Euclid's Lemma (which applies because $\gcd \set {c', k'} = 1$), we have that $c'$ divides $r$, or $c' \divides r$.
So, as $c' \divides r$ and $r \divides c'$, from Divisor Relation on Positive Integers is Partial Ordering, it follows that $c' = r$.
$\blacksquare$





