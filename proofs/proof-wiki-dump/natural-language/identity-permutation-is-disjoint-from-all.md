# 

Source: https://proofwiki.org/wiki/Identity_Permutation_is_Disjoint_from_All

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $e \in S_n$ be the identity permutation on $S_n$.

Then $e$ is disjoint from every permutation $\pi$ on $S_n$ (including itself).


Proof
By definition of the identity permutation:

$\forall i \in \N_{>0}: \map e i = i$
Thus $e$ fixes all elements of $S_n$.
Thus each element moved by a permutation $\pi$ is fixed by $e$.
The set of elements moved by $e$ is $\O$, so the converse is true vacuously.
$\blacksquare$





