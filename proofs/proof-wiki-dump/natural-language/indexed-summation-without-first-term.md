# 

Source: https://proofwiki.org/wiki/Indexed_Summation_without_First_Term



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a$ and $b$ be integers with $a \le b$.
Let $\closedint a b$ be the integer interval between $a$ and $b$.
Let $f: \closedint a b \to \mathbb A$ be a mapping.

Then we have an equality of indexed summations:

$\ds \sum_{i \mathop = a}^b \map f i = \map f a + \sum_{i \mathop = a + 1}^b \map f {\map \sigma i}$

This article, or a section of it, needs explaining.In particular: What is $\sigma$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
The proof goes by induction on $b$.


Basis for the Induction
Let $b = a$.
We have:














\(\ds \sum_{i \mathop = a}^a \map f i\)

\(=\)







\(\ds \map f a\)





Indexed Summation over Interval of Length One














\(\ds \)

\(=\)







\(\ds \map f a + 0\)





Identity Element of Addition on Numbers














\(\ds \)

\(=\)







\(\ds \map f a + \sum_{i \mathop = a + 1}^a \map f i\)





Definition of Indexed Summation, $a + 1 > a$



This is our basis for the induction.


Induction Step
Let $b \ge a + 1$.
We have:














\(\ds \sum_{i \mathop = a}^b \map f i\)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map f i + \map f b\)





Definition of Indexed Summation, $b \ge a$














\(\ds \)

\(=\)







\(\ds \map f a + \sum_{i \mathop = a + 1}^{b - 1} \map f i + \map f b\)





induction hypothesis














\(\ds \)

\(=\)







\(\ds \map f a + \sum_{i \mathop = a + 1}^b \map f i\)





Definition of Indexed Summation, $b \ge a + 1$



By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$


Also see
Indexed Summation over Adjacent Intervals




