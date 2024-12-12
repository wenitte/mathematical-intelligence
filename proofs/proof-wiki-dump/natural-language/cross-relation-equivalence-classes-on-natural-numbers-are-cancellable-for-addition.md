# 

Source: https://proofwiki.org/wiki/Cross-Relation_Equivalence_Classes_on_Natural_Numbers_are_Cancellable_for_Addition

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.

Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Let $\eqclass {x, y} {}$ denote the equivalence class of $\tuple {x, y}$ under $\boxtimes$.


Work In ProgressIn particular: Introduce the language of the Definition:Quotient Set.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
The operation $\oplus$ on these equivalence classes is cancellable, in the sense that:














\(\ds \eqclass {a_1, b_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {}\)




















\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {a_1, b_1} {} \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a_2, b_2} {} \oplus \eqclass {c_2, d_2} {}\)











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




Then we have:














\(\ds \paren {a_1 + c_1} + \paren {b_2 + d_2}\)

\(=\)







\(\ds \paren {a_1 + b_2} + \paren {c_1 + d_2}\)





Commutativity and associativity of $+$














\(\ds \)

\(=\)







\(\ds \paren {a_2 + b_1} + \paren {c_2 + d_1}\)





from above: $a_1 + b_2 = a_2 + b_1, c_1 + d_2 = c_2 + d_1$














\(\ds \)

\(=\)







\(\ds \paren {a_2 + c_2} + \paren {b_1 + d_1}\)





Commutativity and associativity of $+$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a_1 + c_1, b_1 + d_1}\)

\(\boxtimes\)







\(\ds \tuple {a_2 + c_2, b_2 + d_2}\)





Definition of $\boxtimes$








\(\ds \leadsto \ \ \)





\(\ds \paren {\tuple {a_1, b_1} \oplus \tuple {c_1, d_1} }\)

\(\boxtimes\)







\(\ds \paren {\tuple {a_2, b_2} \oplus \tuple {c_2, d_2} }\)





Definition of $\oplus$



$\blacksquare$


Work In ProgressIn particular: This progresses the theory for direct implementation of cross-relation on $\N \times \N$. Needs to be linked to the general approach, which is instantiated in the existing analysis of the inverse completion. The latter may be the most general approach.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.22$




