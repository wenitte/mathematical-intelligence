# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Closed

Theorem
The set of integers is closed under addition:

$\forall a, b \in \Z: a + b \in \Z$


Proof
Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.

Integer addition is defined as:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} + \eqclass {c, d} {} = \eqclass {a + c, b + d} {}$

We have that:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} \in \Z, \eqclass {c, d} {} \in \Z$
Also:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} + \eqclass {c, d} {} = \eqclass {a + c, b + d} {}$
But:

$a + c \in \N, b + d \in \N$
So:

$\forall a, b, c, d \in \N: \eqclass {a + c, b + d} {} \in \Z$

Therefore integer addition is closed.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 2$. Operations: Example $1$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: The Real Number System: $2$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers




