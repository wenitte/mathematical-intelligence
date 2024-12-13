# 

Source: https://proofwiki.org/wiki/Integers_are_not_Densely_Ordered

Theorem
The integers $\Z$ are not densely ordered.
That is:

$\forall n \in \Z: \not \exists m \in \Z: n < m < n + 1$


Proof
By definition of immediate successor element, this is equivalent to the statement:

$\forall n \in \Z: n + 1$ is the immediate successor to $n$
We have that Integers form Ordered Integral Domain.
From One Succeeds Zero in Well-Ordered Integral Domain:

$\not \exists r \in \Z: 0 < r < 1$
From Properties of Ordered Ring:

$a < b \implies n + a < n + b$
Putting $a = 0, b = 1, m = n + r$:

$\not \exists m \in \Z: n + 0 < m < n + 1$
Hence the result.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers




