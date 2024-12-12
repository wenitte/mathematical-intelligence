# 

Source: https://proofwiki.org/wiki/Expectation_of_Real-Valued_Discrete_Random_Variable



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be a discrete real-valued random variable. 

Then $X$ is integrable if and only if:

$\ds \sum_{x \in \Img X} \size x \map \Pr {X = x} < \infty$
in which case: 

$\ds \expect X = \sum_{x \in \Img X} x \map \Pr {X = x}$


Proof
From Characterization of Integrable Functions, we have: 

$X$ is $\Pr$-integrable if and only if $\size X$ is $\Pr$-integrable.
That is, $X$ is integrable if and only if:

$\ds \int \size X \rd \Pr < \infty$
Lemma
Let $X$ be a discrete real-valued random variable such that: 

$\map X \omega \ge 0$ for all $\omega \in \Omega$.

Then: 

$\ds \int X \rd \Pr = \sum_{x \in \Img X} x \map \Pr {X = x}$
$\Box$

From Absolute Value of Real-Valued Random Variable is Real-Valued Random Variable:

$\size X$ is a random variable.
Applying the lemma, we have: 

$\ds \int \size X \rd \Pr = \sum_{x \in \Img {\size X} } x \map \Pr {\size X = x}$
We aim to show that: 

$\ds \int \size X \rd \Pr = \sum_{x \in \Img X} \size x \map \Pr {X = x}$
Note that if $x = 0$, we have:

$\set {\size X = 0} = \set {X = 0}$
and if $x \ne 0$, we have: 

$\set {\size X = x} = \set {X = x} \cup \set {X = -x}$
From Probability of Union of Disjoint Events is Sum of Individual Probabilities, we then have: 

$\map \Pr {\size X = x} = \map \Pr {X = x} + \map \Pr {X = -x}$
We can therefore write: 














\(\ds \map \Pr {X = 0} + \sum_{x \in \Img {\size X} } x \map \Pr {\size X = x}\)

\(=\)







\(\ds 0 \times \map \Pr {X = 0} + \sum_{x \in \Img {\size X} } x \paren {\map \Pr {X = x} + \map \Pr {X = -x} }\)




















\(\ds \)

\(=\)







\(\ds 0 \times \map \Pr {X = 0} + \sum_{x \in \Img {\size X} } x \map \Pr {X = x} + \sum_{x \in \Img {\size X} } x \map \Pr {X = -x}\)









Note that if $x \in \Img {\size X}$ but $x \not \in \Img X$, then: 

there exists no $\omega \in \Omega$ such that $\map X \Omega = x$.
That is, for these $x$: 

$\set {X = x} = \O$
So that, from Empty Set is Null Set:

$\map \Pr {X = x} = 0$
So, we have: 

$\ds \sum_{x \in \Img {\size X} } x \map \Pr {X = x} = \sum_{x \in \Img {\size X} \cap \Img X} x \map \Pr {X = x}$
Note that if $x \in \Img {\size X} \cap \Img X$ then: 

there exists $\omega \in \Omega$ such that $\map {\size X} \omega = x$
so $x \ge 0$, so $x \in \Img X$ and $x \ge 0$. 
Conversely, note that if $x \in \Img X$ has $x \ge 0$, then: 

there exists $\omega \in \Omega$ such that $\map X \omega = x$
Since we have $x \ge 0$, we also get: 

$\map {\size X} \omega = x$
so:

$x \in \Img X \cap \Img {\size x}$
So: 

$x \in \Img {\size X} \cap \Img X$ if and only if $x \in \Img X$ with $x \ge 0$.
So we have: 














\(\ds \sum_{x \in \Img {\size X} \cap \Img X} x \map \Pr {X = x}\)

\(=\)







\(\ds \sum_{x \in \Img X, \, x \ge 0} x \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \in \Img X, \, x > 0} \size x \map \Pr {X = x}\)










We transform the third term similarly. 
Note that if $x \in \Img {\size X}$ but $-x \not \in \Img X$, then: 

there exists no $\omega \in \Omega$ such that $\map X \Omega = -x$.
That is, for these $x$: 

$\set {X = -x} = \O$
So that, from Empty Set is Null Set, we have: 

$\map \Pr {\set {X = -x} } = 0$
So:

$\ds \sum_{x \in \Img {\size X} } x \map \Pr {X = -x} = \sum_{x \in \Img {\size X}, \, -x \in \Img X} x \map \Pr {X = -x}$
Suppose that $x \in \Img {\size X}$ and $-x \in \Img X$, we then have: 

$x \ge 0$ and $-x \in \Img X$
as before.
Conversely, suppose that: 

$x \ge 0$ and $-x \in \Img X$
Then: 

there exists $\omega \in \Omega$ such that $\map X \omega = -x$.
We then have: 

$\map {\size X} \omega = \size {-x} = x$
So:

$x \in \Img {\size X}$
So:

$x \in \Img {\size X}$ with $-x \in \Img X$ if and only if $-x \in \Img X$ with $x \ge 0$.
Hence: 

$\ds \sum_{x \in \Img {\size X} } x \map \Pr {X = -x} = \sum_{-x \in \Img X, \, x \ge 0} x \map \Pr {X = -x}$
We can rewrite this: 














\(\ds \sum_{-x \in \Img X, \, x \ge 0} x \map \Pr {X = -x}\)

\(=\)







\(\ds \sum_{y \in \Img X, \, y \le 0} \paren {-y} \map \Pr {X = y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{y \in \Img X, \, y < 0} \size y \map \Pr {X = y}\)










Putting it all together, we get: 














\(\ds \int \size X \rd \Pr\)

\(=\)







\(\ds 0 \times \map \Pr {X = 0} + \sum_{x \in \Img X, \, x > 0} \size x \map \Pr {X = x} + \sum_{x \in \Img X, \, x < 0} \size x \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \in \Img X} \size x \map \Pr {X = x}\)









So we have:

$X$ is $\Pr$-integrable if and only if:
$\ds \sum_{x \in \Img X} \size x \map \Pr {X = x} < \infty$
$\Box$

We now show that if: 

$\ds \int \size X \rd \Pr < \infty$
then:

$\ds \int X \rd \Pr = \sum_{x \in \Img X} x \map \Pr {X = x}$
From Positive Part of Real-Valued Random Variable is Real-Valued Random Variable and Negative Part of Real-Valued Random Variable is Real-Valued Random Variable, we have: 

$X^+$ and $X^-$ are real-valued random variables.
We can also see that $X^+ \ge 0$ and $X^- \ge 0$ by the definition of the positive part and negative part.
Applying the lemma, we have that: 

$\ds \int X^+ \rd \Pr = \sum_{x \in \Img {X^+} } x \map \Pr {X^+ = x}$
and:

$\ds \int X^- \rd \Pr = \sum_{x \in \Img {X^-} } x \map \Pr {X^- = x}$
Note that $x \ge 0$ has: 

$x \in \Img {X^+}$
if and only if there exists $\omega \in \Omega$ such that: 

$\map {X^+} \omega = x$
That is, from the definition of positive part, we have: 

$\max \set {0, \map X \omega} = x$
Since $x \ge 0$, this is equivalent to:

$\map X \omega = x$ for some $\omega \in \Omega$.
This is equivalent to: 

$x \in \Img X$
We also have, for $x \ge 0$: 














\(\ds \set {\omega \in \Omega : \map {X^+} \omega = x}\)

\(=\)







\(\ds \set {\omega \in \Omega : \max \set {0, \map X \omega} = x}\)





Definition of Positive Part














\(\ds \)

\(=\)







\(\ds \set {\omega \in \Omega : \map X \omega = x}\)









so:

$\map \Pr {X^+ = x} = \map \Pr {X = x}$
giving: 

$\ds \sum_{x \in \Img {X^+} } x \map \Pr {X^+ = x} = \sum_{x \in \Img X, \, x \ge 0} x \map \Pr {X = x}$
Similarly, $x \ge 0$ has: 

$x \in \Img {X^-}$
if and only if there exists $\omega \in \Omega$ such that: 

$\map {X^-} \omega = x$
That is, from the definition of negative part, we have: 

$-\min \set {0, \map X \omega} = x$
Since $x \ge 0$, this is equivalent to:

$\map X \omega = -x$ for some $\omega \in \Omega$.
This is equivalent to: 

$-x \in \Img X$
We also have, for $x \ge 0$: 














\(\ds \set {\omega \in \Omega : \map {X^-} \omega = x}\)

\(=\)







\(\ds \set {\omega \in \Omega : -\min \set {0, \map X \omega} = x}\)





Definition of Negative Part














\(\ds \)

\(=\)







\(\ds \set {\omega \in \Omega : \map X \omega = -x}\)









so:

$\map \Pr {X^- = x} = \map \Pr {X = -x}$
giving: 














\(\ds \sum_{x \in \Img {X^-} } x \map \Pr {X^- = x}\)

\(=\)







\(\ds \sum_{-x \in \Img X, \, x \ge 0} x \map \Pr {X = -x}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{-x \in \Img X, \, x \ge 0} \paren {-x} \map \Pr {X = -x}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{y \in \Img X, \, y \le 0} y \map \Pr {Y = y}\)









Then: 














\(\ds \int X \rd \Pr\)

\(=\)







\(\ds \int X^+ \rd \Pr - \int X^- \rd \Pr\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \sum_{x \in \Img X, \, x \ge 0} x \map \Pr {X = x} + \sum_{x \in \Img X, \, x \le 0} x \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \in \Img X, \, x \ge 0} x \map \Pr {X = x} + \sum_{x \in \Img X, \, x < 0} x \map \Pr {X = x}\)





since $0 \times \map \Pr {X = 0} = 0$














\(\ds \)

\(=\)







\(\ds \sum_{x \in \Img X} x \map \Pr {X = x}\)









So:

$\ds \int X \rd \Pr = \sum_{x \in \Img X} x \map \Pr {X = x}$
From the definition of Expectation: General Definition, we therefore have: 

$\ds \expect X = \sum_{x \in \Img X} x \map \Pr {X = x}$
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $10$: Probability: $10.1$: Basics




