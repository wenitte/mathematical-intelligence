# 

Source: https://proofwiki.org/wiki/Infinite_Set_is_Equivalent_to_Proper_Subset/Proof_1

Theorem
A set is infinite if and only if it is equivalent to one of its proper subsets.


Proof
Let $T$ be an infinite set.
By Infinite Set has Countably Infinite Subset, it is possible to construct a countably infinite subset of $T$.
Let $S = \set {a_1, a_2, a_3, \ldots}$ be such a countably infinite subset of $T$.
Create a Partition of $S$ into:

$S_1 = \set {a_1, a_3, a_5, \ldots}, S_2 = \set {a_2, a_4, a_6, \ldots}$
Let a bijection be established between $S$ and $S_1$, by letting $a_n \leftrightarrow a_{2 n - 1}$.
This is extended to a bijection between $S \cup \paren {T \setminus S} = T$ and $S_1 \cup \paren {T \setminus S} = T \setminus S_2$ by assigning each element in $T \setminus S$ to itself.
So a bijection has been demonstrated between $T$ and one of its proper subsets $T \setminus S_2$.
That is, if $T$ is infinite, it is equivalent to one of its proper subsets.

Now, let $T_0 \subsetneq T$ be a proper subset of $T$, and $f: T \to T_0$ be a bijection.
It follows from No Bijection between Finite Set and Proper Subset that $T$ must be infinite.
$\blacksquare$


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.3$: Equivalence of sets: Theorem $4$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.7$




