# 

Source: https://proofwiki.org/wiki/Halting_Problem_is_Not_Algorithmically_Decidable

Theorem
Let $H: \N^2 \to \N$ be the function given by:

$\map H {m, n} = 1$ if $m$ codes a URM program which halts with input $n$
$\map H {m, n} = 0$ otherwise.

Then $H$ is not recursive.


Proof
We perform a proof by Cantor's Diagonal Argument.

Aiming for a contradiction, suppose $H$ is recursive.
Consider the universal URM computable function $\Phi_1: \N^2 \to \N$.
Let $f: \N \to \N$ be the function given by:

$\map f n = \begin{cases}
\map {\Phi_1} {n, n} & : \map H {n, n} = 1 \\
0 & : \text{otherwise}
\end{cases}$
As $H$ is recursive, the relation $\map H {n, n} = 1$ is also recursive.
The universal function is recursive as all URM computable functions are recursive.
Also, $\map {\Phi_1} {n, n}$ is defined when $\map H {n, n} = 1$.
The constant $0$ is (primitive) recursive and always defined.
So $f$ is total, and by Combination of Recursive Functions it is also recursive.
It follows immediately that the function $g: \N \to \N$ given by:

$\map g n = \map f n + 1$
is also recursive.

So by Universal URM Computable Functions there exists some $e \in \N$ such that:

$\forall n: \map g n = \map {\Phi_1} {e, n}$
that is, the URM program coded by $e$ computes $g$.
Hence:

$\map g e = \map {\Phi_1} {e, e}$
But since $e$ codes a URM program which halts with input $e$, we have:

$\map H {e, e} = 1$
and so:

$\map f e = \map {\Phi_1} {e, e}$
Therefore, by definition of $g$, we have:

$\map g e = \map {\Phi_1} {e, e} + 1$
This contradiction arose because we assumed that $H$ is recursive.
Hence the result.
$\blacksquare$





