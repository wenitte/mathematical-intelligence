# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_Identity_is_One

Theorem
The identity of integer multiplication is $1$:

$\exists 1 \in \Z: \forall a \in \Z: a \times 1 = a = 1 \times a$


Proof
Let us define $\eqclass {\tuple {a, b} } \boxtimes$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxtimes$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxtimes$.
$\boxtimes$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxtimes$, as suggested.

From the method of construction, $\eqclass {c + 1, c} {}$, where $c$ is any element of the natural numbers $\N$, is the isomorphic copy of $1 \in \N$.
To ease the algebra, we will take $\eqclass {1, 0} {}$ as a canonical instance of this equivalence class.

Thus it is to be shown that:

$\forall a, b \in \N: \eqclass {a, b} {} \times \eqclass {1, 0} {} = \eqclass {a, b} {} = \eqclass {1, 0} {} \times \eqclass {a, b} {}$

From Natural Numbers form Commutative Semiring, we take it for granted that:

addition and multiplication are commutative and associative on the natural numbers $\N$
natural number multiplication is distributive over natural number addition.

So:














\(\ds \eqclass {a, b} {} \times \eqclass {1, 0} {}\)

\(=\)







\(\ds \eqclass {1 \times a + 0 \times b, 0 \times a + 1 \times b} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a, b} {}\)





from Construction of Inverse Completion: Members of Equivalence Classes




So:

$\eqclass {a, b} {} \times \eqclass {1, 0} {} = \eqclass {a, b} {}$

The identity $\eqclass {a, b} {} = \eqclass {1, 0} {} \times \eqclass {a, b} {}$ is demonstrated similarly.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.24$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.10$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 3$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$




