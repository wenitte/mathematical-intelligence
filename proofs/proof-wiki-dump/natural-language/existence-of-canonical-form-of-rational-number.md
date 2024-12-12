# 

Source: https://proofwiki.org/wiki/Existence_of_Canonical_Form_of_Rational_Number



Theorem
Let $r \in \Q$.
Then:

$\exists p \in \Z, q \in \Z_{>0}: r = \dfrac p q, p \perp q$
That is, every rational number can be expressed in its canonical form.


Proof
We have that the set of rational numbers is the field of quotients of the set of integers.
From Divided by Positive Element of Field of Quotients:

$\exists s \in \Z, t \in \Z_{>0}: r = \dfrac s t$
Now if $s \perp t$, our task is complete.
Otherwise, let:

$\gcd \set {s, t} = d$
where $\gcd \set {s, t}$ denotes the greatest common divisor of $s$ and $t$.

Let $s = p d, t = q d$.
We have that $t, d \in \Z_{>0}$
Therefore $q \in \Z_{>0}$ also.
From Integers Divided by GCD are Coprime:

$p \perp q$

Also:














\(\ds \frac s t\)

\(=\)







\(\ds \frac {p d} {q d}\)




















\(\ds \)

\(=\)







\(\ds \frac p q \frac d d\)




















\(\ds \)

\(=\)







\(\ds \frac p q 1\)




















\(\ds \)

\(=\)







\(\ds \frac p q\)









Thus:

$r = \dfrac p q$
where $p \perp q$ and $q \in \Z_{>0}$.
$\blacksquare$


Also see
Canonical Form of Rational Number is Unique


Sources
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Introduction: Review of Algebra, Geometry, and Trigonometry: $\text{0-1}$: The Real Numbers




