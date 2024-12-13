# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Set_forms_Peano_Structure

Theorem
Let $\omega$ be the minimally inductive set.
Let $\cdot^+: \omega \to \omega$ be the mapping assigning to a set its successor set:

$n^+ := n \cup \set n$
Let $\O \in \omega$ be the empty set.

Then $\struct {\omega, \cdot^+, \O}$ is a Peano structure.


Proof
We need to check that all of Peano's axioms hold for $\struct {\omega, \cdot^+, \O}$.

Suppose first that for $m, n \in \omega$, we have $m^+ = n^+$.
Since $n \in n^+$ it follows that $n \in m^+$.
Hence, either $n \in m$ or $n = m$.
Similarly, either $m \in n$ or $m = n$.
Now if $n \ne m$, both $m \in n$ and $n \in m$.
By Element of Minimally Inductive Set is Transitive Set, it follows that $n \subseteq m$.
As $m \in n$, this contradicts Finite Ordinal is not Subset of one of its Elements.
Hence it must be that $n = m$, and Peano's Axiom $\text P 3$: $s$ is injective holds.

Next, since $n \in n^+$ for all $n \in \omega$, it follows that $n^+ \ne \O$.
Hence, Peano's Axiom $\text P 4$: $0 \notin \Img s$ holds as well.

Finally, let $S \subseteq \omega$ satisfy:

$\O \in S$
$\forall n \in S: n^+ \in S$
Then by definition, $S$ is an inductive set.
Therefore, by definition of $\omega$ as the minimally inductive set:

$\omega \subseteq S$
Consequently $S = \omega$ by the definition of set equality.
Thus Peano's Axiom $\text P 5$: Principle of Mathematical Induction is seen to hold.

That is, $\struct {\omega, \cdot^+, \O}$ is a Peano structure.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 12$: The Peano Axioms
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.30$
2009: Steven G. Krantz: Discrete Mathematics Demystified: $\S 5.2$




