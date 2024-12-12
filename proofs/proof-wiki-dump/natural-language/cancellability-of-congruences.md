# 

Source: https://proofwiki.org/wiki/Cancellability_of_Congruences



Theorem
Let $a, b, c, n \in \Z$ be integers.

Then:

$c a \equiv c b \pmod n \iff a \equiv b \pmod {n / d}$
where $d = \gcd \set {c, n}$.


Corollary 1
Let $c$ and $n$ be coprime integers, that is:

$c \perp n$
Then:

$c a \equiv c b \pmod n \implies a \equiv b \pmod n$


Corollary 2
Let $a, b, c$ be integers.
Let $p$ be a prime number such that $p \nmid c$.

Then:

$c a \equiv c b \pmod p \implies a \equiv b \pmod p$


Proof
Let $c a \equiv c b \pmod n$.
Then we have that $c a - c b = k n$ for some $k \in \Z$ by definition of congruence.
Now $d = \gcd \set {c, n}$, so from Integers Divided by GCD are Coprime we have:

$\exists r, s \in Z: r \perp s: c = d r, n = d s$
So we substitute for $c$ and $n$ in $c a - c b = k n$:

$d r a - d r b = k d s$
which leads us to:

$r \paren {a - b} = k s$
So $s \divides \paren {a - b}$ and as $r \perp s$, from Euclid's Lemma $s \divides \paren {a - b}$.
So $a \equiv b \pmod s$ where $s = \dfrac n d$.

Now suppose $a \equiv b \pmod {n / d}$ where $d = \gcd \set {c, n}$.
Then:

$\exists k \in \Z: a - b = k \dfrac n d$
Hence:

$c a - c b = \dfrac {k c} d n$
As $d = \gcd \set {c, n}$ we have $d \divides c$ and so $\dfrac c d \in \Z$.
So:

$c a \equiv c b \pmod n$
$\blacksquare$





