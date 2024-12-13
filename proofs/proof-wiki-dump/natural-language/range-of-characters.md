# 

Source: https://proofwiki.org/wiki/Range_of_Characters

Theorem
Let $G$ be a finite abelian group of order $m$.
Let $\chi: G \to \C^\times$ be a character on $G$.
Then for any $g \in G$, $\map \chi g$ is an $m$th root of unity.
If $e$ is the identity of $G$ then $\map \chi g = 1$.


Proof
The claim that $\map \chi e = 1$ is shown by Group Homomorphism Preserves Identity.
Let $g \in G$ be arbitrary.
Let $k$ be the order of $g$.
By Order of Element Divides Order of Finite Group:

$\exists l \in \Z: m = k l$
Therefore:

$g^m = \paren {g^k}^l = e^l = e$
By the homomorphism property:

$1 = \map \chi e = \map \chi {g^m} = \map \chi g^m$
Hence the result.
$\blacksquare$





