# 

Source: https://proofwiki.org/wiki/Natural_Numbers_form_Inductive_Set



Theorem
Let $\N$ denote the natural numbers as subset of the real numbers $\R$.

Then $\N$ is an inductive set.


Proof 1
By definition of the natural numbers:

$\N = \ds \bigcap \II$
where $\II$ is the collection of all inductive sets.

Suppose that $n \in \N$.
Then by definition of intersection:

$\forall I \in \II: n \in I$
Because all these $I$ are inductive:

$\forall I \in \II: n + 1 \in I$
Again by definition of intersection:

$n + 1 \in \N$
$\blacksquare$


Proof 2
By the given definition of the natural numbers:

$\N = \bigcap \II$
where $\II$ is the collection of all inductive sets.

The result is a direct application of Intersection of Inductive Set as Subset of Real Numbers is Inductive Set.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers




