# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_2



Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
Let:

$\ds P_k = x \prod_{n \mathop = 1}^k \paren {1 - \frac {x^2} {n^2 \pi^2} }$
We note that:














\(\ds P_k - P_{k - 1}\)

\(=\)







\(\ds \paren {-\frac {x^3} {k^2 \pi^2} } \prod_{n \mathop = 1}^{k - 1} \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^3} {k^2 \pi ^2} + \map O {x^5}\)





Definition of Big-O Notation




By Telescoping Series we find that the coefficient of $x^3$ in $P_k$ is given by:

$(1): \quad \ds -\frac 1 {\pi^2} \sum_{n \mathop = 1}^k \frac 1 {n^2}$
We also have the following two representations of the Sine of x:














\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)





Euler Formula for Sine Function
















\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \dfrac {x^3} {3!} + \dfrac {x^5} {5!} - \dfrac {x^7} {7!} + \cdots\)





Power Series Expansion for Sine Function



So by taking the limit as $k \to \infty$ in $(1)$ and equating with the coefficient of $x^3$ in the Power Series Expansion for Sine Function, we can deduce:

$\ds -\frac 1 {\pi^2} \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = -\frac 1 {3!}$
hence:

$\ds \sum_{n \mathop = 1}^{\infty} \frac 1 {n^2} = \frac {\pi^2} 6$
$\blacksquare$


Historical Note
The Basel Problem was first posed by Pietro Mengoli in $1644$.
Its solution is generally attributed to Leonhard Euler , who solved it in $1734$ and delivered a proof in $1735$.
However, it has also been suggested that it was in fact first solved by Nicolaus I Bernoulli.
Jacob Bernoulli had earlier established that the series was convergent, but had failed to work out what to.
The problem is named after Basel, the home town of Euler as well as of the Bernoulli family.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.14$: Euler's Discovery of the Formula $\ds \sum_1^\infty \frac 1 {n^2} = \frac {\pi^2} 6$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: If the links cannot be maintained, then perhaps it would be better not to use themIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1990: William Dunham: Journey Through Genius ... (previous) ... (next): Chapter $9$: The Extraordinary Sums of Leonhard Euler (1734): Great Theorem




