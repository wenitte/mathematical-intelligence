# 

Source: https://proofwiki.org/wiki/Common_Divisor_Divides_Integer_Combination/General_Result



Theorem
Let $c$ be a common divisor of a set of integers $A := \set {a_1, a_2, \dotsc, a_n}$.
That is:

$\forall x \in A: c \divides x$

Then $c$ divides any integer combination of elements of $A$:

$\forall x_1, x_2, \dotsc, x_n \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_n x_n}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$\forall x \in \set {a_1, a_2, \dotsc, a_n}: c \divides x \implies \forall x_1, x_2, \dotsc, x_n \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_n x_n}$


Basis for the Induction
$\map P 2$ is the case:

$\forall x \in \set {a_1, a_2}: c \divides x \implies \forall x_1, x_2 \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2}$
This is demonstrated to be true in Common Divisor Divides Integer Combination.
Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\forall x \in \set {a_1, a_2, \dotsc, a_k}: c \divides x \implies \forall x_1, x_2, \dotsc, x_k \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k}$

from which it is to be shown that:

$\forall x \in \set {a_1, a_2, \dotsc, a_k, a_{k + 1} }: c \divides x \implies \forall x_1, x_2, \dotsc, x_k, x_{k + 1} \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k + a_{k + 1} x_{k + 1} }$


Induction Step
This is the induction step:
Let :

$\forall x \in \set {a_1, a_2, \dotsc, a_k, a_{k + 1} }: c \divides x$
We have that:

$c \divides a_{k + 1} \implies \forall x_{k + 1} \in \Z: c \divides a_{k + 1} x_{k + 1}$
and we have that:

$\forall x \in \set {a_1, a_2, \dotsc, a_k}: c \divides x \implies \forall x_1, x_2, \dotsc, x_k \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k}$

Let $x_1, x_2, \dotsc, x_k \in \Z$ be arbitrary.
Let $d = a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k$.
Then:














\(\ds c\)

\(\divides\)







\(\ds cd\)


















\(\, \ds \land \, \)

\(\ds c\)

\(\divides\)







\(\ds a_{k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds \paren {1 \times d + x_{k + 1} a_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k + a_{k + 1} x_{k + 1} }\)









But $x_1, x_2, \dotsc, x_k \in \Z$ are arbitrary, and so:

$\forall x \in \set {a_1, a_2, \dotsc, a_k, a_{k + 1} }: c \divides x \implies \forall x_1, x_2, \dotsc, x_k, x_{k + 1} \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_k x_k + a_{k + 1} x_{k + 1} }$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 2}: \forall x \in \set {a_1, a_2, \dotsc, a_n}: c \divides x \implies \forall x_1, x_2, \dotsc, x_n \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_n x_n}$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor




