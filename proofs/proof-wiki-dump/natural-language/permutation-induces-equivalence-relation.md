# 

Source: https://proofwiki.org/wiki/Permutation_Induces_Equivalence_Relation



Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi \in S_n$.
Let $\RR_\pi$ be the relation defined by:

$i \mathrel {\RR_\pi} j \iff \exists k \in \Z: \map {\pi^k} i = j$

Then $\RR_\pi$ is an equivalence relation.


Corollary
$i \mathrel {\RR_\pi} j$ if and only if $i$ and $j$ are in the same cycle of $\pi$.


Proof
Let $\pi \in S_n$.
From Element of Finite Group is of Finite Order, every element of a finite group has finite order.
Thus $\pi$ has finite order.
So:

$\exists r \in \Z: \pi^r = e$

Checking in turn each of the criteria for equivalence:


Reflexive
From above:

$\exists r \in \Z: \pi^r = e$
Therefore:

$\exists k \in \Z: \map {\pi^k} i = i$
So $\RR_\pi$ is reflexive.
$\Box$


Symmetric
Let $\map {\pi^k} i = j$.
Because $\pi^r = e$, we have:

$\map {\pi^r} j = j$
(from above).
Thus:

$\map {\pi^{r - k} } j = i$
So $\RR_\pi$ is symmetric.
$\Box$


Transitive
Let $\map {\pi^{s_1} } i = j$ and $\map {\pi^{s_2} } j = k$.
Then:

$\map {\pi^{s_1 + s_2} } i = k$
So $\RR_\pi$ is transitive.
$\Box$

All criteria are met, and so $\RR_\pi$ is an equivalence relation.
$\blacksquare$





