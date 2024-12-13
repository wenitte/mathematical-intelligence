# 

Source: https://proofwiki.org/wiki/Integrable_Function_with_Zero_Integral_on_Sub-Sigma-Algebra_is_A.E._Zero/Proof_2

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\GG$ be a sub-$\sigma$-algebra of $\Sigma$.

Let $f : X \to \overline \R$ be a $\GG$-integrable function.
Suppose that, for all $G \in \GG$:

$\ds \int_G f \rd \mu = 0$

Then $f = 0$ $\mu$-almost everywhere.


Proof
In view of Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we shall show:

$\ds \int \size f \rd \mu = 0$
Since $f$ is $\GG$-measurable:

$G_+ := \set { x \in X : f(x) > 0 } \in \GG$
and:

$G_- := \set { x \in X : f(x) \le 0 } \in \GG$
On the one hand:














\(\ds \int f^+ \rd \mu\)

\(=\)







\(\ds \int f \cdot \chi _{ G_+ } \rd \mu\)





$f^+$ is positive part of $f$














\(\ds \)

\(=\)







\(\ds \int _{ G_+ } f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds 0\)





by hypothesis



On the other hand, from $f \cdot \chi _{ G_- } \le 0$ follows:














\(\ds \paren {f \cdot \chi _{ G_- } } ^+\)

\(=\)







\(\ds 0\)









and:














\(\ds \paren {f \cdot \chi _{ G_- } } ^-\)

\(=\)







\(\ds - \paren {f \cdot \chi _{ G_- } }\)




















\(\ds \)

\(=\)







\(\ds \paren { -f } \cdot \chi _{ G_- }\)




















\(\ds \)

\(=\)







\(\ds f^-\)





$f^-$ is negative part of $f$



Thus:














\(\ds \int _{ G_- } f \rd \mu\)

\(=\)







\(\ds \int f \cdot \chi _{ G_- } \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {f \cdot \chi _{ G_- } } ^+ \rd \mu - \int \paren {f \cdot \chi _{ G_- } } ^- \rd \mu\)





integral of $f \cdot \chi _{ G_- }$














\(\ds \)

\(=\)







\(\ds - \int f ^- \rd \mu\)









which implies:














\(\ds \int f ^- \rd \mu\)

\(=\)







\(\ds - \int f \cdot \chi _{ G_- } \rd \mu\)




















\(\ds \)

\(=\)







\(\ds - \int _{ G_- } f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds 0\)





by hypothesis



Therefore:

$\ds \int \size f \rd \mu = \int f^+ \rd \mu + \int f^- \rd \mu = 0$
$\blacksquare$





