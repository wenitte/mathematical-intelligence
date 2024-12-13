# 

Source: https://proofwiki.org/wiki/Powers_Drown_Logarithms



Theorem
Let $r \in \R_{>0}$ be a (strictly) positive real number.
Then:

$\ds \lim_{x \mathop \to \infty} x^{-r} \ln x = 0$


Corollary
$\ds \lim_{y \mathop \to 0_+} y^r \ln y = 0$


Proof
From Upper Bound of Natural Logarithm:
When $x > 1$:

$\forall s \in \R: s > 0: \ln x \le \dfrac {x^s} s$
Given that $r > 0$, we can plug $s = \dfrac r 2$ in:














\(\ds x^{-r} \ln x\)

\(=\)







\(\ds x^{-r/2} \paren {x^{-s} \ln x}\)




















\(\ds \)

\(\le\)







\(\ds \frac {x^{-r/2} } s\)




















\(\ds \)

\(=\)







\(\ds s \frac 1 {x^{r/2} }\)










From Sequence of Powers of Reciprocals is Null Sequence:

$\ds \lim_{x \mathop \to \infty} x^{-r} \frac 1 {x^{r/2} } = 0$
and so:

$\ds \lim_{x \mathop \to \infty} x^{-r} \ln x = 0$
by the Squeeze Theorem for Real Sequences.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.3 \ (2) \ \text{(i)}$




