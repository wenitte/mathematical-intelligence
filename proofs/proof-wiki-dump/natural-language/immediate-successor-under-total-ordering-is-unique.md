# 

Source: https://proofwiki.org/wiki/Immediate_Successor_under_Total_Ordering_is_Unique



Theorem
Let $\preceq$ be a total ordering.
Let $b$ be an immediate successor to $a$.
Then $b$ is unique.

That is, if $b$ and $b'$ are both immediate successor to $a$, then $b = b'$.


Proof
Let $b$ and $b'$ both be immediate successors to $a$.
We have that $\preceq$ is a total ordering.
Without loss of generality:

$b \preceq b'$
By virtue of $b'$ being a immediate successor of $a$:

$\neg \exists c \in S: a \prec c \prec b'$
However, since $b$ is also an immediate successor:

$a \prec b$
Hence, it cannot be the case that $b \prec b'$.
Since $b \preceq b'$, it follows that $b = b'$.

Hence the result.
$\blacksquare$


Also see
Immediate Predecessor under Total Ordering is Unique


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.11$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.3$




