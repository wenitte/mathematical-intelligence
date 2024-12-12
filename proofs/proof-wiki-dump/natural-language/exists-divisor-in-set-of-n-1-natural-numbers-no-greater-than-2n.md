# 

Source: https://proofwiki.org/wiki/Exists_Divisor_in_Set_of_n%2B1_Natural_Numbers_no_greater_than_2n

Theorem
Let $S$ be a set of $n + 1$ non-non-zero natural numbers all less than or equal to $2 n$.

Then there exists $a, b \in S$ such that

$a \divides b$
where $\divides$ denotes divisibility.


Proof
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$
From Equivalence Relation on Natural Numbers such that Quotient is Power of Two, $\alpha$ is an equivalence relation.
From Equivalence Class under $\alpha$ Contains $1$ Odd Number, each odd integer between $1$ and $2 n$ is in its own equivalence class.
Each even integer $m$ between $1$ and $2 n$ is equal to an odd integer $p$ strictly less than $m$ multiplied by a power of $2$.
Hence each such $m$ is an element of one of the equivalence classes of one of the $n$ odd integers between $1$ and $2 n$.
Thus each element of $S$ is an element of one of exactly $n$ equivalence classes of $\alpha$.
But there are $n + 1$ elements of $S$.
So by the Pigeonhole Principle, at least $2$ elements of $S$ are in the same equivalence class.
Thus let $a, b \in S: a \mathrel \alpha b$.
From One of Pair of Equivalent Elements is Divisor of the Other, either $a \divides b$ or $b \divides a$.
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $8$




