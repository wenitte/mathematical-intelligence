# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_has_no_Zero_Divisors

Theorem
The integers have no zero divisors:

$\forall x, y, \in \Z: x \times y = 0 \implies x = 0 \lor y = 0$

This can equivalently be expressed:

$\forall x, y, \in \Z: x \ne 0 \land y \ne 0 \implies x \times y \ne 0$


Proof
Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.

From the method of construction, $\eqclass {c, c} {}$, where $c$ is any element of the natural numbers $\N$, is the identity of $\struct {\Z, +}$.
To ease the algebra, we will take $\eqclass {0, 0} {}$ as a canonical instance of this equivalence class.

We need to show that:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {0, 0} {} \implies \eqclass {a, b} {} = \eqclass {0, 0} {} \lor \eqclass {c, d} {} = \eqclass {0, 0} {}$

From Natural Numbers form Commutative Semiring, we can take it for granted that:

addition and multiplication are commutative and associative on the natural numbers $\N$
natural number multiplication is distributive over natural number addition.

So:














\(\ds \eqclass {a, b} {} \times \eqclass {c, d} {}\)

\(=\)







\(\ds \eqclass {0, 0} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {a c + b d, a d + b c} {}\)

\(=\)







\(\ds \eqclass {0, 0} {}\)














\(\ds \leadsto \ \ \)





\(\ds a c + b d + 0\)

\(=\)







\(\ds a d + b c + 0\)














\(\ds \leadsto \ \ \)





\(\ds a c + b d\)

\(=\)







\(\ds a d + b c\)










We have to be careful here, and bear in mind that $a, b, c, d$ are natural numbers, and we have not defined (and, at this stage, will not define) subtraction on such entities.

Without loss of generality, suppose that $\eqclass {c, d} {} \ne \eqclass {0, 0} {}$.
Then $c \ne d$.
Without loss of generality, suppose also that $c > d$.


Work In ProgressIn particular: Ordering in terms of Addition should have a version for $\N$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
From Ordering in terms of Addition, $\exists p \in \N: d + p = c$ where $p > 0$.

Then:














\(\ds a c + b d\)

\(=\)







\(\ds a d + b c\)














\(\ds \leadsto \ \ \)





\(\ds a \paren {d + p} + b d\)

\(=\)







\(\ds a d + b \paren {d + p}\)














\(\ds \leadsto \ \ \)





\(\ds a d + a p + b d\)

\(=\)







\(\ds a d + b d + b p\)














\(\ds \leadsto \ \ \)





\(\ds a p\)

\(=\)







\(\ds b p\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {a, b} {}\)

\(=\)







\(\ds \eqclass {0, 0} {}\)





Construction of Inverse Completion: Equivalence Class of Equal Elements




Similarly for when $c < d$.
Thus:

$\eqclass {c, d} {} \ne \eqclass {0, 0} {} \implies \eqclass {a, b} {} = \eqclass {0, 0} {}$
A similar argument shows that:

$\eqclass {a, b} {} \ne \eqclass {0, 0} {} \implies \eqclass {c, d} {} = \eqclass {0, 0} {}$

The equivalence between the two forms of the statement of this theorem follows from De Morgan's Laws: Conjunction of Negations and the Rule of Transposition.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 6$




