# 

Source: https://proofwiki.org/wiki/Bounded_Summation_of_Integers_is_Primitive_Recursive

Theorem
Let the function $f : \N^{k + 1} \to \N$ be primitive recursive.
Let the function $g : \N^{k + 1} \to \N$ be defined as:

$\map g {n_1, \dotsc, n_k, z} = \paren {\sum_{y = 0}^{z - 1} \ell_y}_\Z$
where $\map f {n_1, \dotsc, n_k, y}$ codes the integer $\ell_y$.
Then, $g$ is primitive recursive.


Proof
We can equivalently write $g$ as:

$\map g {n_1, \dotsc, n_k, z} = \begin{cases} 0 & : z = 0 \\ \map g {n_1, \dotsc, n_k, z - 1} +_\Z \map f {n_1, \dotsc, n_k, z - 1} & : z > 0 \end{cases}$
which is clearly obtained by primitive recursion from:

Addition of Integers is Primitive Recursive
$\blacksquare$.





