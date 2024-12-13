# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Mathematical_Induction/Zero-Based



Theorem
Let $\map P n$ be a propositional function depending on $n \in \N$.
Suppose that:

$(1): \quad \map P 0$ is true
$(2): \quad \forall k \in \N: \map P 0 \land \map P 1 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N$.


Proof
For each $n \in \N$, let $\map {P'} n$ be defined as:

$\map {P'} n := \map P 0 \land \dots \land \map P n$
It suffices to show that $\map {P'} n$ is true for all $n \in \N$.

It is immediate from the assumption $\map P 0$ that $\map {P'} 0$ is true.
Now suppose that $\map {P'} n$ holds.
By $(2)$, this implies that $\map P {n + 1}$ holds as well.
Consequently, $\map {P'} n \land \map P {n + 1} = \map {P'} {n + 1}$ holds.

Thus by the Principle of Mathematical Induction:

$\map {P'} n$ holds for all $n \in \N$
as desired.
$\blacksquare$


Also see
Results about Proofs by Induction can be found here.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $1$




