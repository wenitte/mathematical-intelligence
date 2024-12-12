# 

Source: https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction/Proof/PCI_implies_WOP

Theorem
The Principle of Complete Induction implies the Well-Ordering Principle.

That is:

Principle of Complete Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$\set {0, 1, \ldots, n} \subseteq S \implies n + 1 \in S$
then $S = \N$.
implies:

Well-Ordering Principle: Every nonempty subset of $\N$ has a minimal element.


Proof
To save space, we will refer to:

The Principle of Complete Induction as PCI
The Well-Ordering Principle as WOP.

Let us assume that the PCI is true.
Let $\O \subsetneqq S \subseteq \N$.
We need to show that $S$ has a minimal element, and so demonstrate that the WOP holds.
Aiming for a contradiction, suppose that:

$(C): \quad S$ has no minimal element.

Let $\map P n$ be the propositional function:

$n \notin S$
Suppose $0 \in S$.
We have that $0$ is a lower bound for $\N$.
Hence by Lower Bound for Subset, $0$ is also a lower bound for $S$.
$0 \notin S$, otherwise $0$ would be the minimal element of $S$.
This contradicts our supposition $(C)$, namely, that $S$ does not have a minimal element.
So $0 \notin S$ and so $\map P 0$ holds.

Suppose $\map P j$ for $0 \le j \le k$.
That is:

$\forall j \in \closedint 0 k: j \notin S$
where $\closedint 0 k$ denotes the closed interval between $0$ and $k$.
Now if $k + 1 \in S$ it follows that $k + 1$ would then be the minimal element of $S$.
So then $k + 1 \notin S$ and so $\map P {k + 1}$.
Thus we have proved that:

$(1): \quad \map P 0$ holds
$(2): \quad \paren {\forall j \in \closedint 0 k: \map P j} \implies \map P {k + 1}$
So we see that PCI implies that $\map P n$ holds for all $n \in \N$.
But this means that $S = \O$, which is a contradiction of the fact that $S$ is non-empty.
So, by Proof by Contradiction, $S$ must have a minimal element.
That is, $\N$ satisfies the Well-Ordering Principle.
Thus PCI implies WOP.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers
University of Western Ontario: Mathematics 310a: The Principle of Mathematical Induction and the Well Ordering Principle




