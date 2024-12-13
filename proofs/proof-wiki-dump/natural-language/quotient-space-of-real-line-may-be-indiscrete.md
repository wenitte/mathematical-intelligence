# 

Source: https://proofwiki.org/wiki/Quotient_Space_of_Real_Line_may_be_Indiscrete

Theorem
Let $\struct {\R, \tau}$ denote the real number line with the usual (Euclidean) topology.
Let $\Q$ be the rational numbers.
Let $\mathbb I$ be the irrational numbers.
Then $\set {\Q, \mathbb I}$ is a partition of $\R$.
Let $\sim$ be the equivalence relation induced on $\R$ by $\set {\Q, \mathbb I}$.
Let $T_\sim := \struct {\R / {\sim}, \tau_\sim}
$ be the quotient space of $\R$ by $\sim$.

Then $T_\sim$ is an indiscrete space.


Proof
Let $\phi: \R \to \R/{\sim}$ be the quotient mapping.
Then:

$\forall x \in \Q: \map \phi x = \Q$
$\forall x \in \mathbb I: \map \phi x = \mathbb I$

Aiming for a contradiction, suppose $\set {\mathbb I} \in \tau_\sim$.
Then by the definition of the quotient topology:

$\O \subsetneqq \mathbb I = \phi^{-1} \sqbrk {\set {\mathbb I} } \in \tau$
Thus by Rationals are Everywhere Dense in Topological Space of Reals, $\mathbb I$ contains a rational number.
This is a contradiction.

Aiming for a contradiction, suppose $\set \Q \in \tau_\sim$.
Then:

$\O \subsetneqq \Q = \phi^{-1} \sqbrk {\set \Q} \in \tau$
Thus by Irrationals are Everywhere Dense in Topological Space of Reals, $\Q$ contains a irrational number.
This is a contradiction.

As $\R / {\sim}$ has exactly two elements, its only non-empty proper subsets are $\set \Q$ and $\set {\mathbb I}$.
As neither of these sets is $\tau_\sim$-open, $\struct {\R / {\sim}, \tau_\sim}$ is indiscrete.
$\blacksquare$





