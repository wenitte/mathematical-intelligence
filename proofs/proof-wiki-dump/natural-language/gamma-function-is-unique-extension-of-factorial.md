# 

Source: https://proofwiki.org/wiki/Gamma_Function_is_Unique_Extension_of_Factorial

Theorem
Let $f: \R_{>0} \to \R$ be a real function which is positive and continuous.
Let $\ln \mathop \circ f$ be convex on $\R_{>0}$.
Let $f$ satisfy the conditions:

$\map f {x + 1} = \begin{cases}
1 & : x = 0 \\
x \map f x & : x > 0 \end{cases}$
Then:

$\forall x \in \R_{>0}: \map f x = \map \Gamma x$
where $\map \Gamma x$ is the Gamma function.


Proof
From the Gamma Function Extends Factorial:

$\map f {x + 1} = \begin{cases}
1 & : x = 0 \\
x \map f x & : x > 0 \end{cases}$
From Gamma Function is Continuous on Positive Reals, $\Gamma$ is positive and continuous on $\R_{>0}$.
From Log of Gamma Function is Convex on Positive Reals, $\ln \mathop \circ \Gamma$ is convex on $\R_{>0}$.
It remains to be shown that $\Gamma$ is the only real function which satisfies these conditions.

Let $s, t \in \R_{>0}$ such that $s \le t \le s + 1$.
Let $t = \alpha s + \beta \paren {s + 1}$ where $\alpha, \beta \in \R_{>0}, \alpha + \beta = 1$.
Then:

$t = \paren {\alpha + \beta} s + \beta = s + \beta$
and so:

$\beta = t - s$

Thus:














\(\ds \map \ln {\map f t}\)

\(\le\)







\(\ds \alpha \map \ln {\map f s} + \beta \map \ln {\map f {s + 1} }\)





$\ln \mathop \circ f$ is convex on $\R_{>0}$








\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\le\)







\(\ds \paren {\map f s}^\alpha \paren {\map f {s + 1} }^\beta\)




















\(\ds \)

\(=\)







\(\ds \paren {\map f s}^\alpha \paren {s \map f s}^\beta\)




















\(\ds \)

\(=\)







\(\ds s^\beta \map f s\)





as $\alpha + \beta = 1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds s^{t - s} \map f s\)





as $\beta = t - s$



Because $s \le t \le s + 1$, it follows that $t - 1 \le s \le t$.
Substituting as appropriate in $(1)$:














\(\ds \map f s\)

\(\le\)







\(\ds \paren {t - 1}^{s - t + 1} \map f {t - 1}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {t - 1}^{s - t} \map f t\)









Combining $(1)$ and $(2)$:














\(\ds \paren {t - 1}^{t - s} \map f s\)

\(\le\)







\(\ds \map f t\)










\(\text {(3)}: \quad\)









\(\ds \)

\(\le\)







\(\ds s^{t - s} \map f s\)









Let $x \in \R$ such that $0 < x \le 1$.
Let $n \in \N$.
Let:

$s = n + 1$
$t = x + n + 1$
Then substituting in $(3)$:














\(\ds \paren {x + n}^x \map f {n + 1}\)

\(\le\)







\(\ds \map f {x + n + 1}\)




















\(\ds \)

\(\le\)







\(\ds \paren {n + 1}^x \map f {n + 1}\)









Hence:














\(\ds \paren {x + n}^x n!\)

\(\le\)







\(\ds \paren {x + n} \paren {x + n - 1} \cdots x \map f x\)




















\(\ds \)

\(\le\)







\(\ds \paren {n + 1}^x n!\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac x n}^x\)

\(\le\)







\(\ds \frac {\paren {x + n} \paren {x + n - 1} \cdots x \map f x} {n^x n!}\)




















\(\ds \)

\(\le\)







\(\ds \paren {1 + \frac 1 n}^x\)









Thus when $0 < x \le 1$:

$\ds \map f x = \lim_{n \mathop \to \infty} \frac {x \paren {x + 1} \cdots \paren {x + n} } {n^x n!}$
which is the Euler form of the Gamma function.

The general case is deduced by the use of:

$\map f {x + 1} = x \map f x$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.6$




