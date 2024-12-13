# 

Source: https://proofwiki.org/wiki/Indexed_Summation_over_Translated_Interval



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a$ and $b$ be integers.
Let $\closedint a b$ be the integer interval between $a$ and $b$.
Let $f: \closedint a b \to \mathbb A$ be a mapping.
Let $c\in\Z$ be an integer.

Then we have an equality of indexed summations:

$\ds \sum_{i \mathop = a}^b f(i) = \sum_{i \mathop = a + c}^{b + c} \map f {i - c}$


Proof
The proof goes by induction on $b$.


Basis for the Induction
Let $b < a$.
Then:

$b + c < a + c$
Thus both indexed summations are zero.
This is our basis for the induction.


Induction Step
Let $b \ge a$.
We have:














\(\ds \sum_{i \mathop = a + c}^{b + c} \map f {i - c}\)

\(=\)







\(\ds \sum_{i \mathop = a + c}^{b + c - 1} \map f {i - c} + \map f {b + c - c}\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map f i  + \map f b\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^b \map f i\)





Definition of Indexed Summation



By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$


Also see
Change of Variables in Indexed Summation




