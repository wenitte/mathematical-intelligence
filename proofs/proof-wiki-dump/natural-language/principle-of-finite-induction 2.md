# 

Source: https://proofwiki.org/wiki/Principle_of_Finite_Induction



Theorem
Let $n_0 \in \Z$ be given.
Let $\Z_{\ge n_0}$ denote the set:

$\Z_{\ge n_0} = \set {n \in \Z: n \ge n_0}$
Let $S \subseteq \Z_{\ge n_0}$ be a subset of $\Z_{\ge n_0}$.

Suppose that:

$(1): \quad n_0 \in S$
$(2): \quad \forall n \ge n_0: n \in S \implies n + 1 \in S$

Then:

$\forall n \ge n_0: n \in S$

That is:

$S = \Z_{\ge n_0}$

The principle of finite induction is usually stated and demonstrated for $n_0$ being either $0$ or $1$.
This is often dependent upon whether the analysis of the fundamentals of mathematical logic are zero-based or one-based.


Zero-Based
Let $S \subseteq \N$ be a subset of the natural numbers.

Suppose that:

$(1): \quad 0 \in S$
$(2): \quad \forall n \in \N : n \in S \implies n + 1 \in S$

Then:

$S = \N$


One-Based
Let $S \subseteq \N_{>0}$ be a subset of the $1$-based natural numbers.

Suppose that:

$(1): \quad 1 \in S$
$(2): \quad \forall n \in \N_{>0} : n \in S \implies n + 1 \in S$

Then:

$S = \N_{>0}$


Proof 1
Let $\Z_{\ge n_0} := \set {n \in \Z: n \ge n_0}$.
Aiming for a contradiction, suppose $S \ne \Z_{\ge n_0}$.
Let $S' = \Z_{\ge n_0} \setminus S$.
Because $S \ne \Z_{\ge n_0}$ and $S \subseteq \Z_{\ge n_0}$, we have that $S' \ne \O$.
By definition, $\Z_{\ge n_0}$ is bounded below by $n_0$.
From Set of Integers Bounded Below by Integer has Smallest Element, $S'$ has a minimal element.
Let $k$ be this minimal element of $S'$.
By $(1)$ we have that:

$n_0 \in S$
and so:

$n_0 \notin S'$
Hence:

$k \ne n_0$
and so:

$k > n_0$
It follows that:

$k - 1 \le n_0$
Because $k$ is the minimal element of $S'$:

$k - 1 \notin S'$
and so:

$k - 1 \in S$
But by $(2)$:

$\paren {k - 1} + 1 = k \in S$
So we have:

$k \in S$
and:

$k \notin S$
Hence by Proof by Contradiction $S = \Z_{\ge n_0}$.
$\blacksquare$


Proof 2

The validity of the material on this page is questionable.In particular: This only takes on board a subset of $\N$, where we need a subset of $\Z$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Consider $\N$ defined as a naturally ordered semigroup.
The result follows directly from Principle of Mathematical Induction for Naturally Ordered Semigroup: General Result.
$\blacksquare$


Contexts
The Principle of Finite Induction can be introduced in a formal development of abstract algebra or mathematical logic in various contexts, and proved from first principles in each.


Peano Structure
Let $\struct {P, s, 0}$ be a Peano structure.
Let $S \subseteq P$.

Suppose that:

$(1): \quad 0 \in S$
$(2): \quad \forall n: n \in S \implies \map s n \in S$

Then:

$S = P$


Terminology
Basis for the Induction
The step that shows that the integer $n_0$ is an element of $S$ is called the basis for the induction.


Induction Hypothesis
The assumption made that $n \in S$ for some $n \in \Z$ is the induction hypothesis.


Induction Step
The step which shows that $n \in S \implies n + 1 \in S$ is called the induction step.


Also known as
Some sources refer to the Principle of Finite Induction as the Principle of Mathematical Induction, and gloss over the differences between the two proof techniques if they discuss them both at all.
Some sources refer to it as just the Principle of Induction.
Hence the word finite may well not appear in the various published expositions of this technique.

Some sources refer to the Principle of Finite Induction as the First Principle of (Finite) Induction, to distinguish it from the Second Principle of Finite Induction.
Some call it the induction principle.
The abbreviation PFI is often seen.

Some sources call it the Principle of Weak (Finite) Induction.
Such sources may similarly refer to the Second Principle of Finite Induction as the Principle of Strong (Finite) Induction.
These names are misleading, as both principles are equivalent, and so neither is weaker or stronger than the other.

The process of demonstrating a proof by means of the Principle of Finite Induction is often referred to as Proof by (Finite) Induction.


Also see
Principle of Mathematical Induction
Second Principle of Finite Induction
Second Principle of Mathematical Induction


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Induction
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Exercise $5.1$




