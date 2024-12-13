# 

Source: https://proofwiki.org/wiki/Metric_Space_is_Paracompact

Theorem
Let $M = \struct {A, d}$ be a metric space.
Then $M$ is a paracompact space.


Proof 1
We have that a Metric Space is Fully Normal.
Then we have that a Fully Normal Space is Paracompact.
$\blacksquare$


Proof 2
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {C_\alpha}$ be an open cover of $M$ indexed by ordinals.
Let $\map {B_r} x$ be the open $r$-ball in $M$ around $x$.
For $n \in \N$, let $D_{\alpha n}$ denote the union of all the open $r$-balls $\map {B_{2^{-n} } } x$ such that:

$(1): \quad \alpha$ is the smallest ordinal such that $x \in C_\alpha$
$(2): \quad x \notin D_{\beta j}$ for $j < n$
$(3): \quad \map {B_{3 \times 2^{-n} } } x \subseteq C_\alpha$

It is to be shown that $\sequence {D_{\alpha n} }$ is a locally finite open refinement of $\sequence {C_\alpha}$ which covers $M$.
By construction, $D_{\alpha n}$ is a refinement of $\sequence {C_\alpha}$.
Let $x \in A$.
Then there exists a smallest ordinal $\alpha$ such that $x \in C_\alpha$.
Then there exists $n$ sufficiently large such that $(3)$ holds.
Then by $(2)$:

$x \in D_{\beta j}$
for some $j \le n$.
Thus $\sequence {D_{\alpha n} }$ covers $M$.

Now assume $x \in A$.
Let $\alpha$ be the smallest ordinal such that $x \in D_{\alpha n}$ for some $n$.
Choose $j \in \N$ such that $\map {B_{2^{-j} } } x \subseteq D_{\alpha n}$.

Let $i \ge n + j$.
As $i > n$, every one of the open balls of radius $2^{-i}$ used to define $D_{\beta i}$ has its center $y$ outside $D_{\alpha n}$
And because $\map {B_{2^{-j} } } x \subseteq D_{\alpha n}$, we have that $\map d {x, y} \ge 2^{-j}$.
But $i \ge j + 1$ and $n + j \ge j + 1$.
So:

$\map {B_{2^{-n - j} } } x \cap \map {B_{2^{-i} } } y = \O$
Thus if $i \ge n$, then $\map {B_{2^{-n - j} } } x$ intersects no $D_{\beta i}$.

Let $i < n+j$.
Let us choose:

$p \in D_{\beta i}$
$q \in D_{\gamma i}$
$\beta < \gamma$
There exist points $y$ and $z$ such that:

$p \in \map {B_{2^{-i} } } y \subseteq D_{\beta i}$
$q \in \map {B_{2^{-i} } } z \subseteq D_{\gamma i}$
By $(3)$:

$\map {B_{3 \times 2^{-i} } } y \subseteq C_\beta$
But by $(1)$:

$z \notin C_\beta$
So:

$\map d {y, z} \ge 3 \times 2^{-i}$
and:

$\map d {p, q} > 2^{-i} \ge 2^{-n - j + 1}$
Thus if $i < n + j$, then $\map {B_{2^{-n - j} } } x$ intersects $D_{\beta i}$ for at most one $\beta$.
Thus $D_{\alpha n}$ is locally finite.

Then $D_{\alpha n}$ is a locally finite open refinement of $\sequence {C_\alpha}$ which covers $M$.
Hence by definition $M$ is paracompact.
$\blacksquare$





