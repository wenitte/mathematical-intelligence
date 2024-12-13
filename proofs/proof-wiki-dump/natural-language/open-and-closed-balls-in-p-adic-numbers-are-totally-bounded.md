# 

Source: https://proofwiki.org/wiki/Open_and_Closed_Balls_in_P-adic_Numbers_are_Totally_Bounded

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
Let $n \in \Z$.

Then the open ball $\map {B_{p^{-n} } } a$ and closed ball $\map {B^-_{p^{-n} } } a$ are totally bounded subspaces.


Proof
We begin by proving the theorem for the closed ball $\map {B^-_{p^{-n} } } a$.
From Open Ball in P-adic Numbers is Closed Ball then the theorem will be proved.

Let $d$ denote the subspace metric induced by the norm $\norm {\,\cdot\,}_p$ on $\map {B^-_{p^{-n} } } a$.
That is, $d: \map {B^-_{p^{-n} } } a \times \map {B^-_{p^{-n} } } a \to \R_{>0}$ is the metric defined by:

$\forall x, y \in \map {B^-_{p^{-n} } } a: \map d {x, y} = \norm {x - y}_p$

By the definition of totally bounded it needs to be shown that:

for every $\epsilon \in \R_{>0}$ there exist finitely many points $x_0, \dots, x_k \in \map {B^-_{p^{-n} } } a$ such that:
$\ds \inf_{0 \mathop \le i \mathop \le k} \norm {x_i - x}_p \le \epsilon$
for all $x \in \map {B^-_{p^{-n} } } a$.

From Sequence of Powers of Reciprocals is Null Sequence:

$\exists N \in \N: \forall k > N: p^{-k} \le \epsilon$.
Let $m = \max \set {n + 1, N}$.
Then $m > n$.

From Closed Ball is Disjoint Union of Smaller Closed Balls in P-adic Numbers:

$\map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n} } - 1} \map {B^-_{p^{-m} } } {a + i p^n}$

Let $x \in \map {B^-_{p^{-n} } } a$.
Let $k = p^{\paren {m - n} } - 1$.
Then there exists $0 \le j \le k$ such that:

$x \in \map {B^-_{p^{-m} } } {a + j p^n}$
That is:

$\norm {x - a + j p^n}_p \le p^{-m} \le \epsilon$
Hence:

$\ds \inf_{0 \mathop \le i \mathop \le k} \norm {a + i p^n - x}_p \le \norm {x - a + j p^n}_p \le \epsilon$
Since $x \in \map {B^-_{p^{-n} } } a$ was arbitrary, then: 

$\forall x \in \map {B^-_{p^{-n} } } a : \ds \inf_{0 \mathop \le i \mathop \le k} \norm {a + i p^n - x}_p \le \epsilon$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.8$




