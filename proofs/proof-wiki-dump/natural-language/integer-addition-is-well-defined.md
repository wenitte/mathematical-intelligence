# 

Source: https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined

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












Work In ProgressIn particular: Introduce the language of the Definition:Quotient Set.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Proof 1
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


Proof 2
Consider the formal definition of the integers: $x = \eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.

Consider the mapping $\phi: \N_{>0} \to \Z_{>0}$ defined as:

$\forall u \in \N_{>0}: \map \phi u = u'$
where $u' \in \Z$ be the (strictly) positive integer $\eqclass {b + u, b} {}$.
Let $v' = \eqclass {c + v, c} {}$.
Then:














\(\ds u' + v'\)

\(=\)







\(\ds \eqclass {b + u, b} {} + \eqclass {c + v, c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + c + u + v, b + c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + u + v, b} {}\)




















\(\ds \)

\(=\)







\(\ds \paren {u + v}'\)









$\blacksquare$





