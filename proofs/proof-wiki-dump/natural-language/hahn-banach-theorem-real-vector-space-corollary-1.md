# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space/Corollary_1

Corollary
Let $X$ be a vector space over $\R$.
Let $p : X \to \R$ be a seminorm on $X$. 
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a linear functional such that: 

$\size {\map {f_0} x} \le \map p x$ for each $x \in X_0$.

Then there exists a linear functional $f$ defined on the whole space $X$ which extends $f_0$.

That is: 

$\size {\map f x} \le \map p x$ for each $x \in X$
and:

$\map f x = \map {f_0} x$ for each $x \in X_0$.


Proof
From Seminorm is Sublinear Functional, we have: 

$p$ is a sublinear functional.
So, from Hahn-Banach Theorem: Real Vector Space, there exists an extension $f$ with: 

$\forall x \in X: \map f x \le \map p x$
Then, we have: 














\(\ds -\map f x\)

\(=\)







\(\ds \map f {-x}\)





Definition of Linear Functional














\(\ds \)

\(\le\)







\(\ds \map p {-x}\)




















\(\ds \)

\(=\)







\(\ds \size {-1} \map p x\)





Definition of Seminorm














\(\ds \)

\(=\)







\(\ds \map p x\)










So we also have: 

$\forall x \in X: -\map f x \le \map p x$
So:

$\forall x \in X: \size {\map f x} \le \map p x$
and so $f$ is the desired extension.
$\blacksquare$





