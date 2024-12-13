# 

Source: https://proofwiki.org/wiki/Linear_Functional_on_Vector_Space_is_Zero_or_Surjective

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $f : X \to K$ be a linear functional.

Then either: 

$\map f x = 0$ for each $x \in X$
or:

$f$ is surjective.


Proof
Suppose that $\map f {x_0} \ne 0$ for $x_0 \in X$. 
Take $c \in K$. 
Then we have, from linearity:














\(\ds \map f {c \paren {\map f {x_0} }^{-1} x_0}\)

\(=\)







\(\ds c \paren {\map f {x_0} }^{-1} \map f {x_0}\)




















\(\ds \)

\(=\)







\(\ds c\)









Since $c \in K$ was arbitrary, we have that $f$ is surjective.
$\blacksquare$





