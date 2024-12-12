# 

Source: https://proofwiki.org/wiki/Exponential_of_Series_Equals_Infinite_Product

Theorem
Let $\sequence {z_n}$ be a sequence of complex numbers.
Suppose $\ds \sum_{n \mathop = 1}^\infty z_n$ converges to $z \in \C$.

Then $\ds \prod_{n \mathop = 1}^\infty \map \exp {z_n}$ converges to $\exp z$.


Proof
Let $S_n$ be the $n$th partial sum of $\ds \sum_{n \mathop = 1}^\infty z_n$.
Let $P_n$ be the $n$th partial product of $\ds \prod_{n \mathop = 1}^\infty \map \exp {z_n}$.
By Exponential of Sum, $\map \exp {S_n} = P_n$ for all $n \in \N$.
By Exponential Function is Continuous, $\ds \lim_{n \mathop \to \infty} \map \exp {S_n} = \exp z$.
By Exponential of Complex Number is Nonzero, $\exp z \ne 0$.
Thus $\ds \lim_{n \mathop \to \infty} P_n = \exp z \ne 0$.
$\blacksquare$


Also see
Logarithm of Infinite Product of Complex Numbers




