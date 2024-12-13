# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_WRT_Filter_Complement_is_Prime_in_Distributive_Lattice/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: plenty throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Maximal Ideal WRT Filter Complement is Prime in Distributive Lattice
Let $\struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $F$ be a filter in $L$.
Let $M$ be an ideal in $L$ which is disjoint from $F$ such that:

no ideal in $L$ larger than $M$ is disjoint from $F$.

Let $N = \set {x \in L: \exists m \in M: x \le m \vee a}$.

$M \subsetneq N$


Proof
Let $m \in M$.
Then:

$m \le \paren {m \vee a}$
so $m \in N$.
Thus $M \subseteq N$.
We have:

$a \le \paren {m \vee a}$
so:

$a \in N$
but:

$a \notin M$
Thus:

$M \subsetneq N$
$\blacksquare$





