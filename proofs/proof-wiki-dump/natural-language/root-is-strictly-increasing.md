# 

Source: https://proofwiki.org/wiki/Root_is_Strictly_Increasing

Theorem
Let $x \in \R_{> 0}$.
Let $n \in \N$.
Let $f: \R_{> 0} \to \R$ be the real function defined as:

$\map f x = \sqrt [n] x$
where $\sqrt [n] x$ denotes the $n$th root of $x$.

Then $f$ is strictly increasing.


Proof
Let $x, y \in \R$ such that $0 < x < y$.
Aiming for a contradiction, suppose that:

$\sqrt [n] x \ge \sqrt [n] y$
We have:














\(\ds \sqrt [n] x\)

\(\ge\)







\(\ds \sqrt [n] y\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sqrt [n] x}^n\)

\(\ge\)







\(\ds \paren {\sqrt [n] y}^n\)





Power Function is Strictly Increasing over Positive Reals: Natural Exponent








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\ge\)







\(\ds y\)





Definition of Root of Number



This contradicts the hypothesis that $x < y$.
Therefore, by Proof by Contradiction:

$0 < x < y \implies \sqrt [n] x \le \sqrt [n] y$
Hence the result by definition of strictly increasing real function.
$\blacksquare$





