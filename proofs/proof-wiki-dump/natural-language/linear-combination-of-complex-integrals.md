# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Complex_Integrals

Theorem
Let $\closedint a b$ be a closed real interval.
Let $f, g: \closedint a b \to \C$ be complex Riemann integrable functions over $\closedint a b$.
Let $\lambda, \mu \in \C$ be complex constants.

Then:

$\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t = \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t$


Proof
First, we prove the result for addition only without multiplying by $\lambda, \mu$:














\(\ds \int_a^b \map f t + \map g t \rd t\)

\(=\)







\(\ds \int_a^b \map \Re {\map f t + \map g t} \rd t + i \int_a^b \map \Im {\map f t + \map g t} \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\map f t} + \map \Re {\map g t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \int_a^b \map \Im {\map f t} + \map \Im {\map g t} \rd t\)





Addition of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\map f t} \rd t + \int_a^b \map \Re {\map g t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \paren {\int_a^b \map \Im {\map f t} \rd t + \int_a^b \map \Im {\map g t} \rd t}\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_a^b \map f t \rd t + \int_a^b \map g t \rd t\)









$\Box$

Next, we show the result for only one complex integral multiplied by a constant $\lambda$.
By definition of complex number, we can find $\lambda_x, \lambda_y \in \R$ so $\lambda = \lambda_x + i \lambda_y$.
Then:














\(\ds \int_a^b \lambda \map f t \rd t\)

\(=\)







\(\ds \int_a^b \map \Re {\lambda \map f t} \rd t + i \int_a^b \map \Im {\lambda \map f t} \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\paren {\lambda_x + i \lambda_y} \map f t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \int_a^b \map \Im {\paren {\lambda_x + i \lambda_y} \map f t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map \Re {\lambda_x \map f t} + \map \Re {i \lambda_y \map f t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \int_a^b \map \Im {\lambda_x \map f t} + \map \Im {i \lambda_y \map f t} \rd t\)





Addition of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \int_a^b \lambda_x \map \Re {\map f t} - \lambda_y \map \Im {\map f t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \int_a^b \lambda_x \map \Im {\map f t} + \lambda_y \map \Re {\map f t} \rd t\)





Multiplication of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \lambda_x \int_a^b \map \Re {\map f t} \rd t - \lambda_y \int_a^b \map \Im {\map f t} \rd t\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \lambda_x \int_a^b \map \Im {\map f t} \rd t + i \lambda_y \int_a^b \map \Re {\map f t} \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \lambda_x \paren {\int_a^b \map \Re {\map f t} \rd t + i \int_a^b \map \Im {\map f t} \rd t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \lambda_y \paren {i \int_a^b \map \Im {\map f t} \rd t + \int_a^b \map \Re {\map f t} \rd t}\)




















\(\ds \)

\(=\)







\(\ds \lambda_x \int_a^b \map f t \rd t + i \lambda_y \int_a^b \map f t \rd t\)





Definition of Complex Riemann Integral














\(\ds \)

\(=\)







\(\ds \lambda \int_a^b \map f t \rd t\)









$\Box$

It follows from the results above that:














\(\ds \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t\)

\(=\)







\(\ds \int_a^b \lambda \map f t \rd t + \int_a^b \mu \map g t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t\)









$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.1$




