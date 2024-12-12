# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Well-Defined/Real/Proof_2

Theorem
Let $x \in \R$ be a real number.
Let $\exp x$ be the exponential of $x$.

Then $\exp x$ is well-defined.


Proof
This proof assumes the sequence definition of $\exp$.
Let $\sequence {f_n}$ be the sequence of mappings $f_n : \R \to \R$ defined as:

$\map {f_n} x = \paren {1 + \dfrac x n}^n$
Fix $x \in \R$.
Then:














\(\ds \map {f_n} x\)

\(=\)







\(\ds \paren {1 + \dfrac x n}^n\)





Definition of $\map {f_n} x$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \frac {x^k} {n^k}\)





Binomial Theorem: Integral Index














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {x^k} {k!} \frac {\paren n \times \paren {n - 1} \times \paren {n - 2} \times \cdots \paren {n - k + 1} }{n \times n \times n \times \cdots n}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n}\)




















\(\ds \)

\(\le\)







\(\ds \size {\sum_{k \mathop = 0}^n \frac {x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n} }\)





Negative of Absolute Value














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {\size x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^n \frac {\size x^k} {k!}\)





Multiplication of Positive Number by Real Number Greater than One














\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\size x^k} {k!}\)





Sum of positive terms is increasing














\(\ds \)

\(<\)







\(\ds \infty\)





Series of Power over Factorial Converges




This article needs to be linked to other articles.In particular: Result about increasing series seems not to be up yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Thus, $\sequence {\map {f_n} x}$ is bounded above.
From Exponential Sequence is Eventually Increasing:

$\exists N \in \N: \sequence {\map {f_{N + n} } x}$ is increasing
From Monotone Convergence Theorem (Real Analysis), $\sequence {\map {f_{N + n} } x}$ converges to some $z \in \R$.
From Tail of Convergent Sequence, $\sequence {\map {f_n} x}$ converges to $z$.
Hence the result, from Limit of Real Function is Unique.
$\blacksquare$





