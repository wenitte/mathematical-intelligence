# 

Source: https://proofwiki.org/wiki/Additive_Function_is_Linear_for_Rational_Factors

Theorem
Let $f: \R \to \R$ be an additive function.
Then:

$\forall r \in \Q, x \in \R: \map f {x r} = r \map f x$


Proof
Trivially, we have:

$\forall x \in \R: \map f {1 \cdot x} = 1 \map f x$
Next, suppose that:

$\map f {n x} = n \map f x$
By additivity of $f$, we have:














\(\ds \map f {\paren {n + 1} x}\)

\(=\)







\(\ds \map f {n x + x}\)




















\(\ds \)

\(=\)







\(\ds \map f {n x} + \map f x = n \map f x + \map f x\)




















\(\ds \)

\(=\)







\(\ds \paren {n + 1} \map f x\)










Hence by the Principle of Mathematical Induction:

$\forall n \in \N, x \in \R: \map f {n x} = n \map f x$
As Additive Function is Odd Function and Odd Function of Zero is Zero, we conclude:

$\forall p \in \Z, x \in \R: \map f {p x} = p \map f x$

Let $p \ne 0$.
By substituting $y = p x$, the above gives:

$\forall p \in \Z \setminus \set 0, y \in \R: \map f y = p \map f {\dfrac y p}$
In other words:

$\forall p \in \Z \setminus \set 0, y \in \R: \map f {\dfrac y p} = \dfrac 1 p \map f y$

Given $p, q \in \Z, q \ne 0$, we have:














\(\ds \map f {\dfrac p q} x\)

\(=\)







\(\ds \map f {p \dfrac x q}\)




















\(\ds \)

\(=\)







\(\ds p \map f {\dfrac x q}\)




















\(\ds \)

\(=\)







\(\ds p \dfrac {\map  f x } q\)




















\(\ds \)

\(=\)







\(\ds \dfrac p q \map f x\)










Therefore we conclude:

$\forall r \in \Q, x \in \R: \map f {r x} = r \map f x$
$\blacksquare$





