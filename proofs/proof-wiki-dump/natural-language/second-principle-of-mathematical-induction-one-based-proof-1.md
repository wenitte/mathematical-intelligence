# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Mathematical_Induction/One-Based/Proof_1

Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: \map P 1 \land \map P 2 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
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





