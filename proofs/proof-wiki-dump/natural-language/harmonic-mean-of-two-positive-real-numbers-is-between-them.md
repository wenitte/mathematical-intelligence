# 

Source: https://proofwiki.org/wiki/Harmonic_Mean_of_two_Positive_Real_Numbers_is_Between_them

Theorem
Let $a, b \in \R_{\gt 0}$ be (strictly) positive real numbers such that $a < b$.
Let $\map H {a, b}$ denote the harmonic mean of $a$ and $b$.

Then:

$a < \map H {a, b} < b$


Proof
By definition of harmonic mean:

$\dfrac 1 {\map H {a, b} } := \dfrac 1 2 \paren {\dfrac 1 a + \dfrac 1 b}$

Thus:














\(\ds a\)

\(<\)







\(\ds b\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 b\)

\(<\)







\(\ds \dfrac 1 a\)





Reciprocal Function is Strictly Decreasing




But $\dfrac 1 {\map H {a, b} }$ is the arithmetic mean of $\dfrac 1 b$ and $\dfrac 1 a$.
Hence from Arithmetic Mean of two Real Numbers is Between them:

$\dfrac 1 b < \dfrac 1 {\map H {a, b} } < \dfrac 1 a$

So by Reciprocal Function is Strictly Decreasing:

$b > \map H {a, b} > a$
Hence the result.
$\blacksquare$





