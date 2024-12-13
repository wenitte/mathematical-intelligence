# 

Source: https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable



Theorem
Let $\closedint a b$ be a closed real interval, where $a < b$.
Let $f: \closedint a b \to \R$ be a monotone real function.

Then $f$ is Darboux integrable over $\closedint a b$.


Proof
We consider the case where $f$ is increasing; the case where $f$ is decreasing is handled similarly.

Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
By the Axiom of Archimedes, there exists a natural number $n$ such that:

$n > \dfrac {\paren {b - a} \paren {\map f b - \map f a} } \epsilon$
For $k \in \set {0, 1, 2, \ldots, n}$, define:

$x_k = a + k \dfrac {b - a} n$
Then:

$a = x_0 < x_1 < \cdots < x_n = b$
and hence $P = \set {x_0, x_1, \ldots, x_n}$ is a subdivision of $\closedint a b$.

The lower Darboux sum and upper Darboux sum of $f$ belonging to the subdivision $P$ are, respectively:














\(\ds \map L P\)

\(=\)

\(\, \ds \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \paren {x_k - x_{k - 1} } \, \)

\(\, \ds = \, \)



\(\ds \frac {b - a} n \sum_{k \mathop = 1}^n \map f {x_{k - 1} }\)




















\(\ds \map U P\)

\(=\)

\(\, \ds \sum_{k \mathop = 1}^n \map f {x_k} \paren {x_k - x_{k - 1} } \, \)

\(\, \ds = \, \)



\(\ds \frac {b - a} n \sum_{k \mathop = 1}^n \map f {x_k}\)









Therefore:














\(\ds 0\)

\(\le\)







\(\ds \overline {\int_a^b} \map f x \rd x - \underline {\int_a^b} \map f x \rd x\)




















\(\ds \)

\(\le\)







\(\ds \map U P - \map L P\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b - a} \paren {\map f b - \map f a} } n\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Since $\epsilon \in \R_{>0}$ is arbitrary, the result follows.
$\blacksquare$


A specific link is needed here.In particular: proof of $\ds \underline {\int_a^b} \map f x \rd x \le \overline {\int_a^b} \map f x \rd x$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.


Also see
Continuous Real Function is Darboux Integrable


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous): $6.9$




