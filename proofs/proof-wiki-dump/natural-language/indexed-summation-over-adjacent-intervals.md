# 

Source: https://proofwiki.org/wiki/Indexed_Summation_over_Adjacent_Intervals



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a, b, c$ be integers.
Let $\closedint a c$ denote the integer interval between $a$ and $c$.
Let $b \in \closedint {a - 1} c$.
Let $f : \closedint a c \to \mathbb A$ be a mapping.

Then we have an equality of indexed summations:

$\ds \sum_{i \mathop = a}^c \map f i = \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = b + 1}^c \map f i$


Proof
The proof goes by induction on $b$.


Basis for the Induction
Let $b = a-1$.
We have:














\(\ds \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = b+1}^c \map f i\)

\(=\)







\(\ds 0 + \sum_{i \mathop = b + 1}^c \map f i\)





Definition of Indexed Summation, $b = a - 1$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^c \map f i\)





Identity Element of Addition on Numbers



This is our basis for the induction.


This article, or a section of it, needs explaining.In particular: What's the induction hypothesis?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Induction Step
Let $a \le b \le c$.
We have:














\(\ds \sum_{i \mathop = a}^b \map f i + \sum_{i \mathop = b + 1}^c \map f i\)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map f i + \map f b + \sum_{i \mathop = b + 1}^c \map f i\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^{b - 1} \map f i + \sum_{i \mathop = b}^c \map f i\)





Indexed Summation without First Term



By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$


Also see
Sum over Disjoint Union of Finite Sets




