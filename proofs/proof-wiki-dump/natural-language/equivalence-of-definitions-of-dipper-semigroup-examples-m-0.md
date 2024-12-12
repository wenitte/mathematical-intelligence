# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Dipper_Semigroup/Examples/m_%3D_0

Example of Use of Equivalence of Definitions of Dipper Semigroup
Let $n \in \Z$ be integers such that $n > 0$.
Let $\N_{<n}$ denote the initial segment of the natural numbers:

$\N_{<n} := \set {0, 1, \ldots, n - 1}$

Let $+_n$ be the operation on $\N_{<n}$ defined as:

$\forall a, b \in \N_{<n}: a +_n b = a + b - k n$
where $k$ is the largest integer satisfying:

$k n \le a + b$

Let $\RR_n$ be the relation on $\N$ defined as:

$\forall x, y \in \N: x \mathrel {\RR_n} y \iff n \divides \size {x - y}$

Let $\map D n := \N / \RR_n$ be the quotient set of $\N$ induced by $\RR_n$.
Let $\oplus_n$ be the operation induced on $\map D n$ by addition on $\N$.

Then $\struct {\N_{<n}, +_n}$ is isomorphic to  $\struct {\map D n, \oplus_n}$.


Proof
This is an instance of Equivalence of Definitions of Dipper Semigroup where $m = 0$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.6 \ \text {(b)}$




