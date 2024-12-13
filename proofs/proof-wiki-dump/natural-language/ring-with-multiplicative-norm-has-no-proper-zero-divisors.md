# 

Source: https://proofwiki.org/wiki/Ring_with_Multiplicative_Norm_has_No_Proper_Zero_Divisors

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let its zero be denoted by $0_R$.
Let $\norm {\,\cdot\,}$ be a multiplicative norm on $R$.

Then $R$ has no proper zero divisors. 
That is:

$\forall x, y \in R^*: x \circ y \ne 0_R$
where $R^*$ is defined as $R \setminus \set {0_R}$.


Proof
Aiming for a contradiction, suppose:

$\exists x, y \in {R^*} : x \circ y = 0_R$
By positive definiteness:

$x, y \ne 0_R \iff \norm x, \norm y \ne 0$
Thus:

$\norm x \norm y \ne 0$

But we also have:














\(\ds \norm x \norm y\)

\(=\)







\(\ds \norm {x \circ y}\)





Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {0_R}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0\)





Positive Definiteness



a contradiction.
$\blacksquare$





