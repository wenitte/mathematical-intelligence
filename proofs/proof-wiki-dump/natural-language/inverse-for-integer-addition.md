# 

Source: https://proofwiki.org/wiki/Inverse_for_Integer_Addition

Theorem
Each element $x$ of the set of integers $\Z$ has an inverse element $-x$ under the operation of integer addition:

$\forall x \in \Z: \exists -x \in \Z: x + \paren {-x} = 0 = \paren {-x} + x$


Proof
Let us define $\eqclass {\tuple {a, b} } \boxtimes$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxtimes$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxtimes$.
$\boxtimes$ is the congruence relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxtimes$, as suggested.

From the method of construction, the element $\eqclass {a, a + x} {}$ has an inverse $\eqclass {a + x, a} {}$ where $a$ and $x$ are elements of the natural numbers $\N$.

Thus:














\(\ds \eqclass {a, a + x} {} + \eqclass {a + x, a} {}\)

\(=\)







\(\ds \eqclass {a + a + x, a + x + a} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a, a} {}\)





Construction of Inverse Completion: Members of Equivalence Classes














\(\ds \)

\(=\)







\(\ds \eqclass {a + x + a , a + a + x} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a + x, a} {} + \eqclass {a, a + x} {}\)










So $\eqclass {a, a + x} {}$ has the inverse $\eqclass {a + x, a} {}$.


This article, or a section of it, needs explaining.In particular: Needs more detail explaining the connection to the natural numbers. The Inverse Completion page is okay, but the link to what's going on here is hard to follow.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.25$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 4$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$




