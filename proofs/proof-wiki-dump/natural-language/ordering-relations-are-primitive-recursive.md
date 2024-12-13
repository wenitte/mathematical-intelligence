# 

Source: https://proofwiki.org/wiki/Ordering_Relations_are_Primitive_Recursive

Theorem
The ordering relations on $\N^2$:

$n < m$
$n \le m$
$n \ge m$
$n > m$
are all primitive recursive.


Proof
We note that:

$n < m \iff m \mathop{\dot -} n > 0$
$n \ge m \iff m \mathop{\dot -} n = 0$
So it can be seen that the characteristic function of $<$ is given by:

$\chi_< \left({n, m}\right) = \operatorname{sgn} \left({m \mathop{\dot -} n}\right)$
So $\chi_{<}$ is defined by substitution from:

the primitive recursive function $\operatorname{sgn}$
the primitive recursive function $\dot -$
Thus $\chi_<$ is primitive recursive.
So $<$ is a primitive recursive relation.

Next we see that $n \le m \iff n < m \lor n = m$ from the definition of strictly precedes.
From Equality Relation is Primitive Recursive, we have that $=$ is primitive recursive.
From above, we have that $<$ is primitive recursive.
Thus $\le$ is primitive recursive from Set Operations on Primitive Recursive Relations.

We could use the same reasoning for $>$ and $\ge$ but there's a different approach.
Note that $n \le m \iff n \not > m$, and so $>$ is primitive recursive from Set Operations on Primitive Recursive Relations.
Finally the same applies to $\ge$.
Hence the result.
$\blacksquare$





