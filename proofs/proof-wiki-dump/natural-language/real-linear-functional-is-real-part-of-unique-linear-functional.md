# 

Source: https://proofwiki.org/wiki/Real_Linear_Functional_is_Real_Part_of_Unique_Linear_Functional

Theorem
Let $X$ be a vector space over $\C$. 
Let $g : X \to \R$ be a $\R$-linear functional.

Then there exists a unique $\C$-linear functional $f : X \to \C$ such that: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 
Further: 

$\map f x = \map g x - i \map g {i x}$


Proof
Define $f : X \to \C$ by: 

$\map f x = \map g x - i \map g {i x}$
for each $x \in X$. 
Then for $\lambda, \mu \in \R$ and $x, y \in X$ we have: 














\(\ds \map f {\lambda x + \mu y}\)

\(=\)







\(\ds \map g {\lambda x + \mu y} - i \map g {i \paren {\lambda x + \mu y} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \map g x + \mu \map g x - i \lambda \map g {i x} - i \mu \map g {i x}\)





since $g$ is $\R$-linear














\(\ds \)

\(=\)







\(\ds \lambda \map f x + \mu \map f y\)









So $f$ is $\R$-linear. 
To show that $f$ is $\C$-linear, we need to show that:

$\map f {i x} = i \map f x$
for each $x \in X$. 
We have: 














\(\ds \map f {i x}\)

\(=\)







\(\ds \map g {i x} - i \map g {-x}\)




















\(\ds \)

\(=\)







\(\ds \map g {i x} + i \map g x\)




















\(\ds \)

\(=\)







\(\ds i \paren {\map g x - i \map g {i x} }\)




















\(\ds \)

\(=\)







\(\ds i \map f x\)









Then for $\alpha + i\beta, \gamma + i\delta \in \C$ and $x, y \in X$ we have: 














\(\ds \map f {\paren {\alpha + i \beta} x + \paren {\gamma + i \delta} y}\)

\(=\)







\(\ds \map f {\alpha x} + \map f {i \beta x} + \map f {\gamma y} + \map f {i \delta y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x + \beta \map f {i x} + \gamma \map f y + \delta \map f {i y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x + i\beta \map f x + \gamma \map f y + i \delta \map f y\)




















\(\ds \)

\(=\)







\(\ds \paren {\alpha + i \beta} \map f x + \paren {\gamma + i \delta} \map f y\)









So $f : X \to \C$ is a linear functional with:

$\map g x = \map \Re {\map f x}$
Further, from Linear Functional on Complex Vector Space is Uniquely Determined by Real Part, we have that $f : X \to \C$ is unique.
$\blacksquare$





