# 

Source: https://proofwiki.org/wiki/Inner_Limit_in_Hausdorff_Space_by_Set_Closures

Theorem
Let $\struct {\XX, \tau}$ be a Hausdorff space.
Let $\sequence {C_n}_{n \mathop \in \N}$ be a sequence of sets in $\XX$.
Then:

$\ds \liminf_n C_n = \bigcap_{N \mathop \in \NN_\infty^\#} \map \cl {\bigcup_{n \mathop \in N} C_n}$
where:

$\cl$ denotes set closure
$\NN_\infty^\#$ denotes the set of cofinal subsets of $\N$.


Proof
$(1)$: Let:

$\ds x \in \liminf_n \ C_n$
Let:

$\Sigma \in \NN_\infty^\#$

Let $W$ be an open neighborhood of $x$. 
Then there exists $N_0 \in \N$ such that for all $n \ge N_0$ such that $n \in \Sigma$:

$W \cap C_n \ne \O$
Thus:

$\ds x \in \map \cl {\bigcup_{n \mathop \in \Sigma} C_n}$

$(2)$: Let:

$\ds x \notin \liminf_n C_n$
Then there exists an open neighborhood of $x$.
Let $\map \mho x := \set {V \in \tau: x \in V}$ denote the set of open neighborhoods of $x$.
Let $W \in \map \mho x$ such that:

$\Sigma_0 := \set {n \in \N: W \cap C_n = \O}$
is cofinal.
Then:

$\ds x \notin \map \cl {\bigcup_{n \mathop \in \Sigma_0} C_n}$
This completes the proof.
$\blacksquare$


Also see
Inner Limit is Closed Set: a corollary of this theorem
Inner Limit in Hausdorff Space by Open Neighborhoods
Inner Limit of Sequence of Sets in Normed Space




