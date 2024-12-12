# 

Source: https://proofwiki.org/wiki/Closure_is_Closed/Power_Set


It has been suggested that this page be renamed.In particular: Equivalence of Definitions of Closed Set under Closure OperatorTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $\cl: \powerset S \to \powerset S$ be a closure operator.
Let $T \subseteq S$.
Then $\map \cl T$ is a closed set with respect to $\cl$.


Proof
By the definition of closure operator, $\cl$ is idempotent.
Therefore $\map \cl {\map \cl T} = \map \cl T$, so $\map \cl T$ is closed.
$\blacksquare$





