# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Power_Series_over_Factorial/Real_Case

Theorem
Let $\xi \in \R$ be a real number.
Let $\ds \map f x = \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!}$.

Then $\map f x$ converges for all $x \in \R$.

That is, the interval of convergence of the power series $\ds \sum_{n \mathop = 0}^\infty \frac {\paren {x - \xi}^n} {n!}$ is $\R$.


Proof
This is a power series in the form $\ds \sum_{n \mathop= 0}^\infty a_n \paren {x - \xi}^n$ where $\sequence {a_n} = \sequence {\dfrac 1 {n!} }$.
Applying Radius of Convergence from Limit of Sequence, we find that:














\(\ds \lim_{n \mathop \to \infty} \size {\dfrac {a_{n + 1} } {a_n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\dfrac {\dfrac 1 {\paren {n + 1}!} } {\dfrac 1 {n!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\dfrac {n!} {\paren {n + 1}!} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\dfrac 1 {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Reciprocals is Null Sequence



Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.3$




