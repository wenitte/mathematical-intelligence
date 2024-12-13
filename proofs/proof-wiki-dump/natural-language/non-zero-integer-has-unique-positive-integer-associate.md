# 

Source: https://proofwiki.org/wiki/Non-Zero_Integer_has_Unique_Positive_Integer_Associate

Theorem
Let $a \in \Z$ be an integer such that $a \ne 0$.
Then $a$ has a unique associate $b \in \Z_{>0}$.


Proof
Let $a \in \Z_{\ne 0}$.
By Integer Divides its Absolute Value:

$a \divides \size a$ and $\size a \divides a$
Hence $\size a$ is an associate of $a$.

Now we prove its uniqueness.
Let $b, c \in \Z_{\ne 0}$ such that $b > 0$ and $c > 0$.
Let $a \sim b$ and $a \sim c$ where $\sim$ denotes the relation of associatehood.

By definition of associatehood:

$a \divides b$ and $b \divides a$
and:

$a \divides c$ and $c \divides a$

From Divisor Relation is Antisymmetric/Corollary/Proof 2:

$a = \pm b$
and

$a = \pm c$

That is:

$\pm b = \pm c$
which means:

$b = c$ or $b = -c$
But as both $b > 0$ and $c > 0$:

$b = c$
Hence the result.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$




