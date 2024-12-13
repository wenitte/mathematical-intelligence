# 

Source: https://proofwiki.org/wiki/Preimage_of_Prime_Ideal_under_Ring_Homomorphism_is_Prime_Ideal/Proof_1

Theorem
Let $A$ and $B$ be commutative rings with unity.
Let $f : A \to B$ be a ring homomorphism.
Let $\mathfrak p \subseteq B$ be a prime ideal.

Then its preimage $\map {f^{-1} } {\mathfrak p}$ is a prime ideal of $A$.


Proof
By Preimage of Ideal under Ring Homomorphism is Ideal, $\map {f^{-1} } {\mathfrak p}$ is a ideal of $A$.
Let $a, b \in A$ with $a b \in \map {f^{-1} } {\mathfrak p}$.
By definitin of preimage, $\map f a \, \map f b = \map f {a b} \in \mathfrak p$.
Because $\mathfrak p$ is prime, $\map f a \in \mathfrak p$ or $\map f b \in \mathfrak p$.
Thus $a \in \map {f^{-1} } {\mathfrak p}$ or $b \in \map {f^{-1} } {\mathfrak p}$.
Thus $\map {f^{-1} } {\mathfrak p}$ is a prime ideal.
$\blacksquare$





