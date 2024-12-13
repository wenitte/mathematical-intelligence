# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_WRT_Filter_Complement_is_Prime_in_Distributive_Lattice/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: plenty throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Maximal Ideal WRT Filter Complement is Prime in Distributive Lattice
Let $\struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $F$ be a filter in $L$.
Let $M$ be an ideal in $L$ which is disjoint from $F$ such that:

no ideal in $L$ larger than $M$ is disjoint from $F$.

Let $N = \set {x \in L: \exists m \in M: x \le m \vee a}$.

$N$ is an ideal in $L$.


Proof
Let:

$x \in N$
$y \in L$
$y \le x$
Then by the definition of $N$ there exists an $m \in M$ such that:

$x \le m \vee a$
Since $y \le x$, it follows that:

$y \le m \vee a$
so $y \in N$.

Let:

$x \in N$
$y \in N$
Then there exist $m_x$ and $m_y$ in $M$ such that:

$x \le m_x \vee a$
$y \le m_y \vee a$
Then:

$x \vee y \le \paren {m_x \vee a} \vee \paren {m_y \vee a} = \paren {m_x \vee m_y} \vee a$
But $m_x \vee m_y \in M$, so:

$x \vee y \in N$
$\blacksquare$





