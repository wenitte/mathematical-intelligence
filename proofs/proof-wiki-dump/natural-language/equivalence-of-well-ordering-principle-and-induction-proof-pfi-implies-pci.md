# 

Source: https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction/Proof/PFI_implies_PCI

Theorem
The Principle of Finite Induction implies the Principle of Complete Finite Induction.

That is:

Principle of Finite Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$n \in S \implies n + 1 \in S$
then $S = \N$.
implies:

Principle of Complete Finite Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$\set {0, 1, \ldots, n} \subseteq S \implies n + 1 \in S$
then $S = \N$.


Proof
To save space, we will refer to:

The Principle of Finite Induction as PFI
The Principle of Complete Finite Induction as PCI.

Let us assume that the PFI is true.
Let $S \subseteq \N$ which satisfy:

$(A): \quad 0 \in S$
$(B): \quad \set {0, 1, \ldots, n} \subseteq S \implies n + 1 \in S$.
We want to show that $S = \N$, that is, the PCI is true.

Let $P \paren n$ be the propositional function:

$P \paren n \iff \set {0, 1, \ldots, n} \subseteq S$
We define the set $S'$ as:

$S' = \set {n \in \N: P \paren n \text { is true} }$

$P \paren 0$ is true by $(A)$, so $0 \in S'$.
Assume $P \paren k$ is true where $k \ge 0$.
So $k \in S'$, and by hypothesis:

$\set {0, 1, \ldots, k} \subseteq S$
So by $(B)$:

$k + 1 \in S$
Thus:

$\set {0, 1, \ldots, k, k + 1} \subseteq S$.
That last statement means $P \paren {k + 1}$ is true.
This means $k + 1 \in S'$.
Thus we have satisfied the conditions:

$0 \in S'$
$n \in S' \implies n + 1 \in S'$
That is, $S' = \N$, and $P \paren n$ holds for all $n \in \N$.
Hence, by definition:

$S = \N$
So PFI gives that $S = \N$.
Therefore PFI implies PCI.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers
University of Western Ontario: Mathematics 310a: The Principle of Mathematical Induction and the Well Ordering Principle




