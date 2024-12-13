# 

Source: https://proofwiki.org/wiki/Preimages_All_Exist_iff_Surjection/Proof_2

Theorem
Let $f: S \to T$ be a mapping.
Let $f^{-1}$ be the inverse of $f$.

Let $\map {f^{-1} } t$ be the preimage of $t \in T$.
Then $\map {f^{-1} } t$ is empty for no $t \in T$ if and only if $f$ is a surjection.


Proof
Suppose that there is no $t \in T$ such that $\map {f^{-1} } t$ is empty.
By Denial of Existence, this is equivalent to saying that for all $t \in T$, $\map {f^{-1} } t$ is not empty.
This is equivalent to the statement that $\map {f^{-1} } t$ contains at least one element for each $t \in T$.
In other words, for each $t \in T$, there exists an $s\in S$ such that $\map f s = t$.
This is the definition of $f$ being surjective.
Thus if there is no $t \in T$ such that $\map {f^{-1} } t$ is empty, then $f$ is surjective.
Since this proof only uses statements of equivalence, it also shows that $f$ being surjective implies that there is no $t \in T$ such that $\map {f^{-1} } t$ is empty.
$\blacksquare$





