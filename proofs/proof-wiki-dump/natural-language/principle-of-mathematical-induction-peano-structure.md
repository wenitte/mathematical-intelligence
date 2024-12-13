# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Peano_Structure



Theorem
Let $\struct {P, s, 0}$ be a Peano structure.
Let $\map Q n$ be a propositional function depending on $n \in P$.

Suppose that:

$(1): \quad \map Q 0$ is true
$(2): \quad \forall n \in P: \map Q n \implies \map Q {\map s n}$

Then:

$\forall n \in P: \map Q n$


Principle of Finite Induction
Let $\struct {P, s, 0}$ be a Peano structure.
Let $S \subseteq P$.

Suppose that:

$(1): \quad 0 \in S$
$(2): \quad \forall n: n \in S \implies \map s n \in S$

Then:

$S = P$


Proof
Let $A \subseteq P$ be defined by:

$A := \set {n \in P: \map Q n}$
From $(1)$, $0 \in A$.
From $(2)$:

$\forall n \in P: n \in A \implies \map s n \in A$
As this holds for all $n \in P$, it holds a fortiori for all $n \in A$.

Thus the condition:

$n \in A \implies \map s n \in A$
is satisfied.
So by Axiom $(\text P 5)$ of the Peano Axioms:

$A = P$
That is:

$\forall n \in P: \map Q n$
$\blacksquare$


Also defined as
Some treatments of Peano's axioms define the non-successor element (or primal element) to be $1$ and not $0$.
The treatments are similar, but the $1$-based system results in an algebraic structure which has no identity element for addition, and so no zero for multiplication.


Also see
Principle of Finite Induction
Principle of Mathematical Induction
Second Principle of Mathematical Induction for Peano Structure


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers
1964: J. Hunter: Number Theory ... (previous) ... (next): Chapter $\text {I}$: Number Systems and Algebraic Structures: $2$. The positive integers
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 1$: Introduction
For a video presentation of the contents of this page, visit the Khan Academy.




