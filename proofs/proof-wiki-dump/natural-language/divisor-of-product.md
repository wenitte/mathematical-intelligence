# 

Source: https://proofwiki.org/wiki/Divisor_of_Product

Theorem
Let $a, b, c \in \Z$ be integers.
Let the symbol $\divides$ denote the divisibility relation.
Let $a \divides b c$.
Then there exist integers $r, s$ such that:

$a = r s$, where $r \divides b$ and $s \divides c$.


Corollary
Let $a \divides b c$, where $b \perp c$.
Then $\tuple {r, s}$ satisfying:

$a = r s$, where $r \divides b$ and $s \divides c$
is unique up to absolute value with:

$\size r = \gcd \set {a, b}$
$\size s = \gcd \set {a, c}$


Proof
Let $r = \gcd \set {a, b}$.
By Integers Divided by GCD are Coprime:

$\exists s, t \in \Z: a = r s \land b = r t \land \gcd \set {s, t} = 1$
So we have written $a = r s$ where $r$ divides $b$.
We now show that $s$ divides $c$.

Since $a$ divides $b c$ there exists $k$ such that $b c = k a$.
Substituting for $a$ and $b$:

$r t c = k r s$
which gives:

$t c = k s$
So $s$ divides $t c$.
But we have that:

$s \perp t$
Hence by Euclid's Lemma $s \divides c$ as required.
$\blacksquare$





