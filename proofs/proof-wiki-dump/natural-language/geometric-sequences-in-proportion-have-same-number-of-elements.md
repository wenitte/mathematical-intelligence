# 

Source: https://proofwiki.org/wiki/Geometric_Sequences_in_Proportion_have_Same_Number_of_Elements



Theorem
Let $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers of length $n$.
Let $r$ be the common ratio of $P$.

Let $Q = \sequence {b_j}_{0 \mathop \le j \mathop \le m}$ be a geometric sequence of integers of length $m$.
Let $r$ be the common ratio of $Q$.
Let $b_0$ and $b_m$ be such that $\dfrac {b_0} {b_m} = \dfrac {a_0} {a_n}$.

Then $m = n$.

In the words of Euclid:

If between two numbers there fall numbers in continued proportion with them, then, however many numbers fall between them in continued proportion, so many will also fall in continued proportion between the numbers which have the same ratio with the original numbers.
(The Elements: Book $\text{VIII}$: Proposition $8$)


Proof
Let $S = \sequence {c_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers of length $n$ such that:

$r$ is the common ratio of $S$
$S$ is in its lowest terms.
From Geometric Sequence in Lowest Terms has Coprime Extremes, $c_0$ is coprime to $c_n$.
Then:

$\dfrac {c_0} {c_n} = \dfrac {a_0} {a_n} = \dfrac {b_0} {b_m}$
But:

$c_n = r^n c_0$
and so:

$b_m = r^n b_0$
The result follows.
$\blacksquare$


Historical Note
This proof is Proposition $8$ of Book $\text{VIII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




