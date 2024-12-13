# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Ring_with_Unity_is_Ring_with_Unity



Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.
Let $\struct {R / J, +, \circ}$ be the quotient ring defined by $J$.

Then $\struct {R / J, +, \circ}$ is a ring with unity, and its unity is $1_R + J$.


Proof
Let $\struct {R, +, \circ}$ be a ring with unity.

First, let $J \subsetneq R$.
By Ideal of Unit is Whole Ring: Corollary:

$1_R \in J \implies J = R$
So $1_R \notin J$.
Thus $1_R + J \ne J$, so $1_R + J \ne 0_{R/J}$.

Now let $x \in R$.














\(\ds \paren {1_R + J} \circ \paren {x + J}\)

\(=\)







\(\ds 1_R \circ x + J\)





Definition of $\circ$ in $R / J$














\(\ds \)

\(=\)







\(\ds x + J\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds x \circ 1_R + J\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds \paren {x + J} \circ \paren {1_R + J}\)





Definition of $\circ$ in $R / J$




Thus $R / J$ has a unity, and that unity is $1_R + J$.

Now suppose $J = R$.
Then $1_R + J = J$ and therefore $1_R = 0_R$.
The only ring to have $1_R = 0_R$ is the null ring.
This is appropriate, because:

$R / J = R / R = \set {0_{R / R} }$
which is the null ring.
$\blacksquare$


Also see
Ring Without Unity may have Quotient Ring with Unity


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.2$ Factor rings: $\text{(iv)}$




