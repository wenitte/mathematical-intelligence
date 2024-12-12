# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Real_Numbers



Theorem













\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {\pi^2} } \paren {1 - \dfrac {x^2} {4 \pi^2} } \paren {1 - \dfrac {x^2} {9 \pi^2} } \dotsm\)









for all $x \in \R$.


Proof 1
For $x \in \R$ and $n \in \N$, let:

$\ds \map {I_n} x = \int_0^{\pi / 2} \cos {x t} \cos^n t \rd t $
Observe that:

$\map {I_0} 0 = \dfrac {\pi} 2$
and:














\(\ds \map {I_0} x\)

\(=\)







\(\ds \int_0^{\pi / 2} \cos {x t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x \map \sin {\frac {\pi x} 2}\)









which yields:

$(1): \quad \map \sin {\dfrac {\pi x} 2} = \dfrac {\pi x} 2 \dfrac {\map {I_0} x} {\map {I_0} 0}$

Integrating by parts twice with $n \ge 2$, we have:














\(\ds x \map {I_n} x\)

\(=\)







\(\ds n \int_0^{\pi / 2} \sin {x t} \cos^{n - 1} t \sin t \rd t\)




















\(\ds x^2 \map {I_n} x\)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos{x t} \paren {\cos^n t - \paren {n - 1} \cos^{n - 2} t \sin^2 t} \rd t\)




















\(\ds \)

\(=\)







\(\ds n \int_0^{\pi / 2} \cos{x t} \paren {n \cos^n t - \paren {n - 1} \cos^{n - 2} t} \rd t\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds n^2 \map {I_n} x - n \paren {n - 1} \map {I_{n - 2} } x\)









which yields the reduction formula:

$n \paren {n - 1} \map {I_{n - 2} } x = \paren {n^2 - x^2} \map {I_n} x$
Substituting $x = 0$ we obtain:

$n \paren {n - 1} \map {I_{n - 2} } 0 = n^2 \map {I_n} 0$
From Shape of Cosine Function, it is clear that $\map {I_n} 0 > 0$ for $n \ge 0 $.
Therefore we can divide the two equations to get:

$(2): \quad \dfrac {\map {I_{n - 2} } x} {\map {I_{n - 2} } 0} = \paren {1 - \dfrac {x^2} {n^2} } \dfrac {\map {I_n} x} {\map {I_n} 0}$

By Relative Sizes of Definite Integrals we have:














\(\ds \size {\map {I_n} 0 - \map {I_n} x}\)

\(=\)







\(\ds \int_0^{\pi / 2} \paren {1 - \cos {x t} } \cos^n t \rd t\)





the integral is non-negative














\(\ds \)

\(\le\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t^2 \cos^n t \rd t\)





Cosine Inequality: $1 - \cos x t \le \dfrac {x^2 t^2} 2$














\(\ds \)

\(\le\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t \tan t \cos^n t \rd t\)





Tangent Inequality: $t \le \tan t$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \int_0^{\pi / 2} t \sin t \cos^{n - 1} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 n} \int_0^{\pi / 2} \cos^n t \rd t\)





Integration by Parts: $u = t$ and $\rd v = \sin t \cos^{n - 1} t \rd t$














\(\ds \)

\(=\)







\(\ds \frac {x^2} {2 n} \map {I_n} 0\)









which yields the inequality:

$\size {1 - \dfrac {\map {I_n} x} {\map {I_n} 0} } \le \dfrac {x^2} {2 n}$
It follows from Squeeze Theorem that:

$\ds (3): \quad \lim_{n \mathop \to \infty} \frac {\map {I_n} x} {\map {I_n} 0} = 1$

Consider the equation, for even $n$:

$\ds \map \sin {\frac {\pi x} 2} = \frac {\pi x} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_n} x} {\map {I_n} 0}$
This is true for $n = 0$ by $(1)$.
Suppose it is true for some $n = k$.
Then:














\(\ds \map \sin {\frac {\pi x} 2}\)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^{k / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_k} x} {\map {I_k} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^{\paren {k + 2} / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_{k + 2} } x} {\map {I_{k + 2} } 0}\)





by $(2)$



So it is true for all even $n$ by induction.
Taking the limit as $n \to \infty$ we have:














\(\ds \map \sin {\frac {\pi x} 2}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\pi x} 2 \prod_{i \mathop = 1}^{n / 2} \paren {1 - \frac {x^2} {\paren {2 i}^2} } \frac {\map {I_n} x} {\map {I_n} 0}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {x^2} {\paren {2 i}^2} } \lim_{n \mathop \to \infty} \frac {\map {I_n} x} {\map {I_n} 0}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac {\pi x} 2 \prod_{i \mathop = 1}^\infty \paren {1 - \frac {x^2} {\paren {2 i}^2} }\)





by $(3)$



or equivalently, letting $\dfrac {\pi x} 2 \mapsto x$:

$\ds \sin x = x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }$
$\blacksquare$


Proof 2
Using De Moivre's Formula:

$\sin x = \dfrac {\left({\cos \dfrac x n + i \sin \dfrac x n}\right)^n - \left({\cos \dfrac x n - i \sin \dfrac x n}\right)^n} {2i}$
The difference between two $n$th powers can be extracted into linear factors using $n$th roots of unity.

For large $n$, we can replace:

$\cos \dfrac x n$ by $1$
$\sin \dfrac x n$ by $\dfrac x n$

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 3
We have that $\sin x$  has a power series representation:

$\sin x = x - \dfrac {x^3} {3!} + \dfrac {x^5} {5!} - \dfrac {x^7} {7!} + \cdots$
The roots of sine are the numbers $k \pi$, where $k$ is any integer.
From the Polynomial Factor Theorem, the following might be true:

$\ds \sin x = A x \prod \paren {1 - \frac x {k \pi} }$
where the product is taken over all $n \in \Z \setminus \set 0$, and $A$ is some constant.
The intuition is as follows.














\(\ds \sin x\)

\(=\)







\(\ds \ldots \paren {1 - \frac x {2 \pi} } \paren {1 - \frac x \pi} A x \paren {1 + \frac x \pi} \paren {1 + \frac x {2 \pi} } \cdots\)




















\(\ds \)

\(=\)







\(\ds A x \paren {1 - \frac {x^2} {\pi^2} } \paren {1 - \frac {x^2} {2^2 \pi^2} } \paren {1 - \frac {x^2} {3^2 \pi^2} } \cdots\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\sin x} x\)

\(=\)







\(\ds A \paren {1 - \frac {x^2} {\pi^2} } \paren {1 - \frac {x^2} {2^2 \pi^2} } \paren {1 - \frac {x^2} {3^2 \pi^2} } \cdots\)





for $x \ne 0$



From Limit of $\dfrac {\sin x} x$ at Zero:

$\dfrac {\sin x} x \to 1$ as $x \to 0$
Letting $x$ tend to $0$ in the above equation implies that $A = 1$.
We now formalize the above claims.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 4
For $x \in \R$ and $n \in \N_{> 0}$, let:

$\map {f_n} x = \dfrac 1 2 \paren {\paren {1 + \dfrac x n}^n - \paren {1 - \dfrac x n}^n }$
Then $\map {f_n} x = 0$ if and only if:














\(\ds \paren {1 + \frac x n}^n\)

\(=\)







\(\ds \paren {1 - \frac x n}^n\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 + \frac x n\)

\(=\)







\(\ds \paren {1 - \frac x n} e^{2 \pi i \frac k n}\)





for $k \in \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds n \frac {e^{2 \pi i \frac k n} - 1} {e^{2 \pi i \frac k n} + 1}\)




















\(\ds \)

\(=\)







\(\ds n i \, \map \tan {\frac {k \pi} n }\)





Euler's Tangent Identity




Hence the roots of $\map {f_{2 m + 1} } x$ are:

$\paren {2 m + 1} i \, \map \tan {\dfrac {k \pi} {2 m + 1} }$
for $-m \le k \le m$.

Observe that $\map {f_{2 m + 1} } x$ is a polynomial of degree $2 m + 1$. 
Then for some constant $C$, we have:














\(\ds \map {f_{2 m + 1} } x\)

\(=\)







\(\ds C x \prod_{\substack {k \mathop = - m \\ k \mathop \ne 0} }^m \paren {1 - \frac x {\paren {2 m + 1} i \, \map \tan {k \pi / \paren {2 m + 1} } } }\)





Polynomial Factor Theorem














\(\ds \)

\(=\)







\(\ds C x \prod_{k \mathop = 1}^m \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }\)





Tangent Function is Odd




It can be seen from the Binomial Theorem that the coefficient of $x$ in $\map {f_{2 m + 1} } x$ is $1$.
Hence $C = 1$, and we obtain:

$\ds \map {f_{2 m + 1} } x = x \prod_{k \mathop = 1}^m \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } }$

Let $l < m$.
Then:

$\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {\paren {2 m + 1}^2 \map {\tan^2} {k \pi / \paren {2 m + 1} } } } \le \map {f_{2 m + 1} } x$
Taking the limit as $m \to \infty$ we have:














\(\ds \lim_{m \mathop \to \infty} x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} \paren {\frac {k \pi / \paren {2 m + 1} } {\map \tan {k \pi / \paren {2 m + 1} } } }^2 }\)

\(\le\)







\(\ds \frac 1 2 \paren {e^x - e^{-x} }\)





Definition of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} }\)

\(\le\)







\(\ds \sinh x\)





Limit of $\dfrac {\tan x} x$ at Zero and Definition of Hyperbolic Sine




By Tangent Inequality, we have:

$\map \tan {\dfrac {k \pi} {2 m + 1} } \ge \dfrac {k \pi} {2 m + 1}$
and hence:

$\ds \map {f_{2 l + 1} } x \le x \prod_{k \mathop = 1}^l \paren {1 + \frac {x^2} {k^2 \pi^2} } \le \sinh x$

Taking the limit as $l \to \infty$, we have by the Squeeze Theorem:

$\ds x \prod_{k \mathop = 1}^\infty \paren {1 + \frac {x^2} {k^2 \pi^2} } = \sinh x$
Substituting $x \mapsto i x$, we obtain:

$\ds \sin x = x \prod_{k \mathop = 1}^\infty \paren {1 - \frac {x^2} {k^2 \pi^2} }$
$\blacksquare$





