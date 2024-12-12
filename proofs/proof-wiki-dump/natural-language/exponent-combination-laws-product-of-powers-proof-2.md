# 

Source: https://proofwiki.org/wiki/Exponent_Combination_Laws/Product_of_Powers/Proof_2

Theorem
Let $a \in \R_{> 0}$ be a positive real number.
Let $x, y \in \R$ be real numbers.
Let $a^x$ be defined as $a$ to the power of $x$.

Then:

$a^x a^y = a^{x + y}$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof
Let $x, y \in \R$.

From Rational Sequence Decreasing to Real Number, there exist rational sequences $\sequence {x_n}$ and $\sequence {y_n}$ converging to $x$ and $y$, respectively.

Then, since Power Function on Strictly Positive Base is Continuous: Real Power:














\(\ds a^{x + y}\)

\(=\)







\(\ds a^{\ds \paren {\lim_{n \mathop \to \infty} x_n + \lim_{n \mathop \to \infty} y_n} }\)




















\(\ds \)

\(=\)







\(\ds a^{\ds \paren {\lim_{n \mathop \to \infty} \paren {x_n + y_n} } }\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} a^{x_n + y_n}\)





Sequential Continuity is Equivalent to Continuity in the Reals














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {a^{x_n} a^{y_n} }\)





Sum of Indices of Real Number: Rational Numbers














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} a^{x_n} } \paren {\lim_{n \mathop \to \infty} a^{y_n} }\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds a^x a^y\)





Sequential Continuity is Equivalent to Continuity in the Reals



$\blacksquare$





