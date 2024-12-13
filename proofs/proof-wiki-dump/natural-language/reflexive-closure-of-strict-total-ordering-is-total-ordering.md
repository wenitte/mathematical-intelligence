# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_of_Strict_Total_Ordering_is_Total_Ordering

Theorem
Let $S$ be a set.
Let $\prec$ be a strict total ordering of $S$.
Let $\preceq$ be the reflexive closure of $\prec$.

Then $\preceq$ is an total ordering of $S$.


Theorem
By the definition of strict total ordering, $\prec$ is a strict ordering which connects $S$.
By Reflexive Closure of Strict Ordering is Ordering, $\preceq$ is a ordering.
Since $\prec$ connects $S$, for each $a, b \in S$, either $a = b$, $a \prec b$ or $b \prec a$.
If $a = b$, then $a \preceq b$.
If $a \prec b$, then $a \preceq b$.
If $b \prec a$, then $b \preceq a$.
Thus in all cases either $a \preceq b$ or $b \preceq a$.
Thus $\preceq$ is a total ordering of $S$.
$\blacksquare$





