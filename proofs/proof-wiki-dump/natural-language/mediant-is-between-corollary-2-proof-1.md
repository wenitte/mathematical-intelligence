# 

Source: https://proofwiki.org/wiki/Mediant_is_Between/Corollary_2/Proof_1

Corollary to Mediant is Between
Let $a, b, c, d \in \R$ be real numbers such that $b > 0, d > 0$.
Let $\dfrac a b = \dfrac c d$.
Then:

$\dfrac a b = \dfrac {a + c} {b + d} = \dfrac c d$


Proof
Let $p, q, r, s \in \R$ such that $q > 0, s > 0$.
Then from Mediant is Between:

$\dfrac p q < \dfrac {p + r} {q + s} < \dfrac r s$
In order to present this in the form required by the Squeeze Theorem for Functions, we weaken the ordering:

$(1): \quad \dfrac p q \le \dfrac {p + r} {q + s} \le \dfrac r s$

Let $f$, $g$ and $h$ be the constant real functions defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \dfrac a b\)
















\(\ds \forall x \in \R: \, \)



\(\ds \map g x\)

\(=\)







\(\ds \dfrac {a + c} {b + d}\)
















\(\ds \forall x \in \R: \, \)



\(\ds \map h x\)

\(=\)







\(\ds \dfrac c d\)










From $(1)$:

$\forall x \in \R: \map f x \le \map g x \le \map h x$
But by hypothesis:

$\dfrac a b = \dfrac c d$
That is:

$\forall x \in \R: \map f x = \map h x$

Hence from the Squeeze Theorem for Functions:

$\forall x \in \R: \map f x = \map g x = \map h x$
That is:

$\dfrac a b = \dfrac c d \implies \dfrac a b = \dfrac {a + c} {b + d} = \dfrac c d$
$\blacksquare$





