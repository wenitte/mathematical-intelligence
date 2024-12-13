# 

Source: https://proofwiki.org/wiki/Mediant_is_Between/Corollary_2



Corollary to Mediant is Between
Let $a, b, c, d \in \R$ be real numbers such that $b > 0, d > 0$.
Let $\dfrac a b = \dfrac c d$.
Then:

$\dfrac a b = \dfrac {a + c} {b + d} = \dfrac c d$


Proof 1
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


Proof 2













\(\ds \dfrac {a + c} {b + d}\)

\(=\)







\(\ds \dfrac a b \times \dfrac {b \paren {a + c} } {a \paren {b + d} }\)





multiplying by $\dfrac a b \times \dfrac b a$














\(\ds \)

\(=\)







\(\ds \dfrac a b \times \dfrac {1 + c / a} {1 + d / b}\)





dividing top and bottom by $a b$














\(\ds \dfrac {a + c} {b + d}\)

\(=\)







\(\ds \dfrac c d \times \dfrac {d \paren {a + c} } {c \paren {b + d} }\)





multiplying by $\dfrac c d \times \dfrac d c$














\(\ds \)

\(=\)







\(\ds \dfrac c d \times \dfrac {1 + a / c} {1 + b / d}\)





dividing top and bottom by $c d$








\(\ds \leadsto \ \ \)





\(\ds \dfrac a b = \dfrac c d\)

\(=\)







\(\ds \dfrac {a + c} {b + d}\)






This article, or a section of it, needs explaining.In particular: How does $\dfrac {a + c} {b + d} = \dfrac a b \times \dfrac {1 + c / a} {1 + d / b} = \dfrac c d \times \dfrac {1 + a / c} {1 + b / d}$ imply that $\dfrac a b = \dfrac c d$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.



$\blacksquare$


Proof 3
Let:

$t := \dfrac a b = \dfrac c d$
Then:

$a = t c$
and:

$c = t d$
Hence:

$\dfrac {a + b}{c + d} = \dfrac {t \paren {c + d} }{c + d} = t$
$\blacksquare$


Proof 4
Let $\epsilon \in \R_{>0}$.
Then:

$\dfrac a b < \dfrac {c + \epsilon} d$
By Mediant is Between:

$\dfrac a b < \dfrac {a + c + \epsilon} {b + d} < \dfrac {c + \epsilon} d$
By Inequality of Sequences Preserved in Limit, letting $\epsilon \to 0$:

$\dfrac a b \le \dfrac {a + c} {b + d} \le \dfrac c d$
Since by hypothesis:

$\dfrac a b = \dfrac c d$
we have:

$\dfrac a b = \dfrac {a + c} {b + d} = \dfrac c d$
$\blacksquare$





