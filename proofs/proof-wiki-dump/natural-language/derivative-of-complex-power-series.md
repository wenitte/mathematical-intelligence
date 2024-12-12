# 

Source: https://proofwiki.org/wiki/Derivative_of_Complex_Power_Series



Theorem
Let $\xi \in \C$ be a complex number.
Let $\sequence {a_n}$ be a sequence in $\C$.
Let $\ds \map f z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a power series in a complex variable $z \in \C$ about $\xi$.
Let $R$ be the radius of convergence of the series defining $\map f z$.
Let $\cmod {z - \xi} < R$.

Then $f$ is complex-differentiable and its derivative is:

$\ds \map {f'} z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$


Proof 1
Define:

$\ds \map g z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$
From Radius of Convergence of Derivative of Complex Power Series, it follows that $g$ has radius of convergence $R$. 
Fix an $\epsilon > 0$ satisfying $\epsilon < R - \cmod {z - \xi}$.
Define:

$\ds M = \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^n$
Suppose that $\cmod h \le R - \epsilon - \cmod {z - \xi}$.
Then, by the Binomial Theorem and the Triangle Inequality:














\(\ds \cmod {\dfrac {\map f {z + h} - \map f z} h - \map g z}\)

\(=\)







\(\ds \cmod {\dfrac 1 h \paren {\sum_{n \mathop = 0}^\infty a_n \paren {z + h - \xi}^n - \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n} - \sum_{n \mathop = 1}^\infty n  a_n \paren {z - \xi}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 0}^\infty a_n \sum_{k \mathop = 0}^n \binom n k \paren {z - \xi}^k h^{n - k - 1} - \sum_{n \mathop = 0}^\infty \dfrac {a_n} h \paren {z - \xi}^n - \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1} }\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 1}^\infty a_n \paren {\sum_{k \mathop = 0}^n \binom n k \paren {z - \xi}^k h^{n - k - 1} - \dfrac 1 h \paren {z - \xi}^n - n \paren {z - \xi}^{n - 1} } }\)





Difference of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 2}^\infty a_n \sum_{k \mathop = 0}^{n - 2} \binom n k \paren {z - \xi}^k h^{n - k - 1} }\)





by algebraic manipulations














\(\ds \)

\(\le\)







\(\ds \cmod h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^{n - 2} \binom n k \cmod {z - \xi}^k \cmod h^{n-k-2}\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \cmod h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^{n - 2} \binom n k \cmod {z - \xi}^k \paren {R - \epsilon - \cmod {z - \xi} }^{n - k - 2}\)





by assumption














\(\ds \)

\(\le\)







\(\ds \cmod h \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^n \binom n k \cmod {z - \xi}^k \paren {R - \epsilon - \cmod {z - \xi} }^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \cmod h \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^n\)





by the binomial theorem














\(\ds \)

\(=\)







\(\ds M \cmod h\)










Letting $h \to 0$ we see that $\map {f'} z$ exists and:

$\map {f'} z = \map g z$
as desired.
$\blacksquare$


Proof 2
Lemma
$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} = 1$
$\Box$

Define:

$\ds \map g z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$
Fix an $\epsilon > 0$ satisfying $\epsilon < R - \cmod {z - \xi}$.
Let:

$\ds M = \sum_{n \mathop = 2}^\infty \dfrac {n \paren {n - 1} } 2 \cmod {a_n} \paren {R - \epsilon}^{n - 2}$
We use the Root Test to prove convergence of this series:















\(\ds \limsup_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2 \cmod {a_n} \paren {R - \epsilon}^{n - 2} }^{1/n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} \lim_{n \mathop \to \infty} \paren {\paren {R - \epsilon}^{n - 2} }^{1/n} \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {R - \epsilon} R\)









The last equality follows from the lemma and:

$\ds \limsup_{n \mathop \to \infty} \cmod {a_n}^{1/n} = \dfrac 1 R$
Suppose that $\size h \le R - \epsilon - \cmod {z - \xi}$.
It follows by the Triangle Inequality that:

$\cmod {z - \xi + h} \le \cmod {z - \xi} + \size h \le R - \epsilon$
By the Triangle Inequality, Difference of Two Powers, and Closed Form for Triangular Numbers, the following holds:














\(\ds \cmod {\dfrac {\map f {z + h} - \map f z} h - \map g z}\)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 2}^\infty a_n \paren {\dfrac {\paren {z - \xi + h}^n - \paren {z - \xi}^n} h - n \paren {z - \xi}^{n - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {a_n} \cmod {\dfrac {\paren {z - \xi + h}^n - \paren {z - \xi}^n} h - n \paren {z - \xi}^{n - 1} }\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {a_n} \cmod {\paren {\sum_{u \mathop = 0}^{n - 1} \paren {z - \xi + h}^u \paren {z - \xi}^{n - u - 1} } - n \paren {z - \xi}^{n - 1} }\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {a_n} \cmod {\sum_{u \mathop = 0}^{n - 1} \paren {\paren {z - \xi + h}^u \paren {z - \xi}^{n - u - 1} - \paren {z - \xi}^{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {a_n} \cmod {\sum_{u \mathop = 0}^{n - 1} \paren {z - \xi}^{n - u - 1} \paren {\paren {z - \xi + h}^u - \paren {z - \xi}^u } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 2}^\infty \cmod {a_n} \cmod {h \sum_{u \mathop = 0}^{n - 1} \paren {z - \xi}^{n - u - 1} \sum_{v \mathop = 0}^{u - 1} \paren {z - \xi + h}^v \paren {z - \xi}^{u - v - 1} }\)





Difference of Two Powers














\(\ds \)

\(\le\)







\(\ds \size h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{u \mathop = 0}^{n - 1} \cmod {z - \xi}^{n - u - 1} \sum_{v \mathop = 0}^{u - 1} \cmod {z - \xi + h}^v \cmod {z - \xi}^{u - v - 1}\)





triangle inequality














\(\ds \)

\(\le\)







\(\ds \size h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{u \mathop = 0}^{n - 1} \paren {R - \epsilon}^{n - u - 1} \sum_{v \mathop = 0}^{u - 1} \paren {R - \epsilon}^v \paren {R - \epsilon}^{u - v - 1}\)





by assumption and $\cmod {z - \xi + h} \le R - \epsilon$, which was proven earlier














\(\ds \)

\(=\)







\(\ds \size h \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^{n - 2} \sum_{u \mathop = 0}^{n - 1} \sum_{v \mathop = 0}^{u - 1} 1\)




















\(\ds \)

\(=\)







\(\ds \size h \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^{n - 2} \sum_{u \mathop = 0}^{n - 1} u\)




















\(\ds \)

\(=\)







\(\ds \size h \sum_{n \mathop = 2}^\infty \dfrac {n \paren {n - 1} } 2 \cmod {a_n} \paren {R - \epsilon}^{n - 2}\)





by Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds M \size h\)









Letting $h \to 0$ we see that $\map {f'} z$ exists and $\map {f'} z = \map g z$, as desired.
$\blacksquare$





