# 

Source: https://proofwiki.org/wiki/Riesz%27s_Lemma/Proof_2

Theorem
Let $X$ be a normed vector space.
Let $Y$ be a proper closed linear subspace of $X$. 
Let $\alpha \in \openint 0 1$.

Then there exists $x_\alpha \in X$ such that: 

$\norm {x_\alpha} = 1$
with:

$\norm {x_\alpha - y} > \alpha$
for all $y \in Y$.


Proof
Consider the normed quotient vector space $X / Y$ with quotient mapping $\pi$.
From Operator Norm of Quotient Mapping in Quotient Normed Vector Space is 1, we have: 

$\norm \pi_{\map B {X, X/Y} } = 1$
Since $\alpha \in \openint 0 1$, there exists $x_\alpha \in X$ with $\norm {x_\alpha} = 1$ and: 

$\norm {\map \pi {x_\alpha} }_{X/Y} > \alpha$
by the definition of the norm on the space of bounded linear transformations.
That is, by the definition of the quotient norm:

$\ds \inf_{z \mathop \in Y} \norm {x_\alpha - z} > \alpha$
So there exists $y \in Y$ such that: 

$\norm {x_\alpha - y} > \alpha$
$\blacksquare$





