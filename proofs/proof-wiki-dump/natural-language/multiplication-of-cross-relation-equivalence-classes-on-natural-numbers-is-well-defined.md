# 

Source: https://proofwiki.org/wiki/Multiplication_of_Cross-Relation_Equivalence_Classes_on_Natural_Numbers_is_Well-Defined

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.

Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Let $\eqclass {x, y} {}$ denote the equivalence class of $\tuple {x, y}$ under $\boxtimes$.

Let $\otimes$ be the binary operation defined on these equivalence classes as:

$\forall \eqclass {a, b} {}, \eqclass {c, d} {} \in \N \times \N: \eqclass {a, b} {} \otimes \eqclass {c, d} {} = \eqclass {\tuple {a \cdot c} + \tuple {b \cdot d}, \tuple {a \cdot d} + \tuple {b \cdot c} } {}$
where $a \cdot c$ denotes natural number multiplication between $a$ and $c$.


Work In ProgressIn particular: Introduce the language of the Definition:Quotient Set.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
The operation $\otimes$ on these equivalence classes is well-defined, in the sense that:














\(\ds \eqclass {a_1, b_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {}\)




















\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {a_1, b_1} {} \otimes \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {} \otimes \eqclass {c_2, d_2} {}\)











Proof
Let $\eqclass {a_1, b_1} {}, \eqclass {a_2, b_2} {}, \eqclass {c_1, d_1} {}, \eqclass {c_2, d_2} {}$ be $\boxtimes$-equivalence classes such that $\eqclass {a_1, b_1} {} = \eqclass {a_2, b_2} {}$ and $\eqclass {c_1, d_1} {} = \eqclass {c_2, d_2} {}$.

Then:














\(\ds \eqclass {a_1, b_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {}\)





Definition of Operation Induced by Direct Product












\(\, \ds \land \, \)

\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)





Definition of Operation Induced by Direct Product








\(\ds \leadstoandfrom \ \ \)





\(\ds a_1 + b_2\)

\(=\)







\(\ds a_2 + b_1\)





Definition of Cross-Relation












\(\, \ds \land \, \)

\(\ds c_1 + d_2\)

\(=\)







\(\ds c_2 + d_1\)





Definition of Cross-Relation




Both $+$ and $\times$ are commutative and associative on $\N$. Thus:














\(\ds \paren {a_1 \cdot c_1 + b_1 \cdot d_1 + a_2 \cdot d_2 + b_2 \cdot c_2}\)

\(+\)







\(\ds \paren {a_2 \cdot c_1 + b_2 \cdot c_1 + a_2 \cdot d_1 + b_2 \cdot d_1}\)


















\(\, \ds = \, \)

\(\ds \paren {a_1 + b_2} \cdot c_1 + \paren {b_1 + a_2} \cdot d_1\)

\(+\)







\(\ds a_2 \cdot \paren {c_1 + d_2} + b_2 \cdot \paren {d_1 + c_2}\)


















\(\, \ds = \, \)

\(\ds \paren {b_1 + a_2} \cdot c_1 + \paren {a_1 + b_2} \cdot d_1\)

\(+\)







\(\ds a_2 \cdot \paren {d_1 + c_2} + b_2 \cdot \paren {c_1 + d_2}\)





as $a_1 + b_2 = b_1 + a_2, c_1 + d_2 = d_1 + c_2$












\(\, \ds = \, \)

\(\ds b_1 \cdot c_1 + a_2 \cdot c_1 + a_1 \cdot b_2 + a_1 \cdot d_1\)

\(+\)







\(\ds a_2 \cdot d_1 + a_2 \cdot c_2 + b_2 \cdot c_1 + b_2 \cdot d_2\)


















\(\, \ds = \, \)

\(\ds \paren {a_1 \cdot d_1 + b_1 \cdot c_1 + a_2 \cdot c_2 + b_2 \cdot d_2}\)

\(+\)







\(\ds \paren {a_2 \cdot c_1 + b_2 \cdot c_1 + a_2 \cdot d_1 + b_2 \cdot d_1}\)










So we have $a_1 \cdot c_1 + b_1 \cdot d_1 + a_2 \cdot d_2 + b_2 \cdot c_2 = a_1 \cdot d_1 + b_1 \cdot c_1 + a_2 \cdot c_2 + b_2 \cdot d_2$ and so, by the definition of $\boxtimes$, we have:


This article, or a section of it, needs explaining.In particular: The above uses cancellability of natural numbers under addition, which has been glossed over so far and needs to be made explicit.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\eqclass {a_1 \cdot c_1 + b_1 \cdot d_1, a_1 \cdot d_1 + b_1 \cdot c_1} {} = \eqclass {a_2 \cdot c_2 + b_2 \cdot d_2, a_2 \cdot d_2 + b_2 \cdot c_2} {}$

So, by the definition of integer multiplication, this leads to:

$\eqclass {a_1, b_1} {} \otimes \eqclass {c_1, d_1} {} = \eqclass {a_2, b_2} {} \otimes \eqclass {c_2, d_2} {}$

Thus integer multiplication has been shown to be well-defined.
$\blacksquare$


Work In ProgressIn particular: This progresses the theory for direct implementation of cross-relation on $\N \times \N$. Needs to be linked to the general approach, which is instantiated in the existing analysis of the inverse completion. The latter may be the most general approach.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.22$




