# 

Source: https://proofwiki.org/wiki/Convergence_of_Taylor_Series_of_Function_Analytic_on_Disk



Theorem
Let $F$ be a complex function.
Let $x_0$ be a point in $\R$.
Let $R$ be an extended real number greater than zero.
Let $F$ be analytic at every point $z \in \C$ satisfying $\size {z - \tuple {x_0, 0} } < R$
where $\tuple {x_0, 0}$ denotes the complex number with real part $x_0$ and imaginary part $0$.

Let the restriction of $F$ to $\R \to \C$ be a real function $f$.
This means:

$\forall x \in \R:$
$\map f x = \map \Re {\map F {x, 0} }$
$0 = \map \Im {\map F {x, 0} }$
where $\tuple {x, 0}$ denotes the complex number with real part $x$ and imaginary part $0$.

Then:

the Taylor series of $f$ about $x_0$ converges to $f$ at every point $x \in \R$ satisfying $\size {x - x_0} < R$


Corollary: Taylor Series reaches closest Singularity
Let $F$ be a complex function.
Let $F$ be analytic everywhere except at a finite number of singularities.
Let a singularity of $F$ be one of the following:

a pole
an essential singularity
a branch point
In the latter case $F$ is a restriction of a multifunction to one of its branches.

Let $x_0$ be a real number.
Let $F$ be analytic at the complex number $\tuple {x_0, 0}$.
Let $R \in \R_{>0}$ be the distance from the complex number $\tuple {x_0, 0}$ to the closest singularity of $F$.

Let the restriction of $F$ to $\R \to \C$ be a real function $f$.
This means:

$\forall x \in \R: \map f x = \map \Re {\map F {x, 0} }, 0 = \map \Im {\map F {x, 0} }$
where $\tuple {x, 0}$ denotes the complex number with real part $x$ and imaginary part $0$.

Then:

the Taylor series of $f$ about $x_0$ converges to $f$ at every point $x \in \R$ satisfying $\size {x - x_0} < R$


Corollary: Taylor Series of Analytic Function has infinite Radius of Convergence
Let $F$ be a complex function.
Let $F$ be analytic everywhere.

Let the restriction of $F$ to $\R \to \C$ be a real function $f$.
This means:

$\forall x \in \R: \map f x = \map \Re {\map F {x, 0} }, 0 = \map \Im {\map F {x, 0} }$
where $\tuple {x, 0}$ denotes the complex number with real part $x$ and imaginary part $0$.
Let $x_0$ be a point in $\R$.

Then:

the Taylor series of $f$ about $x_0$ converges to $f$ at every point in $\R$.


Proof
Lemma
Let $y > 1$.

Then:

$\ds \lim_{n \mathop \to \infty} \frac n {y^n} = 0$
$\Box$

Let $r$ be a real number satisfying:

$0 < r < R$
Let $x$ be a real number satisfying:

$\size {x - x_0} < r$
$f$ has a Taylor series expansion about $x_0$ with radius of convergence greater than zero as $f$ is analytic at $x_0$.
The Taylor's formula with remainder for $f$ about $x_0$ is:

$\map f x = \ds \sum_{i \mathop = 0}^n \frac {\paren {x - x_0}^i} {i!} \map {f^{\paren i} } {x_0} + \map {R_n} x$
where

$\map {R_n} x = \dfrac 1 {n!} \ds \int_{x_0}^x \paren {x - t}^n \map {f^{\paren {n \mathop + 1} } } t \rd t$
Our first aim is to prove:

$\ds \lim_{n \mathop \to \infty} \map {R_n} x = 0$

For the case $x = x_0$, the interval of integration in the expression for $\map {R_n} x$ has zero length.
Therefore, $\map {R_n} x = 0$.
Accordingly, $\ds \lim_{n \mathop \to \infty} \map {R_n} x = 0$ is true for this case.

Now we consider the case $x \ne x_0$.

We have:

$0 < r -  \size {x - x_0}$ as $\size {x - x_0} < r$
Observe that:

$\size {x - x_0} \ge \size {t - x_0}$
Therefore:

$r - \size {x - x_0} \le r - \size {t - x_0}$
$0 < r - \size {x - x_0} \le r - \size {t - x_0}$
$0 < \size {r -  \size {x - x_0} } \le \size {r - \size {t - x_0} }$

We have:














\(\ds \size {\map {R_n} x}\)

\(=\)







\(\ds \size {\frac 1 {n!} \int_{x_0}^x \paren {x - t}^n \map {f^{\paren {n \mathop + 1} } } t \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n!} \int_{x_0}^x \size {x - t}^n \size {\map {f^{\paren {n \mathop + 1} } } t} \size {\d t}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n!} \int_{x_0}^x \size {x - t}^n \size {\frac {M r \paren {n + 1}!} {\paren {r - \size {t - x_0} }^{\paren {n \mathop + 2} } } } \size {\d t}\)





where $M \in \R_{\ge 0}$ , by Bound for Analytic Function and Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 {n!} \int_{x_0}^x \size {x - t}^n \frac {M r \paren {n + 1}!} {\paren {r - \size {t - x_0} }^{\paren {n \mathop + 2} } } \size {\d t}\)





as $r - \size {t - x_0} > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 {n!} \int_{x_0}^x \size {x - t}^n \frac {M r \paren {n + 1}!} {\paren {r - \size {t - x_0} }^2} \frac 1 {\paren {r - \size {t - x_0} }^n} \size {\d t}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n!} \int_{x_0}^x \size {x - t}^n \frac {M r \paren {n + 1}!} {\paren {r - \size {x - x_0} }^2} \frac 1 {\paren {r - \size {t - x_0} }^n} \size {\d t}\)





as $0 < \size {r - \size {x - x_0} } \le \size {r - \size {t - x_0} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {n!} \frac {M r \paren {n + 1}!} {\paren {r - \size {x - x_0} }^2} \int_{x_0}^x \frac {\size {x - t}^n} {\paren {r - \size {t - x_0} }^n} \size {\d t}\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \paren {n + 1} } {\paren {r - \size {x - x_0} }^2} \int_{x_0}^x \paren {\frac {\size {x - t} } {\paren {r - \size {t - x_0} } } }^n \size {\d t}\)










Let $y \in \R$ be equal to $x_0 + r$ if $x > x_0$ and $x_0 - r$ if $x < x_0$.
Note that $y > x$ if $x > x_0$ and $y < x$ if $x < x_0$.
The general situation is:

$x_0 \le t \le x < y$ if $x > x_0$
$y < x \le t \le x_0$ if $x < x_0$

Let us study $\size {x - t}$ in the expression above for the bound for $\size {\map {R_n} x}$:














\(\ds \size {x - t}\)

\(=\)







\(\ds \size {x - y + y - t}\)




















\(\ds \)

\(=\)







\(\ds \size {y - t - \paren {y - x} }\)




















\(\ds \)

\(=\)







\(\ds \size {\size {y - t} - \size {y - x} }\)





as $\paren {y - t}$ and $\paren {y - x}$ have the same sign because either $t \le x < y$ or $y < x \le t$














\(\ds \)

\(=\)







\(\ds \size {y - t} - \size {y - x}\)





as $\size {y - t} \ge \size {y - x}$ because either $t \le x < y$ or $y < x \le t$



Also, we have:














\(\ds r - \size {t - x_0}\)

\(=\)







\(\ds \size {r - \size {t - x_0} }\)





as $r - \size {t - x_0} > 0$














\(\ds \)

\(=\)







\(\ds \size {\size {y - x_0} - \size {t - x_0} }\)





as $\size {y - x_0} = r$














\(\ds \)

\(=\)







\(\ds \size {y - x_0 - \paren {t - x_0} }\)





as $\paren {y - x_0}$ and $\paren {t - x_0}$ have the same sign because either $x_0 \le t < y$ or $y < t \le x_0$














\(\ds \)

\(=\)







\(\ds \size {y - t}\)









We combine these two results to get:














\(\ds \frac {\size {x - t} } {r - \size {t - x_0} }\)

\(=\)







\(\ds \frac {\size {y - t} - \size {y - x} } {\size {y - t} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {\size {y - x} } {\size {y - t} }\)




















\(\ds \)

\(\le\)







\(\ds 1 - \frac {\size {y - x} } r\)





as $r \ge \size {y - t}$














\(\ds \)

\(=\)







\(\ds \frac {r - \size {y - x} } r\)




















\(\ds \)

\(=\)







\(\ds \frac {\size {y - x_0} - \size {y - x} } r\)





as $\size {y - x_0} = r$














\(\ds \)

\(=\)







\(\ds \frac {\size {\size {y - x_0} - \size {y - x} } } r\)





as $\size {y - x_0} \ge \size {y - x}$














\(\ds \)

\(=\)







\(\ds \frac {\size {y - x_0 - \paren {y - x} } } r\)





as $\paren {y - x_0}$ and $\paren {y - x}$ have the same sign because either $x_0 < x < y$ or $y < x < x_0$














\(\ds \)

\(=\)







\(\ds \frac {\size {x - x_0} } r\)









We use this result in the expression for the bound for $\size {\map {R_n} x}$:














\(\ds \size {\map {R_n} x}\)

\(\le\)







\(\ds \frac {M r \paren {n + 1} } {\paren {r - \size {x - x_0} }^2} \int_{x_0}^x \paren {\frac {\size {x - t} } {\paren {r - \size {t - x_0} } } }^n \size {\d t}\)




















\(\ds \)

\(\le\)







\(\ds \frac {M r \paren {n + 1} } {\paren {r - \size {x - x_0} }^2} \int_{x_0}^x \paren {\frac {\size {x - x_0} } r}^n \size {\d t}\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \paren {n + 1} } {\paren {r - \size {x - x_0} }^2} \paren {\frac {\size {x - x_0} } r}^n \int_{x_0}^x \size {\d t}\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \paren {n + 1} } {\paren {r - \size {x - x_0} }^2} \paren {\frac {\size {x - x_0} } r}^n \size {x - x_0}\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} \frac {\paren {n + 1} } {\paren {\frac r {\size {x - x_0} } }^n}\)









We have:

$\ds \frac r {\size {x - x_0} } > 1$ as $\size {x - x_0} < r$ and $x \ne x_0$
Therefore:

$\ds \lim_{n \mathop \to \infty} \frac n {\paren {\frac r {\size {x - x_0} } }^n} = 0$ by the lemma
Letting $n$ approach $\infty$ in the expression for the bound for $\size {\map {R_n} x}$, we get:














\(\ds \lim_{n \mathop \to \infty} \size {\map {R_n} x}\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} \frac {n + 1} {\paren {\frac r {\size {x - x_0} } }^n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} \frac {n + 1} n \frac n {\paren {\frac r {\size {x - x_0} } }^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} \lim_{n \mathop \to \infty} \frac {n + 1} n \frac n {\paren {\frac r {\size {x - x_0} } }^n}\)





Multiple Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} \lim_{n \mathop \to \infty} \frac {n + 1} n \lim_{n \mathop \to \infty} \frac n {\paren {\frac r {\size {x - x_0} } }^n}\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} 1 \lim_{n \mathop \to \infty} \frac n {\paren {\frac r {\size {x - x_0} } }^n}\)





as $\ds \lim_{n \mathop \to \infty} \frac {n + 1} n = 1$














\(\ds \)

\(=\)







\(\ds \frac {M r \size {x - x_0} } {\paren {r - \size {x - x_0} }^2} 0\)





as $\ds \lim_{n \mathop \to \infty} \frac n {\paren {\frac r {\size {x - x_0} } }^n} = 0$














\(\ds \)

\(=\)







\(\ds 0\)









So:














\(\ds \lim_{n \mathop \to \infty} \size {\map {R_n} x}\)

\(\le\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \size {\map {R_n} x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \map {R_n} x\)

\(=\)







\(\ds 0\)









Accordingly, $\ds \lim_{n \mathop \to \infty} \map {R_n} x = 0$ is true for the case $x \ne x_0$.

Thus, $\ds \lim_{n \mathop \to \infty} \map {R_n} x = 0$ holds for every $x$ satisfying $\size {x - x_0} < r$ where $r < R$.
Since we can choose $r$ as close to $R$ as we like, we conclude that $\ds \lim_{n \mathop \to \infty} \map {R_n} x = 0$ holds for every $x$ that satisfies $\size {x - x_0} < R$.
Therefore, the Taylor series expansion of $\map f x$ about $x_0$ converges to $\map f x$ for every $x$ that satisfies $\size {x - x_0} < R$.
$\blacksquare$





