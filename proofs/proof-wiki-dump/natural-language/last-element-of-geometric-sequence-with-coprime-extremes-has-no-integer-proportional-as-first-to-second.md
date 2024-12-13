# 

Source: https://proofwiki.org/wiki/Last_Element_of_Geometric_Sequence_with_Coprime_Extremes_has_no_Integer_Proportional_as_First_to_Second



Theorem
Let $G_n = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers such that $a_0 \ne 1$.
Let $a_0 \perp a_n$, where $\perp$ denotes coprimality.
Then there does not exist an integer $b$ such that:

$\dfrac {a_0} {a_1} = \dfrac {a_n} b$

In the words of Euclid:

If there be as many numbers as we please in continued proportion, and the extremes of them be prime to one another, the last will not be to any other number as the first is to the second.
(The Elements: Book $\text{IX}$: Proposition $17$)


Proof
Aiming for a contradiction, suppose there exists $b$ such that $\dfrac {a_0} {a_1} = \dfrac {a_n} b$.
Then:

$\dfrac {a_0} {a_n} = \dfrac {a_1} b$
By Ratios of Fractions in Lowest Terms:

$a_0 \divides a_1$
where $\divides$ denotes divisibility.
From Divisibility of Elements in Geometric Sequence of Integers:

$a_0 \divides a_n$
But $a_0 \perp a_n$.
From this contradiction it follows that there can be no such $b$.
$\blacksquare$


Historical Note
This proof is Proposition $17$ of Book $\text{IX}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions




