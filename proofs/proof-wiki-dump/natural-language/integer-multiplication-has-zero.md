# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_has_Zero

Theorem
The set of integers under multiplication $\struct {\Z, \times}$ has a zero element, which is $0$.


Proof
Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.

From the method of construction, $\eqclass {c, c} {}$, where $c$ is any element of the natural numbers $\N$, is the identity of $\struct {\Z, +}$.
To ease the algebra, we will take $\eqclass {0, 0} {}$ as a canonical instance of this equivalence class.

We need to show that:
$\forall a, b, c \in \N: \eqclass {a, b} {} \times \eqclass {0, 0} {} = \eqclass {0, 0} {} = \eqclass {0, 0} {} \times \eqclass {a, b} {}$.

From Natural Numbers form Commutative Semiring, we can take it for granted that addition and multiplication are commutative on the natural numbers $\N$.














\(\ds \eqclass {a, b} {} \times \eqclass {0, 0} {}\)

\(=\)







\(\ds \eqclass {a \times 0 + b \times 0, a \times 0 + b \times 0} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {0, 0} {}\)





Construction of Inverse Completion: Equivalence Class of Equal Elements














\(\ds \)

\(=\)







\(\ds \eqclass {0 \times a + 0 \times b, 0 \times a + 0 \times b} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {0, 0} {} \times \eqclass {a, b} {}\)









$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $3$




