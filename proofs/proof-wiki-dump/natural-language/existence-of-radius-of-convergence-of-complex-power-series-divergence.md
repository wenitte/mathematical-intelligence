# 

Source: https://proofwiki.org/wiki/Existence_of_Radius_of_Convergence_of_Complex_Power_Series/Divergence

Theorem
Let $\xi \in \C$.
Let $\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n $ be a (complex) power series about $\xi$.
Let $R$ be the radius of convergence of $\map S z$.

Let $\map { {B_R}^-} \xi$ denote the closed $R$-ball of $\xi$.
Let $z \notin \map { {B_R}^-} \xi$.
Then $\map S z$ is divergent.


Proof
Let $z \notin \map { {B_R}^-} \xi$.
Then by definition of the closed $R$-ball of $\xi$:

$\cmod {z - \xi} > R$
where $\cmod z$ denotes the complex modulus of $z$.

By definition of radius of convergence, there exists $w \in \C$ such that:

$\cmod {w - \xi} < \cmod {z - \xi}$
and $S \paren w$ is divergent.
Then:














\(\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z - \xi}^n}^{1/n}\)

\(>\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {w - \xi}^n}^{1/n}\)




















\(\ds \)

\(\ge\)







\(\ds 1\)





$n$th Root Test: $S \paren w$ is divergent



From the $n$th Root Test, it follows that $\map S z$ is divergent.
$\blacksquare$


Also see
Existence of Interval of Convergence of Power Series for a proof of the same result in real numbers.




