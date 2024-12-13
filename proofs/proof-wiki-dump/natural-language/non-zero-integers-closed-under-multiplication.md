# 

Source: https://proofwiki.org/wiki/Non-Zero_Integers_Closed_under_Multiplication

Theorem
The set of non-zero integers is closed under multiplication.


Proof
Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ as:

$\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.

Integer multiplication is defined as:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {a c + b d, a d + b c} {}$
From Integer Multiplication is Closed, we have that $x, y \in \Z \implies x y \in \Z$.

From Ring of Integers has no Zero Divisors, we have that $x, y \in \Z: x, y \ne 0 \implies x y \ne 0$.
Therefore multiplication on the non-zero integers is closed.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.2$




