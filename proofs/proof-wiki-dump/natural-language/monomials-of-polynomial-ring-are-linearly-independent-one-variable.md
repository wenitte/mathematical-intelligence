# 

Source: https://proofwiki.org/wiki/Monomials_of_Polynomial_Ring_are_Linearly_Independent/One_Variable

Theorem
Let $R$ be a commutative ring with unity.
Let $R \sqbrk X$ be a polynomial ring in one variable $X$ over $R$.
Then the set of monomials $\set {X^k : k \in \N}$ is linearly independent.


Proof
We consider polynomial ring over sequences in $R$:

Let $\struct {R^{\left({\N}\right)}, \oplus, \odot}$ be the underlying ring of sequences of finite support.
Recall:

$X = \sequence {0, 1, 0, 0, \ldots}$

Observe:














\(\ds X^2\)

\(=\)







\(\ds \sequence {0, 0, 1, 0, 0, \ldots}\)




















\(\ds X^3\)

\(=\)







\(\ds \sequence {0, 0, 0, 1, 0, \ldots}\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds X^k\)

\(=\)







\(\ds \sequence {\underbrace {0, \ldots, 0}_k, 1, 0, \ldots}\)




















\(\ds \)

\(\cdots\)







\(\ds \)









More generally, for all $r \in R$ and $k \in \N$:














\(\ds r X^k\)

\(=\)







\(\ds \map \iota r \odot \sequence {\underbrace{0,\ldots,0}_k,1,0,\ldots}\)




















\(\ds \)

\(=\)







\(\ds \sequence {r,0,\ldots} \odot \sequence {\underbrace{0,\ldots,0}_k,1,0,\ldots}\)




















\(\ds \)

\(=\)







\(\ds \sequence {\underbrace{0,\ldots,0}_k,r,0,\ldots}\)










Now let $n \in \N$ and $r_0,\ldots,r_n \in R$ be such that:

$r_0 + r_1 X + r_2 X^2 + \cdots + r_n X^n = 0$
That is:














\(\ds \)

\(\)







\(\ds \sequence {r_0,0,\ldots} \oplus \sequence {0,r_1,0,\ldots} \oplus \sequence {0,0,r_2,0,\ldots} \oplus \cdots \oplus \sequence {0,\ldots,0,r_n,0,\ldots}\)




















\(\ds \)

\(=\)







\(\ds \sequence {r_0,r_1,r_2,\ldots,r_n,0,\ldots}\)




















\(\ds \)

\(=\)







\(\ds \sequence {0,0,\ldots}\)









Therefore:

$r_0 = \cdots = r_n = 0$
$\blacksquare$


Also see
Equality of Monomials of Polynomial Ring in One Variable




