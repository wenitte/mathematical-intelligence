# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Pi

Theorem
Let $x \in \R$ be a real number.
Let $\cos x$ be the cosine of $x$.

Then:

$\forall n \in \Z: \cos n \pi = \paren {-1}^n$
or:










\(\ds \forall m \in \Z: \, \)



\(\ds \cos 2 m \pi\)

\(=\)







\(\ds 1\)
















\(\ds \forall m \in \Z: \, \)



\(\ds \cos \paren {2 m + 1} \pi\)

\(=\)







\(\ds -1\)











Proof
Recall the definition of the cosine function:

$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} = 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \cdots$

From Cosine of Zero is One, we have that:

$\cos 0 = 1$
This takes care of the case $n = 0$.

From Sine and Cosine are Periodic on Reals:

$\cos \paren {x + 2 \pi}= \cos x$
and thus:

$\forall m \in \Z: \cos \paren {x + 2 m \pi} = \cos x$.
The above observations combine to establish that:

$\cos 2 m \pi = 1$

Again from Sine and Cosine are Periodic on Reals:

$\cos \paren {x + \pi} = -\cos x$
Combining this with the above reasoning, it follows that:

$\forall m \in \Z: \cos \paren {2 m + 1} \pi = -1$

Note that $\forall n \in \Z$:

If $n$ is even, it is of the form $n = 2m$ for some $m \in \Z$, and so $\cos n \pi = 1$
If $n$ is odd, it is of the form $n = 2 m + 1$ for some $m \in \Z$, and so $\cos n \pi = -1$

This leads to the desired conclusion:

$\cos n \pi = \paren {-1}^n$
$\blacksquare$


Also see
Sine of Integer Multiple of Pi




