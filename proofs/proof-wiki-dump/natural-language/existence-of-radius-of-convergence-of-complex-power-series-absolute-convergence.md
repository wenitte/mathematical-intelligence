# 

Source: https://proofwiki.org/wiki/Existence_of_Radius_of_Convergence_of_Complex_Power_Series/Absolute_Convergence

Theorem
Let $\xi \in \C$.
Let $\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n $ be a complex power series about $\xi$.
Let $R$ be the radius of convergence of $\map S z$.

Let $\map {B_R} \xi$ denote the open $R$-ball of $\xi$.
Let $z \in \map {B_R} \xi$.
Then $\map S z$ converges absolutely.

If $R = +\infty$, we define $\map {B_R} \xi = \C$.


Proof
Let $z \in \map {B_R} \xi$.
By definition of the open $R$-ball of $\xi$:

$\cmod {z - \xi} < R$
where $\cmod z$ denotes the complex modulus of $z$.
By definition of radius of convergence, it follows that $\map S z$ converges.

Suppose $R$ is finite.
Let $\epsilon = R - \cmod {z - \xi} > 0$.
Now, let $w \in \map {B_R} \xi$ be a complex number such that $R - \cmod {w - \xi} = \dfrac \epsilon 2$.
Such a $w$ exists because, if at a loss, we can always let $w = \xi + R - \dfrac \epsilon 2$.
If $R = +\infty$, then let $w \in C$ be any complex number such that $\cmod {z - \xi} < \cmod {w - \xi}$.
Then:














\(\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z - \xi}^n}^{1/n}\)

\(<\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {w - \xi}^n}^{1/n}\)





as $\cmod {z - \xi} < \cmod {w - \xi}$, we have $\cmod {z - \xi}^n < \cmod {w - \xi}^n$














\(\ds \)

\(\le\)







\(\ds 1\)





$n$th Root Test: $\map S w$ is not divergent



From the $n$th Root Test, it follows that $\map S z$ converges absolutely.
$\blacksquare$


Also see
Existence of Interval of Convergence of Power Series for a proof of the same result in real numbers.




