# 

Source: https://proofwiki.org/wiki/Niven%27s_Theorem



Theorem
Consider the angles $\theta$ in the range $0 \le \theta \le \dfrac \pi 2$.
The only values of $\theta$ such that both $\dfrac \theta \pi$ and $\sin \theta$ are rational are:

$\theta = 0: \sin \theta = 0$
$\theta = \dfrac \pi 6: \sin \theta = \dfrac 1 2$
$\theta = \dfrac \pi 2: \sin \theta = 1$


Proof
We will prove that if both $\dfrac \theta \pi$ and $\cos \theta$ are rational then:

$\theta \in \set{ {0, \dfrac \pi 3, \dfrac \pi 2} }$


Lemma
For any integer $n \ge 1$, there exists a polynomial $\map {F_n} x$ such that:

$\map {F_n} {2 \cos t} = 2 \cos n t$
In addition:

$\deg F_n = n$
and $F_n$ is a monic polynomial with integer coefficients.

$\Box$

Suppose that $\dfrac \theta \pi$ is rational, meaning:

$\theta = \dfrac {2 \pi k} n$
where $k, n \in \Z$ and $n \ge 1$.
Suppose also that $\cos \theta \in \Q$.
Denoting $c = 2 \cos \theta \in \Q$, we get:

$\map {F_n} c = \map {F_n} {2 \cos \dfrac {2 \pi k} n} = 2 \map \cos {2 \pi k} = 2$
So $c$ is a rational root of $\map {F_n} x - 2$, which is a monic polynomial with integer coefficients.
By Rational Root Theorem, $c$ must be an integer.
But:

$\size c = \size {2 \cos \theta} \le 2$
so:

$c \in \set {-2, -1, 0, 1, 2}$
Assuming that $0 \le \theta \le \dfrac \pi 2$, we get that:

$\theta \in \set {0, \dfrac \pi 3, \dfrac \pi 2}$
Thus for any $\theta$ in the range $0 \le \theta \le \dfrac \pi 2$ such that both $\dfrac \theta \pi$ and $\cos \theta$ are rational, then:

$\theta \in \set {0, \dfrac \pi 3, \dfrac \pi 2}$

Instead of the above, suppose that:

$0 \le \alpha \le \dfrac \pi 2$
and both of $\dfrac \alpha \pi$ and $\sin \alpha$ are rational.
Then we can denote $\theta = \dfrac \pi 2 - \alpha$ and get that:

$0 \le \theta \le \dfrac \pi 2$
$\dfrac \theta \pi \in Q$
$\cos \theta \in \Q$
So:

$\dfrac \pi 2 - \alpha = \theta \in \set {0, \dfrac \pi 3, \dfrac \pi 2}$
therefore:

$\alpha \in \set {0, \dfrac \pi 6, \dfrac \pi 2}$
$\blacksquare$


Source of Name
This entry was named for Ivan Morton Niven.
It is suspected that this result is considerably older, and may date back as far as Charles Hermite.





