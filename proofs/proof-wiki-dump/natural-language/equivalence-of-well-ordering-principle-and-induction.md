# 

Source: https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
The Well-Ordering Principle, the Principle of Finite Induction and the Principle of Complete Finite Induction are logically equivalent.
That is:

Principle of Finite Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$n \in S \implies n + 1 \in S$
then $S = \N$.
if and only if:

Principle of Complete Finite Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$\set {0, 1, \ldots, n} \subseteq S \implies n + 1 \in S$
then $S = \N$.
if and only if:

Well-Ordering Principle: Every non-empty subset of $\N$ has a minimal element.


Proof
To save space, we will refer to:

The Well-Ordering Principle as WOP
The Principle of Finite Induction as PFI
The Principle of Complete Finite Induction as PCI.


PFI implies PCI
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
$\Box$


PCI implies WOP
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
$\Box$


WOP implies PFI
We assume the truth of WOP.
Let $S \subseteq \N$ which satisfy:

$(D): \quad 0 \in S$
$(E): \quad n \in S \implies n+1 \in S$.
We want to show that $S = \N$, that is, the PFI is true.

Aiming for a contradiction, suppose that:

$S \ne \N$
Consider $S' = \N \setminus S$, where $\setminus$ denotes set difference.
From Set Difference is Subset, $S' \subseteq \N$.
So from WOP, $S'$ has a minimal element.
A lower bound of $\N$ is $0$.
By Lower Bound for Subset, $0$ is also a lower bound for $S'$.
By hypothesis, $0 \in S$.
From the definition of set difference, $0 \notin S'$.
So this minimal element of $S'$ has the form $k + 1$ where $k \in \N$.
We can consider the von Neumann construction of the natural numbers.
By definition of natural number addition, it is noted that $k + 1 \in \N$ is the immediate successor element of $k \in \N$.
Thus $k \in S$ but $k + 1 \notin S$.
From $(E)$, this contradicts the definition of $S$.
Thus if $S' \ne \O$, it has no minimal element.
This contradicts the Well-Ordering Principle, and so  $S' = \O$.
So $S = N$.
Thus we have proved that WOP implies PFI.
$\Box$


Final assembly
So, we have that:

PFI implies PCI: The Principle of Mathematical Induction implies the Principle of Complete Induction
PCI implies WOP: The Principle of Complete Induction implies the Well-Ordering Principle
WOP implies PFI: The Well-Ordering Principle implies the Principle of Mathematical Induction.
This completes the result.
$\blacksquare$


Sources

This article is complete as far as it goes, but it could do with expansion.In particular: Transcribe the individual results, and transclude then into an "also presented as" section.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.3$: Theorem $2.17$
which demonstrates that PFI implies WOP
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.3$: Theorem $2.18$
which demonstrates that WOP implies PCI
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.17$: Finite Induction and Well-Ordering for Positive Integers: Theorem $17.3$
which demonstrates that PFI and WOP are equivalent
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 10$: The well-ordering principle:
Students familiar with the principle of induction can gain some sense of perspective in these matters by thinking out how the well-ordering principle can be proved from the principle of mathematical induction and vice versa.
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.1$: The integers
University of Western Ontario: Mathematics 310a: The Principle of Mathematical Induction and the Well Ordering Principle




