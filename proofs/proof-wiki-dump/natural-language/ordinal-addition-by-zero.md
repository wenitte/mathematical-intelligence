# 

Source: https://proofwiki.org/wiki/Ordinal_Addition_by_Zero



Theorem
Let $x$ be an ordinal.
Let $\O$ be the zero ordinal.

Then:

$x + \O = x = \O + x$
where $+$ denotes ordinal addition.


Proof
By definition of ordinal addition, it is immediate that:

$x + \O = x$
$\Box$

We shall use Transfinite Induction on $x$ to prove $\O + x = x$


Base Case
The induction basis $x = \O$ comes down to:

$\O + \O = \O$
This follows by the above.
$\Box$


Inductive Case
For the induction step, suppose that $\O + x = x$.
Then, also:














\(\ds x^+\)

\(=\)







\(\ds \paren {\O + x}^+\)





Substitutivity of Equality














\(\ds \)

\(=\)







\(\ds \O + x^+\)





Definition of Ordinal Addition



$\Box$


Limit Case
Finally, the limit case.
So let $x$ be a limit ordinal, and suppose that:

$\forall y \in x: \O + y = y$

Now we have:














\(\ds x\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} y\)





Limit Ordinal Equals its Union














\(\ds \)

\(=\)







\(\ds \bigcup_{y \mathop \in x} \paren {\O + y}\)





Indexed Union Equality














\(\ds \)

\(=\)







\(\ds \O + x\)





Definition of Ordinal Addition



$\Box$

Hence the result, by Transfinite Induction.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.3$




