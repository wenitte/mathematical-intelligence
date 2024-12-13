# 

Source: https://proofwiki.org/wiki/Integer_Addition_Identity_is_Zero

Theorem
The identity of integer addition is $0$:

$\exists 0 \in \Z: \forall a \in \Z: a + 0 = a = 0 + a$


Proof
Let us define $\eqclass {\tuple {a, b} } \boxtimes$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxtimes$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxtimes$.
$\boxtimes$ is the congruence relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxtimes$, as suggested.

From the method of construction, $\eqclass {c, c} {}$, where $c$ is any element of the natural numbers $\N$, is the isomorphic copy of $0 \in \N$.

So, we need to show that:

$\forall a, b, c \in \N: \eqclass {a, b} {} + \eqclass {c, c} {} = \eqclass {a, b} {} = \eqclass {c, c} {} + \eqclass {a, b} {}$

Thus:














\(\ds \eqclass {a, b} {} + \eqclass {c, c} {}\)

\(=\)







\(\ds \eqclass {a + c, b + c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a, b} {}\)





Construction of Inverse Completion: Members of Equivalence Classes




So:

$\eqclass {a, b} {} + \eqclass {c, c} {} = \eqclass {a, b} {}$

The identity $\eqclass {a, b} {} = \eqclass {c, c} {} + \eqclass {a, b} {}$ is demonstrated similarly.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.24$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 3$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$




