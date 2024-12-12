# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/General_Binomial_Theorem



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


Convergence
The above binomial series:

converges when $\size x < 1$
diverges when $\size x > 1$
For the special case where $x = 1$, the binomial series converges if $n > -1$.
For the special case where $x = -1$, the binomial series converges if $n > 0$.


Proof 1
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


Proof 2
From Sum over k of r-kt choose k by r over r-kt by z^k:

$\ds \sum_n \dbinom {\alpha - n t} k \dfrac \alpha {\alpha - n t} z^n = x^\alpha$
where:

$z = x^{t + 1} - x^t$
$x = 1$ for $z = 0$.
Setting $t = 0$:














\(\ds \sum_k \dbinom {\alpha - n \times 0} n \dfrac \alpha {\alpha - n \times 0} z^n\)

\(=\)







\(\ds x^\alpha\)














\(\ds \leadsto \ \ \)





\(\ds \sum_n \dbinom \alpha n \dfrac \alpha \alpha z^n\)

\(=\)







\(\ds \paren {1 + z}^\alpha\)














\(\ds \leadsto \ \ \)





\(\ds \sum_n \dbinom \alpha n z^n\)

\(=\)







\(\ds \paren {1 + z}^\alpha\)









$\blacksquare$


Proof 3
The series is the Maclaurin series expansion of the function $\map f x = \paren {1 + x}^\alpha$.
The derivatives of $f$ are:















\(\ds \map {f^{\paren 0} } x\)

\(=\)







\(\ds \paren {1 + x}^\alpha\)




















\(\ds \map {f^{\paren 1} } x\)

\(=\)







\(\ds \alpha \paren {1 + x}^{\alpha - 1}\)




















\(\ds \map {f^{\paren 2} } x\)

\(=\)







\(\ds \alpha \paren {\alpha - 1} \paren {1 + x}^{\alpha - 2}\)




















\(\ds \map {f^{\paren n} } x\)

\(=\)







\(\ds \alpha \paren {\alpha - 1} \cdots \paren {\alpha - n + 1} \paren {1 + x}^{\alpha - n}\)




















\(\ds \)

\(=\)







\(\ds \alpha^{\underline n} \paren {1 + x}^{\alpha - n}\)










Evaluated at $x = 0$, we have:














\(\ds \map {f^{\paren 0} } x\)

\(=\)







\(\ds \alpha^{\underline n} \paren {1 + 0}^{\alpha - n}\)




















\(\ds \)

\(=\)







\(\ds \alpha^{\underline n}\)










The Maclaurin series of $f$ is:














\(\ds \map f x)\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!} \map {f^{\paren n} } 0\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!} \alpha^{\underline n}\)





substituting derivative at $0$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\alpha^{\underline n} } {n!} x^n\)





rearranging



$\blacksquare$


Examples
Example: $\paren {1 - x}^{-3}$
$\paren {1 - x}^{-3} = 1 + 3 x + 6 x^2 + 10 x^3 + \cdots$


Example: $\paren {1 + 2 x}^{-\frac 3 2}$
$\paren {1 + 2 x}^{-\frac 3 2} = 1 - 3 x + \dfrac {15} 2 x^2 - \dfrac {35} 2 x^3 + \cdots$


Example: $\paren {1 + 5 x}^{\frac 1 5}$
$\paren {1 + 5 x}^{\frac 1 5} = 1 + x - 2 x^2 + 6 x^3 + \cdots$


Example: $\paren {1 - 4 x}^{\frac 1 2}$
$\paren {1 - 4 x}^{\frac 1 2} = 1 - 2 x - 2 x^2 + 4 x^3 + \cdots$


Historical Note
The General Binomial Theorem was first conceived by Isaac Newton during the years $1665$ to $1667$ when he was living in his home in Woolsthorpe.
He announced the result formally, in letters to Henry Oldenburg on $13$th June $1676$ and $24$th October $1676$ but did not provide a proper proof (at that time the need for the appropriate level of rigor had not been recognised).
Leonhard Paul Euler made an incomplete attempt in $1774$, but the full proof had to wait for Carl Friedrich Gauss to provide it in $1812$.
This was, in fact, the first time anything about infinite summations was proved adequately.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VI}$: On the Seashore
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Binomial Theorem: Negative and fractional indices
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Binomial Series: $20.4$
1969: J.C. Anderson, D.M. Hum, B.G. Neal and J.H. Whitelaw: Data and Formulae for Engineering Students (2nd ed.) ... (previous) ... (next): $4.$ Mathematics: $4.2$ Series
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{F} \ (15)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(19)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): binomial coefficients
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): binomial theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): binomial coefficients
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): binomial theorem




