# 

Source: https://proofwiki.org/wiki/Existence_of_Minimal_Uncountable_Well-Ordered_Set/Proof_Using_Choice



Theorem
There exists a minimal uncountable well-ordered set.
That is, there exists an uncountable well-ordered set $\Omega$ with the property that every initial segment in $\Omega$ is countable.


Proof
By the axiom of powers, there exists the power set $\powerset \N$, where $\N$ is the set of natural numbers.
By Power Set of Natural Numbers is not Countable, this set is uncountable.
By Zermelo's Well-Ordering Theorem, $\powerset \N$ can be endowed with a well-ordering.
Denote such an ordering with the symbol $\preccurlyeq$.

Let $\powerset \N_a$ denote the initial segments of $\powerset \N$ determined by $a \in \powerset \N$  
Suppose $\struct {\powerset \N, \preccurlyeq}$ has the property:

$\powerset \N_a$ is countable for every $a \in \powerset \N$
Then set $\Omega = \powerset \N$.
Otherwise, suppose $\struct {\powerset \N, \preccurlyeq}$ does not have the above property.
Consider the subset of $\powerset \N$:

$P \subseteq \set {a \in \powerset \N : \powerset \N_a \text{ is uncountable} }$
Then $P$ has a smallest element, by the definition of a well-ordered set.
Call such an element $a_0$.
That is, $a_0 \in \powerset \N$ is the smallest $a$ such that $\powerset \N_{a_0}$ is uncountable.
Then the initial segment $\powerset \N_{a_0}$ is itself uncountable, by virtue of $a_0$ being in $P$.
Thus every initial segment in $\powerset \N_{a_0}$ is countable, because it is not uncountable.
Then:

$\Omega = \powerset \N_{a_0}$
$\blacksquare$


This article needs proofreading.In particular: math and EnglishIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zermelo's Well-Ordering Theorem.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications $\S \text P.18$




