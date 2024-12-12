# 

Source: https://proofwiki.org/wiki/Basic_Primitive_Recursive_Functions_are_Arithmetically_Definable



Theorem
Let $f: \N^k \to \N$ be a basic primitive recursive function.
Then there is a WFF $\map \phi {y, x_1, \dotsc, x_k}$ of $k + 1$ free variables and no quantifiers such that:

$y = \map f {x_1, \dotsc, x_k}$
if and only if

$\N \models \map \phi {y \gets \sqbrk y, x_1 \gets \sqbrk {x_1}, \dotsc, x_k \gets \sqbrk {x_k} }$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.


Proof
Zero Function
Suppose $\map f x = 0$.
Then:

$\map \phi {y, x} := y = 0$
Correctness is apparent.
$\Box$


Successor Function
Suppose $\map f x = \map s x$.
Then:

$\map \phi {y, x} := y = \map s x$
Correctness is apparent.
$\Box$


Projection Function
Let $j, k \in \N$.
Suppose $\map f {x_1, \dotsc, x_k} = x_j$.
Then:

$\map \phi {y, x_1, \dotsc, x_k} := y = x_j$
Correctness is apparent.
$\blacksquare$





