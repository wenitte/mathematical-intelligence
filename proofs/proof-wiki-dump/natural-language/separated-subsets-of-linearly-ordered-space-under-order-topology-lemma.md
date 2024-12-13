# 

Source: https://proofwiki.org/wiki/Separated_Subsets_of_Linearly_Ordered_Space_under_Order_Topology/Lemma

Lemma
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.
Let $A$ and $B$ be separated sets of $T$.
Let $A^*$ and $B^*$ be defined as:

$A^* := \ds \bigcup \set {\closedint a b: a, b \in A, \closedint a b \cap B^- = \O}$
$B^* := \ds \bigcup \set {\closedint a b: a, b \in B, \closedint a b \cap A^- = \O}$
where $A^-$ and $B^-$ denote the closure of $A$ and $B$ in $T$.

Then:

$(1): \quad A \subseteq A^*$
$(2): \quad B \subseteq B^*$
$(3): \quad A^* \cap B^* = \O$


Proof
Let $a \in A$.
Then:














\(\ds \closedint a a\)

\(=\)







\(\ds \set a\)














\(\ds \leadsto \ \ \)





\(\ds \closedint a a \cap B^-\)

\(=\)







\(\ds \O\)





Definition of Separated Sets








\(\ds \leadsto \ \ \)





\(\ds \closedint a a\)

\(\subseteq\)







\(\ds A^*\)





Definition of $A^*$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds A^*\)





Definition of $\closedint a a$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds A^*\)





Definition of Subset



Similarly, $B \subseteq B^-$.
$\Box$

Aiming for a contradiction, suppose $A^* \cap B^* \ne \O$.
Then:

$\exists p: p \in A^* \cap B^*$
Hence:

$\exists a, b \in A, c, d \in B: p \in \closedint a b \cap \closedint c d$
But because $A$ and $B$ are separated sets:

$c, d \notin A$
and:

$a, b \notin B$
and so:

$\closedint a b \cap \closedint c d = \O$
Thus $p \notin \closedint a b \cap \closedint c d$
It follows by Proof by Contradiction that $A^* \cap B^* = \O$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $3$




