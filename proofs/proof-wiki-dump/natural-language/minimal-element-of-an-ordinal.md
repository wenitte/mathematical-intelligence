# 

Source: https://proofwiki.org/wiki/Minimal_Element_of_an_Ordinal


It has been suggested that this page or section be merged into Zero is Smallest Ordinal.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
The minimal element of any nonempty ordinal is the empty set.
That is, if $S$ is a nonempty ordinal, $\bigcap S = \O$


Proof
Let $S$ be an ordinal.
Let the minimal element of $S$ be $s_0$.
This exists by dint of an ordinal being a woset.
From Ordering on Ordinal is Subset Relation, $S$ is well-ordered by $\subseteq$.

So, by definition of an ordinal:

$s_0 = \set {s \in S: s \subset s_0}$
But as $s_0$ is minimal, there are no elements of $S$ which are a subset of it.
So:

$\set {s \in S: s \subset s_0} = \O$
Hence the result.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Exercise $1.7.1$




