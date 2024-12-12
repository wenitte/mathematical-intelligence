# 

Source: https://proofwiki.org/wiki/Cantor_Set_is_Uncountable/Proof_2

Theorem
The Cantor set $\CC$ is uncountable.


Proof
It follows from Representation of Ternary Expansions that every string of the form $0.nnnnn \ldots$ where $n \in \set {0, 2}$ is an element of $\CC$.
We also have that every string of the form $0.nnnnn \ldots$ where $n \in \set {0, 1}$ is an element of $\closedint 0 1 \subset \R$ expressed in binary notation.
Let $f: \CC \to \closedint 0 1$ be the function defined by:

$\forall x \in \CC: \map f x = \text{ the number obtained by replacing every } 2 \text { in } x \text { with a } 1$
where $x$ is expressed in base $3$ notation.
It is clear from the above that $f$ is a surjection.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $10 \ \text{(vii)}$




