# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Indexed_Summations/Rectangular_Domain



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a, b, c, d \in \Z$ be integers.
Let $\closedint a b$ denote the integer interval between $a$ and $b$.
Let $D = \closedint a b \times \closedint c d$ be the cartesian product.
Let $f: D \to \mathbb A$ be a mapping

Then we have an equality of indexed summations:

$\ds \sum_{i \mathop = a}^b \sum_{j \mathop = c}^d \map f {i, j} = \sum_{j \mathop = c}^d \sum_{i \mathop = a}^b \map f {i, j}$


Outline of Proof
We use induction on $d$. In the induction step, we use Indexed Summation of Sum of Mappings.


Proof
The proof proceeds by induction on $d$.


Basis for the Induction
Let $d < c$.
Then the indexed summation in the right hand side is zero.
By Indexed Summation of Zero, so is the left hand side.
This is our basis for the induction.


Induction Step
Let $d \ge c$.
We have:














\(\ds \sum_{i \mathop = a}^b \sum_{j \mathop = c}^d \map f {i, j}\)

\(=\)







\(\ds \sum_{i \mathop = a}^b \paren {\sum_{j \mathop = c}^{d - 1} \map f {i, j} + \map f {i, d} }\)





Definition of Indexed Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^b \sum_{j \mathop = c}^{d - 1} \map f {i, j} + \sum_{i \mathop = a}^b \map f {i, d}\)





Indexed Summation of Sum of Mappings














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c}^{d - 1} \sum_{i \mathop = a}^b \map f {i, j} + \sum_{i \mathop = a}^b \map f {i, d}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = c}^d \sum_{i \mathop = a}^b \map f {i, j}\)





Definition of Indexed Summation



By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$


Also see
Exchange of Order of Summations over Finite Sets




