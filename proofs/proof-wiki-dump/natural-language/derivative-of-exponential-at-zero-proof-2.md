# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_at_Zero/Proof_2

Theorem
Let $\exp x$ be the exponential of $x$ for real $x$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$


Proof
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





