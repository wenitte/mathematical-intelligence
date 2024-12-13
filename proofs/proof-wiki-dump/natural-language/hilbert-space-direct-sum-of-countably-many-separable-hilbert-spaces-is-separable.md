# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Direct_Sum_of_Countably_Many_Separable_Hilbert_Spaces_is_Separable

Theorem
Let $\GF \in \set {\R, \C}$. 
For each $n \in \N$, let $\struct {\HH_n, \innerprod \cdot \cdot_n}$ be a separable Hilbert space over $\GF$. 
Let:

$\ds \HH = \bigoplus_{n \mathop \in \N} \HH_n$
be the direct sum of $\sequence {\HH_n}_{n \mathop \in \N}$. 

Then $\HH$ is separable.


Proof
For each $n \in \N$, let $\sequence {e_k^{(n)} }_{k \mathop \in \N}$ be a countable everywhere dense subset of $\HH_n$.
Let $\SS$ be the set of $f \in \HH$ for which there exists $N \in \N$ such that:

$\map f n = e_{\map k n}^{(n)} \in \HH_n$ for some $\map k n \in \N$ if $n \le N$
$\map f n = {\mathbf 0}_{\HH_n}$ if $n > N$.
To every $f \in \SS$, we can associate a function $\phi_f : \N \to \Z_{\ge 0}$ defined by:

$\map {\phi_f} n = \map k n$ for $n \le N$
$\map {\phi_f} n = 0$ for $n > N$.
From Set of Finitely Supported Functions on Integers is Countable and Subset of Countable Set is Countable, $\set {\phi_f : f \in \SS}$ is countable.
Hence $\SS$ is countable.
From Everywhere Dense Subset of Countable Hilbert Space Direct Sum in terms of Everywhere Dense Subsets of Summands, $\SS$ is everywhere dense in $\HH$.
Hence $\HH$ is separable.
$\blacksquare$





