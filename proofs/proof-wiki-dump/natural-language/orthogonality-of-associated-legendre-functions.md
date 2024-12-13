# 

Source: https://proofwiki.org/wiki/Orthogonality_of_Associated_Legendre_Functions


This page has been identified as a candidate for refactoring of advanced complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
It is demonstrated that the associated Legendre functions are orthogonal in two different ways and their normalization constant for each is derived.




Theorem (orthogonality relation 1)
Let $l \in \N_{>0}$.
Let:

$\forall m: 0 \le m \le l: \map {P_l^m} x := \dfrac {\paren {-1}^m} {2^l l!} \paren {1 - x^2}^{\frac m 2} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {\paren {x^2 - 1}^l}$

This article, or a section of it, needs explaining.In particular: One supposes that the above are the solutions of the associated Legendre equation? I need to do some research.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then:

$\ds \int_{-1}^1 \map {P_l^m} x \map {P_k^m} x \rd x = \frac 2 {2 l + 1} \frac {\paren {l + m} !} {\paren {l - m} !} \delta_{l k}$
where $\delta_{l k}$ denotes the Kronecker delta function.


Proof
The associated Legendre functions are regular solutions to the associated Legendre differential equation:














\(\ds \)

\(\)







\(\ds \frac {\d} {\d x} \paren {\paren {1 - x^2} \frac {\d} {\d x} \map {P_n} x} + n \paren {n + 1} \map {P_n} x\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - x^2} \frac {\d^2 \map {P_n} x} {\d x^2} - 2 x \frac {\d \map {P_n} x} {\d x} + n \paren {n + 1} \map {P_n} x\)




















\(\ds \)

\(=\)







\(\ds 0\)









The equation is an example of a more general class of equations known as the Sturm-Liouville equations.
Using  Sturm-Liouville theory, one can show the orthogonality of functions with the same superscript $m$ and different subscripts:

$\ds K_{k l}^m = \int_{-1}^1 \map {P_k^m} x \map {P_l^m} x \rd x = 0$ for $k \ne l$
However, one can find $K_{k l}^m$ directly from the above definition, whether or not $k = l$.
This involves evaluating the overlap integral directly from the definition of the associated Legendre functions:

$P_l^{m'}$
These functions can be expressed in terms of the Legendre polynomial $P_l$:

$\map {P_n} x = \dfrac 1 {2^n n!} \dfrac {\d^n \paren {x^2 - 1}^n} {\d x^n}$
through Rodrigues' Formula:

$\forall m: 0 \le m \le l: \map {P^m_l} x = \paren {1 - x^2}^{m/2} \dfrac {\d^m \map {P_l} x} {\d x^m}$
Inserting the definition of the function twice into the definition of $K_{k l}^m$:

$\ds K_{k l}^m = \frac 1 {2^{k + l} k! l!} \int_{-1}^1 \paren {\paren {1 - x^2}^m \frac {\d^{k + m} } {\d x^{k + m} } \paren {\paren {x^2 - 1}^k} } \paren {\frac {\d^{l + m} } {\d x^{l + m} } \paren {\paren {x^2 - 1}^l} } \rd x$
$k$ and $l$ occur symmetrically.
Without loss of generality, let $l \ge k$.
By Integration by Parts:

$\ds \int_{-1}^1 u v' \rd x = \bigintlimits {u v} {-1} 1 - \int_{-1}^1 v u' \rd x$
$l + m$ times, where:

$u = \paren {1 - x^2}^m \dfrac {\d^{k + m} } {\d x^{k + m} } \paren {\paren {x^2 - 1}^k}$
$v' = \dfrac {\d^{l + m}} {\d x^{l + m}} \paren {\paren {x^2 - 1}^l}$

For each of the first $m$ integrations by parts, $u$ in the $\bigintlimits {u v} {-1} 1$ term contains the factor $\paren {1 - x^2}$, so the term vanishes.
For each of the remaining $l$ integrations, $v$ in that term contains the factor $\paren {x^2 - 1}$ so the term also vanishes.
This means:

$ \ds K_{k l}^m = \frac {\paren {-1}^{l + m} } {2^{k + l} k! l!} \int_{-1}^1 \paren {x^2 - 1}^l \frac {\d^{l + m} } {\d x^{l + m} } \paren {\paren {1 - x^2}^m \frac {\d^{k + m} } {\d x^{k + m} } \paren {\paren {x^2 - 1}^k} } \rd x$
Expand the second factor using Leibniz's Rule:

$\ds \frac {\d^{l + m} } {\d x^{l + m} } \paren {\paren {1 - x^2}^m \frac {\d^{k + m} } {\d x^{k + m} } \paren {\paren {x^2 - 1}^k} } = \sum_{r \mathop = 0}^{l + m} \binom {l + m} r \frac {\d^r} {\d x^r} \paren {\paren {1 - x^2}^m} \frac {\d^{l + k + 2 m - r} } {\d x^{l + k + 2 m - r} } \paren {\paren {x^2 - 1}^k}$
The leftmost derivative in the sum is non-zero only when $r \le 2 m$ (remembering that $m \le l$).
The other derivative is non-zero only when  $k + l + 2 m - r \le 2 k$, that is, when $r \ge 2 m + l - k$.
Because $l \ge k$, these two conditions imply that the only non-zero term in the sum occurs when $r = 2 m$ and $l = k$. 
So:

$\ds K_{k l}^m = \paren {-1}^l \delta_{k l} \frac {\paren {-1}^{l + m} } {2^{2 l} \paren {l!}^2} \binom {l + m} {2 m} \int_{-1}^1 \paren {x^2 - 1}^l \frac {\d^{2 m} } {\d x^{2 m} } \paren {\paren {1 - x^2}^m} \frac {\d^{2 l} } {\d x^{2 l} } \paren {\paren {1 - x^2}^l} \rd x$
where $\delta_{k l}$ is the Kronecker delta that shows the orthogonality of functions with $l \ne k$.
The factor $-1^l$ at the front of $K_{k l}^m$ comes from switching the sign of $x^2 - 1$ inside $\paren {x^2 - 1}^l$.
To evaluate the differentiated factors, expand $\paren {1 - x^2}^k$ using the Binomial Theorem: 

$\ds \paren {1 - x^2}^k = \sum_{j \mathop = 0}^k \binom k j \paren {-1}^{k - j} x^{2 \paren {k - j} }$
The only term that survives differentiation $2^k$ times is the  $x^{2 k}$ term, which after differentiation gives:

$\ds \paren {-1}^k \binom k 0 2 k! = \paren {-1}^k \paren {2 k}!$
Therefore:

$(1): \quad \ds K_{k l}^m = \paren {-1}^l \delta_{k l} \frac 1 {2^{2 l} \paren {l!}^2} \frac {\paren {2 l}! \paren {l + m}!} {\paren {l - m} !} \int_{-1}^1 \paren {x^2 - 1}^l \rd x$
Evaluate :

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x$
by a change of variable: 

$x = \cos \theta \implies \d x = -\sin \theta \rd \theta$
and

$1 - x^2 = \paren {\sin \theta}^2$
Thus:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^{l + 1} \int_\pi^0 \paren {\sin \theta}^{2 l + 1} \rd \theta$
where we recall that:

$-1 = \cos \pi$ and $1 = \cos 0$
The limits were switched from $\pi \to 0$ and $0 \to \pi$, which accounts for one minus sign.
Integration of:

$\ds \frac {\map \d {\sin^{n - 1} \theta \cos \theta} } {\d \theta} = \paren {n - 1} \sin^{n - 2} \theta - n \sin^n \theta$
gives:

$\ds \int_0^\pi \sin^n \theta \rd \theta = \frac {\bigintlimits {-\sin^{n - 1} \theta \cos \theta} 0 \pi} n + \frac {\paren {n - 1} } n \int_0^\pi \sin^{n - 2} \theta \rd \theta$
Since:

$\ds \bigintlimits {-\sin^{n - 1} \theta \cos \theta} 0 \pi = 0$ for $n > 1$
it follows that:

$\ds \int_0^\pi \sin^n \theta \rd \theta = \frac {\paren {n - 1} } n \int_0^\pi \sin ^{n - 2} \theta \rd \theta$
for $n > 1$.
Applying this result to:

$\ds \int_0^\pi \paren {\sin \theta}^{2 l + 1} \rd \theta$
and changing the variable back to $x$ yields:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = - \frac {2 l} {2 l + 1} \int_{-1}^1 \paren {x^2 - 1}^{l - 1} \rd x$
for $l \ge 1$.
Using this recursively:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^l \paren {\frac {2 l} {2 l + 1} \frac {2 \paren {l - 1} } {2 l - 1} \frac {2 \paren {l - 2} } {2 l - 3} \cdots \frac 2 3} \int_{-1}^1 \rd x$
Noting:

$\ds \int_{-1}^1 \rd x = 2$
and:














\(\ds \frac {2 l} {2 l + 1} \frac {2 \paren {l - 1} } {2 l - 1} \frac {2 \paren {l - 2} } {2 l - 3} \cdots \frac 2 3\)

\(=\)







\(\ds \frac {2^l l!} {\paren {2 l + 1} \paren {2 l - 1} \paren {2 l - 3} \cdots 3}\)




















\(\ds \)

\(=\)







\(\ds \frac{2^l l!} {\frac {\paren {2 l + 1} !} {2^l l!} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2^{2 l} \paren {l!}^2} {\paren {2 l + 1} !}\)









it follows that:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^l \ \frac {2^{2 l + 1} \paren {l!}^2} {\paren {2 l + 1} !}$

Applying this result to equation $(1)$:

$\ds K_{k l}^m = \delta_{k l} \frac 1 {2^{2 l} \paren {l!}^2} \frac {\paren {2 l} ! \paren {l + m}!} {\paren {l - m} !} \frac{2^{2 l + 1} \paren {l!}^2} {\paren {2 l + 1} !} = \delta _{k l} \frac 2 {2 l + 1}
\frac {\paren {l + m} !} {\paren {l - m} !}$
$\blacksquare$



This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: ExtractYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Let new associated Legendre functions be defined by a constant times the old ones:

$\overline {\map {P^m_l} x} := \sqrt {\dfrac {2 l + 1} 2 \dfrac {\paren {l - m} !} {\paren {l + m} !} } \map {P^m_l} x$

Then the overlap integral becomes:

$\ds K^m_{k l} = \int_{-1}^1 \overline {\map {P^m_k} x} \overline {\map {P^m_l} x} \rd x = \delta_{k l}$
That is, the new functions are normalized to unity.


Comments

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract into whatever pagesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The orthogonality of the associated Legendre functions can be demonstrated in different ways.
The proof presented above assumes only that the reader is familiar with basic calculus and it is therefore accessible to the widest possible audience.
However, as mentioned, their orthogonality also follows from the fact that the associated Legendre equation belongs to a family known as the Sturm-Liouville Equations.

It is possible to demonstrate their orthogonality using principles associated with operator calculus.
Let us write:

$\map {P^m_l} x := \map w x^{1/2} \nabla^m \map {P_l} x$
where:

$\nabla := \dfrac {\d} {\d x}$
and:

$\map w x := \paren {1 - x^2}^m$
Clearly, the case $m = 0$ is:

$\ds \map {P^0_l} x = \paren {1 - x^2}^{0/2} \, \nabla^0 \map {P_l} x = \map {P_l} x$

The proof given above starts out by implicitly proving the anti-Hermiticity of $\nabla$.
Indeed, noting that $\map w x$ is a function with:

$\map w 1 = w \paren {-1} = 0$ for $m \ne 0$
it follows from partial integration that:














\(\ds \braket {w g} {\nabla f}\)

\(:=\)







\(\ds \int_{-1}^1 \map w x \map g x \paren {\nabla \map f x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {\map w x \map g x \map f x} {-1} 1 - \int_{-1}^1 \paren {\nabla \map w x \map g x} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\braket {\map \nabla {w g} } f\)










Hence

$\nabla^\dagger = -\nabla \implies \paren {\nabla^\dagger}^m = \paren {-1}^m \nabla^m$
To demonstrate orthogonality of the associated Legendre polynomials, we use a result from the theory of orthogonal polynomials.
Namely, a Legendre polynomial of order $l$ is orthogonal to any polynomial $\Pi_p$ of order $p$ lower than $l$. 
In bra-ket notation:

$\braket {\Pi_p} {P_l} = 0$ if $\map \OO {\Pi_p} \equiv p < l$
Knowing this:

$\ds \int_{-1}^1 \map {P_l^m} x \map {P_k^m} x \rd x \equiv \braket {w \nabla^m P_k} {\nabla^m P_l} = \paren {-1}^m \braket {\nabla^m \paren {w \nabla^m P_k} } {P_l}$
The bra is a polynomial of order $k$, because:














\(\ds \map \OO {\nabla^m P_k}\)

\(=\)







\(\ds k - m\)


















\(\, \ds \land \, \)

\(\ds \map \OO {\map w x}\)

\(=\)







\(\ds 2 m\)














\(\ds \leadsto \ \ \)





\(\ds \map \OO {\map w x \nabla^m \map {P_k} x}\)

\(=\)







\(\ds k + m\)














\(\ds \leadsto \ \ \)





\(\ds \map \OO {\map {\nabla^m} {\map w x \nabla^m \map {P_k} x} }\)

\(=\)







\(\ds k\)









where it was used that:

$m$ times differentiation of a polynomial lowers its order by $m$
and that:

the order of a product of polynomials is the product of the orders.

Since we assumed that $k \le l$, the integral is non-zero only if $k = l$.
Hence it follows readily that the associated Legendre polynomials of equal superscripts and non-equal subscripts are orthogonal.
However, the hard work (given above) of computing the normalization for the case $k = l$  remains to be done.


Theorem (orthogonality relation 2)
$\ds \int_{-1}^1 \frac {\map {P_l^m} x \map {P_l^n} x} {\paren {1 - x^2} } \rd x = \delta_{m n} \frac {\paren {l + m} !} {m \paren {l - m} !}$ for $m \ne 0 $
where:

$\map {P_l^m} x = \dfrac {\paren {-1}^m} {\paren {2^l l!} } \paren {1 - x^2}^{m/2} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l$ for $0 \le m \le l$


Proof
Let:














\(\ds T_l^{m n}\)

\(=\)







\(\ds \int_{-1}^1 \frac {\map {P_l^m} x \map {P_l^n} x} {\paren {1 - x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{m + n} } {\paren {2^l l!}^2} \int_{-1}^1 \paren {\paren {1 - x^2}^{\frac {\paren {m + n} } 2 - 1} \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \paren {\frac {\d^{l + n} } {\d x^{l + n} } \paren {x^2 - 1}^l} \rd x\)










The functions $\paren {x^2 - 1}^k$ are even functions.
Therefore their $j$th order derivatives are even or odd functions according as $j$ is even or odd.
Therefore, if $m$ or $n$ is even but the other is odd, then one of the two factors in curly braces in the preceding expression is an even function, and the other is an odd function.
This makes the entire integrand an odd function.
When integrated between the limits that are negatives of each other, it yields $0$, as it should, since $\delta_{m n} = 0$.
So we need to consider further only even integrands, for which $m$ and $n$ are either both even or both odd.
In this case all exponents in the integrand are non-negative integers (except when $m = n = 0$).
The integrand can be integrated by parts $l + n$ times, the first factor in curly braces and its derivatives being identified as u and the second factor as $v'$ in the formula:

$\ds \int_{-1}^1 u v' \rd x = u v \Big|_{-1}^1 - \int_{-1}^1 v u' \rd x$
Since $m$ and $n$ occur symmetrically, Without loss of generality, assume $n \le m$.
For the first $n-1$ applications of Integration by Parts, the $u v$ term vanishes at the limits because $u$ includes at least one factor of $1-x^2$.
The same also is true for the $n$th integration, unless $n = m$, in which case the $u v$ term is:

$S_l^m = \intlimits {\dfrac {\paren {-1}^{m + 1} } {\paren {2^l l!}^2} \dfrac {\d^{m - 1} } {\d x^{m - 1} } \paren {\paren {1 - x^2}^{m - 1} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \paren {\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l} } {-1} 1$
For the remaining $l$ integrations the $u v$ term vanishes at the limits because $v$ includes at least one factor $1 - x^2$ (and perhaps $u$ does also).
The result is:

$\ds T_l^{m n} = \delta_{m n} S_l^m + \frac {\paren {-1}^{l + m} } {\paren {2^l l!}^2} \int_{-1}^1 \paren {x^2 - 1}^l \frac {\d^{l + n} } {\d x^{l + n} } \paren {\paren {1 - x^2}^{\frac {\paren {m + n} }2 - 1} \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \rd x$
The highest power of $x$ in the binomial expansion of $\paren {x^2 - 1}^l$ is $2 l$.
After $l + m$ derivatives of it are taken, the highest power is $l - m$.
The highest power of $x$ in the expansion of $\paren {1 - x^2}^{\frac {\paren {m + n} } 2 - 1}$ is $m + n - 2$.
Therefore the highest power in the expression:

$\paren {1 - x^2}^{\frac {\paren {m + n} } 2 - 1} \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l$
is $l + n - 2$.
After $l + n - 2$ derivatives of it are taken, the highest power is $0$.
That is, the expression is a constant.
Taking the remaining $2$ derivatives causes the integrand to vanish.
Therefore:

$T_l^{m n} = \delta_{m n} S_l^m = \intlimits {\delta_{m n} \dfrac 1 {\paren {2^l l!}^2} \dfrac {\d^{m - 1 } } {\d x^{m - 1} } \paren {\paren {x^2 - 1}^{m - 1} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \paren {\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l} } {-1} 1$
Since this function is odd, we need evaluate it only at its upper limit $x = 1$ and double the result.
An expression of the form $\paren {x^2 - 1}^k = \paren {x - 1}^k \paren {x + 1}^k$ can be differentiated using Leibniz's Rule.
Only one term in the sum is of interest here, namely the one in which $\paren {x - 1}^k$ is differentiated exactly $k$ times so that no factors of $x-1$ remain.  
If it is differentiated fewer times, then it vanishes at $x = 1$.
If it is differentiated more times, then it vanishes everywhere. 
So, ignoring terms with factors of $x - 1$, we have (from right to left in the preceding expression):














\(\ds \frac {\d^l} {\d x^l} \paren {x^2 - 1}^l\)

\(=\)







\(\ds \paren {\frac {\d^l} {\d x^l} \paren {x - 1}^l} \paren {x + 1}^l = l! \paren {x + 1}^l\)





which equals $2^l l!$, when $x = 1$














\(\ds \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l\)

\(=\)







\(\ds \frac {\paren {l + m} !} {l! \, m!} \paren {\frac {\d^l} {\d x^l} \paren {x - 1}^l} \paren {\frac {\d^m} {\d x^m} \paren {x + 1}^l}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {l + m} !} {l! \, m!} \paren {l!} \paren {\frac {l!} {\paren {l - m} !} \paren {x + 1}^{l - m} }\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m} ! \frac {l!} {m! \paren {l - m} !} \paren {x + 1}^{l - m}\)
























\(\ds \frac {\d^{m - 1} } {\d x^{m - 1} } \paren {\paren {x^2 - 1}^{m - 1} \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l}\)

\(=\)







\(\ds \paren {l + m} ! \frac {l!} {m! \paren {l - m} !} \frac {\d^{m - 1} } {\d x^{m - 1} } \paren {\paren {x - 1}^{m - 1} \paren {x + 1}^{l - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m} ! \frac {l!} {m! \paren {l - m} !} \paren {m - 1} ! \paren {x + 1}^{l - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m} ! \frac {l!} {m \paren {l - m} !} \paren {x + 1}^{l - 1}\)









which equals:

$2^{l - 1} \paren {l + m} ! \dfrac {l!} {m \paren {l - m} !}$
when $x = 1$.














\(\ds T_l^{m n}\)

\(=\)







\(\ds 2 \delta_{m n} \frac 1 {\paren {2^l l!}^2} \paren {2^{l - 1} \paren {l + m} ! \frac {l!} {m \paren {l - m} !} } \paren {2^l l!}\)




















\(\ds \)

\(=\)







\(\ds \delta_{m n} \frac {\paren {l + m} !} {m \paren {l - m} !}\)









which has been doubled to include the lower limit $x = -1$.
$\blacksquare$

When $n = m = 0$:














\(\ds T_l^{00}\)

\(=\)







\(\ds \int_{-1}^1 \frac {\map {P_l^0} x \map {P_l^0} x} {\paren {1 - x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {2^l l!}^2} \int_{-1}^1 \paren {\paren {1 - x^2}^{-1} \frac {\d^l} {\d x^l} \paren {x^2 - 1}^l} \paren {\frac {\d^l} {\d x^l} \paren {x^2 - 1}^l} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {2^l l!}^2} \int_{-1}^1 \frac 1 2 \paren {\paren {x + 1}^{-1} - \paren {x - 1}^{-1} } \paren {\frac {\d^l} {\d x^l} \paren {x^2 - 1}^l}^2 \rd x\)









When expanded in powers of $\paren {x + 1}$ and $\paren {x - 1}$ by using Leibniz's Rule, the expression:

$\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l$
includes:

exactly one term: $\paren {x - 1}^l$ having no factor $\paren {x + 1}$
and:

exactly one term: $\paren {x + 1}^l$ having no factor $\paren {x - 1}$.
Therefore in a Laurent series expansion of the integrand about either $x = 1$ or $x = -1$ all terms except one have non-negative exponents, and their integral is finite. 
The one remaining term in the integrand is a constant multiple of $1 / \paren {x + 1}$ or $1 / \paren {x - 1}$.
So its integral logarithmically diverges at the limits, making $T_l^{00}$ infinite.





