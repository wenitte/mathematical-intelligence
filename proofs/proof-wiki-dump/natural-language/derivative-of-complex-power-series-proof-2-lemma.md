# 

Source: https://proofwiki.org/wiki/Derivative_of_Complex_Power_Series/Proof_2/Lemma

Lemma
Let $n \in N_{\ge 1}$.

Then:

$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} = 1$


Proof
Choose any $\alpha > 1$. 
It follows from the ratio test that:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 {\alpha^n} \frac {n \paren {n - 1} } 2 = 0$
Therefore, for all sufficiently large $n$:

$\dfrac {n \paren {n - 1} } 2 \le \alpha^n$
and so:

$\paren {\dfrac {n \paren {n - 1} } 2}^{1/n} \le \alpha$
It follows that:

$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} \le \alpha$
Since $\alpha > 1$ was arbitrary, we can conclude that:

$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} \le 1$
It is clear that the following holds for sufficiently large $n$:

$\ds \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} \ge 1^{1/n} = 1$
Therefore:

$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n \paren {n - 1} } 2}^{1/n} = 1$
$\blacksquare$





