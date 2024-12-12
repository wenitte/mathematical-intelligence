# 

Source: https://proofwiki.org/wiki/Equivalence_of_Well-Ordering_Principle_and_Induction/Proof/WOP_implies_PFI


It has been suggested that this page or section be merged into Principle of Finite Induction/One-Based.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
The Well-Ordering Principle implies the Principle of Finite Induction.

That is:

Well-Ordering Principle: Every non-empty subset of $\N$ has a minimal element
implies:

Principle of Finite Induction: Given a subset $S \subseteq \N$ of the natural numbers which has these properties:
$0 \in S$
$n \in S \implies n + 1 \in S$
then $S = \N$.


Proof
To save space, we will refer to:

The Well-Ordering Principle as WOP
The Principle of Finite Induction as PFI.

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
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.1$: Chapter $2$: Integers and natural numbers: The integers
University of Western Ontario: Mathematics 310a: The Principle of Mathematical Induction and the Well Ordering Principle




