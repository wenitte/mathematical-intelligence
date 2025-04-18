# 

Source: https://proofwiki.org/wiki/Principal_Left_Ideal_is_Left_Ideal

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity.
Let $a \in R$.

Let $Ra$ be the principal left ideal of $R$ generated by $a$.

Then $Ra$ is an left ideal of $R$.


Proof
We establish that $Ra$ is an left ideal of $R$, by verifying the conditions of Test for Left Ideal.

$Ra \ne \O$, as $1_R \circ a = a \in Ra$.

Let $x, y \in Ra$.
Then:










\(\ds \exists r, s \in R: \, \)



\(\ds x\)

\(=\)







\(\ds r \circ a, y = s \circ a\)














\(\ds \leadsto \ \ \)





\(\ds x + \paren {-y}\)

\(=\)







\(\ds r \circ a + \paren {-s \circ a}\)





Product with Ring Negative














\(\ds \)

\(=\)







\(\ds \paren {r + \paren {-s} } \circ a\)














\(\ds \leadsto \ \ \)





\(\ds x + \paren {-y}\)

\(\in\)







\(\ds Ra\)










Let $s \in Ra, x \in R$.














\(\ds s\)

\(\in\)







\(\ds Ra, x \in R\)














\(\ds \leadsto \ \ \)

\(\ds \exists r \in R: \, \)



\(\ds s\)

\(=\)







\(\ds r \circ a\)














\(\ds \leadsto \ \ \)





\(\ds x \circ s\)

\(=\)







\(\ds x \circ r \circ a\)




















\(\ds \)

\(\in\)







\(\ds Ra\)










Thus by Test for Left Ideal, $Ra$ is a left ideal of $R$.
$\blacksquare$

Also see
Principal Right Ideal is Right Ideal where it is shown that a principal right ideal is a right ideal




