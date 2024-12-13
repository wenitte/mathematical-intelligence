# 

Source: https://proofwiki.org/wiki/Infinite_Set_is_Equivalent_to_Proper_Subset/Proof_2

Theorem
A set is infinite if and only if it is equivalent to one of its proper subsets.


Proof
Let $S$ be a set.

Suppose $S$ is finite.
From No Bijection between Finite Set and Proper Subset we have that $S$ can not be equivalent to one of its proper subsets.

Suppose $S$ is infinite.
From Infinite Set has Countably Infinite Subset, we can construct $v: \N \to S$ such that $v$ is an injection.

We now construct the mapping $h: S \to S$ as follows.

$\map h x = \begin {cases}
\map v {n + 1} & : \exists n \in \N: x = \map v n \\
x & : x \notin \Img v
\end {cases}$
It is clear that $h$ is an injection.
But we have that $\map v 0 \notin \Img h$ and so $\Img h \subsetneq S$.
The result follows from Injection to Image is Bijection.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 15$: The Axiom of Choice




