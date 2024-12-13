# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_WRT_Filter_Complement_is_Prime_in_Distributive_Lattice/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: plenty throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Maximal Ideal WRT Filter Complement is Prime in Distributive Lattice
Let $\struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $F$ be a filter in $L$.
Let $M$ be an ideal in $L$ which is disjoint from $F$ such that:

no ideal in $L$ larger than $M$ is disjoint from $F$.

There do not exist $m$ and $n$ in $M$ such that $m \vee a \in F$ and $n \vee b \in F$.


Proof
Aiming for a contradiction, suppose such exist.
Since:

$m \vee \paren {n \vee b} \ge n \vee b$
$n \vee b \in F$
$F$ is a filter
it follows that:

$m \vee \paren {n \vee b} \in F$
Applying associativity yields:

$\paren {m \vee n} \vee b \in F$
By the same argument:

$\paren {m \vee n} \vee a \in F$
By the definition of a filter:

$\paren {\paren {m \vee n} \vee b} \wedge \paren {\paren {n \vee m} \vee a} \in F$
Distributing:

$\paren {m \vee n} \wedge \paren {b \vee a} \in F$
But by assumption:

$b \vee a \in M$
and by the definition of an ideal:

$m \vee n \in M$
so again by the definition of an ideal:

$\paren {m \vee n} \wedge \paren {b \vee a} \in M$
contradicting the supposition that $M$ is disjoint from $F$.
$\blacksquare$





