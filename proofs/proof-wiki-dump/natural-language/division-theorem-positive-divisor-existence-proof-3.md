# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Existence/Proof_3

Theorem
For every pair of integers $a, b$ where $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
Let there exist $q \in Z$ such that $a - b q = 0$.
Then $a = b q$ as required, with $r = 0$.
Otherwise, let $S$ be defined as the set of all positive integers of the form $a - z b$ where $z$ is an integer:

$S = \set {x \in \Z_{\ge 0}: \exists z \in \Z: x = a - z b}$
Setting $z = 0$ it is seen that $a \in S$, so $S \ne \O$.
From Set of Integers Bounded Below by Integer has Smallest Element, $S$ has a smallest element.
Let $r$ be the smallest element of $S$.
Let $r = a - b q$.
As there does not exist $q \in Z$ such that $a - b q = 0$:

$r > 0$
Suppose $r = b$.
Then $a = b \paren {q + 1}$ and it has already been declared that there does not exist such a $q + 1 \in Z$.
Suppose $r > b$.
Then $x = a - b \paren {q + 1} \in S$ such that $x < r$, which contradicts the assumption that $r$ is the smallest element of $S$.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 10$. Divisibility: Theorem $18$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Exercise $3$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.1$ The Division Algorithm: Theorem $2 \text{-} 1$ (Division Algorithm)
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$




