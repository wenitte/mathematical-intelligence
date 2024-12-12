# 

Source: https://proofwiki.org/wiki/Characterization_of_Supremum_Precedes_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$ admit a supremum $a$
Let $b \in S$.

Then:

$a \preceq b$
if and only if:

$\forall t \in T : t \preceq b$


Proof
Necessary Condition
Let $a \preceq b$.
By definition of supremum:

$a$ is an upper bound for $T$
By definition of upper bound:

$\forall t \in T : t \preceq a$
From Ordering Axiom $(2)$: Transitivity:

$\forall t \in T : t \preceq b$
$\Box$


Sufficient Condition
Let:

$\forall t \in T : t \preceq b$
By definition of upper bound:

$b$ is an upper bound for $T$
By definition of supremum:

$a \preceq b$
$\blacksquare$





