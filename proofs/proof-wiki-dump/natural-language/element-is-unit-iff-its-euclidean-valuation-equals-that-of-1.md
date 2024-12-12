# 

Source: https://proofwiki.org/wiki/Element_is_Unit_iff_its_Euclidean_Valuation_equals_that_of_1

Theorem
Let $\struct {D, +, \times}$ be a Euclidean domain whose zero is $0$, and unity is $1$.
Let the valuation function of $D$ be $\nu$.

Let $a \in D$.
Then:

$a$ is a unit of $D$ if and only if $\map \nu a = \map \nu 1$


Proof
For $a \in D$ we have that:

$\map \nu 1 \le \map \nu {1 a} = \map \nu a$
by definition of Euclidean valuation.

Let $a$ be a unit of $D$.
Then:

$\exists b \in D: a b = 1$
Then:

$\map \nu a \le \map \nu {a b} = \map \nu 1$
and so:

$\map \nu a = \map \nu 1$
$\Box$

Let $\map \nu a = \map \nu 1$.
We can write this as:

$\map \nu {1 a} = \map \nu 1$
and it follows from Euclidean Valuation of Non-Unit is less than that of Product that $a$ is a unit of $D$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 30$. Unique Factorization: Theorem $58 \ \text{(ii)}$




