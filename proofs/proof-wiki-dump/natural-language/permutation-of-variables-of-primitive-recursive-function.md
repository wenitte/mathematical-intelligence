# 

Source: https://proofwiki.org/wiki/Permutation_of_Variables_of_Primitive_Recursive_Function

Theorem
Let $f: \N^k \to \N$ be a primitive recursive function.
Let $\sigma$ be a permutation of $\set {1, 2, \ldots, k}$.

Then the function $h: \N^k \to \N$ defined as:

$\map h {n_1, n_2, \ldots, n_k} = \map f {n_{\map \sigma 1}, n_{\map \sigma 2}, \ldots, n_{\map \sigma k} }$
is also primitive recursive.


Proof
We have that:

$\forall j \in \set {1, 2, \ldots, k}: n_{\map \sigma j} = \pr^k_{\map \sigma j}$.
Thus $h$ is obtained by substitution from $f$ and the projection functions $\pr^k_{\map \sigma j}$.
The result follows.
$\blacksquare$

It follows that if a function $h$ can be obtained from known primitive recursive functions by primitive recursion where a variable other than the last one is taken as the recursion variable, then $h$ is primitive recursive.





