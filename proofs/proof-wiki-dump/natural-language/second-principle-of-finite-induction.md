# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Finite_Induction



Theorem
Let $S \subseteq \Z$ be a subset of the integers.
Let $n_0 \in \Z$ be given.

Suppose that:

$(1): \quad n_0 \in S$
$(2): \quad \forall n \ge n_0: \paren {\forall k: n_0 \le k \le n \implies k \in S} \implies n + 1 \in S$

Then:

$\forall n \ge n_0: n \in S$

The second principle of finite induction is usually stated and demonstrated for $n_0$ being either $0$ or $1$.
This is often dependent upon whether the analysis of the fundamentals of mathematical logic are zero-based or one-based.


Zero-Based
Let $S \subseteq \N$ be a subset of the natural numbers.

Suppose that:

$(1): \quad 0 \in S$
$(2): \quad \forall n \in \N: \paren {\forall k: 0 \le k \le n \implies k \in S} \implies n + 1 \in S$

Then:

$S = \N$


One-Based
Let $S \subseteq \N_{>0}$ be a subset of the $1$-based natural numbers.

Suppose that:

$(1): \quad 1 \in S$
$(2): \quad \forall n \in \N_{>0}: \paren {\forall k: 1 \le k \le n \implies k \in S} \implies n + 1 \in S$

Then:

$S = \N_{>0}$


Proof
Define $T$ as:

$T = \set {n \in \Z : \forall k: n_0 \le k \le n: k \in S}$
Since $n \le n$, it follows that $T \subseteq S$.
Therefore, it will suffice to show that:

$\forall n \ge n_0: n \in T$

Firstly, we have that $n_0 \in T$ if and only if the following condition holds:

$\forall k: n_0 \le k \le n_0 \implies k \in S$
Since $n_0 \in S$, it thus follows that $n_0 \in T$.

Now suppose that $n \in T$; that is:

$\forall k: n_0 \le k \le n \implies k \in S$
By $(2)$, this implies:

$n + 1 \in S$
Thus, we have:

$\forall k: n_0 \le k \le n + 1 \implies k \in S$

This article needs to be linked to other articles.In particular: Closed Interval of Naturally Ordered Semigroup with Successor equals Union with Successor for $\Z$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore, $n + 1 \in T$.

Hence, by the Principle of Finite Induction:

$\forall n \ge n_0: n \in T$
as desired.
$\blacksquare$


Terminology
Basis for the Induction
The step that shows that the integer $n_0$ is an element of $S$ is called the basis for the induction.


Induction Hypothesis
The assumption that $\forall k: n_0 \le k \le n: k \in S$ for some $n \in \Z$ is the induction hypothesis.


Induction Step
The step which shows that $n + 1 \in S$ follows from the assumption that $k \in S$ for all values of $k$ between $n_0$ and $n$ is called the induction step.


Also known as
Some sources refer to the Second Principle of Finite Induction as the Second Principle of Mathematical Induction, and gloss over the differences between the two proof techniques if they discuss them both at all.
Hence the word finite may well not appear in the various published expositions of this technique.

The Second Principle of Finite Induction is also known as the Principle of Complete (Finite) Induction.
Both terms are used on $\mathsf{Pr} \infty \mathsf{fWiki}$.
The abbreviations PCI or PCFI can sometimes be seen.

Some sources call it the Principle of Strong (Finite) Induction.
Such sources may similarly refer to the (First) Principle of Finite Induction as the Principle of Weak (Finite) Induction.
These names are misleading, as both principles are equivalent, and so neither is weaker or stronger than the other.

The process of demonstrating a proof by means of the Second Principle of Finite Induction is often referred to as Proof by Complete (Finite) Induction.


Also see
Principle of Mathematical Induction
Principle of Finite Induction
Second Principle of Mathematical Induction
Equivalence of Well-Ordering Principle and Induction
Results about Proofs by Induction can be found here.


Algorithmic Proof Procedure
The Second Principle of Mathematical Induction can be implemented as an algorithm as follows.
Let $\map P n$ be a propositional function depending on $n \in \N$.
Let it be established that:

$\text{(a)}: \quad \map P 1$ is true
$\text{(b)}: \quad$ If all of $\map P 1, \map P 2, \ldots, \map P k$ are true, then $\map P {k + 1}$ is true.
Then the following algorithm provides a proof of $\map P k$ for all $n \in \N$:


$\mathbf 1:$ Prove $\map P 1$.
Set $k \gets 1$ and prove $\map P 1$ according to $\text{(a)}$.
$\mathbf 2:$ Is $k = n$?.
If $k = n$ then terminate. The required proof has been output.
$\mathbf 3:$ Prove $\map P {k + 1}$.
According to $\text{(b)}$, output a proof that if all of $\map P 1, \map P 2, \ldots, \map P k$ are true, then $\map P {k + 1}$ is true.
$\mathbf 4:$ Increase $k$.
$k \gets k + 1$ and to to step $\mathbf 2$.




