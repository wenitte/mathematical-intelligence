# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Mathematical_Induction



Theorem
Let $\map P n$ be a propositional function depending on $n \in \Z$.
Let $n_0 \in \Z$ be given.

Suppose that:

$(1): \quad \map P {n_0}$ is true
$(2): \quad \forall k \in \Z: k \ge n_0: \map P {n_0} \land \map P {n_0 + 1} \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \ge n_0$.

This process is called proof by (mathematical) induction.

The Second Principle of Mathematical Induction is usually stated and demonstrated for $n_0$ being either $0$ or $1$.
This is often dependent upon whether the analysis of the fundamentals of mathematical logic are zero-based or one-based.


Zero-Based
Let $\map P n$ be a propositional function depending on $n \in \N$.
Suppose that:

$(1): \quad \map P 0$ is true
$(2): \quad \forall k \in \N: \map P 0 \land \map P 1 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N$.


One-Based
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: \map P 1 \land \map P 2 \land \ldots \land \map P {k - 1} \land \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
For each $n \ge n_0$, let $\map {P'} n$ be defined as:

$\map {P'} n := \map P {n_0} \land \dots \land \map P n$
It suffices to show that $\map {P'} n$ is true for all $n \ge n_0$.

It is immediate from the assumption $\map P {n_0}$ that $\map {P'} {n_0}$ is true.
Now suppose that $\map {P'} n$ holds.
By $(2)$, this implies that $\map P {n + 1}$ holds as well.
Consequently, $\map {P'} n \land \map P {n + 1} = \map {P'} {n + 1}$ holds.

Thus by the Principle of Mathematical Induction:

$\map {P'} n$ holds for all $n \ge n_0$
as desired.
$\blacksquare$


Also defined as
The Second Principle of Mathematical Induction can often be found stated more informally, inasmuch as the propositional function $P$ is referred to as "a statement about integers".


Terminology
Basis for the Induction
The step that shows that the proposition $\map P {n_0}$ is true for the first value $n_0$ is called the basis for the induction.


Induction Hypothesis
The assumption that $\forall j: n_0 \le j \le k: \map P j$ is true for some $k \in \Z$ is the induction hypothesis.


Induction Step
The step which shows that the truth of $\map P {k + 1}$ follows from the assumption of truth of $P$ for all values of $j$ between $n_0$ and $k$ is called the induction step.


Also known as
The Second Principle of Mathematical Induction is also known as the Principle of Complete Induction.
Both terms are used on $\mathsf{Pr} \infty \mathsf{fWiki}$.
The abbreviation PCI is also used.

Some sources call it the Principle of Strong Induction.
Such sources may similarly refer to the (First) Principle of Mathematical Induction as the Principle of Weak Induction.
These names are misleading, as both principles are equivalent, and so neither is weaker or stronger than the other.

Some sources prefer to call it course-of-values induction, but this is possibly idiosyncratic.

The process of demonstrating a proof by means of the Second Principle of Mathematical Induction is often referred to as Proof by Complete Induction.


Also see
Principle of Mathematical Induction
Principle of Finite Induction
Second Principle of Finite Induction
Results about Proofs by Induction can be found here.


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.1$. Arithmetic
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.6$: Mathematical Induction: Theorem $\text{A}.8$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results: Exercise $3.1$




