# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_WRT_Filter_Complement_is_Prime_in_Distributive_Lattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: plenty throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Assertions
Let $\struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $F$ be a filter in $L$.
Let $M$ be an ideal in $L$ which is disjoint from $F$ such that:

no ideal in $L$ larger than $M$ is disjoint from $F$.

Then $M$ is a prime ideal.


Proof
Aiming for a contradiction, suppose $M$ is not a prime ideal.
Then by Prime Ideal in Lattice, there are elements $a$ and $b$ of $L$ such that

$a \wedge b \in M$
$a \notin M$
$b \notin M$


Lemma 1
There do not exist $m$ and $n$ in $M$ such that $m \vee a \in F$ and $n \vee b \in F$.
$\Box$

Without loss of generality, we can thus suppose that:

$\forall m \in M: m \vee a \notin F$

Let $N = \set {x \in L: \exists m \in M: x \le m \vee a}$.


Lemma 2
$N$ is an ideal in $L$.
$\Box$


Lemma 3
$M \subsetneq N$
$\Box$


Lemma 4
$N \cap F = \O$
$\Box$

By assuming that $M$ is not a prime ideal, we have constructed an ideal $N$ properly containing $M$ that is disjoint from $F$.
This contradicts the maximality of $M$.
Thus $M$ is a prime ideal.
$\blacksquare$





