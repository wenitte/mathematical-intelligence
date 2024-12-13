# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Has_No_Zeroes_With_Real_Part_One

Theorem
Let $\zeta$ be the Riemann zeta function.
Then for all $t \in \R$:

$\map \zeta {1 + i t} \ne 0$


Proof
Throughout, the complex variable $s$ is $s = \sigma + i t$.
We have, for $\sigma > 1$,














\(\ds -\frac {\map {\zeta'} s} {\map \zeta s}\)

\(=\)







\(\ds \sum_{n \mathop \ge 1} \map \Lambda n n^{-s}\)





Logarithmic Derivative of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 1} \map \Lambda n n^{-\sigma} \map \exp {-i t \log n}\)





where $s = \sigma + i t$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 1} \map \Lambda n n^{-\sigma} \paren {\map \cos {t \log n} - i \map \sin {t \log n} }\)





Euler's Formula



Therefore,

$(1): \quad \ds -\map \Re {\dfrac {\map {\zeta'} s} {\map \zeta s} } = \sum_{n \mathop \ge 1} \map \Lambda n n^{-\sigma} \map \cos {t \log n}$
Now observe that:

$3 + 4 \cos \theta + \map \cos {2 \theta} = 2 \paren {1 + \cos \theta}^2 \ge 0$
Because for all $n \ge 1$ we have $\map \Lambda n n^{-\sigma} \ge 0$, we have:














\(\ds 0\)

\(\le\)







\(\ds \sum_{n \mathop \ge 1} \map \Lambda n n^{-\sigma} \paren {3 + 4 \map \cos {t \log n} + \map \cos {2 t \log n} }\)




















\(\ds \)

\(=\)







\(\ds -\map \Re {3 \frac {\map {\zeta'} \sigma} {\map \zeta \sigma} + 4 \frac {\map {\zeta'} {\sigma + i t} } {\map \zeta {\sigma + i t} } + \frac {\map {\zeta'} {\sigma + 2 i t} } {\map \zeta {\sigma + 2 i t} } }\)





from $(1)$




Now let:

$\map \eta s = \map \zeta s^3 \cdot \map \zeta {s + i t}^4\cdot \map \zeta {s + 2 i t}$
Then the above computation has shown that

$\map \Re {\dfrac {\map {\eta'} s} {\map \eta s} } \le 0$
By Poles of Riemann Zeta Function we know that $\zeta$ has a simple pole at $s = 1$ with residue $1$.

Aiming for a contradiction, suppose that $1 + i t$ is a zero of $\zeta$ of order $d \ge 1$.
Therefore, at $s = 1$, $\eta$ has a zero of order $4 d - 3 \ge 0$, that is:

$\map \eta s \sim (s - 1)^{4 d - 3}$
as $s \to 1^+$, where:

$\sim$ indicates asymptotic equality
superscript $+$ denotes a limit from the right along the real line.
Therefore:

$\dfrac {\map {\eta'} s} {\map \eta s} \sim \dfrac {4 d - 3} {s - 1}$
as $s \to 1^+$.
Since $\map \Re {\dfrac {4 d -3} {s - 1} } \to + \infty$ as $s \to 1^+$, it follows that:

$\map \Re {\dfrac {\map {\eta'} s} {\map \eta s} } \to \infty$
as $s \to 1^+$.
But we have already shown that:

$\map \Re {\dfrac {\map {\eta'} s} {\map \eta s} } \le 0$
which is a contradiction.
$\blacksquare$





