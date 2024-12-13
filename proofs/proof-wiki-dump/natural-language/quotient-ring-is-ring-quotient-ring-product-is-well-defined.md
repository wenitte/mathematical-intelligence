# 

Source: https://proofwiki.org/wiki/Quotient_Ring_is_Ring/Quotient_Ring_Product_is_Well-Defined



Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.
Let $\struct {R / J, +, \circ}$ be the quotient ring of $R$ by $J$.

Then $\circ$ is well-defined on $R / J$, that is:

$x_1 + J = x_2 + J, y_1 + J = y_2 + J \implies x_1 \circ y_1 + J = x_2 \circ y_2 + J$


Proof
From Left Cosets are Equal iff Product with Inverse in Subgroup, we have:














\(\ds x_1 + J\)

\(=\)







\(\ds x_2 + J\)














\(\ds \leadsto \ \ \)





\(\ds x_1 + \paren {-x_2}\)

\(\in\)







\(\ds J\)









and:














\(\ds y_1 + J\)

\(=\)







\(\ds y_2 + J\)














\(\ds \leadsto \ \ \)





\(\ds y_1 + \paren {-y_2}\)

\(\in\)







\(\ds J\)










Hence from the definition of ideal:














\(\ds \paren {x_1 + \paren {-x_2} } \circ y_1\)

\(\in\)







\(\ds J\)




















\(\ds x_2 \circ \paren {y_1 + \paren {-y_2} }\)

\(\in\)







\(\ds J\)










Thus:














\(\ds \paren {x_1 + \paren {-x_2} } \circ y_1 + x_2 \circ \paren {y_1 + \paren {-y_2} }\)

\(\in\)







\(\ds J\)





as $\struct {J, +}$ is a group








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1 + \paren {-\paren {x_2 \circ y_2} }\)

\(\in\)







\(\ds J\)





Various ring properties








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1 + J\)

\(=\)







\(\ds x_2 \circ y_2 + J\)





Left Cosets are Equal iff Product with Inverse in Subgroup



$\blacksquare$


Also see
Ideal induces Congruence Relation on Ring


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 22$. Quotient Rings: Theorem $41$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.1$ Factor rings




