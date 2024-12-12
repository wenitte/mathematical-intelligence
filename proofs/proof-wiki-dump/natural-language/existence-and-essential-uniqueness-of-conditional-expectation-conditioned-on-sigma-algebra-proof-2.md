# 

Source: https://proofwiki.org/wiki/Existence_and_Essential_Uniqueness_of_Conditional_Expectation_Conditioned_on_Sigma-Algebra/Proof_2

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.

Then there exists an integrable random variable $Z$ on $\struct {\Omega, \GG, \Pr}$ such that: 

$\ds \int_G Z \rd \Pr = \int_G X \rd \Pr$ for each $G \in \GG$.
Further, if $Z$ and $Z'$ are two integrable random variables satisfying this condition, we have: 

$Z = Z'$ almost everywhere.


Proof
Observe that:

$\map {L^2} {\Omega, \GG, \Pr} \subseteq \map {L^2} {\Omega, \Sigma, \Pr}$
is a closed linear space.
Let:

$P : \map {L^2} {\Omega, \Sigma, \Pr} \to \map {L^2} {\Omega, \GG, \Pr}$
be the orthogonal projection.
Observe that for all $f \in \map {L^2} {\Omega, \Sigma, \Pr}$ and $g \in \map {L^2} {\Omega, \GG, \Pr}$:














\(\ds \int \map P f g \rd \Pr\)

\(=\)







\(\ds \int f g \rd \Pr + \int \paren {\map P f - f} g \rd \Pr\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int f g \rd \Pr\)





as $\map P f - f \in \map {L^2} {\Omega, \GG, \Pr}^\perp$




Let $f \in \map {L^2} {\Omega, \Sigma, \Pr}$.
Let:

$\ds g := \chi_{\set {P f \ge 0} } - \chi_{\set {P f < 0} }$
so that:

$\size {\map P f} = \map P f g$
Since $g \in \map {L^2} {\Omega, \GG, \Pr}$, we have:














\(\ds \int \size {\map P f} \rd \Pr\)

\(=\)







\(\ds \int \map P f g\rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int f g \rd \Pr\)





by $(1)$














\(\ds \)

\(\le\)







\(\ds \int \size f \rd \Pr\)





as $\size g \le 1$



On the other hand, by Cauchy inequality and  the density of simple functions:

$\map {L^2} {\Omega, \Sigma, \Pr} \subseteq \map {L^1} {\Omega, \Sigma, \Pr}$
is a dense subspace.
Therefore, we can extend:

$P : \map {L^1} {\Omega, \Sigma, \Pr} \to \map {L^1} {\Omega, \GG, \Pr}$
so that:

$\ds \forall f \in \map {L^1} {\Omega, \Sigma, \Pr} : \norm {P f}_{\map {L^1} {\Omega, \Sigma, \Pr} } \le \norm f_{\map {L^1} {\Omega, \GG, \Pr} }$

Let $X \in \map {L^1} {\Omega, \Sigma, \Pr}$.
Let $\sequence {X_n} \subseteq \map {L^2} {\Omega, \Sigma, \Pr}$ such that:

$\ds \lim_{n \mathop \to \infty} \norm {X_n - X}_{\map {L^1} {\Omega, \Sigma, \Pr} }$
Then for each $G \in \GG$:














\(\ds \int_G \map P X \rd \Pr\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_G \map P {X_n} \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_G X_n \rd \Pr\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \int_G X \rd \Pr\)









Hence we can choose $Z = \map P X$.
$\Box$
Now let $Z'$ be another integrable random variable that is $\GG$-measurable with: 

$\ds \int_A X \rd \Pr = \int_A Z' \rd \Pr$
for all $A \in \GG$.
Then:














\(\ds \int \size {Z - Z'} \rd \Pr\)

\(=\)







\(\ds \int \paren {Z - Z'} \paren {\chi_{\set {Z \ge Z'} } - \chi_{\set {Z < Z'} } } \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_{\set {Z \ge Z'} } Z \rd \Pr - \int_{\set {Z < Z'} } Z \rd \Pr - \int_{\set {Z \ge Z'} } Z' \rd \Pr + \int_{\set {Z < Z'} } Z' \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_{\set {Z \ge Z'} } X \rd \Pr - \int_{\set {Z < Z'} } X \rd \Pr - \int_{\set {Z \ge Z'} } X \rd \Pr + \int_{\set {Z < Z'} } X \rd \Pr\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0\)









By Measurable Function Zero A.E. iff Absolute Value has Zero Integral:

$Z = Z'$ almost everywhere
$\blacksquare$





