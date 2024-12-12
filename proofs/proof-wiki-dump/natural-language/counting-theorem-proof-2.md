# 

Source: https://proofwiki.org/wiki/Counting_Theorem/Proof_2



Theorem
Every well-ordered set is order isomorphic to a unique ordinal.


Proof
Let $A$ be a properly well-ordered class.
Let $\On$ denote the class of all ordinals.
By the Comparability Theorem, either:

$A$ is order isomorphic to a lower section of $\On$
or:

$\On$ is order isomorphic to a lower section of $A$.

Let $A$ be a set.
From Well-Ordering on Set is Proper Well-Ordering, $A$ is a properly well-ordered class.
As $A$ is a set, every lower section of $A$ is a set.
Aiming for a contradiction, suppose $\On$ is order isomorphic to a lower section $L$ of $A$.
Then $\On$ would then be in one-to-one correspondence with that lower section.
Thus there would be a mapping $\phi: L \to \On$.
By the Axiom of Replacement, $\phi \sqbrk L = \On$ is then a set.
But from Class of All Ordinals is Proper Class, $\On$ is a proper class.
From this contradiction it follows that $\On$ cannot be order isomorphic to a lower section $L$ of $A$.
Hence $A$ is order isomorphic to a lower section of $\On$.
From Lower Section of Class of All Ordinals is Ordinal, that means $A$ is order isomorphic to an ordinal.
From Distinct Ordinals are not Order Isomorphic it follows that $A$ is order isomorphic to exactly one such ordinal.
$\blacksquare$


Also presented as
Some sources present the Counting Theorem as the definition of an ordinal as the order type of a well-ordering.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 4$ The counting theorem: Theorem $4.1$ (The counting theorem)




