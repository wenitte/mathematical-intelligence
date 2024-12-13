# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined/Proof_1

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.

Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Let $\eqclass {x, y} {}$ denote the equivalence class of $\tuple {x, y}$ under $\boxtimes$.
The operation $\oplus$ on these equivalence classes is well-defined, in the sense that:














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














\(\ds \tuple {a_1 + c_1} + \tuple {b_2 + d_2}\)

\(=\)







\(\ds \tuple {a_1 + b_2} + \tuple {c_1 + d_2}\)





Commutativity and Associativity of $+$














\(\ds \)

\(=\)







\(\ds \tuple {a_2 + b_1} + \tuple {c_2 + d_1}\)





from above: $a_1 + b_2 = a_2 + b_1, c_1 + d_2 = c_2 + d_1$














\(\ds \)

\(=\)







\(\ds \tuple {a_2 + c_2} + \tuple {b_1 + d_1}\)





Commutativity and associativity of $+$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a_1 + c_1, b_1 + d_1}\)

\(\boxtimes\)







\(\ds \tuple {a_2 + c_2, b_2 + d_2}\)





Definition of $\boxtimes$








\(\ds \leadsto \ \ \)





\(\ds \tuple {\tuple {a_1, b_1} \oplus \tuple {c_1, d_1} }\)

\(\boxtimes\)







\(\ds \tuple {\tuple {a_2, b_2} \oplus \tuple {c_2, d_2} }\)





Definition of $\oplus$



$\blacksquare$



Work In ProgressIn particular: This progresses the theory for direct implementation of cross-relation on $\N \times \N$. Needs to be linked to the general approach, which is instantiated in the existing analysis of the inverse completion. The latter may be the most general approach.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.22$




