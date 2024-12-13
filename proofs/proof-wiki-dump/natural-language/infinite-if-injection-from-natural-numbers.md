# 

Source: https://proofwiki.org/wiki/Infinite_if_Injection_from_Natural_Numbers

Theorem
Let $S$ be a set.
Let there exist an injection $\phi: \N \to S$ from the natural numbers to $S$.

Then $S$ is infinite.


Proof
Aiming for a contradiction, suppose that $S$ is finite.
Let $k \in \N$ be such that there exists a bijection $\psi: S \to \N_k$.
Note that $\N_k \subset \N$ since $k \in \N$, $k \notin \N_k$.

Consider the restriction $\phi \restriction \N_k$ of $\phi$ to $\N_k$.
Then $\phi \restriction \N_k: \N_k \to S$ is an injection by Restriction of Injection is Injection.
From Equivalence of Mappings between Finite Sets of Same Cardinality, it is also a bijection.

Consider $\map \phi k \in S$.
As $\phi \restriction \N_k$ is a surjection, there exists a $j \in \N_k$ such that:

$\map \phi j = \map {\phi \restriction \N_K} j = \map \phi k$
Since $j \ne k$, it follows that $\phi$ cannot be an injection.

So there can be no such $k$.
Hence $S$ is infinite.
$\blacksquare$





