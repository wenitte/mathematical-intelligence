# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi/Elementary_Proof



Theorem
$\dfrac \pi 4 = 1 - \dfrac 1 3 + \dfrac 1 5 - \dfrac 1 7 + \dfrac 1 9 - \cdots \approx 0 \cdotp 78539 \, 81633 \, 9744 \ldots$

That is:

$\ds \pi = 4 \sum_{k \mathop \ge 0} \paren {-1}^k \frac 1 {2 k + 1}$


Proof
First we note that:

$(1): \quad \dfrac 1 {1 + t^2} = 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n} - \dfrac {t^{4 n + 2} } {1 + t^2}$
which is demonstrated here.

Now consider the real number $x \in \R: 0 \le x \le 1$.
We can integrate expression $(1)$ with respect to $t$ from $0$ to $x$:

$(2): \quad \ds \int_0^x \frac {\d t} {1 + t^2} = x - \frac {x^3} 3 + \frac {x^5} 5 - \frac {x^7} 7 + \cdots + \frac {x^{4 n + 1} } {4 n + 1} - \map {R_n} x$
where:

$\ds \map {R_n} x = \int_0^x \frac {t^{4 n + 2} } {1 + t^2} \rd t$
From Square of Real Number is Non-Negative we have that:

$t^2 \ge 0$
and so:

$1 \le 1 + t^2$

From Relative Sizes of Definite Integrals, we have:

$\ds 0 \le \map {R_n} x \le \int_0^x t^{4 n + 2} \rd t$
that is:

$0 \le \map {R_n} x \le \dfrac {x^{4n + 3} } {4 n + 3}$

But as $0 \le x \le 1$ it is clear that:

$\dfrac {x^{4 n + 3} } {4 n + 3} \le \dfrac 1 {4 n + 3}$
So:

$0 \le \map {R_n} x \le \dfrac 1 {4 n + 3}$
From Basic Null Sequences and the Squeeze Theorem, $\dfrac 1 {4 n + 3} \to 0$ as $n \to \infty$.

This leads us directly to:

$(3): \quad \ds \int_0^x \frac {\d t} {1 + t^2} = x - \frac {x^3} 3 + \frac {x^5} 5 - \frac {x^7} 7 + \frac {x^9} 9 \cdots$

But from Derivative of Arctangent Function, we also have that:

$\dfrac \d {\d x} \arctan t = \dfrac 1 {1 + t^2}$
and thence from the Fundamental Theorem of Calculus we have:

$\ds \arctan x = \int_0^x \frac {\d t} {1 + t^2}$

From $(3)$ it follows immediately that:

$(4): \quad \arctan x =  x - \dfrac {x^3} 3 + \dfrac {x^5} 5 - \dfrac {x^7} 7 + \dfrac {x^9} 9 \cdots$

Now all we need to do is plug $x = 1$ into $(4)$.
$\blacksquare$


Comment
Note that we did not just take the Sum of Infinite Geometric Sequence:

$\dfrac 1 {1 - \paren {-t^2} } = 1 + \paren {-t^2} + \paren {-t^2}^2 + \paren {-t^2}^3 + \cdots$
and integrate it term by term, as we have not at this stage proved that this is permissible.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.10$: An elementary proof of Leibniz's Formula $\pi / 4 = 1 - \frac 1 3 + \frac 1 5 - \frac 1 7 + \ldots$




