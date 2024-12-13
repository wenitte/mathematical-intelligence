# 

Source: https://proofwiki.org/wiki/Ring_Element_is_Zero_Divisor_iff_not_Cancellable



Theorem
Let $\struct {R, +, \circ}$ be a ring which is not null.
Let $z \in R^*$.

Then $z$ is a zero divisor if and only if $z$ is not cancellable for $\circ$.


Proof
Sufficient Condition
Let $z$ be a zero divisor.
Then either $z \circ x = 0_R$ or $x \circ z = 0_R$ for some $x \in R^*$.
Then:

$z \circ 0_R = 0_R = 0_R \circ z$
and so $z$ is not cancellable.
$\Box$


Necessary Condition
Let $z$ not be cancellable in $R$.
Then there exists $x, y \in R$ such that $x \ne y$ and:

$z \circ x = z \circ y$
Then:














\(\ds z \circ \paren {x + \paren {-y} }\)

\(=\)







\(\ds z \circ x + z \circ \paren {-y}\)





$\circ$ distributes over $+$














\(\ds \)

\(=\)







\(\ds z \circ x + \paren {-z \circ y}\)





Product with Ring Negative














\(\ds \)

\(=\)







\(\ds 0_R\)





as $z \circ x = z \circ y$




But $x \ne y$, so $x + \paren {-y} \ne 0$.
Thus $z$ is a zero divisor.

Similarly if $x \circ z = y \circ z$ where $x \ne y$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.2$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $3$: Some special classes of rings: Lemma $1.4$




