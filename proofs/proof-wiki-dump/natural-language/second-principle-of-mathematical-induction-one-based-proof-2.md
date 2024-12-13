# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Mathematical_Induction/One-Based/Proof_2

Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: \map P 1 \land \map P 2 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
Let $S \subseteq \N_{>0}$ containing those $n \in \N_{>0}$ for which $\map P n$ does not hold.
Aiming for a contradiction, suppose $S \ne \O$.
Then by the Well-Ordering Principle $S$ contains a minimal element $s$.
We have that $s \ne 1$ because $\map P 1$ is true from $(1)$.
Thus there must exist some $k \in \N_{>0}$ such that $s = k + 1$.
As $k + 1$ is the minimal element of $S$ it follows that all $n$ such that $n < k + 1 = s$ are not in $S$
But this means that $\map P n$ is true for all $n < s$
But by $(2)$ it follows that $\map P s$ is true.
That is, $s \notin S$.
This contradicts our assertion that $s \in S$.
Hence our assumption that $S \ne \O$ is false.
It follows by Proof by Contradiction that $S = \O$.
So $\map P n$ holds for all $n \in \N_{>0}$.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.3$: Theorem $2.18$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 9$. The Principles of Induction: Theorem $15$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers: Theorem $4.2$




