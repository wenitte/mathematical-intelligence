# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/One-Based/Proof_2

Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: k \ge 1 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
Let $M$ be the set of all $n \in \N_{>0}$ for which $\map P n$ holds.
By $(1)$ we have that $1 \in M$.
By $(2)$ we have that if $k \in M$ then $k + 1 \in M$.
From the Axiomatization of $1$-Based Natural Numbers, Axiom $(\text F)$, it follows that $M = \N_{>0}$.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$: Theorem $2.1$




