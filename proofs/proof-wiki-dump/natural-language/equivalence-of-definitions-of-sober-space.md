# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sober_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space.

The following definitions of the concept of Sober Space are equivalent:

Definition 1
Then $T$ is a sober space if and only if:

each closed irreducible subspace of $T$ has a unique generic point.


Definition 2
Then $T$ is a sober space if and only if:

for every meet-irreducible open set $U \ne S$ there exists a unique $x \in S$ such that:
$U = S \setminus \set x^-$
where $\set x^-$ denotes the closure of $\set x$.


Proof
Definition 1 implies Definition 2
Let each closed irreducible subspace of $T$ have a unique generic point.

Let $U \ne S$ be a meet-irreducible open set.

Let $F = S \setminus U$.
From Meet-Irreducible Open Set iff Complement is Closed Irreducible Subspace:

$F$ is closed irreducible subspace
We have by hypothesis:

$\exists ! x \in S : F = \set x^-$
From Relative Complement inverts Subsets of Relative Complement:

$\exists ! x \in S : U = S \setminus \set x^-$
The result follows.
$\Box$

Definition 2 implies Definition 1
Let for every meet-irreducible open set $V \ne S$ there exists a unique $y \in S$ such that:

$V = S \setminus \set y^-$

Let $F$ closed irreducible subspace of $T$.

Let $U = S \setminus F$.
From Meet-Irreducible Open Set iff Complement is Closed Irreducible Subspace:

$U$ is a meet-irreducible open set
We have by hypothesis:

$\exists ! x \in S : U = S \setminus \set x^-$
From Relative Complement inverts Subsets of Relative Complement:

$\exists ! x \in S : F = \set x^-$
The result follows.
$\blacksquare$





