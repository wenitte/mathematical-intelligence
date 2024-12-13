# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction



Theorem
Let $\map P n$ be a propositional function depending on $n \in \Z$.
Let $n_0 \in \Z$ be given.

Suppose that:

$(1): \quad \map P {n_0}$ is true
$(2): \quad \forall k \in \Z: k \ge n_0 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \Z$ such that $n \ge n_0$.

The Principle of Mathematical Induction is usually stated and demonstrated for $n_0$ being either $0$ or $1$.
This is often dependent upon whether the analysis of the fundamentals of mathematical logic are zero-based or one-based.


Zero-Based
Let $\map P n$ be a propositional function depending on $n \in \N$.
Suppose that:

$(1): \quad \map P 0$ is true
$(2): \quad \forall k \in \N: k \ge 0 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N$.


One-Based
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: k \ge 1 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
Let $\Z_{\ge n_0}$ denote the set:

$\Z_{\ge n_0} = \set {n \in \Z: n \ge n_0}$
Let $S$ be the set of integers defined as:

$S = \set {n \in \Z_{\ge n_0}: \map P n}$
That is, the set of all integers for which $n \ge n_0$ and for which $\map P n$ holds.
From Subset of Set with Propositional Function we have that:

$S \subseteq \Z_{\ge n_0}$

From $(1)$ we have that $\map P {n_0}$.
Hence $n_0 \in S$.
Let $k \in S$.
Then $\map P k$ holds.
But by $(2)$, $\map P {k + 1}$ also holds.
This implies $k + 1 \in S$.
So as:

$S \subseteq \Z_{\ge n_0}$
and:

$S$ satisfies $(1)$ and $(2)$
it follows by the Principle of Finite Induction that $S = \Z_{\ge n_0}$.
Hence for all $n \ge n_0$, $\map P n$ holds.
$\blacksquare$


Contexts
The Principle of Mathematical Induction can be introduced in a formal development of abstract algebra or mathematical logic in various contexts, and proved from first principles in each.


Well-Ordered Set
Let $\struct {S, \preceq}$ be a well-ordered set.

Let $T \subseteq S$ be a subset of $S$ such that:

$\forall s \in S: \paren {\forall t \in S: t \prec s \implies t \in T} \implies s \in T$

Then $T = S$.


Well-Ordered Integral Domain
Let $\struct {D, +, \times, \le}$ be a well-ordered integral domain whose zero is $0_D$.
Let the unity of $D$ be $1_D$.

Let $S \subseteq D$ be such that:

$1_D \in S$
$a \in S \implies a + 1_D \in S$

Then:

$D_{> 0_D} \subseteq S$
where $D_{> 0_D}$ denotes all the elements $d \in D$ such that $\map P d$.
That is, $D_{> 0_D}$ is the set of all (strictly) positive elements of $D$.


Naturally Ordered Semigroup
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
Let $T \subseteq S$ such that $0 \in T$ and $n \in T \implies n \circ 1 \in T$.

Then $T = S$.


Peano Structure
Let $\struct {P, s, 0}$ be a Peano structure.
Let $\map Q n$ be a propositional function depending on $n \in P$.

Suppose that:

$(1): \quad \map Q 0$ is true
$(2): \quad \forall n \in P: \map Q n \implies \map Q {\map s n}$

Then:

$\forall n \in P: \map Q n$


Terminology
Basis for the Induction
The step that shows that the proposition $\map P {n_0}$ is true for the first value $n_0$ is called the basis for the induction.


Induction Hypothesis
The assumption made that $\map P k$ is true for some $k \in \Z$ is the induction hypothesis.


Induction Step
The step which shows that $\map P k \implies \map P {k + 1}$ is called the induction step.


Informal Analogy
  
The Principle of Mathematical Induction is often likened to a domino cascade.
A line of dominoes is set up to be balanced on their ends so that if one of the dominoes is knocked over, it knocks over the next one in the line.
When the first domino is knocked over, the entire line topples, one after the other.

It follows that if either:

$(1) \quad$ no domino is knocked over to start with (that is, the basis for the induction does not hold)
or:

$(2) \quad$ the gap between two dominoes is too large for one domino to knocked over the next one (that is, the induction step does not hold)
then the domino cascade does not work and the entire line does not fall (that is, the proposition is not proved for all $\N \ge n_0$).


Warning
It is a common mistake when setting up a proof by induction to forget to check the base case.
This can cause incorrect reasoning.


Also defined as
The Principle of Mathematical Induction can often be found stated more informally, inasmuch as the propositional function $P$ is referred to as "a statement about integers".


Also known as
Some sources refer to the Principle of Mathematical Induction as the First Principle of (Mathematical) Induction, to distinguish it from the Second Principle of Mathematical Induction.
Some call it the induction principle.
The abbreviation PMI is often seen.

Some sources call it the Principle of Weak Induction.
Such sources may similarly refer to the Second Principle of Mathematical Induction as the Principle of Strong Induction.
These names are misleading, as both principles are equivalent, and so neither is weaker or stronger than the other.

The process of demonstrating a proof by means of the Principle of Mathematical Induction is often referred to as Proof by (Mathematical) Induction.


Also see
Principle of Finite Induction
Second Principle of Finite Induction
Second Principle of Mathematical Induction
Equivalence of Well-Ordering Principle and Induction
Results about Proofs by Induction can be found here.


Historical Note
The first European to use the Principle of Mathematical Induction rigorously in a proof appears to have been Francesco Maurolico, in Arithmeticorum Libri Duo ($1575$).
Further improvements were made by Pierre de Fermat, from which be derived his Method of Infinite Descent.
The Principle of Mathematical Induction appeared again in an adequately rigorous manner by Blaise Pascal in his Traité du Triangle Arithmétique ($1655$).
The phrase mathematical induction appears to have been coined by Augustus De Morgan.
Further discussion of the process can also be found in Induction and Analogy in Mathematics by George Pólya ($1954$).


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Method of Induction
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.1$. Arithmetic: Theorem $4$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.17$: Finite Induction and Well-Ordering for Positive Integers: Exercise $1$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.3$ Inductive Proofs
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.4$: Counting and mathematical induction: Definition $2.4.1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mathematical induction
For a video presentation of the contents of this page, visit the Khan Academy.




