# 

Source: https://proofwiki.org/wiki/Exponent_Combination_Laws/Product_of_Powers/Proof_2/Lemma

Theorem
Let $x_1, x_2, y_1, y_2 \in \R_{>0}$ be strictly positive real numbers.
Let $\epsilon \in \openint 0 {\min \set {y_1, y_2, 1} }$.

Then:

$\size {x_1 - y_1} < \epsilon \land \size {x_2 - y_2} < \epsilon \implies \size {x_1 x_2 - y_1 y_2} < \epsilon \paren {y_1 + y_2 + 1}$


Proof
First:














\(\ds \epsilon\)

\(<\)







\(\ds \min \set {y_1, y_2, 1}\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon\)

\(<\)







\(\ds y_1\)





Definition of Min Operation








\(\ds \leadsto \ \ \)





\(\ds \epsilon - \epsilon\)

\(<\)







\(\ds y_1 - \epsilon\)





subtracting $\epsilon$ from both sides




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds y_1 - \epsilon\)










The same logic, mutatis mutandis, shows that $0 < y_2 - \epsilon$.

From Negative of Absolute Value: Corollary 3:














\(\ds \size {x_1 - y_1} < \epsilon\)

\(\implies\)







\(\ds y_1 - \epsilon < x_1 < y_1 - \epsilon\)




















\(\ds \size {x_2 - y_2} < \epsilon\)

\(\implies\)







\(\ds y_2 - \epsilon < x_2 < y_2 - \epsilon\)










Hence:














\(\ds \paren {y_1 - \epsilon} \paren {y_2 - \epsilon}\)

\(<\)

\(\, \ds x_1 x_2 \, \)

\(\, \ds < \, \)



\(\ds \paren {y_1 + \epsilon} \paren {y_1 + \epsilon}\)





Inequality of Product of Unequal Numbers: from $(1)$








\(\ds \leadsto \ \ \)





\(\ds y_1 y_2 - \epsilon \paren {y_1 + y_2} + \epsilon^2\)

\(<\)

\(\, \ds x_1 x_2 \, \)

\(\, \ds < \, \)



\(\ds y_1 y_2 + \epsilon \paren {y_1 + y_2} + \epsilon^2\)





Distributive Property








\(\ds \leadsto \ \ \)





\(\ds y_1 y_2 - \epsilon \paren {y_1 + y_2} - \epsilon^2\)

\(<\)

\(\, \ds x_1 x_2 \, \)

\(\, \ds < \, \)



\(\ds y_1 y_2 + \epsilon \paren {y_1 + y_2} + \epsilon^2\)





Square of Non-Zero Real Number is Strictly Positive




Subtracting $y_1 y_2$ from all sections of the inequality:

$-\epsilon \paren {y_1 + y_2} - \epsilon^2 < x_1 x_2 - y_1 y_2 < \epsilon \paren {y_1 + y_2} + \epsilon^2$

If follows that:














\(\ds \size {x_1 x_2 - y_1 y_2}\)

\(<\)







\(\ds \epsilon \paren {y_1 + y_2} + \epsilon^2\)





Negative of Absolute Value: Corollary 1














\(\ds \)

\(<\)







\(\ds \epsilon \paren {y_1 + y_2} + \epsilon\)





Since $\epsilon < \min \size {y_1, y_2, 1} < 1$, we may apply Real Number between Zero and One is Greater than Square














\(\ds \)

\(<\)







\(\ds \epsilon \paren {y_1 + y_2 + 1}\)





Distributive Property




Hence the result.
$\blacksquare$





