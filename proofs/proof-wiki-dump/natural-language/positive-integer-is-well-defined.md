# 

Source: https://proofwiki.org/wiki/Positive_Integer_is_Well-Defined

Theorem
"Positive" as applied to an integer is well-defined.


Proof
Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.

Thus, what we are trying to prove is:

$\eqclass {a, b} {} = \eqclass {c, d} {} \land b < a \implies d < c$

By definition:

$\eqclass {a, b} {} = \eqclass {c, d} {} \iff a + d = b + c$
So:














\(\ds b\)

\(<\)







\(\ds a\)














\(\ds \leadsto \ \ \)

\(\ds \exists p \in \N: \, \)



\(\ds a\)

\(=\)







\(\ds b + p\)














\(\ds \leadsto \ \ \)





\(\ds b + p + d\)

\(=\)







\(\ds b + c\)














\(\ds \leadsto \ \ \)





\(\ds p + d\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(<\)







\(\ds c\)









$\blacksquare$





