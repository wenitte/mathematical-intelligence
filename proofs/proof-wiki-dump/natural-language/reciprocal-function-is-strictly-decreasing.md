# 

Source: https://proofwiki.org/wiki/Reciprocal_Function_is_Strictly_Decreasing



Theorem
The reciprocal function:

$\operatorname{recip}: \R \setminus \set 0 \to \R$, $x \mapsto \dfrac 1 x$
is strictly decreasing:

on the open interval $\openint 0 \to$
on the open interval $\openint \gets 0$


Proof 1
Let $x \in \openint 0 {+\infty}$.
By the definition of negative powers:

$\dfrac 1 x = x^{-1}$
From Power Rule for Derivatives:














\(\ds \frac \d {\d x} x^{-1}\)

\(=\)







\(\ds -x^{-2}\)









From Square of Real Number is Non-Negative:

$-x^{-2} < 0$
for all $x$ within the domain.
Thus from Derivative of Monotone Function, $\operatorname{recip}$ is strictly decreasing.
The proof for $x \in \openint {-\infty} 0$ is similar.
$\blacksquare$


Proof 2
Strictly Increasing on $\openint 0 \to$
Let $a, b \in \Dom {\operatorname {recip} }$ such that $a$ and $b$ are both (strictly) positive.
Let $a < b$.
Then $0 < a < b$.
By Properties of Totally Ordered Field:

$0 < b^{-1} < a^{-1}$
That is:

$\dfrac 1 b < \dfrac 1 a$
$\Box$


Strictly Increasing on $\openint \gets 0$
Let $a, b \in \Dom {\operatorname {recip} }$ such that $a$ and $b$ are both (strictly) negative.

Let $a < b$.
Then $a < b < 0$.
By Inversion Mapping Reverses Ordering in Ordered Group:

$0 < -b < -a$
By Properties of Totally Ordered Field:

$0 < \paren {-a}^{-1} < \paren {-b}^{-1}$
By Negative of Product Inverse:

$\paren {-b}^{-1} = -b^{-1}$
$\paren {-a}^{-1} = -a^{-1}$
Thus:

$0 < -a^{-1} < -b^{-1}$
By Inversion Mapping Reverses Ordering in Ordered Group:

$-\paren {-b^{-1} } < -\paren {-a^{-1} } < 0$
By Inverse of Group Inverse:

$b^{-1} < a^{-1} < 0$
Thus in particular:

$\dfrac 1 b < \dfrac 1 a$
$\blacksquare$


Warning
Though the reciprocal function is decreasing on $\openint \gets 0$ and on $\openint 0 \to$, it is not decreasing on $\openint \gets 0 \cup \openint 0 \to$.
This is because there is a nonremovable discontinuity at the origin.


Also see
Reciprocal Sequence is Strictly Decreasing
Harmonic Series is Divergent
Existence of Euler-Mascheroni Constant




