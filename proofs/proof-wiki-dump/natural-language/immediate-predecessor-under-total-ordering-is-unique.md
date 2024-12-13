# 

Source: https://proofwiki.org/wiki/Immediate_Predecessor_under_Total_Ordering_is_Unique



Theorem
Let $\preceq$ be a total ordering.
Let $a$ be an immediate predecessor to $b$.
Then $a$ is unique.

That is, if $a$ and $a'$ are both immediate predecessors to $b$, then $a = a'$.


Proof
Let $a$ and $a'$ both be immediate predecessors of $b$.
We have that $\preceq$ is a total ordering.
Without loss of generality, suppose:

$a \preceq a'$
By virtue of $a$ being a immediate predecessor of $b$:

$\neg \exists c \in S: a \prec c \prec b$
However, since $a'$ is also an immediate predecessor:

$a' \prec b$
Hence, it cannot be the case that $a \prec a'$.
Since $a \preceq a'$, it follows that $a = a'$.

Hence the result.
$\blacksquare$


Also see
Immediate Successor under Total Ordering is Unique


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.11$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.3$




