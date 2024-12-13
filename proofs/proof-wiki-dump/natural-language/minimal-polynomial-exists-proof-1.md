# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_Exists/Proof_1

Theorem
Let $L / K$ be a field extension.
Let $\alpha \in L$ be algebraic over $K$.

Then there exists a minimal polynomial $f \in K \sqbrk x$ for $\alpha$ over $K$.


Proof
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





