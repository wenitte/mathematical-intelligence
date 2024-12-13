# 

Source: https://proofwiki.org/wiki/Integers_Modulo_m_under_Max_Operation_form_Ordered_Semigroup



Theorem
Let $\Z_m$ denote the set of integers modulo $m$:

$\Z_m = \set {0, 1, \ldots, m - 1}$
Let $\vee_m$ be the operation on $\Z_m$ defined as:

$\forall a, b \in \Z_m: a \vee_m b = \max \set {a, b}$

Then the ordered algebraic structure $\struct {\Z_m, \vee_m, \le}$ is an ordered semigroup.


Proof
Taking the semigroup axioms in turn:


Semigroup Axiom $\text S 0$: Closure
We have that:

$\forall a, b \in \Z_m: \max \set {a, b} \in \set {a, b}$
and so:

$\max \set {a, b} \in \Z_m$
Thus $\struct {\Z_m, \vee_m}$ is closed.
$\Box$


Semigroup Axiom $\text S 1$: Associativity
We have that Max Operation is Associative.
Thus $\vee_m$ is associative.
$\Box$

The semigroup axioms are thus seen to be fulfilled, and so $\struct {\Z_m, \vee_m}$ is a semigroup.
$\Box$

Ordered Semigroup
We now need to show that:

$(1): \quad x \le y \implies x \vee_m z \le y \vee_m z$
and:

$(2): \quad x \le y \implies z \vee_m x \le z \vee_m y$
Because Max Operation is Commutative, $(2)$ follows directly from $(1)$.
Hence we need demonstrate $(1)$ only.

Let $x, y, z \in S$.
Let $x \le y$.


Case $1$. $z \le x$













\(\ds x \vee_m z\)

\(=\)







\(\ds x\)




















\(\ds y \vee_m z\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x \vee_m z\)

\(\le\)







\(\ds y \vee_m z\)





as $x \le y$



$\Box$


Case $2$. $x \le z \le y$













\(\ds x \vee_m z\)

\(=\)







\(\ds z\)




















\(\ds y \vee_m z\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x \vee_m z\)

\(\le\)







\(\ds y \vee_m z\)





as $z \le y$



$\Box$


Case $3$. $y \le z$













\(\ds x \vee_m z\)

\(=\)







\(\ds z\)




















\(\ds y \vee_m z\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds x \vee_m z\)

\(\le\)







\(\ds y \vee_m z\)





as $z \le z$



$\Box$

Thus $\le$ is compatible with $\vee_m$.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.2$




