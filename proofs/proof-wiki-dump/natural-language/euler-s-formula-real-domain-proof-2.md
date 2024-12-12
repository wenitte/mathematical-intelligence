# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain/Proof_2

Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Proof
This:

$e^{i \theta} = \cos \theta + i \sin \theta$
is logically equivalent to this:

$\dfrac {\cos \theta + i \sin \theta} {e^{i \theta} } = 1$
for every $\theta$.
Note that the left expression is nowhere undefined.

Taking the derivative of this:














\(\ds \dfrac \d {\d \theta} e^{-i \theta} \paren {\cos \theta + i \sin \theta}\)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta} + \paren {-i e^{-i \theta} } \paren {\cos \theta + i \sin \theta}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta - i \cos \theta - i^2 \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta - i \cos \theta + \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










Thus the expression, as a function of $\theta$, is constant and so yields the same value for every $\theta$.
We know the value at at least one point, that is, when $\theta = 0$:

$\dfrac {\cos 0 + i \sin 0} {e^{0 i}} = \dfrac {1 + 0} 1 = 1$
Thus it is $1$ for every $\theta$, which verifies the above.
Hence the result.
$\blacksquare$





