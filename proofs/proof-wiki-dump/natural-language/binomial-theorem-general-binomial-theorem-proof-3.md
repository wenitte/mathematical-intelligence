# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/General_Binomial_Theorem/Proof_3

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





