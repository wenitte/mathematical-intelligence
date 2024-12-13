# 

Source: https://proofwiki.org/wiki/Natural_Logarithm_as_Derivative_of_Exponential_at_Zero

Theorem
Let $\ln: \R_{>0}$ denote the real natural logarithm.

Then:

$\ds \forall x \in \R_{>0}: \ln x = \lim_{h \mathop \to 0} \frac {x^h - 1} h$


Proof
Fix $x \in \R_{>0}$.

Let $x > 1$.

From Power Function on Strictly Positive Base is Convex, $x^h$ is convex.
Thus for $0 < h < s$:














\(\ds \frac {x^h - a^0} {h - 0}\)

\(\le\)

\(\, \ds \frac {x^s - a^0} {s - 0} \, \)





\(\ds \)





Definition of Convex Real Function








\(\ds \leadsto \ \ \)





\(\ds \frac {x^h - 1} h\)

\(\le\)

\(\, \ds \frac {x^s - 1} s \, \)





\(\ds \)










Further, $0 < \dfrac 1 x < 1$.
So, for $h < s < 0 \iff 0 < -s < -h$:














\(\ds \frac {\paren {\frac 1 x}^{-s} - \paren {\frac 1 x}^0} {-s - 0}\)

\(\le\)

\(\, \ds \frac {\paren {\frac 1 x}^{-h} - \paren {\frac 1 x}^0} {-h - 0} \, \)





\(\ds \)





Power Function on Strictly Positive Base is Convex








\(\ds \leadsto \ \ \)





\(\ds \frac {x^s - 1} {-s}\)

\(\le\)

\(\, \ds \frac {x^h - 1} {-h} \, \)





\(\ds \)





Exponent Combination Laws: Negative Power








\(\ds \leadsto \ \ \)





\(\ds \frac {x^h - 1} h\)

\(\le\)

\(\, \ds \frac {x^s - 1} s \, \)





\(\ds \)





Order of Real Numbers is Dual of Order of their Negatives




Hence $\dfrac {x^h - 1} h$ is increasing on $\R \setminus \set 0$.

Next:














\(\ds h\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x^h\)

\(>\)







\(\ds 1\)





Power Function on Base Greater than One is Strictly Increasing








\(\ds \leadsto \ \ \)





\(\ds x^h - 1\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^h - 1} h\)

\(>\)







\(\ds 0\)





Order of Real Numbers is Dual of Order of their Negatives



So $\dfrac {x^h - 1} h$ is strictly positive on $\R_{>0}$.

In particular:

$\dfrac {x^h - 1} h$ is bounded below (by $0$) and increasing on $\openint 0 \to$
$\dfrac {x^h - 1} h$ is bounded above (by $\ds \inf_{h \mathop > 0} \frac {x^h - 1} h$) and increasing on $\openint \gets 0$
So from Limit of Increasing Function, $\ds \lim_{h \mathop \to 0^+} \frac {x^h - 1} h$ and $\ds \lim_{h \mathop \to 0^-} \frac {x^h - 1} h$ exist.

Further:














\(\ds \lim_{h \mathop \to 0^+} \frac {x^h - 1} h\)

\(=\)







\(\ds \lim_{h \mathop \to \infty} h \paren {x^{1 / h} - 1}\)





Limit of Composite Function














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} n \paren {x^{1 / n} - 1}\)





Limit of Sequence is Limit of Real Function














\(\ds \)

\(=\)







\(\ds \ln x\)





Sequential definition of natural logarithm



where $\sequence {n \paren {x^{1 / n} - 1 } }_{n \mathop \in \N}$ is now a real sequence.

Similarly:














\(\ds \lim_{h \mathop \to 0^-} \frac {x^h - 1} h\)

\(=\)







\(\ds \lim_{h \mathop \to 0^+} -\frac {x^{-h} - 1} h\)





Limit of Composite Function














\(\ds \)

\(=\)







\(\ds -\lim_{h \mathop \to \infty} h \paren {x^{-1 / h} - 1}\)





Limit of Composite Function














\(\ds \)

\(=\)







\(\ds -\lim_{h \mathop \to \infty} h \paren {\paren {\frac 1 x}^{1 / h} - 1}\)





Exponent Combination Laws: Negative Power














\(\ds \)

\(=\)







\(\ds -\lim_{n \mathop \to \infty} n \paren {\paren {\frac 1 x}^{1 / n} - 1}\)





Limit of Sequence is Limit of Real Function














\(\ds \)

\(=\)







\(\ds -\ln \frac 1 x\)





Definition 3 of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \ln x\)





Logarithm of Reciprocal




Thus, for $x > 1$:














\(\ds \lim_{h \mathop \to 0^-} \frac {x^h - 1} h\)

\(=\)







\(\ds \ln x\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0^+} \frac {x^h - 1} h\)









So from Limit iff Limits from Left and Right, for $x > 1$:

$\ds \lim_{h \mathop \to 0} \frac {x^h - 1} h = \ln x$

Suppose instead that $0 < x < 1$.

From Ordering of Reciprocals:

$\dfrac 1 x > 1$

Thus, from above:














\(\ds \ln \frac 1 x\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\frac 1 x}^h - 1} h\)














\(\ds \leadsto \ \ \)





\(\ds \ln x\)

\(=\)







\(\ds -\lim_{h \mathop \to 0} \frac {\paren {\frac 1 x}^h - 1} h\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds -\lim_{h \mathop \to 0} \frac {\paren {\frac 1 x}^{-h} - 1} {-h}\)





Limit of Composite Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\frac 1 x}^{-h} - 1} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {x^h - 1} h\)





Exponent Combination Laws: Negative Power




Hence the result.
$\blacksquare$





