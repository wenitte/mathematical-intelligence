# 

Source: https://proofwiki.org/wiki/Integrable_Function_with_Zero_Integral_on_Sub-Sigma-Algebra_is_A.E._Zero

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\GG$ be a sub-$\sigma$-algebra of $\Sigma$.

Let $f : X \to \overline \R$ be a $\GG$-integrable function.
Suppose that, for all $G \in \GG$:

$\ds \int_G f \rd \mu = 0$

Then $f = 0$ $\mu$-almost everywhere.


Proof
Let: 

$\ds A = \set {x \in X : \map f x \ge 0}$
so that: 

$\ds X \setminus A = \set {x \in X : \map f x < 0}$
From Characterization of Measurable Functions:

$A$ and $X \setminus A$ are $\GG$-measurable.
So:

$\ds \int_A f \rd \mu = 0$
That is: 

$\ds \int f \cdot \chi_A \rd \mu = 0$
Note that for $x \in A$, we have: 

$\map f x \map {\chi_A} x = \map f x \ge 0$
and for $x \in X \setminus A$, we have: 

$\map f x \map {\chi_A} x = 0$
So:

$f \cdot \chi_A \ge 0$
So that: 

$f \cdot \chi_A = \size {f \cdot \chi_A}$
This gives: 

$\ds \int \size {f \cdot \chi_A} = 0$
Then, from Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$f \cdot \chi_A = 0$ $\mu$-almost everywhere.
That is, there exists a $\mu$-null set $N_1 \subseteq X$ such that: 

if $\map f x \map {\chi_A} x \ne 0$ then $x \in N_1$.

Note that we also have: 

$\ds \int_{X \setminus A} f \rd \mu = 0$
so that: 

$\ds \int f \cdot \chi_{X \setminus A} \rd \mu = 0$
From Integral of Integrable Function is Homogeneous, we have: 

$\ds \int \paren {-f \cdot \chi_{X \setminus A} } \rd \mu = 0$
Note that for $x \in A$, we have: 

$-\map f x \map {\chi_{X \setminus A} } x = 0$
and for $x \in X \setminus A$, we have: 

$-\map f x \map {\chi_{X \setminus A} } x = -\map f x > 0$
So:

$-f \cdot \chi_{X \setminus A} \ge 0$
so that: 

$-f \cdot \chi_{X \setminus A} = \size {f \cdot \chi_{X \setminus A} }$
This gives: 

$\ds \int \size {f \cdot \chi_{X \setminus A} } \rd \mu = 0$
Then, from Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$f \cdot \chi_{X \setminus A} = 0$ $\mu$-almost everywhere.
That is, there exists a $\mu$-null set $N_2 \subseteq X$ such that: 

if $\map f x \map {\chi_{X \setminus A} } x \ne 0$ then $x \in N_2$.

From Characteristic Function of Set Difference, we have: 

$\chi_{X \setminus A} = \chi_X - \chi_A$
So:














\(\ds f \cdot \chi_{X \setminus A} + f \cdot \chi_A\)

\(=\)







\(\ds f \cdot \paren {\chi_{X \setminus A} + \chi_A}\)




















\(\ds \)

\(=\)







\(\ds f \cdot \chi_X\)




















\(\ds \)

\(=\)







\(\ds f\)





since $f$ is a function $X \to \overline \R$



So if $x \in X$ has $\map f x \ne 0$ then: 

either $\map f x \map {\chi_{X \setminus A} } x \ne 0$ or $\map f x \map {\chi_A} x \ne 0$.
That is: 

either $x \in N_1$ or $x \in N_2$.
So if $\map f x \ne 0$, we have that:

$x \in N_1 \cup N_2$
From Null Sets Closed under Countable Union, we have that: 

$N_1 \cup N_2$ is a $\mu$-null set.
So:

$f = 0$ $\mu$-almost everywhere.
$\blacksquare$

Proof 2
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





