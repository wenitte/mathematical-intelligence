# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/General_Binomial_Theorem/Proof_1



Theorem
Let $\alpha \in \R$ be a real number.
Let $x \in \R$ be a real number such that $\size x < 1$.

Then:














\(\ds \paren {1 + x}^\alpha\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\alpha^{\underline n} } {n!} x^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dbinom \alpha n x^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {\prod_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } x^n\)




















\(\ds \)

\(=\)







\(\ds 1 + \alpha x + \dfrac {\alpha \paren {\alpha - 1} } {2!} x^2 + \dfrac {\alpha \paren {\alpha - 1} \paren {\alpha - 2} } {3!} x^3 + \cdots\)









where:

$\alpha^{\underline n}$ denotes the falling factorial
$\dbinom \alpha n$ denotes a binomial coefficient.


Proof
Let $R$ be the radius of convergence of the power series:

$\ds \map f x = \sum_{n \mathop = 0}^\infty \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {n!} x^n$

Then:














\(\ds \frac 1 R\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\size {\alpha \paren {\alpha - 1} \dotsm \paren {\alpha - n} } } {\paren {n + 1}!} \frac {n!} {\size {\alpha \paren {\alpha - 1} \dotsm \paren {\alpha - n + 1} } }\)





Radius of Convergence from Limit of Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\size {\alpha - n} } {n + 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)









Thus for $\size x < 1$, Power Series is Differentiable on Interval of Convergence applies:

$\ds D_x \map f x = \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {n!} n x^{n - 1}$

This leads to:














\(\ds \paren {1 + x} D_x \map f x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {\paren {n - 1}!} x^{n - 1} + \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {\paren {n - 1}!} x^n\)




















\(\ds \)

\(=\)







\(\ds \alpha + \sum_{n \mathop = 1}^\infty \paren {\frac {\prod \limits_{k \mathop = 0}^n \paren {\alpha - k} } {n!} + \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {\paren {n - 1}!} } x^n\)




















\(\ds \)

\(=\)







\(\ds \alpha + \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^n \paren {\alpha - k} } {\paren {n - 1}!} \paren {\frac 1 n + \frac 1 {\alpha - n} } x^n\)




















\(\ds \)

\(=\)







\(\ds \alpha + \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^n \paren {\alpha - k} } {\paren {n - 1}!} \frac \alpha {n \paren {\alpha - n} } x^n\)




















\(\ds \)

\(=\)







\(\ds \alpha \paren {1 + \sum_{n \mathop = 1}^\infty \frac {\prod \limits_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } {n!} x^n}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x\)









Gathering up:

$\paren {1 + x} D_x \map f x = \alpha \map f x$
Thus:

$\map {D_x} {\dfrac {\map f x} {\paren {1 + x}^\alpha} } = -\alpha \paren {1 + x}^{-\alpha - 1} \map f x + \paren {1 + x}^{-\alpha} D_x \map f x = 0$
So $\map f x = c \paren {1 + x}^\alpha$ when $\size x < 1$ for some constant $c$.
But $\map f 0 = 1$ and hence $c = 1$.
$\blacksquare$


Historical Note
The General Binomial Theorem was first conceived by Isaac Newton during the years $1665$ to $1667$ when he was living in his home in Woolsthorpe.
He announced the result formally, in letters to Henry Oldenburg on $13$th June $1676$ and $24$th October $1676$ but did not provide a proper proof (at that time the need for the appropriate level of rigor had not been recognised).
Leonhard Paul Euler made an incomplete attempt in $1774$, but the full proof had to wait for Carl Friedrich Gauss to provide it in $1812$.
This was, in fact, the first time anything about infinite summations was proved adequately.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.10 \ (1)$




