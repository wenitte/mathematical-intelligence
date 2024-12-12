# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Transitive_Closure_of_Relation_Compatible_with_Operation_is_Compatible

Theorem
Let $(S, \circ)$ be a magma.
Let $R$ be a relation compatible with $\circ$.
Let $T$ be the transitive closure of $R$.

Then $T$ is compatible with $\circ$.

Proof
Let $a, b, c \in S$.
Let $a \mathrel{T} b$.
Then for some $n$, there is a finite sequence $x_0, \dots, x_n$ in $S$ such that:

$x_0 = a$
$x_n = b$
For each $k = 0, \dots, n-1$: $x_k \mathrel{R} x_{k+1}$
Since $R$ is compatible with $\circ$, for each $k = 0, \dots, n-1$:

$c \circ x_k \mathrel{R} c \circ x_{k+1}$
Thus by the definition of transitive closure:

$c \circ a \mathrel{R} c \circ b$
A similar argument shows that:

$a \circ c \mathrel{R} b \circ c$
Thus $T$ is compatible with $\circ$.
$\blacksquare$





