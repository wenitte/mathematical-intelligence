# 

Source: https://proofwiki.org/wiki/Powers_of_Permutation_Element

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi \in S_n$, and let $i \in \N^*_n$.
Let $k \in \Z: k > 0$ be the smallest such that:

$\map {\pi^k} i \in \set {i, \map \pi i, \map {\pi^2} i, \ldots, \map {\pi^{k - 1} } i}$

Then $\map {\pi^k} i = i$.


Proof
Aiming for a contradiction, suppose $\map {\pi^k} i = \map {\pi^r} i$ for some $r > 0$.
Then, since $\pi$ has an inverse, $\map {\pi^{k - r} } i = i$.
This contradicts the definition of $k$, so $r = 0$.
$\blacksquare$





