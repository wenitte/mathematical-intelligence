# 

Source: https://proofwiki.org/wiki/General_Periodicity_Property



Theorem
Let $f: \R \to \R$ be a periodic real function.
Let $L$ be a periodic element of $f$.

Then:

$\forall n \in \Z: \forall x \in X: \map f x = \map f {x + n L}$

That is, after every distance $L$, the function $f$ repeats itself.


Corollary
Let $f: \R \to \R$ be a real function.

Then $L$ is a periodic element of $f$ if and only if:

$\forall x \in \R: \map f {x \bmod L} = \map f x$
where $x \bmod L$ is the modulo operation.


Proof
There are two cases to consider: either $n$ is not negative, or it is negative.
Since the Natural Numbers are Non-Negative Integers, the case where $n \ge 0$ will be proved using induction.


Case 1
Basis for the Induction
The case for which $n = 0$ is trivial, because:

$x + 0 \cdot L = x$


Induction Hypothesis
For some $n \in \Z_{\ge 0}$, suppose that:

$\map f x = \map f {x + n L}$


Induction Step
For the induction step, let $n \to n + 1$.
Then:














\(\ds \map f {x + \paren {n + 1} L}\)

\(=\)







\(\ds \map f {x + \paren {L + n L} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {x + L} + n L}\)





Real Addition is Associative














\(\ds \)

\(=\)







\(\ds \map f {x + L}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of Periodic Element





Case 2
If $n < 0$, then:














\(\ds \map f {x + n L}\)

\(=\)







\(\ds \map f {\paren {x + n L} - n L}\)





Negative of Negative Number is Positive and Case 1














\(\ds \)

\(=\)







\(\ds \map f {x + \paren {n L - n L} }\)





Real Addition is Associative














\(\ds \)

\(=\)







\(\ds \map f x\)










Combining the results above, it is seen that for all $n \in \Z$:

$\map f x = \map f {x + n L}$
$\blacksquare$





