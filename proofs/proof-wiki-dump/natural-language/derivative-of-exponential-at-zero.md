# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_at_Zero



Theorem
Let $\exp x$ be the exponential of $x$ for real $x$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$


Proof 1
For all $x \in \R$:

$\exp 0 - 1 = 0$ from Exponential of Zero
$\map {D_x} {\exp x - 1} = \exp x$ from Sum Rule for Derivatives
$D_x x = 1$ from Derivative of Identity Function.

Its prerequisites having been verified, Corollary 1 to L'Hôpital's Rule yields immediately:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = \lim_{x \mathop \to 0} \frac {\exp x} 1 = \exp 0 = 1$
$\blacksquare$


Proof 2
Note that this proof does not presuppose Derivative of Exponential Function.
We use the definition of the exponential as a limit of a sequence:














\(\ds \frac {\exp h - 1} h\)

\(=\)







\(\ds \frac {\lim_{n \mathop \to \infty} \paren {1 + \dfrac h n}^n - 1} h\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {\ds \lim_{n \mathop \to \infty} \sum_{k \mathop = 0}^n {n \choose k} \paren {\frac h n}^k - 1} h\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\ds \sum_{k \mathop = 0}^n {n \choose k} \paren {\frac h n}^k - 1} h\)





as $h$ is constant














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren { {n \choose 0} 1 - 1 + {n \choose 1} \paren {\frac h n} \frac 1 h + \sum_{k \mathop = 2}^n {n \choose k} \paren {\frac h n}^k \frac 1 h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty}1 + \lim_{n \mathop \to \infty} \sum_{k \mathop = 2}^n {n \choose k} \frac {h^{k - 1} }{n^k}\)





Powers of Group Elements














\(\ds \)

\(=\)







\(\ds 1 + h \lim_{n \mathop \to \infty} \sum_{k \mathop = 2}^n {n \choose k} \frac {h^{k - 2} } {n^k}\)





Powers of Group Elements



The right summand converges to zero as $h \to 0$, and so:

$\ds \lim_{h \mathop \to 0} \frac {\exp h - 1} h = 1$
$\blacksquare$


Proof 3













\(\ds \frac {e^x - 1} x\)

\(=\)







\(\ds \frac {e^x - e^0} x\)





Exponential of Zero














\(\ds \)

\(\to\)







\(\ds \valueat {\dfrac \d {\d x} e^x} {x \mathop = 0} {}\)





Definition of Derivative of Real Function at Point, as $x \to 0$














\(\ds \)

\(=\)







\(\ds \valueat {e^x} {x \mathop = 0} {}\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds 1\)





Exponential of Zero



$\blacksquare$


Proof 4
As we consider $x \to 0$, we may assume that $0 < \size x \le 1$.
Then:














\(\ds \size {\frac {e^x - 1} x - 1}\)

\(=\)







\(\ds \size {\frac {e^x - 1 - x} x}\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\sum_{n \mathop = 0}^\infty \frac {x^n} {n!} - 1 - x} x }\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \size {x \sum_{n \mathop = 2}^\infty \frac {x^{n-2} } {n !} }\)




















\(\ds \)

\(\le\)







\(\ds \size x \sum_{n \mathop = 2}^\infty \frac 1 {n !}\)





as $\size x \le 1$














\(\ds \)

\(\le\)







\(\ds \size x \sum_{n \mathop = 0}^\infty \frac 1 {n !}\)




















\(\ds \)

\(=\)







\(\ds \size x e\)





Definition of Euler's Number as Limit of Series














\(\ds \)

\(\to\)







\(\ds 0\)





as $x \to 0$



$\blacksquare$





