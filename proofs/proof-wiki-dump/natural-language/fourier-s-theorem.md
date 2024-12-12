# 

Source: https://proofwiki.org/wiki/Fourier%27s_Theorem



Theorem
Let $\alpha \in \R$ be a real number.
Let $\map f x$ be a real function which is defined and bounded on the interval $\openint \alpha {\alpha + 2 \pi}$.
Let $f$ satisfy the Dirichlet conditions on $\openint \alpha {\alpha + 2 \pi}$:




\((\text D 1)\)  

$:$  













$f$ is absolutely integrable   

  


\((\text D 2)\)  

$:$  













$f$ has a finite number of local maxima and local minima   

  


\((\text D 3)\)  

$:$  













$f$ has a finite number of discontinuities, all of them finite   

  


Outside the interval $\openint \alpha {\alpha + 2 \pi}$, let $f$ be periodic and defined such that:

$\map f x = \map f {x + 2 \pi}$

Let $f$ be defined by the Fourier series:

$(1): \quad \ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
such that:

$\ds a_n = \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x$
$\ds b_n = \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \sin n x \rd x$

Then for all $a \in \R$, $(1)$ converges to the sum:

$\ds \frac 1 2 \paren {\lim_{x \mathop \to a^+} \map f x + \lim_{x \mathop \to a^-} \map f x}$
where the $\lim$ symbols denote the limit from the right and the limit from the left.


Integral Form
This theorem can often be seen presented in the form:
Let $f: \R \to \R$ be a real function which satisfies the Dirichlet conditions on $\R$.
Then:

$\dfrac {\map f {t^+} + \map f {t^-} } 2 = \ds \int_{-\infty}^\infty e^{2 \pi i t s} \paren {\int_{-\infty}^\infty e^{-2 \pi i t s} \map f t \rd t} \rd s$
where:

$\map f {t^+}$ and $\map f {t^-}$ denote the limit from above and the limit from below of $f$ at $t$.


Proof
Lemma 1
Let $\psi$ be a real function defined on a closed interval $\closedint a b$.
Let $\psi$ be piecewise continuous with one-sided limits on $\closedint a b$.
Then:

$\ds \lim_{N \mathop \to \infty} \int_a^b \map \psi u \sin N u \rd u = 0$


Lemma 2
Let $\psi$ be a real function defined on a half-open interval $\hointl 0 a$.
Let $\psi$ and its derivative $\psi'$ be piecewise continuous with one-sided limits on $\hointl 0 a$.
Let $\map \psi u$ have a right-hand derivative at $u = 0$.

Then:

$\ds \lim_{N \mathop \to \infty} \int_0^a \map \psi u \frac {\sin N u} u \rd u = \frac \pi 2 \map \psi {0^+}$
where $\map \psi {0^+}$ denotes the limit of $\psi$ at $0$ from the right.


Lemma 3
Let $\psi$ be a real function defined on an open interval $\openint a b$.
Let $\psi$ and its derivative $\psi'$ be piecewise continuous with one-sided limits on $\openint a b$.
Let $\map \psi u$ have both right-hand derivative and left-hand derivative at a point $u = x$ where $x \in \openint a b$.

Then:

$\ds \lim_{N \mathop \to \infty} \int_a^b \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u = \frac \pi 2 \paren {\map \psi {x^+} + \map \psi {x^-} }$
where:

$\map \psi {x^+}$ denotes the limit of $\psi$ at $x$ from the right
$\map \psi {x^-}$ denotes the limit of $\psi$ at $x$ from the left.


Main Theorem
Let $\map {S_N} x$ denote the first $N$ terms of the Fourier series:

$(2): \quad \map {S_N} x = \ds \frac {a_0} 2 + \sum_{n \mathop = 1}^N \paren {a_n \cos n x + b_n \sin n x}$
where:

$(3): \quad \ds a_n = \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x$
$(4): \quad \ds b_n = \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \sin n x \rd x$

Substituting from $(3)$ and $(4)$ into $(2)$ and applying Integral of Integrable Function is Additive:

$\map {S_N} x = \ds \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f u \paren {\frac 1 2 + \sum_{n \mathop = 1}^N \paren {\cos n x \cos n u + \sin n x \sin n u} } \rd u$
Now we have:














\(\ds \dfrac 1 2 + \ds \sum_{n \mathop = 1}^N \paren {\cos n x \cos n u + \sin n x \sin n u}\)

\(=\)







\(\ds \dfrac 1 2 + \ds \sum_{n \mathop = 1}^N \map \cos { n \paren {u - x} }\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {\paren {N + \frac 1 2} \paren {u - x} } } {2 \, \map \sin {\frac 1 2 \paren {u - x} } }\)





Lagrange's Cosine Identity



Hence:

$\ds \map {S_N} x = \int_\alpha^{\alpha + 2 \pi} \map \psi u \frac {\map \sin {\paren {N + \frac 1 2} \paren {u - x} } } {2 \, \map \sin {\frac 1 2 \paren {u - x} } } \rd u$
where:

$\map \psi u = \dfrac 1 \pi \map f u \dfrac {\frac 1 2 \paren {u - x} } {\sin \frac 1 2 \paren {u - x} }$

We have that $\map f u$ satisfies the Dirichlet conditions on $\openint \alpha {\alpha + 2 \pi}$.



This article needs proofreading.In particular: In the source book given, when initially stated, this theorem was as given here. When it is proved in the next chapter, it is given as being piecewise smooth. I believe one implies the other, but not sure. Initial thoughts are that piecewise smooth is stronger.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

Hence $f$ is piecewise smooth on $\openint \alpha {\alpha + 2 \pi}$.
That is, $f$ has right-hand derivative and left-hand derivative at all $x$ in $\openint \alpha {\alpha + 2 \pi}$.
Thus at the point $u = x$, $f$ has right-hand derivative and left-hand derivative, and so does $\map \psi u$.
So by Fourier's Theorem: Lemma 3:

$\ds \lim_{n \mathop \to N} \map {S_N} x = \frac \pi 2 \paren {\map \psi {x^+} + \map \psi {x^-} }$

Now:

$\map \psi {x^+} = \ds \frac 1 \pi \map f {x^+} \lim_{u \mathop \to x} \dfrac {\frac 1 2 \paren {u - x} } {\sin \frac 1 2 \paren {u - x} } = \frac 1 \pi \map f {x^+}$
and:

$\map \psi {x^-} = \ds \frac 1 \pi \map f {x^-} \lim_{u \mathop \to x} \dfrac {\frac 1 2 \paren {u - x} } {\sin \frac 1 2 \paren {u - x} } = \frac 1 \pi \map f {x^-}$
and so:

$\ds \lim_{n \mathop \to N} \map {S_N} x = \frac 1 2 \paren {\lim_{x \mathop \to a^+} \map f x + \lim_{x \mathop \to a^-} \map f x}$
$\blacksquare$


Also known as
Fourier's Theorem is also known as Dirichlet's Theorem for 1-Dimensional Fourier Series.


Source of Name
This entry was named for Joseph Fourier.


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter Two: $\S 3$. A Fourier Theorem: Theorem $1$




