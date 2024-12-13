# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_Exists



Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then there exists a minimal polynomial $f \in K \sqbrk x$ for $\alpha$ over $K$.


Proof 1
According to definition 1 of minimal polynomial, we ought to find $f \in K \sqbrk x$ such that:

$f \in K \sqbrk x$ is a monic polynomial of smallest degree such that $\map f \alpha = 0$

Since $\alpha$ is algebraic over $K$, there is some $f \in K \sqbrk x$ such that $\map f \alpha = 0$.
Therefore we can define:

$n = \min \set { \deg f : f \in K \sqbrk x, \map f \alpha = 0 }$
where $\deg f$ is the degree of $f$.
It follows that there is some $f \in K \sqbrk x$ such that $\deg f = n$.
Then $f$ is of smallest degree such that $\map f \alpha = 0$.

Let the first coefficient of $f$ be $a \in K$.
Since $K$ is a field, it follows that $g := f / a$ is monic.
Therefore $g$ is the sought monic polynomial of smallest degree such that $\map g \alpha = 0$.
$\blacksquare$


Proof 2
According to definition 2 of minimal polynomial, we ought to find $f \in K \sqbrk x$ such that:

$f \in K \sqbrk x$ is an irreducible, monic polynomial such that $\map f \alpha = 0$

Since $\alpha$ is algebraic over $K$, there is some $f \in K \sqbrk x$ such that $\map f \alpha = 0$.
By Polynomial Forms over Field form Unique Factorization Domain, $\map f x$ has a complete factorization:

$\map f x = a \cdot \map {g_1} x \cdots \map {g_n} x$
where $a \in K, a \ne 0$, and the $g_i$ are irreducible and monic.
Since $\map f \alpha = 0$, it follows that for some $g_i$:

$\map {g_i} \alpha = 0$
as required.
$\blacksquare$



This article is complete as far as it goes, but it could do with expansion.In particular: For definition 3You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Also see
Minimal Polynomial is Unique




