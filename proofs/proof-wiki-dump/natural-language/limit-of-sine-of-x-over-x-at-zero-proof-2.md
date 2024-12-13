# 

Source: https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero/Proof_2

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\sin x} x = 1$


Proof
From Sine of Zero is Zero:

$\sin 0 = 0$
From Derivative of Sine Function:

$\map {D_x} {\sin x} = \cos x$
Then by Cosine of Zero is One:

$\cos 0 = 1$
From Derivative of Identity Function:

$\map {D_x} x = 1$

Thus L'Hôpital's Rule applies and so:

$\ds \lim_{x \mathop \to 0} \frac {\sin x} x = \lim_{x \mathop \to 0} \frac {\map {D_x} {\sin x} } {\map {D_x} x} = \lim_{x \mathop \to 0} \frac {\cos x} 1 = \frac 1 1 = 1$
$\blacksquare$





