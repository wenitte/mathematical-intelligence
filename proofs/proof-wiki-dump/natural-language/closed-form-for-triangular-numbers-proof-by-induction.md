# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Proof_by_Induction



Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
Proof by induction:

Basis for the Induction
When $n = 1$, we have:

$\ds \sum_{i \mathop = 1}^1 i = 1$
Also:

$\dfrac {n \paren {n + 1} } 2 = \dfrac {1 \cdot 2} 2 = 1$
This is our base case.


Induction Hypothesis
$\forall k \in \N: k \ge 1: \ds \sum_{i \mathop = 1}^k i = \frac {k \paren {k + 1} } 2$
This is our induction hypothesis.
It is to be demonstrated that:

$\ds \sum_{i \mathop = 1}^{k + 1} i = \frac {\paren {k + 1} \paren {k + 2} } 2$


Induction Step
This is our induction step:
Consider $n = k + 1$.
By the properties of summation:

$\ds \sum_{i \mathop = 1}^{k + 1} i = \sum_{i \mathop = 1}^k i + k + 1$
Using the induction hypothesis this can be simplified to:














\(\ds \frac {k \paren {k + 1} } 2 + k + 1\)

\(=\)







\(\ds \frac {k \paren {k + 1} + 2 k + 2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {k^2 + 3 k + 2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1} \paren {k + 2} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1} \paren {\paren {k + 1} + 1} } 2\)










Hence the result by induction.
$\blacksquare$


Also see
This is usually the first proof by induction that a student mathematician encounters.
The second one is often Proof by Induction of Sum of Sequence of Squares.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 20 \beta$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: $\S 3.9$: Example
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.2 \ \text {a)}$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Problems $1.1$: $1 \ \text {(a)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): induction: 1. (in mathematics)
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.2$: Mathematical induction: Theorem $1.30$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): induction: 1. (in mathematics)
For a video presentation of the contents of this page, visit the Khan Academy.




