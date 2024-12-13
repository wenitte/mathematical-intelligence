# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Mathematical_Induction/One-Based



Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: \map P 1 \land \map P 2 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof 1
For each $n \in \N_{>0}$, let $\map {P'} n$ be defined as:

$\map {P'} n := \map P 1 \land \dots \land \map P n$
It suffices to show that $\map {P'} n$ is true for all $n \in \N_{>0}$.

It is immediate from the assumption $\map P 1$ that $\map {P'} 1$ is true.
Now suppose that $\map {P'} n$ holds.
By $(2)$, this implies that $\map P {n + 1}$ holds as well.
Consequently, $\map {P'} n \land \map P {n + 1} = \map {P'} {n + 1}$ holds.

Thus by the Principle of Mathematical Induction:

$\map {P'} n$ holds for all $n \in \N_{>0}$
as desired.
$\blacksquare$


Proof 2
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


Also see
Results about Proofs by Induction can be found here.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.2$: Mathematical induction




