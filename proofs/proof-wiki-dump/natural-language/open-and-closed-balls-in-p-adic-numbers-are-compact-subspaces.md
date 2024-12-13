# 

Source: https://proofwiki.org/wiki/Open_and_Closed_Balls_in_P-adic_Numbers_are_Compact_Subspaces

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
Let $n \in \Z$.

Then the open ball $\map {B_{p^{-n} } } a$ and closed ball $\map {B^-_{p^{-n}}} a$ are compact.


Corollary
Then the set of $p$-adic integers $\Z_p$ is compact.


Proof
We begin by proving the theorem for the closed ball $\map {B^-_{p^{-n} } } a$.
From Open Ball in P-adic Numbers is Closed Ball then the theorem will be proved.

Let $d$ denote the subspace metric induced on $\map {B^-_{p^{-n}}} a$ by the $p$-adic Metric.

From Open and Closed Balls in P-adic Numbers are Totally Bounded:

the closed ball $\map {B^-_{p^{-n}}} a$ is totally bounded in $d$.
From P-adic Numbers form Completion of Rational Numbers with P-adic Norm:

$\struct {\Q_p, \norm {\,\cdot\,}_p}$ is complete.
From Open and Closed Balls in P-adic Numbers are Clopen in P-adic Metric:

the closed ball $\map {B^-_{p^{-n}}} a$ is closed in the $p$-adic metric.
From Subspace of Complete Metric Space is Closed iff Complete:

the closed ball $\map {B^-_{p^{-n}}} a$ is complete in $d$.
From Complete and Totally Bounded Metric Space is Sequentially Compact:

the closed ball $\map {B^-_{p^{-n}}} a$ is sequentially compact in $d$.
From Sequentially Compact Metric Space is Compact:

the closed ball $\map {B^-_{p^{-n} } } a$ is compact in $d$.

Hence the closed ball $\map {B^-_{p^{-n} } } a$ is a compact subspace in the $p$-adic metric by definition.
The result follows.
$\blacksquare$





