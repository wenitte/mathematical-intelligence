# 

Source: https://proofwiki.org/wiki/Schwarz%27s_Lemma/Lemma

Theorem
Let $D$ be the unit disk centred at $0$.
Let $g : D \to \C$ be a complex function such that: 

$\map g z = \begin {cases} \dfrac {\map f z} z & z \ne 0 \\ \map {f'} 0 & z = 0\end {cases}$
Then $g$ is holomorphic on $D$.


Proof
By Differentiable Function is Continuous, $f$ is continuous.
So by Quotient Rule for Continuous Complex Functions:

$g$ is continuous on $D \setminus \set 0$.
We aim to show that $f$ is continuous on $D$. 

Note that since $f$ is holomorphic on $D$ and $0 \in D$ we have, by the definition of the complex derivative: 

$\ds \lim_{z \mathop \to 0} \frac {\map f z - \map f 0} z = \map {f'} 0 \in \C$
Since $\map f 0 = 0$, we furthermore have: 

$\ds \map {f'} 0 = \lim_{z \mathop \to 0} \frac {\map f z} z$
That is: 

$\ds \map g 0 = \lim_{z \mathop \to 0} \map g z$
so $g$ is continuous at $0$.

Since $f$ is holomorphic on $D$, by the Quotient Rule for Continuous Complex Functions:

$g$ is differentiable on $D \setminus \set 0$.

It remains to show that $g$ is differentiable at $0$. 
Take $z \ne 0$ and consider: 

$\dfrac {\map g z - \map g 0} z$
We have: 














\(\ds \frac {\map g z - \map g 0} z\)

\(=\)







\(\ds \frac {\frac {\map f z} z - \map {f'} 0} z\)





as $\map g z = \dfrac {\map f z} z$ for $z \ne 0$ and $\map g 0 = \map {f'} 0$














\(\ds \)

\(=\)







\(\ds \frac {\map f z - z \map {f'} 0} {z^2}\)









Since $f$ is holomorphic on $D$, by Holomorphic Function is Analytic, there exists a positive real number $R$ such that the series: 

$\ds \sum_{n \mathop = 0}^\infty \frac {\map {f^{\paren n} } 0} {n!} z^n$
converges to $\map f z$ on $\cmod z < R$.
Note that since $\map f 0 = 0$, the first term of this series is zero.
With that, we have: 














\(\ds \frac {\map f z - z \map {f'} 0} {z^2}\)

\(=\)







\(\ds \frac {\sum_{n \mathop = 1}^\infty \frac {\map {f^{\paren n} } 0} {n!} z^n - z \map {f'} 0} {z^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {z \map {f'} 0 + \frac {z^2} 2 \map {f} 0 + \sum_{n \mathop = 3}^\infty \frac {\map {f^{\paren n} } 0} {n!} z^n - z \map {f'} 0} {z^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {f} 0 + \sum_{n \mathop = 3}^\infty \frac {\map {f^{\paren n} } 0} {n!} z^{n - 2}\)









Taking $z \to 0$ we have: 

$\ds \lim_{z \mathop \to 0} \frac {\map g z - \map g 0} z = \frac 1 2 \map {f} 0$
so $g$ is indeed differentiable at $0$.
Hence by definition $g$ is holomorphic on $D$.
$\blacksquare$





