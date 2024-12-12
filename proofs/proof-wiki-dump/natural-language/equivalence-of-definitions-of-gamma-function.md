# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Gamma_Function



Theorem
The following definitions of the concept of the gamma function are equivalent:

Integral Form
The gamma function $\Gamma: \C \setminus \Z_{\le 0} \to \C$ is defined, for the open right half-plane, as:

$\ds \map \Gamma z = \map {\MM \set {e^{-t} } } z = \int_0^{\to \infty} t^{z - 1} e^{-t} \rd t$
where $\MM$ is the Mellin transform.

For all other values of $z$ except the non-positive integers, $\map \Gamma z$ is defined as:

$\map \Gamma {z + 1} = z \map \Gamma z$
Weierstrass Form
The Weierstrass form of the gamma function is:

$\ds \frac 1 {\map \Gamma z} = z e^{\gamma z} \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac z n} e^{-z / n} }$
where $\gamma$ is the Euler-Mascheroni constant.

The Weierstrass form is valid for all $\C$.

Hankel Form
The Hankel form of the gamma function is:

$\ds \frac 1 {\map \Gamma z} = \dfrac 1 {2 \pi i} \oint_\HH \frac {e^t \rd t} {t^z}$
where $\HH$ is the contour starting at $-\infty$, circling the origin in an anticlockwise direction, and returning to $-\infty$.

The Hankel form is valid for all $\C$.

Euler Form
The Euler form of the gamma function is:

$\ds \map \Gamma z = \frac 1 z \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac 1 n}^z \paren {1 + \frac z n}^{-1} } = \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \cdots \paren {z + m} }$
which is valid except for $z \in \set {0, -1, -2, \ldots}$.



This needs considerable tedious hard slog to complete it.In particular: Add Hankel form (just added to $\mathsf{Pr} \infty \mathsf{fWiki}$: 24-Jul-2016To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract individual proofs into their own pages and transclude themUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Weierstrass Form equivalent to Euler Form
First it is shown that the Weierstrass form is equivalent to the Euler form.















\(\ds \frac 1 {\map \Gamma z}\)

\(=\)







\(\ds z e^{\gamma z} \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac z n} e^{-z/n} }\)





Weierstrass Form of $\Gamma$ Function














\(\ds \)

\(=\)







\(\ds z \paren {\lim_{m \mathop \to \infty} \exp \paren {\paren {1 + \frac 1 2 + \cdots + \frac 1 m - \ln \paren m} z} } \paren {\lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac z n} e^{-z/n} } }\)





Definition of Euler-Mascheroni Constant




Combining the limits:














\(\ds \frac 1 {\map \Gamma z}\)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {\exp \paren {\paren {1 + \frac 1 2 + \cdots + \frac 1 m - \ln \paren m} z} \prod_{n \mathop = 1}^m \paren {\paren {1 + \frac z n} e^{-z/n} } }\)




















\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {\exp \paren {\paren {1 + \frac 1 2 + \cdots + \frac 1 m - \ln \paren m} z} \exp \paren {\frac {-z} 1 + \frac {-z} 2 + \cdots + \frac {-z} m} \prod_{n \mathop = 1}^m \paren {1 + \frac z n} }\)




















\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {\exp \paren {\paren {1 - 1 + \frac 1 2 - \frac 1 2 + \cdots + \frac 1 m - \frac 1 m - \ln \paren m} z} \prod_{n \mathop = 1}^m \paren {1 + \frac z n} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {m^{-z} \prod_{n \mathop = 1}^m \paren {1 + \frac z n} }\)










But:

$(1): \quad m = \dfrac {m!} {\paren {m - 1}!} = \dfrac 2 1 \cdot \dfrac 3 2 \cdots \dfrac {x + 1} x \cdots \dfrac m {m - 1}$
Each term in $(1)$ is just $\dfrac {x + 1} x = 1 + \dfrac 1 x$, so:

$\ds m = \prod_{n \mathop = 1}^{m - 1} \paren {1 + \frac 1 n}$
Thus the expression for $\dfrac 1 {\map \Gamma z}$ becomes:














\(\ds \)

\(\)







\(\ds z \lim_{m \mathop \to \infty} \paren {\prod_{n \mathop = 1}^{m - 1} \paren {1 + \frac 1 n}^{-z} \prod_{n \mathop = 1}^m \paren {1 + \frac z n} }\)




















\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {\paren {1 + \frac 1 m}^z \prod_{n \mathop = 1}^m \paren {1 + \frac 1 n}^{-z} \paren {1 + \frac z n} }\)




















\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \paren {1 + \frac 1 m}^z \lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^m \paren {1 + \frac 1 n}^{-z} \paren {1 + \frac z n}\)





Product Rule for Complex Sequences














\(\ds \)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 n}^{-z} \paren {1 + \frac z n}\)









Hence:

$\ds \map \Gamma z = \frac 1 z \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 n}^z \paren {1 + \frac z n}^{-1}$
which is the Euler form of the Gamma function.
$\Box$


Integral Form equivalent to Euler Form
This is proved in the page:

Integral Form of Gamma Function equivalent to Euler Form
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $24$




