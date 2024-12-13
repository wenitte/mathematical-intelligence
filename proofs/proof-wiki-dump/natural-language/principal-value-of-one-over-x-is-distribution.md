# 

Source: https://proofwiki.org/wiki/Principal_Value_of_One_over_x_is_Distribution



Theorem
Let $\phi \in \map \DD \R$ be a test function.
Let $T : \map \DD \R \to \C$ be a mapping such that:

$\forall \phi \in \map \DD \R : \map T \phi = \PV \frac {\map \phi x} x \rd x : = \lim_{\epsilon \mathop \to 0} \int_{\size x \mathop > \epsilon} \frac {\map \phi x} x \rd x$
where $\PV$ denotes the Cauchy principal value.

Then $T$ is a distribution.


Proof
Let $\phi \in \map \DD \R$ be a test function with a support on $\closedint {-a} a$.
Then:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi 0 + \int_0^x \dfrac {\d \map \phi x} {\d x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi 0 + x \int_0^1 \dfrac {\d \map \phi {t x} } {\map \d {t x} } \rd t\)









Furthermore:














\(\ds \int_{a \mathop \ge \size x \mathop > \epsilon} \frac 1 x \rd x\)

\(=\)







\(\ds \int_\epsilon^a \frac 1 x \rd x + \int_{-a}^{-\epsilon} \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_\epsilon^a \frac 1 x \rd x + \int_a^\epsilon \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)











Existence of the limit













\(\ds \int_{\size x \mathop > \epsilon} \frac {\map \phi x} x \rd x\)

\(=\)







\(\ds \int_{a \mathop \ge \size x \mathop > \epsilon} \frac {\map \phi x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi 0 \int_{a \mathop \ge \size x \mathop > \epsilon} \frac 1 x \rd x + \int_{a \mathop \ge \size x \mathop > \epsilon} \rd x \int_0^1 \dfrac {\d \map \phi {t x} } {\map \d {t x} } \rd t\)




















\(\ds \)

\(=\)







\(\ds 0 + \int_{a \mathop \ge \size x \mathop > \epsilon} \rd x \int_0^1 \dfrac {\d \map \phi {t x} } {\map \d {t x} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{a \mathop \ge \size x \mathop > \epsilon} \rd x \int_0^1 \dfrac {\d \map \phi {t x} } {\map \d {t x} } \rd t\)









Since $\phi \in \map \DD \R$, the integral exists for any $\epsilon$.
Hence, the limit exists.
Thus, we can rewrite $T$ as:

$\ds \map T \phi = \int_{-a}^a \int_0^1 \dfrac {\d \map \phi {t x} } {\map \d {t x} } \rd t \rd x$
$\Box$


Linearity
Follows from Riemann Integral Operator is Linear Mapping.
$\Box$


Continuity
By Convergent Sequence Minus Limit, we can shift the sequence to set its limit to zero.
Let $\mathbf 0 : \R \to 0$ be a zero mapping.
Let $\sequence {\phi_n}_{n \mathop \in \N}$ be a sequence with support on $\closedint {-a} a$ such that it converges to $\mathbf 0$:

$\phi_n \stackrel \DD {\longrightarrow} \mathbf 0$
Then:














\(\ds \size {\map T {\phi_n} }\)

\(=\)







\(\ds \size {\int_{-a}^a \int_0^1 \dfrac {\d \map {\phi_n} {t x} } {\map \d {t x} } \rd t \rd x}\)




















\(\ds \)

\(\le\)







\(\ds 2 a \cdot 1 \cdot \sup_{x \mathop \in \R} \size {\map {\phi_n'} x}\)









Take the limit $n \to \infty$.
Then:

$\map T {\mathbf 0} = 0$
$\Box$

Hence, by definition, $\PV \frac 1 x$ is a distribution.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




