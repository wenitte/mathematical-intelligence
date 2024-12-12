# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Subset_of_All_Sets/Proof_2

Theorem
The empty set $\O$ is a subset of every set (including itself).
That is:

$\forall S: \O \subseteq S$


Proof
$S \subseteq T$ means:

every element of $S$ is also in $T$
or, equivalently:

every element that is not in $T$ is not in $S$ either.

Thus:














\(\ds \)

\(\)







\(\ds S \subseteq T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x \in S: x \in T\)





Definition of Subset














\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {\exists x \in S: \neg \paren {x \in T} }\)





De Morgan's Laws (Predicate Logic)



which means there is no element in $S$ which is not also in $T$.

There are no elements of $\O$, from the definition of the empty set.
Therefore $\O$ has no elements that are not also in any other set.
Thus, from the above, all elements of $\O$ are all (vacuously) in every other set.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 3$: Unordered Pairs
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.1$: Sets and Subsets




