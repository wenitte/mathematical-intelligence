# 

Source: https://proofwiki.org/wiki/Locally_Compact_Hausdorff_Topological_Vector_Space_has_Finite_Dimension/Lemma



Lemma
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a locally compact topological vector space over $\GF$. 
Let $V$ be a von Neumann-bounded open neighborhood of ${\mathbf 0}_X$ such that:

$\map \cl V$ is compact.
Let $x_1, \ldots, x_m \in X$ be such that:

$\ds \map \cl V \subseteq \bigcup_{j \mathop = 1}^m \paren {x_j + \frac 1 2 V}$
Let:

$Y = \span \set {x_j : 1 \le j \le m}$

Then:

$\ds V \subseteq \bigcap_{n \mathop = 1}^\infty \paren {Y + 2^{-n} V}$


Proof
Since: 

$\ds \map \cl V \subseteq \bigcup_{j \mathop = 1}^m \paren {x_j + \frac 1 2 V}$
we in particular have:

$V \subseteq Y + \frac 1 2 V$
since $x_j \in Y$ for each $1 \le j \le n$.
Since $Y$ is a vector subspace, we have:

$\lambda Y = Y$ for each $\lambda \in \GF$
and:

$Y + Y = Y$
We now aim to prove:

$V \subseteq Y + 2^{-n} V$ for each $n \in \N$.
We do this by induction.
For all $n \in \N$, let $\map P n$ be the proposition:

$V \subseteq Y + 2^{-n} V$


Basis for the Induction
We have already shown:

$V \subseteq Y + \dfrac 1 2 V$
Hence $\map P 1$ is already known to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds V \subseteq Y + 2^{-k} V$

Then we need to show:

$\ds V \subseteq Y + 2^{-\paren {k + 1} } V$


Induction Step
This is our induction step:
We have: 

$\ds V \subseteq Y + \frac 1 2 V$
so that:

$\ds 2^{-k} V \subseteq Y + 2^{-\paren {k + 1} } V$
We then have: 

$\ds V \subseteq Y + 2^{-k} V \subseteq Y + Y + 2^{-\paren {k + 1} } V = Y + 2^{-\paren {k + 1} } V$
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: V \subseteq Y + 2^{-n} V$
Hence from Set Intersection Preserves Subsets, we obtain:

$\ds V \subseteq \bigcap_{n \mathop = 1}^\infty \paren {Y + 2^{-n} V}$
$\blacksquare$





