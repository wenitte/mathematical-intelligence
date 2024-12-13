# 

Source: https://proofwiki.org/wiki/Real_Part_of_Linear_Functional_is_Linear_Functional

Theorem
Let $X$ be a vector space over $\C$. 
Let $f : X \to \C$ be a linear functional. 
Define $g : X \to \R$ by: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$.

Then $f$ is $\R$-linear. 


Proof
Let $x, y \in X$ and $\lambda, \mu \in \R$. 
Then:














\(\ds \map g {\lambda x + \mu y}\)

\(=\)







\(\ds \map \Re {\map f {\lambda x + \mu y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map f {\lambda x + \mu y} + \overline {\map f {\lambda x + \mu y} } }\)





Sum of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\lambda \map f x + \mu \map f y + \overline {\lambda \map f x} + \overline {\mu \map f y} }\)





Sum of Complex Conjugates, linearity of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\lambda \map f x + \mu \map f y + \lambda \overline {\map f x} + \mu \overline {\map f y} }\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \frac \lambda 2 \paren {\map f x + \overline {\map f x} } + \frac \mu 2 \paren {\map f y + \overline {\map f y} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \map g x + \mu \map g y\)









$\blacksquare$





