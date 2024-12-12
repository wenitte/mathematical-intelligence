# 

Source: https://proofwiki.org/wiki/Cosine_of_Sum/Proof_2

Theorem
$\map \cos {a + b} = \cos a \cos b - \sin a \sin b$


Proof
Recall the analytic definitions of sine and cosine:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}$
$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}$
Let:














\(\ds \map g a\)

\(=\)







\(\ds \map \sin {a + b} - \sin a \cos b - \cos a \sin b\)




















\(\ds \map h a\)

\(=\)







\(\ds \map \cos {a + b} - \cos a \cos b + \sin a \sin b\)









Let us differentiate these with respect to $a$, keeping $b$ constant.
Then from Derivative of Sine Function and Derivative of Cosine Function, we have:














\(\ds \map {g'} a\)

\(=\)







\(\ds \map \cos {a + b} - \cos a \cos b + \sin a \sin b = \map h a\)




















\(\ds \map {h'} a\)

\(=\)







\(\ds -\map \sin {a + b} + \sin a \cos b + \cos a \sin b = -\map g a\)









Hence:














\(\ds \map {D_a} {\paren {\map g a}^2 + \paren {\map h a}^2}\)

\(=\)







\(\ds 2 \map g a \map {g'} a + 2 \map h a \map {h'} a\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus from Derivative of Constant:

$\forall a \in \R: \map g a^2 + \map h a^2 = c$
In particular, it is true for $a = 0$, and so:

$\map g 0^2 + \map h 0^2 = 0$
So:

$\map g a^2 + \map h a^2 = 0$
But from Square of Real Number is Non-Negative:

$\map g a^2 \ge 0$
and:

$\map h a^2 \ge 0$
So it follows that:

$\map g a = 0$
and:

$\map h a = 0$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (2)$




