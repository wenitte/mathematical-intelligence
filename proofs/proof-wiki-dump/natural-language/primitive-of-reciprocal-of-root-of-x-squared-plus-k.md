# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_k



Theorem
Let $k \in \R$.
Then:

$\ds \int \frac {\d x} {\sqrt {\size {x^2 + k} } } = \map \ln {x + \sqrt {\size {x^2 + k} } } + C$


Proof
There are three cases:

$0 \le k$
$-x^2 < k < 0$
$k < -x^2$


$(1): \quad 0 \le k$
If $0 \le k$ then $k = a^2$ for some $a \in \R$.
Then Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$ applies:

$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \map \ln {x + \sqrt {x^2 + a^2} } + C$


$(2): \quad -x^2 < k < 0$
If $-x^2 < k < 0$ then:

$k = -a^2$ for some $a \in \R$
and:

$x^2 - a^2 > 0$
Then Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$ applies:

$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \map \ln {x + \sqrt {x^2 - a^2} } + C$


$(3): \quad k < -x^2$
If $k < -x^2$ then:

$k = -a^2$ for some $a \in \R$
and:

$a^2 - x^2 > 0$
Then Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$ applies:

$\ds \int \frac {\d x} {\sqrt {a^2 - x^2} } = \map \ln {x + \sqrt {a^2 - x^2} } + C$

The result holds for all three cases.
$\blacksquare$





