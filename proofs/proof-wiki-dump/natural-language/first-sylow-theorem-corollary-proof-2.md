# 

Source: https://proofwiki.org/wiki/First_Sylow_Theorem/Corollary/Proof_2

Theorem
Let $p$ be a prime number.
Let $G$ be a group.
Let:

$p^n \divides \order G$
where:

$\order G$ denotes the order of $G$
$n$ is a positive integer.

Then $G$ has at least one subgroup of order $p$.


Proof
Let $\order G = m p^n$.
Let $\mathbb S = \set {S \subseteq G: \order S = p^n}$, that is, the set of all of subsets of $G$ which have exactly $p^n$ elements.
Let $N = \order {\mathbb S}$.

Now $N$ is the number of ways $p^n$ elements can be chosen from a set containing $p^n k$ elements.
From Cardinality of Set of Subsets, this is given by:

$N = \dbinom {p^n m} {p^n} = \dfrac {\paren {p^n m} \paren {p^n m - 1} \cdots \paren {p^n m - i} \cdots \paren {p^n m - p^n + 1} } {\paren {p^n} \paren {p^n - 1} \cdots \paren {p^n - i} \cdots \paren 1}$

For $0 < i < p^n$, the highest power of $p$ which divides $m p^n - i$ is the same as that dividing $p^n - i$.


This article, or a section of it, needs explaining.In particular: why the above holdsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus the power of $p$ in the numerator and denominator of $N$ cancel out, except those of $m$.
Thus $m$ and $N$ have the same number of divisors which are power of $p$.

Let $p^r$ be the largest power of $p$ which divides $m$ and $N$.

Now let $G$ act on $\mathbb S$ by the rule:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$
That is, $g * S$ is the left coset of $S$ by $g$.
From Group Action on Sets with k Elements, this is a group action.

If every orbit under $*$ were divisible by $p^{r - 1}$, then $p^{r + 1} \divides N$.


This article, or a section of it, needs explaining.In particular: why the above holdsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
But we have stated that $p^r$ is the largest power of $p$ which divides $N$.
Therefore there is at least one orbit under $*$ which can be represented as:

$\set {S_1, S_2, \ldots, S_k}$
for which $p^{r + 1} \nmid k$.
Let $H = \Stab {S_1}$ denote the stabilizer of $S_1$.
From the Orbit-Stabilizer Theorem, we have that:

$k = \index G H = \dfrac {\order g} {\order H}$
As $p^r \divides m$, we have:

$p^{n + r} \divides p^n m$
But:

$p^n m = \order G = k \order H$
and so:

$p^{n + r} \divides k \order H$

But we also have that:

$p^{r + 1} \nmid k$
which means:

$p^n \divides \order H$
and that:

$p^n \le \order H$

Now because $H = \Stab {S_1}$, we haveL

$H g \subseteq S_1$
for all $g \in \S_1$
Thus:

$\order H = \card {H g} \le \card {S_1} = p^n$
So we have $p^n \le \order H$ and $\order H \le p^n$ which means:

$\order H = p^n$
and so $H$ is the subgroup of $G$ whose existence we were to demonstrate.
$\blacksquare$


Sources
1959: Helmut Wielandt: Ein Beweis für die Existenz der Sylowgruppen (Archiv der Mathematik Vol. 10: pp. 401 – 402)
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 56$. First Sylow Theorem




