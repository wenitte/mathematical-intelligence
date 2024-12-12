# 

Source: https://proofwiki.org/wiki/Formula_and_its_Negation_Cannot_Both_Cause_Forking

Theorem
Let $T$ be a complete $\LL$-theory.
Let $\mathfrak C$ be a monster model for $T$.
Let $A \subseteq B$ be subsets of the universe of $\mathfrak C$.
Let $\map \pi {\bar x}$ be an $n$-type over $B$.

If $\pi$ does not fork over $A$, then for any formula $\map \phi {\bar x, \bar b}$, either $\pi \cup \set \phi$ or $\pi \cup \set {\neg \phi}$ does not fork over $A$.


Proof
We prove the contrapositive.

Suppose both $\pi \cup \set \phi$ and $\pi \cup \set {\neg \phi}$ fork over $A$.

By definition of forking:

$\pi \cup \set \phi$ implies $\map {\phi_1} {\bar x, \bar c_1} \vee \cdots \vee \map {\phi_k} {\bar x, \bar c_k}$ and
$\pi \cup \set {\neg \phi}$ implies $\map {\psi_1} {\bar x, \bar d_1} \vee \cdots \vee \map {\psi_k} {\bar x, \bar d_h}$,
where each $\phi_i$ and $\psi_j$ divide over $A$.

Then $\pi$ implies the disjunction

$\ds \bigvee_i \map \phi {\bar x, \bar c_i} \vee \bigvee_j \map \psi {\bar x, \bar d_i}$
with each component formula dividing over $A$.

By definition, this means that $\pi$ forks over $A$.

$\blacksquare$





