# 

Source: https://proofwiki.org/wiki/Axiom_of_Pairing_from_Axiom_of_Specification

Theorem
Let it be supposed that there exists a set which contains at least two elements.
Then the Axiom of Pairing is a consequence of the Axiom of Specification.


Proof
Let $A$ be a set which contains at least two elements.
Let $a$ and $b$ be any two elements of $A$.
Let $\map P x$ be the propositional function:

$\map P x := \paren {x = a \lor x = b}$
Then we may use the Axiom of Specification to define $B$ as:

$x \in B \iff \set {x \in A: \map P x}$
Hence we can define:

$B := \set {a, b}$
for any two $a, b \in A$.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 3$: Unordered Pairs




