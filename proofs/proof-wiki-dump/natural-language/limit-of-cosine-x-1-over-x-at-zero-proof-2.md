# 

Source: https://proofwiki.org/wiki/Limit_of_(Cosine_(X)_-_1)_over_X_at_Zero/Proof_2

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x = 0$


Proof
This proof assumes the truth of the Derivative of Cosine Function:

From Cosine of Zero is One:

$\cos 0 = 1$
From Derivative of Cosine Function:

$\map {D_x} {\cos x} = -\sin x$
and by Derivative of Constant:

$\map {D_x} {-1} = 0$
So by Sum Rule for Derivatives:

$\map {D_x} {\cos x - 1} = -\sin x$
By Sine of Zero is Zero:

$\sin 0 = 0$
From Derivative of Identity Function:

$\map {D_x} x = 1$

Thus L'Hôpital's Rule applies and so:

$\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x = \lim_{x \mathop \to 0} \frac {-\sin x} 1 = \frac {-0} 1 = 0$
$\blacksquare$





