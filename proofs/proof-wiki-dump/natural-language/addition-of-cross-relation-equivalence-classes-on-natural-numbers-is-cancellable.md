# 

Source: https://proofwiki.org/wiki/Addition_of_Cross-Relation_Equivalence_Classes_on_Natural_Numbers_is_Cancellable

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.

Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Let $\eqclass {x, y} {}$ denote the equivalence class of $\tuple {x, y}$ under $\boxtimes$.


Work In ProgressIn particular: Introduce the language of the Definition:Quotient Set.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
The operation $\oplus$ on these equivalence classes is cancellable, in the sense that:














\(\ds \eqclass {a, b} {} \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a, b} {} \oplus \eqclass {c_2, d_2} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)









and similarly:














\(\ds \eqclass {c_1, d_1} {} \oplus \eqclass {a, b} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {} \oplus \eqclass {a, b} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)











Proof













\(\ds \eqclass {a, b} {} \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a, b} {} \oplus \eqclass {c_2, d_2} {}\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {b, a} {} \oplus \paren {\eqclass {a, b} {} \oplus \eqclass {c_1, d_1} {} }\)

\(=\)







\(\ds \eqclass {b, a} {} \oplus \paren {\eqclass {a, b} {} \oplus \eqclass {c_2, d_2} {} }\)





adding $\eqclass {b, a} {}$ to both sides








\(\ds \leadsto \ \ \)





\(\ds \paren {\eqclass {b, a} {} \oplus \eqclass {a, b} {} } \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \paren {\eqclass {b, a} {} \oplus \eqclass {a, b} {} } \oplus \eqclass {c_2, d_2} {}\)





Integer Addition is Associative








\(\ds \leadsto \ \ \)





\(\ds \eqclass {a + b, a + b} {} \oplus \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {a + b, a + b} {} \oplus \eqclass {c_2, d_2} {}\)





Definition of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds \eqclass {c_1, d_1} {}\)

\(=\)







\(\ds \eqclass {c_2, d_2} {}\)





Identity for Addition of Cross-Relation Equivalence Classes on Natural Numbers



$\blacksquare$


Work In ProgressIn particular: This progresses the theory for direct implementation of cross-relation on $\N \times \N$. Needs to be linked to the general approach, which is instantiated in the existing analysis of the inverse completion. The latter may be the most general approach.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Corollary $2.25.1$




