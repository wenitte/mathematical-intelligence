# 

Source: https://proofwiki.org/wiki/Identity_Element_for_Addition_of_Cuts

Theorem
Let $\alpha$ be a cut.
Let $0^*$ be the rational cut associated with the (rational) number $0$:

$0^* = \set {r \in \Q: r < 0}$

Then:

$\alpha + 0^* = \alpha$
where $+$ denotes the operation of addition of cuts.


Proof
Let $r \in \alpha + 0^*$.
$\alpha + 0^*$ is the set of all rational numbers of the form $p + q$ such that $p \in \alpha$, $q \in 0^*$, that is, $q < 0$.
It follows that:

$p + q < p$
and so:

$p + q \in \alpha$
that is:

$r \in \alpha$

Let $r \in \alpha$.
Let $s \in \Q$ be a rational number such that $s > r$ and $s \in \alpha$.
This is possible because $r$ is not the greatest element of $\alpha$ by definition of a cut.
Let $q = r - s$.
Then $q < 0$ and so $q \in 0^*$.
Thus we have:

$r = s + q$
and so:

$r \in \alpha + 0^*$

We have that:

$r \in \alpha \implies r \in \alpha + 0^*$
and:

$r \in \alpha + 0^* \implies r \in \alpha$
and so by definition of set equality:

$\alpha + 0^* = \alpha$
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.14$. Theorem $\text {(c)}$




