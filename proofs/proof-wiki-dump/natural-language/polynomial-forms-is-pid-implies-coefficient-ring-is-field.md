# 

Source: https://proofwiki.org/wiki/Polynomial_Forms_is_PID_Implies_Coefficient_Ring_is_Field

Theorem
Let $D$ be an integral domain.
Let $D \sqbrk X$ be the ring of polynomial forms in $X$ over $D$.
Let $D \sqbrk X$ be a principal ideal domain;

Then $D$ is a field.


Proof
Let $y \in D$ be non-zero.
Then, using the principal ideal property, for some $f \in D \sqbrk X$ we have:

$\gen {y, X} = \gen f \subseteq D \sqbrk X$
Therefore:

$\exists p, q \in D \sqbrk X: y = f p, X = f q$
By Properties of Degree we conclude that $f = a$ and $q = b + c X$ for some $a, b, c \in D$.
Substituting into the equation $X = f q$ we obtain:

$X = a b + a c X$
which implies that:

$a c = 1$
That is:

$a \in D^\times$
where $D^\times$ denotes the group of units of $D$.
Therefore:

$\gen f = \gen 1 = D \sqbrk X$
Therefore:

$\exists r, s \in D \sqbrk X: r y + s X = 1$
If $d$ is the constant term of $r$, then we have $y d = 1$.
Therefore $y \in D^\times$.
Our choice of $y$ was arbitrary, so this shows that $D^\times \supseteq D \setminus \set 0$.
This says precisely that $D$ is a field.
$\blacksquare$


Also see
Polynomial Forms over Field form Principal Ideal Domain




