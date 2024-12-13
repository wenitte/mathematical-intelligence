# 

Source: https://proofwiki.org/wiki/Non-Empty_Subset_of_Initial_Segment_of_Natural_Numbers_has_Greatest_Element



Theorem
Let $n \in \N_{>0}$ be a non-zero natural number.
Let $\N^*_n$ denote the Initial segment $\set {1, 2, \ldots, n}$ of the non-zero natural numbers.

Then every non-empty subset of $\N^*_n$ has a greatest element.


Proof
The proof will proceed by the Principle of Mathematical Induction on $\N_{>0}$.
Let $S$ be the set defined as:

$S := \leftset {n \in \N:}$ Every non-empty subset of $\N^*_n$ has a greatest element$\rightset{}$


Basis for the Induction
We have that:

$\N^*_1 = \set 1$
The only non-empty subset  of $\set 1$ is $\set 1$ itself.
This has a greatest element $1$.

So $1 \in S$.
This is our basis for the induction.


Induction Hypothesis
It is to be shown that, if $k \in S$ where $k \ge 1$, then it follows that $k + 1 \in S$.
This is the induction hypothesis:

Every non-empty subset of $\N^*_k$ has a greatest element.

It is to be demonstrated that it follows that:

Every non-empty subset of $\N^*_{k + 1}$ has a greatest element.


Induction Step
This is our induction step:
Let $T \subseteq \N^*_{k + 1}$.
Either $k + 1 \in T$ or $k + 1 \notin T$.
If $k + 1 \notin T$ then $T \subseteq \N^*_k$.
In that case, then from the induction hypothesis:

$T$ has a greatest element.
If $k + 1 \in T$ then:

$\forall x \in T: x \le k + 1$
and so $k + 1$ is the greatest element of $T$.
So in both cases $T$ has a greatest element and so $k + 1 \in S$.

So $k \in S \implies k + 1 \in S$ and the result follows by the Principle of Mathematical Induction:

$\forall n \in \N$: every non-empty subset of $\N^*_n$ has a greatest element.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers: Exercise $4 \ \text{(a)}$




