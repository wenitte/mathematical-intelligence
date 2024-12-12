# 

Source: https://proofwiki.org/wiki/User:Dan_Nessett/Sandboxes/Sandbox_1

It is demonstrated that the associated Legendre functions are orthogonal in two different ways and their normalization constant for each is derived.



Theorem (orthogonality relation 1)
$\ds \int_{-1}^1 \map {P_l^m} x \map {P_k^m} x \rd x = \frac 2 {2 l + 1} \frac {\paren {l + m}!} {\paren {l - m}!} \delta_{l k}$
where: 

$\map {P_l^m} x = \dfrac {\paren {-1}^m} {2^l l!} \paren {1 - x^2}^{\dfrac m 2} \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {\paren {x^2 - 1}^l}$
for $0 \le m \le l$.


Proof
The associated Legendre functions are regular solutions to the associated Legendre differential equation:














\(\ds \map {\dfrac \d {\d x} } {\paren {1 - x^2} \dfrac \d {\d x} \map {P_n} x} + n \paren {n + 1} \map {P_n} x\)

\(=\)







\(\ds \paren {1 - x^2} \frac {\d^2 \map {P_n} x} {\d x^2} - 2 x \frac {\d \map {P_n} x} {\d x} + n \paren {n + 1} \map {P_n} x\)




















\(\ds \)

\(=\)







\(\ds 0\)









The equation is an example of a more general class of equations known as the Sturm-Liouville equations.
Using Sturm-Liouville theory, one can show the orthogonality of functions with the same superscript $m$ and different subscripts:

$\ds K_{k l}^m = \int_{-1}^1 \map {P_k^m} x \map {P_l^m} x \rd x = 0$
if $k \ne l$
However, one can find $K_{k l}^m$ directly from the above definition, whether or not $k = l$.
This involves evaluating the overlap integral directly from the definition of the associated Legendre functions: ${P_\ell}^m$.
These functions can be expressed in terms of the Legendre polynomial $P_\ell$:
$\map {P_n} x = {1 \over 2^n n!} \dfrac {\d^n \paren {x^2 - 1}^n} {\d x^n}$
through the following equation (Rodrigues' formula):

$\map { {P_\ell}^m} x = \paren {1 - x^2}^{m/2} \dfrac {\d^m \map {P_\ell} x} {\d x^m}$
for $0 \le m \le \ell$.
Indeed, inserting the definition of the function twice:

$\ds K_{k l}^m = \dfrac 1 {2^{k + l} k! l!} \int_{-1}^1 \paren {\paren {1 - x^2}^m \dfrac {\d^{k + m} } {\d x^{k + m} } \paren {\paren {x^2 - 1}^k} } \paren {\dfrac {\d^{l + m} } {\d x^{l + m} } \paren {\paren {x^2 - 1}^l } } \rd x$
Since $k$ and $l$ occur symmetrically, one can without loss of generality assume that $l \ge k$.
Use the well-known integration-by-parts equation

$\ds \int_{-1}^1 u\; v' \rd x = \bigintlimits {u v} {-1} 1 - \int_{-1}^1 v u' \rd x$
$l + m$ times, where the curly brackets in the integral indicate the factors, the first being $u$ and the second $v'$.
For each of the first $m$ integrations by parts, $u$ in the $\bigintlimits {u v} {-1} 1$ term contains the factor $\paren {1 - x^2}$, so the term vanishes.
For each of the remaining $l$ integrations, $v$  in that term contains the factor $\paren {x^2 - 1}$ so the term also vanishes.
This means:

$\ds K_{k l}^m = \frac {\paren {-1}^{l + m} } {2^{k + l} k! l!} \int_{-1}^1 \paren {x^2 - 1}^l \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {\paren {1 - x^2}^m \map {\dfrac {\d^{k + m} } {\d x^{k + m} } } {\paren {x^2 - 1}^k} } \rd x$
Expand the second factor using Leibniz' rule:

$\ds \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {\paren {1 - x^2}^m \map {\dfrac {\d^{k + m} } {\d x^{k + m} } } {\paren {x^2 - 1}^k} } = \sum_{r \mathop = 0}^{l + m} \binom {l + m} r \map {\dfrac {\d^r} {\d x^r} } {\paren {1 - x^2}^m} \map {\dfrac {\d^{l + k + 2 m - r} } {\d x^{l + k + 2 m - r} } } {\paren {x^2 - 1}^k}$
The leftmost derivative in the sum is non-zero only when $r \le 2 m$ (remembering that $m \le l$).
The other derivative is non-zero only when $k + l + 2 m - r \le 2 k$, that is, when $r \ge 2 m + l - k$.
Because $l \ge k$ these two conditions imply that the only non-zero term in the sum occurs when $r = 2 m$ and $l = k$. 
So:

$\ds K_{k l}^m = \paren {-1}^l \delta_{k l} \dfrac {\paren {-1}^{l + m} } {2^{2 l} \paren {l!}^2} \dbinom {l + m} {2 m} \int_{-1}^1 \paren {x^2 - 1}^l \map {\dfrac {\d^{2 m} } {\d x^{2 m} } } {\paren {1 - x^2}^m} \map {\dfrac {\d^{2 l} } {\d x^{2 l} } } {\paren {1 - x^2}^l} \rd x$
where $\delta_{k l}$ is the Kronecker delta that shows the orthogonality of functions with $l \ne k$.
The factor $\paren {-1}^l$ at the front of $K_{k l}^m$ comes from switching the sign of $x^2 - 1$ inside $\paren {x^2 - 1}^l$.
To evaluate the differentiated factors, expand $\paren {1 - x^2}^k$ using the binomial theorem: 

$\ds \paren {1 - x^2}^k = \sum_{j \mathop = 0}^k \binom k j \paren {-1}^{k-j} x^{2 \paren {k - j} }$
The only term that survives differentiation $2 k$ times is the $x^{2 k}$ term, which after differentiation gives

$\paren {-1}^k \dbinom k 0 \paren {2 k}! = \paren {-1}^k \paren {2 k}!$
Therefore:

$(1): \quad \ds K_{k l}^m = \paren {-1}^l \delta_{k l} \dfrac 1 {2^{2 l} \paren {l!}^2} \dfrac {\paren {2 l}! \paren {l + m}!} {\paren {l - m}!} \int_{-1}^1 \paren {x^2 - 1}^l \rd x$
Evaluate 

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x$
by a change of variable: 

$x = \cos \theta \implies \d x = -\sin \theta \rd \theta$
and:

$1 - x^2 = \paren {\sin \theta}^2$
Thus:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^{l + 1} \int_\pi^0 \paren {\sin \theta}^{2 l + 1} \rd \theta$
where we recall that:

$-1 = \cos \pi$
and:

$1 = \cos 0$
The limits were switched from:

$\ds \pi \to  0$
and:

$0 \to \pi$
which accounts for one minus sign.
Integration of:

$\dfrac {\d \paren {\sin^{n - 1} \theta \cos \theta} } {\d \theta} = \paren {n - 1} \sin^{n - 2} \theta - n \sin^n \theta$
gives:

$\ds \int_0^\pi \sin^n \theta \rd \theta = \dfrac {\bigintlimits {-\sin^{n - 1} \theta \cos \theta} 0 \pi} n + \dfrac {\paren {n - 1} } n \int_0^\pi \sin^{n - 2} \theta \rd \theta$
Since:

$\bigintlimits {-\sin^{n - 1} \theta \cos \theta} 0 \pi = 0$
for $n > 1$, it follows that:

$\ds \int_0^\pi \sin^n \theta \rd \theta = \dfrac {\paren {n - 1} } n \int_0^\pi \sin^{n - 2} \theta \rd \theta$
for $n > 1$.
Applying this result to 

$\ds \int_0^\pi \paren {\sin \theta}^{2 l + 1} \rd \theta$
and changing the variable back to $x$ yields: 

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = -\frac {2 l} {2 l + 1} \int_{-1}^1 \paren {x^2 - 1}^{l - 1} \rd x$
for $l \ge 1$.
Using this recursively:

$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^l \paren {\dfrac {2 l} {2 l + 1} \dfrac {2 \paren {l - 1} } {2 l - 1} \dfrac {2 \paren {l - 2} } {2 l - 3} \cdots \frac 2 3} \int_{-1}^1 \rd x$
Noting:

$\ds \int_{-1}^1 \rd x = 2$
and

$\dfrac {2 l} {2 l + 1} \dfrac {2 \paren {l - 1} } {2 l - 1} \dfrac {2 \paren {l - 2} } {2 l - 3} \cdots \dfrac 2 3 = \dfrac {2^ll!} {\paren {2 l + 1} \paren {2 l - 1} \paren {2 l - 3} \cdots 3} = \dfrac {2^l l!} {\dfrac {\paren {2 l + 1}!} {2^l l!} } = \dfrac {2^{2 l} \paren {l!}^2} {\paren {2 l + 1}!}$
$\ds \int_{-1}^1 \paren {x^2 - 1}^l \rd x = \paren {-1}^l \dfrac{2^{2 l + 1} \paren {l!}^2} {\paren {2 l + 1}!}$
Applying this result to equation $(1)$:

$K_{k l}^m = \delta_{k l} \dfrac 1 {2^{2 l} \paren {l!}^2} \dfrac {\paren {2 l}! \paren {l + m}!} {\paren {l - m}!} \dfrac {2^{2 l + 1} \paren {l!}^2} {\paren {2 l + 1}!} = \delta_{k l} \dfrac 2 {2 l + 1} \dfrac {\paren {l + m} !} {\paren {l - m} !}$
$\blacksquare$
Clearly, if we define new associated Legendre functions  by a constant times the old ones:

$\map {\bar P^m_l} x \equiv \sqrt {\dfrac {2 l + 1} 2 \dfrac {\paren {l - m}!} {\paren {l + m}!} } \map {P^m_l} x$
then the overlap integral becomes:

$\ds K^m_{k l} = \int_{-1}^1 \map {\bar P^m_k} x \map {\bar P^m_l} x \rd x = \delta_{k l}$
that is, the new functions are normalized to unity.


Comments
The orthogonality of the associated Legendre functions can be demonstrated in different ways.
The proof presented above assumes only that the reader is familiar with basic calculus and it is therefore accessible to the widest possible audience.
However, as mentioned, their orthogonality also follows from the fact that the associated Legendre equation belongs to a family known as the Sturm-Liouville equations.
It is possible to demonstrate their orthogonality using principles associated with operator calculus.
Let us write:

$\map {P^m_l} x = \map w x^{1/2} \nabla^m \map {P_l} x$
where

$\nabla \equiv \dfrac \d {\d x}$
and:
$\map w x \equiv \paren {1 - x^2}^m$
Clearly, the case $m = 0$ is

$\map {P^0_l} x = \paren {1 - x^2}^{0/2} \nabla^0 \map {P_l} x = \map {P_l} x$
The proof given above starts out by implicitly proving the anti-Hermiticity of $\nabla$.
Indeed, noting that $\map w x$ is a function with $\map w 1 = \map w {-1} = 0$ for $m \ne 0$, it follows from partial integration that:

$\ds \braket {w g} {\nabla f} \equiv \int_{-1} 1 \map w x \map g x \paren {\nabla \map f x} \rd x = \bigintlimits {\map w x \map g x \map f x} {-1} 1 - \int_{-1}^1 \paren {\nabla \map w x \map g x} \map f x \rd x = -\braket {\nabla \paren {w g} } f$
Hence

$\nabla^\dagger = -\nabla \implies \paren {\nabla^\dagger}^m = \paren {-1}^m \nabla^m$
To demonstrate orthogonality of the associated Legendre polynomials,  we use a result from the theory of orthogonal polynomials.
Namely, a Legendre polynomial of order $l$ is orthogonal to any polynomial $\Pi_p$ of order $p$ lower than $l$.
In bra-ket notation  

$\braket {\Pi_p} {P_l} = 0$
if:

$\map \OO {\Pi_p} \equiv p < l$
Knowing this:

$\ds \int_{-1}^1 \map {P_l^m} x \map {P_k^m} x \rd x \equiv \braket {w \nabla^m P_k} {\nabla^m P_l} = \paren {-1}^m \braket {\nabla^m \paren {w \nabla^m P_k} } {P_l}$
The bra is a polynomial of order $k$, because 














\(\ds \map \OO {\nabla^m P_k}\)

\(=\)







\(\ds k - m\)


















\(\, \ds \land \, \)

\(\ds \map \OO {\map w x} = 2 m\)

\(\leadsto\)







\(\ds \map \OO {\map w x \nabla^m \map {P_k} x} = k + m\)




















\(\ds \)

\(\leadsto\)







\(\ds \map \OO {\nabla^m \paren {\map w x \nabla^m \map {P_k} x} } = k\)









where it was used that $m$ times differentiation of a polynomial lowers its order by $m$ and that the order of a product of polynomials is the product of the orders.
Since  we assumed that $k \le l$,  the integral  is non-zero only if $k = l$.
Hence it follows readily that the associated Legendre polynomials of equal superscripts and non-equal subscripts are orthogonal.
However, the hard work (given above) of computing the normalization for the case $k = l$  remains to be done.


Theorem (orthogonality relation 2)
$\ds \int_{-1}^1 \dfrac {\map {P_l^m} x \map {P_l^n} x} {\paren {1 - x^2} } \rd x = \delta_{m n} \frac {\paren {l + m}!} {m \paren {l - m}!}$
for $m \ne 0$, where:

$\map {P_l^m} x = \dfrac {\paren {-1}^m} {\paren {2^l l!} } \paren {1 - x^2}^{m/2} \dfrac{d^{l + m}}{dx^{l + m}} \paren {x^2 - 1}^l, 0 \le m \le l$


Proof
Let:

$\ds T_l^{m n} = \int_{-1}^1 \dfrac {\map {P_l^m} x \map {P_l^n} x} {\paren {1 - x^2} } \rd x = \dfrac {\paren {-1}^{m + n} } {\paren {2^l l!}^2} \int_{-1}^1 \paren {\paren {1 - x^2}^{\frac {\paren {m + n} } 2 - 1} \frac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \paren {\dfrac {\d^{l + n} } {\d x^{l + n} } \paren {x^2 - 1}^l} \rd x$
The functions $\paren {x^2 - 1}^k$ are even functions; so their $j$th order derivatives are even or odd functions according as $j$ is even or odd.
Therefore, if $m$ or $n$ is even but the other is odd, then one of the two factors in curly braces in the preceding expression is an even function, and the other is an odd function.
This makes the entire integrand an odd function.
When integrated between the limits that are negatives of each other, it yields $0$, as it should, since $\delta_{m n} = 0$.
So we need to consider further only even integrands, for which m and n are either both even or both odd.
In this case all exponents in the integrand are non-negative integers (except when $m = n = 0$).
The integrand can be integrated by parts $\ell + n$ times, the first factor and its derivatives being identified as u and the second factor as $v'$ in the formula:

$\ds \int_{-1}^1 u v' \rd x = \bigintlimits {u v} {-1} 1 - \int_{-1}^1 v u' \rd x$
Since $m$ and $n$ occur symmetrically, we can assume without loss of generality that $n \le m$.
For the first $n - 1$ integrations by parts, the $u v$ term vanishes at the limits because $u$ includes at least one factor of $1 - x^2$.
The same also is true for the $n$th integration, unless $n = m$, in which case the $u v$ term is:

$\ds S_l^m = \intlimits {\dfrac {\paren {-1}^{m + 1} } {\paren {2^l l!}^2} \map {\dfrac {\d^{m - 1} } {\d x^{m - 1} } } {\paren {1 - x^2}^{m - 1} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l} \paren {\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l} } {-1} 1$
For the remaining $\ell$ integrations the $uv$ term vanishes at the limits because $v$ includes at least one factor $1-x^2$ (and perhaps $u$ does also).
The result is:

$\ds T_l^{m n} = \delta_{m n} S_l^m + \dfrac {\paren {-1}^{l + m} } {\paren {2^l l!}^2} \int_{-1}^1 \paren {x^2 - 1}^l \map {\dfrac {\d^{l + n} } {\d x^{l + n} } } {\paren {1 - x^2}^{\dfrac {\paren {m + n} } 2 - 1} \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {x^2 - 1}^l} \rd x$
The highest power of $x$ in the binomial expansion of $\paren {x^2 - 1}^l$ is $2\ell$; after $\ell + m$ derivatives of it are taken, the highest power is $\ell-m$.
The highest power of $x$ in the expansion of $\paren {1 - x^2}^{\frac {\paren {m + n} } 2 - 1}$ is $m + n - 2$; so the highest power in the expression in curly braces is $\ell + n - 2$.
After $\ell + n - 2$ derivatives of it are taken, the highest power is $0$; that is, the expression is a constant.
Taking the remaining $2$ derivatives causes the integrand to vanish.
Therefore:

$T_l^{m n} = \delta_{m n} S_l^m = \intlimits {\delta_{m n} \dfrac 1 {\paren {2^l l!}^2} \map {\dfrac {\d^{m - 1} } {\d x^{m - 1} } } {\paren {x^2 - 1}^{m - 1} \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {x^2 - 1}^l} \paren {\map {\dfrac {\d^l} {\d x^l} } {x^2 - 1}^l} } {-1} 1$
Since this function is odd, we need evaluate it only at its upper limit $x = 1$ and double the result.
An expression of the form $\paren {x^2 - 1}^k = \paren {x - 1}^k \paren {x + 1}^k$ can be differentiated using Leibnitz's rule.
Only one term in the sum is of interest here, namely the one in which $\paren {x - 1}^k$ is differentiated exactly $k$ times so that no factors of $x - 1$ remain.  
If it is differentiated fewer times, then it vanishes at $x = 1$.
If it is differentiated more times, then it vanishes everywhere. 
So, ignoring terms with factors of $x -1$, we have (from right to left in the preceding expression):














\(\ds \map {\dfrac {\d^l} {\d x^l} } {\paren {x^2 - 1}^l}\)

\(=\)







\(\ds \paren {\dfrac {\d^l} {\d x^l} \paren {x - 1}^l} \paren {x + 1}^l = l! \paren {x + 1}^l\)





which equals $2^l \ell!$, when $x = 1$














\(\ds \map {\dfrac {\d^{l + m} } {\d x^{l + m} } } {\paren {x^2 - 1}^l}\)

\(=\)







\(\ds \dfrac {\paren {l + m}!} {l! m!} \paren {\map {\dfrac {\d^l} {\d x^l} } {\paren {x - 1}^l} } \paren {\map {\dfrac {\d^m} {\d x^m} } {\paren {x + 1}^l} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {l + m}!} {l! m!} \paren {l!} \paren {\dfrac {l!} {\paren {l - m}!} \paren {x + 1}^{l - m} }\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m}! \dfrac {l!} {m! \paren {l - m}!} \paren {x + 1}^{l - m}\)






















\(\ds \map {\dfrac {\d^{m - 1} } {\d x^{m - 1} } } {\paren {x^2 - 1}^{m - 1} \dfrac {\d^{l + m} } {\d x^{l + m} } \paren {x^2 - 1}^l}\)

\(=\)







\(\ds \paren {l + m}! \dfrac {l!} {m! \paren {l - m}!} \map {\dfrac {\d^{m - 1} } {\d x^{m - 1} } } {\paren {x - 1}^{m - 1} \paren {x + 1}^{l - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m}! \dfrac {l!} {m! \paren {l - m}!} \paren {m - 1}! \paren {x + 1}^{l - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {l + m}! \dfrac {l!} {m \paren {l - m}!} \paren {x + 1}^{l - 1}\)









which equals $2^{l - 1} \paren {l + m}! \dfrac {l!} {m \paren {l - m}!}$ when $x = 1$.

$T_l^{m n} = 2 \delta_{m n} \frac 1 {\paren {2^l l!}^2} \paren {2^{l - 1} \paren {l + m}! \frac {l!} {m \paren {l - m}!} } \paren {2^l l!} = \delta_{m n} \frac {\paren {l + m}!} {m \paren {l - m}!}$
which has been doubled to include the lower limit $x = -1$.
$\blacksquare$

When $n = m = 0$:














\(\ds T_l^{00}\)

\(=\)







\(\ds \int_{-1}^1 \dfrac {\map {P_l^0} x \map {P_l^0} x} {\paren {1 - x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {2^l l!}^2} \int_{-1}^1 \paren {\paren {1 - x^2}^{-1} \dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l} \paren {\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {2^l l!}^2} \int_{-1}^1 \frac 1 2 \paren {\paren {x + 1}^{-1} - \paren {x - 1}^{-1} } \paren {\dfrac {\d^l} {\d x^l} \paren {x^2 - 1}^l}^2 \rd x\)









When expanded in powers of $\paren {x + 1}$ and $\paren {x - 1}$ by using Leibnitz's rule, the expression in curly braces includes exactly one term, $(x-1)^l$, having no factor $\paren {x + 1}$ and exactly one term, $\paren {x + 1}^l$, having no factor $\paren {x - 1}$.
Therefore in a Laurent series expansion of the integrand about either $x = 1$ or $x = -1$ all terms except one have non-negative exponents, and their integral is finite. 
The one remaining term in the integrand is a constant multiple of $\dfrac 1 {x + 1}$ or $\dfrac 1 {x - 1}$; so its integral logarithmically diverges at the limits, making $T_l^{00}$ infinite.


Sources
Template:Citizendium




