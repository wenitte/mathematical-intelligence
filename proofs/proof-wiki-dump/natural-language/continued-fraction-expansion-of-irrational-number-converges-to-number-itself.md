# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Number_Converges_to_Number_Itself

Theorem
Let $x$ be an irrational number.

Then the continued fraction expansion of $x$ converges to $x$.


Proof
Let $\sequence {a_0, a_1, \ldots}$ be its continued fraction expansion.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be its numerators and denominators.
Then $C_n = p_n / q_n$ is the $n$th convergent.
By Accuracy of Convergents of Continued Fraction Expansion of Irrational Number, for $n \ge 2$:

$\size {x - \dfrac {p_n} {q_n} } < \dfrac 1 {q_n q_{n + 1} }$
By Lower Bounds for Denominators of Simple Continued Fraction:

$q_n q_{n + 1} \ge n$ for $n \ge 5$
So from Basic Null Sequences and the Squeeze Theorem:

$\dfrac 1 {q_n q_{n + 1} } \to 0$
as $n \to \infty$.
Thus $C_n = p_n / q_n$ converges to $x$.
That is, $(a_0, a_1, \ldots)$ converges to $x$.
$\blacksquare$


Also see
Irrational Number is Limit of Unique Simple Infinite Continued Fraction




