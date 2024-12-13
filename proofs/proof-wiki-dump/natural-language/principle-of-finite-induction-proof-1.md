# 

Source: https://proofwiki.org/wiki/Principle_of_Finite_Induction/Proof_1

Theorem
Let $n_0 \in \Z$ be given.
Let $\Z_{\ge n_0}$ denote the set:

$\Z_{\ge n_0} = \set {n \in \Z: n \ge n_0}$
Let $S \subseteq \Z_{\ge n_0}$ be a subset of $\Z_{\ge n_0}$.

Suppose that:

$(1): \quad n_0 \in S$
$(2): \quad \forall n \ge n_0: n \in S \implies n + 1 \in S$

Then:

$\forall n \ge n_0: n \in S$

That is:

$S = \Z_{\ge n_0}$


Proof
Let $\Z_{\ge n_0} := \set {n \in \Z: n \ge n_0}$.
Aiming for a contradiction, suppose $S \ne \Z_{\ge n_0}$.
Let $S' = \Z_{\ge n_0} \setminus S$.
Because $S \ne \Z_{\ge n_0}$ and $S \subseteq \Z_{\ge n_0}$, we have that $S' \ne \O$.
By definition, $\Z_{\ge n_0}$ is bounded below by $n_0$.
From Set of Integers Bounded Below by Integer has Smallest Element, $S'$ has a minimal element.
Let $k$ be this minimal element of $S'$.
By $(1)$ we have that:

$n_0 \in S$
and so:

$n_0 \notin S'$
Hence:

$k \ne n_0$
and so:

$k > n_0$
It follows that:

$k - 1 \le n_0$
Because $k$ is the minimal element of $S'$:

$k - 1 \notin S'$
and so:

$k - 1 \in S$
But by $(2)$:

$\paren {k - 1} + 1 = k \in S$
So we have:

$k \in S$
and:

$k \notin S$
Hence by Proof by Contradiction $S = \Z_{\ge n_0}$.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.6$: Mathematical Induction: Theorem $\text{A}.6$




