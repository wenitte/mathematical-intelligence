# 

Source: https://proofwiki.org/wiki/Natural_Number_Functions_are_Uncountable

Theorem
The set of all natural number one-variable functions $\set {f: \N \to \N}$ is uncountably infinite.


Proof
Let $\Bbb F$ be the set of all functions from $\N$ to $\N$.
Clearly $\Bbb F$ is infinite because it contains for each $k \in \N$ the constant function $f_k: \N \to \N: \map {f_k} n = k$ and these are all different and (trivially) countably infinite in number.

Let $\Phi: \N \to \Bbb F$ be a function.
For each $n \in \N$ let $f_n: \N \to \N$ be the function $\map \Phi n$.
Let us define $g: \N \to \N$ by:

$\map g n = \map {f_n} n + 1$
Then $g \in \Bbb F$, but $\forall n \in \N$, $\map g n \ne \map {f_n} n$ and so $g \ne f_n$.
Since $g$ is an element of $\Bbb F$ which is different from all the values taken by $\Phi$, it follows that $\Phi$ is not a surjection and hence not a bijection.
Thus no bijection exists between $\Bbb F$ and $\N$ and so $\Bbb F$ is not equivalent to $\N$.
Thus from Countably Infinite Iff Equivalent to Natural Numbers, $\Bbb F$ is uncountable.
$\blacksquare$





